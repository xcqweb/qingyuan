<template>
	<div class="d15">
		<div class="comment">
			<ul class="title">
				<li>序号</li>
				<li>景区名称</li>
				<li>评价</li>
				<li>评论来源</li>
				<li>评论内容</li>
				<li>用户昵称</li>
				<li>评论时间</li>
			</ul>
			<div class="con" @scroll="loadMore($event)">
				<div class="boxCon">
					<ul v-for="(item,index) in items">
						<li><span>{{index+1}}</span></li>
						<li><span>{{item.name}}</span></li>
						<li><span>{{item.grade}}</span></li>
						<li><span>{{item.source}}</span></li>
						<li><span>{{item.con}}</span></li>
						<li><span>{{item.uid}}</span></li>
						<li><span>{{item.date}}</span></li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import optionProps from '@/common/js/mixin/optionProps.js'
	import loadMore from '@/common/js/directives/loadMore'
	import Bus from '@/common/js/bus'
	import _ from 'lodash'
//	Vue.directive('loadMore',loadMore)//注册自定义指令
	export default{
		name:'d15',
		mixins:[optionProps],
		data(){
			return{
				comType:1,
				num:2,
				keyW:"",
				name:"",
				items:[
//					{name:'飞霞风景名胜区',comment:'好评',con:'整体来说不错,在船上可以吃到海鲜.天然的,还有清远鸡!,也可以观赏两岸的风景,72峰名不虚传!,整体来说不错,在船上可以吃到海鲜.天然的,还有清远鸡!,也可以观赏两岸的风景,72峰名不虚传',uid:'M1213***',date:'2018-03-05'},
				],
			}
		},
		watch:{
			
			updatePlace:function(val){
				var paramsObj = {
	                area:val.place,
	                name:val.turist,
	                pageId:1,
	                source:'全部',
	                commentType:this.comType,
	                key:this.keyW,
	            }
				this.items = []
				this.name= '';
				this.getResponse(paramsObj);
			},
			update:function(val){
				var paramsObj = {
	                area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                pageId:1,
	                source:'全部',
	                commentType:this.comType ,
	                //key:this.keyW,
	                beginTime:val.begin.join('-'),
	                endTime:val.end.join('-'),
	            }
					this.items = []
					this.getResponse(paramsObj);
			},
			//酒店景区选择
			slectType:function(val){
				var paramsObj = {
					area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                pageId:1,
	                source:'全部',
	                commentType:this.comType ,
	                key:this.keyW,
	                category:val+1
	               }
				this.items = []
				this.getResponse(paramsObj);
			},
			//酒店名称
			hotelChose:function(val){
					this.name = val;
					var paramsObj = {
					area:this.updatePlace.place,
	                name:val,
	                pageId:1,
	                source:'全部',
	                commentType:this.comType ,
	                key:this.keyW,
	                category:this.slectType+1
	               }
				this.items = []
				this.getResponse(paramsObj);
			}
			
		},
		methods:{
				getResponse(paramsObj){
					let _self = this;
			        this.$axios.get(API_URL+'/qy/api/command/getCommandCommentsDetail',{params:paramsObj}).then(r => {
								let reData = r.data.data
								//console.log(reData)
				                if(r.data.code ==="200"||r.data.code ===200){
				                   reData.forEach( (item,index) => {
				                   		if(item.grade>4){
				                   			item.grade = '好评'
				                   		}else if(item.grade>=2 && item.grade<=3){
				                   			item.grade = '差评'
				                   		}else{
				                   			item.grade = '投诉'
				                   		}
				                   		_self.items.push(item)
				                   })
				                }
				            })
		       },
		       
		       getResponseRise(paramsObj){
					let _self = this;
			        this.$axios.get(API_URL+'/qy/api/v2/command/selectCommentsUp',{params:paramsObj}).then(r => {
								let reData = r.data.data
								//console.log(reData)
				                if(r.data.code ==="200"||r.data.code ===200){
				                	if(!reData){
				                		this.items=[]; 
				                		return;
				                	}
				                   reData.forEach( (item,index) => {
				                   		if(item.grade>4){
				                   			item.grade = '好评'
				                   		}else if(item.grade>=2 && item.grade<=3){
				                   			item.grade = '差评'
				                   		}else{
				                   			item.grade = '投诉'
				                   		}
				                   		_self.items.push(item)
				                   })
				                }
				            })
		       },
		       
		       
		       //加载更多(已用自定义指令loadMore代替)
		       loadMore:_.debounce( function(e){ //去抖函数
		       		let _self = this;
		       		let num=2;
		       		scrollT = 0;
		       		offsetT = 0;
		       		var scrollT = Math.ceil(e.target.scrollTop+e.target.offsetHeight),
		       			offsetT = e.target.getElementsByClassName('boxCon')[0].offsetHeight;
		       			//console.log(scrollT,offsetT)
		       		if(scrollT>=offsetT){
		       			
		       			let paramsObj = {
		                area:_self.updatePlace.place,
		                name:_self.name||_self.updatePlace.turist,
		                pageId:_self.num++,
		                source:'全部',
		                commentType:_self.comType,
		                key:_self.keyW,
		                category:_self.slectType+1,
		            }
			       		_self.getResponse(paramsObj)
	        	}
		       },300)
	  },
	  created () {
	        var paramsObj = {
	                area:"全部",
	                name:"全部",
	                pageId:1,
	                type:'day',
	                source:'全部',
	                commentType:1,
	                key:"",
	                category:this.slectType+1,
	            }
	       this.getResponse(paramsObj);
	    },
	    mounted(){
	    	//关联游客评价
    		Bus.$on('comType',(data) => {
    			this.comType = data;
    			this.num = 2;
	       		var paramsObj = {
	                area:"全部",
	                name:"全部",
	                pageId:1,
	                type:'day',
	                source:'全部',
	                commentType:data,
	                key:this.keyW,
	                category:this.slectType+1,
	            }
	       		this.items = []
	       this.getResponse(paramsObj);
	       	})
    		
    		//关联关键词
    		Bus.$on('keyWords',(data) => {
    			this.keyW = data;
    			this.num = 2;
	       		var paramsObj = {
	                area:"全部",
	                name:"全部",
	                pageId:1,
	                type:'day',
	                source:'全部',
	                commentType:this.comType,
	                key:data
	            }
	       		this.items = []
	       this.getResponse(paramsObj);
	       	})
    		
    		//关联景区客提升度
    		Bus.$on('isRise',(data) => {
    			this.comType = 2
    			this.num = 2;
    			this.name = data
	       		var paramsObj = {
	                area:this.updatePlace.place,
	                name:data,
	                pageId:1,
	                type:'day',
	                source:'全部',
	                commentType:this.comType,
	                key:""
	            }
	       		this.items = []
	       this.getResponseRise(paramsObj);
	       	})
	    }
	}
</script>

<style scoped lang="less">
	.d15{
		width: 100%;
		height: 100%;
		.comment{
			width: 1578/1642*100%;
			height: 823/948*100%;
			margin: 98px auto 28px auto;
			border: 2px solid #345bfa;
			border-radius: 6px;
			color: #fff;
			font-size: 20px;
			li{
				border-right: 2px solid #345bfa;
			}
			.title{
				height: 66px;
				line-height: 66px;
				display: flex;
				li:nth-child(1){
					flex-basis: 99px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(2){
					flex-basis: 298px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(3){
					flex-basis: 99.5px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(4){
					flex-basis: 120px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(5){
					flex-basis: 680px;
					border-bottom: 2px solid #345bfa;
					/*border-right-color: transparent;*/
				}
				li:nth-child(6){
					flex-basis: 297px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(7){
					flex-basis: 298px;
					border-bottom: 2px solid #345bfa;
					border-right-color: transparent;
				}
			}
			.con{
				height: (823-66)/823*100%;
				cursor: all-scroll;
				overflow-y: scroll;
				ul:nth-child(2n+1){
					background-color: #1C357E;
				}
				ul:nth-child(2n){
					background-color: #1f3f9d;
				}
				ul{
					line-height: 56px;
					display: flex;
					li{
						display: flex;
						justify-content:center;
						align-items:center;
					}
					li:nth-child(1){
						flex-basis: 100px;
					}
					li:nth-child(2){
						flex-basis: 301px;
					}
					li:nth-child(3){
						flex-basis: 100px;
					}
					li:nth-child(4){
						flex-basis: 121px;
					}
					li:nth-child(5){
						flex-basis: 684px;
						text-align: left !important;
						padding: 0 10px 0 10px;
						box-sizing: border-box;
					}
					
					li:nth-child(5) span{
						display: inline-block;
						width: 150%;
						text-indent: 1em;
					}
					
					li:nth-child(5)::-webkit-scrollbar{
					    width: 0px;
					    height: 3rem;
					}
					/*定义滚动条的轨道，内阴影及圆角*/
					li:nth-child(5)::-webkit-scrollbar-track{
					    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
					    border-radius: 10px;
					}
					/*定义滑块，内阴影及圆角*/
					li:nth-child(5)::-webkit-scrollbar-thumb{
					    width: 0px;
					    height: 10rem;
					    border-radius: 10px;
					    -webkit-box-shadow: inset 0 0 6px #02275A;
					    background-color: #0F2059;
					}
					
					li:nth-child(5)::scrollbar{
					    width: 1px;
					    height: 3rem;
					}
					/*定义滚动条的轨道，内阴影及圆角*/
					li:nth-child(5)::scrollbar-track{
					    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
					    border-radius: 10px;
					}
					/*ie*/
					li:nth-child(5){
						scrollbar-face-color: #0F2059;
						scrollbar-highlight-color: ;
						scrollbar-shadow-color: #02275A;
						scrollbar-track-color: #263984;
					}
					 
					/*定义滑块，内阴影及圆角*/
					li:nth-child(5)::scrollbar-thumb{
					    width: 1px;
					    height: 10rem;
					    border-radius: 10px;
					    -webkit-box-shadow: inset 0 0 6px #02275A;
					    background-color: #0F2059;
					}
					
					li:nth-child(6){
						flex-basis: 300px;
						overflow: hidden;
					}
					li:nth-child(7){
						flex-basis: 300px;
						border-right-color: transparent;
					}
				}
			}
		}
		
		
	}
	
			.con::-webkit-scrollbar{
			    width: 0px;
			    height: 0;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.con::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.con::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 5rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
			
			.con::scrollbar{
			    width: 10px;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.con::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			.con{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			.con::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>