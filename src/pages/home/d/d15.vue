<template>
	<div class="d15">
		<div class="comment" v-show="active">
			<ul class="title">
				<li>序号</li>
				<li>景区名称</li>
				<li>评价</li>
				<li>评论来源</li>
				<li>评论内容</li>
				<li>用户昵称</li>
				<li>评论时间</li>
			</ul>
			<div class="con" @scroll="loadMore($event)" :class="comStyle">
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
//	import loadMore from '@/common/js/directives/loadMore'
	import Bus from '@/common/js/bus'
	import _ from 'lodash'
//	Vue.directive('loadMore',loadMore)//注册自定义指令
	export default{
		name:'d15',
		mixins:[optionProps],
		data(){
			return{
				type:2,
				comType:1,
				num:2,
				keyW:"",
				name:"全部",
				items:[{
			"con":"再次来到飞霞山看禾雀花，果然很美，禾雀花王是紫色的，野生的是黄色的，野生的长得很高很好看，禾雀花王藤蔓很多，花很多，厉害厉害",
			"uid":"M257145****",
			"source":"携程网",
			"name":"飞霞风景名胜区",
			"grade":5,
			"date":"2018-03-14 15:37:00"
		}
],
				beginTime:'',
				endTime:'',
				active:true
			}
		},
		watch:{
			updatePlace:function(val){
				this.name=''
				this.num = 2;
				var paramsObj = {}
				if(this.endTime||this.beginTime){
					 paramsObj = {
		                area:val.place,
		                name:val.turist,
		                pageId:1,
		                source:'全部',
		                commentType:this.comType,
		                category:this.slectType+1,
		                beginTime:this.beginTime,
	                    endTime:this.endTime
		            }
				}else{
					 paramsObj = {
		                area:val.place,
		                name:val.turist,
		                pageId:1,
		                source:'全部',
		                commentType:this.comType,
		                category:this.slectType+1,
		                type:["day","month","year"][this.type],
		            }
				}
				
					this.items = []
					this.name= '';
					this.getResponse(paramsObj,true);
			},
						
			update:{
	         handler:function(val, oldVal){
	         	this.num = 2;
	         	var paramsObj={}
	         	if(val.type===0 || val.type===1 || val.type===2){
	         		Bus.$emit('resetDate')
	         		this.beginTime='';
		       		this.endTime='';
	         		this.type = val.type
	         	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.name||this.updatePlace.turist,
		                category:this.slectType+1,
		                pageId:1,
		                source:'全部',
		                commentType:this.comType,
		                type:["day","month","year"][val.type],
		            }
	         	}else{
	         		let end = val.end.join("-")
	                let begin = val.begin.join("-")
	                this.beginTime=val.begin.join('-'),
	                this.endTime=val.end.join('-'),
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.name||this.updatePlace.turist,
	                    category:this.slectType+1,
	                    pageId:1,
		                source:'全部',
		                commentType:this.comType ,
	                    beginTime:this.beginTime,
	                    endTime:this.endTime
					}
	         	}
	             this.items = []
	             this.getResponse(paramsObj,true);
	         },
	         deep:true,
	        },
			
			
			//酒店景区选择
			slectType:function(val){
				this.updatePlace.turist = '全部'
				if(val===1){this.name='全部'}
				this.num = 2;
				var paramsObj = {}
				if(this.endTime||this.beginTime){
					 paramsObj = {
						area:this.updatePlace.place,
		                name:val===0?this.updatePlace.turist:this.name,
		                pageId:1,
		                source:'全部',
		                commentType:this.comType,
		                category:val+1,
		                beginTime:this.beginTime,
	                    endTime:this.endTime
	               }
				}else{
					 paramsObj = {
						area:this.updatePlace.place,
		                name:val===0?this.updatePlace.turist:this.name,
		                pageId:1,
		                source:'全部',
		                commentType:this.comType,
		                category:val+1,
		                type:["day","month","year"][this.type],
	               }
				}
				
						this.items = []
						this.getResponse(paramsObj,true);
			},
			//酒店名称
			hotelChose:function(val){
					this.updatePlace.turist=''
					this.num = 2;
					this.name = val;
					var paramsObj = {}
					if(this.endTime||this.beginTime){
						paramsObj = {
							area:this.updatePlace.place,
			                name:val,
			                pageId:1,
			                source:'全部',
			                commentType:this.comType,
			                key:"",
			                category:this.slectType+1,
			                beginTime:this.beginTime,
	                   	    endTime:this.endTime,
		               }
					}else{
						paramsObj = {
							area:this.updatePlace.place,
			                name:val,
			                pageId:1,
			                source:'全部',
			                commentType:this.comType,
			                key:"",
			                category:this.slectType+1,
			                type:["day","month","year"][this.type],
		               }
					}
						this.items = []
						this.getResponse(paramsObj,true);
			}
			
		},
		methods:{
				getResponse(paramsObj,flag){
					if(flag){
						this.active =false
			        	setTimeout( () => {
			        		this.active =true
			        	},100)
					}
					let _self = this;
			        this.$axios.get(API_URL+'/qy/api/v2/command/getCommandCommentsDetail',{params:paramsObj}).then(r => {
								let reData = r.data.data
								//console.log(reData)
				                if(r.data.code ==="200"||r.data.code ===200){
				                   reData.forEach( (item,index) => {
				                   		if(item.grade>3){
				                   			item.grade = '好评'
				                   		}else if(item.grade>1 && item.grade<=3){
				                   			item.grade = '中评'
				                   		}else{
				                   			item.grade = '差评'
				                   		}
				                   		_self.items.push(item)
				                   })
				                }
				            })
		       },
		       
		       getResponseRise(paramsObj){
	       			this.active =false
		        	setTimeout( () => {
		        		this.active =true
		        	},100)
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
				                   		if(item.grade>=4){
				                   			item.grade = '好评'
				                   		}else if(item.grade>=2 && item.grade<=3.9){
				                   			item.grade = '中评'
				                   		}else{
				                   			item.grade = '差评'
				                   		}
				                   		_self.items.push(item)
				                   })
				                }
				            })
		       },
		       
		       
		       //加载更多(已用自定义指令loadMore代替)
		       loadMore:_.debounce( function(e){ //去抖函数
		       		let _self = this;
		       		scrollT = 0;
		       		offsetT = 0;
		       		var scrollT = Math.ceil(e.target.scrollTop+e.target.clientHeight),
		       			offsetT = e.target.getElementsByClassName('boxCon')[0].offsetHeight;
		       			//console.log(scrollT,offsetT,e.target.clientHeight,e.target.offsetHeight)
		       		if(offsetT-scrollT<=20){
		       			let paramsObj = {};
		       			
		       			if(_self.beginTime&&_self.endTime){
		       				paramsObj = {
				                area:_self.updatePlace.place,
				                name:_self.name||_self.updatePlace.turist,
				                pageId:_self.num++,
				                source:'全部',
				                commentType:_self.comType,
				                key:_self.keyW,
				                category:_self.slectType+1,
				                beginTime:_self.beginTime,
		                		endTime:_self.endTime,
				            }
		       			}else{
		       				
		       				paramsObj = {
				                area:_self.updatePlace.place,
				                name:_self.name||_self.updatePlace.turist,
				                pageId:_self.num++,
				                source:'全部',
				                commentType:_self.comType,
				                key:_self.keyW,
				                category:_self.slectType+1,
		                		type:["day","month","year"][_self.type]
				            }
		       			}
			       			_self.getResponse(paramsObj,false)
	        	}
		       },500)
	  },
	  computed:{
	  	comStyle(){
	  		let isIE = window.navigator.userAgent.indexOf('Trident')
	  		return isIE>-1?'ieTitle':''
	  	}
	  },
	  created () {
	        var paramsObj = {
	                area:"全部",
	                name:"全部",
	                pageId:1,
	                type:'year',
	                source:'全部',
	                commentType:1,
	                category:1,
	            }
	        this.items = []
	       this.getResponse(paramsObj,true);
	    },
	    mounted(){
	    	//关联游客评价
    		Bus.$on('comType',(data) => {
    			this.comType = data;
    			this.num = 2;
    			this.keyW='';
    			var paramsObj = {}
    			if(this.endTime||this.beginTime){
    				 paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist||this.name,
		                pageId:1,
		                source:'全部',
		                commentType:data,
		                category:this.slectType+1,
		                beginTime:this.beginTime,
                   	    endTime:this.endTime,
	            	}
    			}else{
    				 paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist||this.name,
		                pageId:1,
		                source:'全部',
		                commentType:data,
		                category:this.slectType+1,
		                type:["day","month","year"][this.type],
	            	}
    			}
				 
	       		this.items = []
	       		this.getResponse(paramsObj,true);
	       	})
    		
    		//关联关键词
    		Bus.$on('keyWords',(data) => {
    			this.keyW = data;
    			this.num = 2;
    			var paramsObj = {}
				if(this.endTime||this.beginTime){
					 paramsObj = {
		                area:this.updatePlace.place,
		                name:this.name||this.updatePlace.turist,
		                type:this.type,
		                pageId:1,
		                source:'全部',
		                category:this.slectType+1,
		                key:data,
		                beginTime:this.beginTime,
                   	    endTime:this.endTime,
		            }
				}else{
					 paramsObj = {
		                area:this.updatePlace.place,
		                name:this.name||this.updatePlace.turist,
		                type:this.type,
		                pageId:1,
		                source:'全部',
		                category:this.slectType+1,
		                key:data,
		                type:["day","month","year"][this.type],
		            }
				}
	       		
	       		this.items = []
	       		this.getResponse(paramsObj,true);
	       	})
    		
    		//关联景区客提升度
    		Bus.$on('isRise',(data) => {
    			this.comType = 3
    			this.num = 2;
    			
    			var paramsObj = {}
	       		 if(data!=='其他' && this.updatePlace.turist!=='全部'){
	       		 	this.name = data;
	       		 	paramsObj = {
		                area:this.updatePlace.place,
		                name:data,
		                pageId:1,
		                source:'全部',
		                category:this.slectType+1,
		                commentType:this.comType,
		                type:["day","month","year"][this.type],
		                key:""
		            }
	       		 	
	       		 	this.items = []
	       			this.getResponseRise(paramsObj);
	       		 }else if(data==='其他' && this.updatePlace.turist!=='全部'){
	       		 	this.comType = 1;
	       		 	paramsObj = {
		                area:this.updatePlace.place,
		                name:this.name||this.updatePlace.turist,
		                pageId:1,
		                source:'全部',
		                type:["day","month","year"][this.type],
		                category:this.slectType+1,
		                commentType:this.comType,
		                key:""
		            }
	       		 	this.items = []
	       		 	this.getResponse(paramsObj,true);
	       		 }else if(data==='其他' && this.updatePlace.turist==='全部'){
	       		 	this.comType = 4;
	       		 	this.name = data;
	       		 	paramsObj = {
		                area:this.updatePlace.place,
		                name:data,
		                pageId:1,
		                source:'全部',
		                type:["day","month","year"][this.type],
		                category:this.slectType+1,
		                commentType:this.comType,
		                key:""
		            }
	       		 	this.items = []
	       		 	this.getResponse(paramsObj,true);
	       		 }else if(data!=='其他' && this.updatePlace.turist==='全部'){
	       		 	this.comType = 4;
	       		 	this.name = data;
	       		 	paramsObj = {
		                area:this.updatePlace.place,
		                name:data,
		                pageId:1,
		                source:'全部',
		                type:["day","month","year"][this.type],
		                category:this.slectType+1,
		                commentType:this.comType,
		                key:""
		            }
	       		 	this.items = []
	       		 	this.getResponse(paramsObj,true);
	       		 }
	       		
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
				border-right: 1px solid #345bfa;
			}
			.title{
				height: 66px;
				line-height: 66px;
				display: flex;
				li:nth-child(1){
					flex-basis: 99px;
					border-bottom: 1px solid #345bfa;
				}
				li:nth-child(2){
					flex-basis: 298px;
					border-bottom: 1px solid #345bfa;
				}
				li:nth-child(3){
					flex-basis: 99.5px;
					border-bottom: 1px solid #345bfa;
				}
				li:nth-child(4){
					flex-basis: 120px;
					border-bottom: 1px solid #345bfa;
				}
				li:nth-child(5){
					flex-basis: 680px;
					border-bottom: 1px solid #345bfa;
					/*border-right-color: transparent;*/
				}
				li:nth-child(6){
					flex-basis: 297px;
					border-bottom: 1px solid #345bfa;
				}
				li:nth-child(7){
					flex-basis: 298px;
					border-bottom: 1px solid #345bfa;
					border-right-color: transparent;
				}
			}
			.con{
				height: (823-66)/823*100%;
				cursor: all-scroll;
				overflow-y: auto;
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
						border-bottom: 1px solid #345bfa;
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
						flex-basis: 683px;
						text-align: left !important;
						padding: 0 10px 0 10px;
						box-sizing: border-box;
						word-break: break-word;
					}
					
					li:nth-child(5) span{
						display: inline-block;
						width: 150%;
						text-indent: 1em;
					}
					
					
					li:nth-child(5){  
				        scrollbar-arrow-color: #fff; /**//*三角箭头的颜色*/   
				        scrollbar-face-color: #333; /**//*立体滚动条的颜色*/   
				        scrollbar-3dlight-color: #666; /**//*立体滚动条亮边的颜色*/   
				        scrollbar-highlight-color: #666; /**//*滚动条空白部分的颜色*/   
				        scrollbar-shadow-color: #999; /**//*立体滚动条阴影的颜色*/   
				        scrollbar-darkshadow-color: #666; /**//*立体滚动条强阴影的颜色*/   
				        scrollbar-track-color: #666; /**//*立体滚动条背景颜色*/   
				        scrollbar-base-color:#f8f8f8; /**//*滚动条的基本颜色*/   
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
					    width: 0px;
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
					    width: 0px;
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
						flex-basis: 301px;
						border-right-color: transparent;
					}
				}
			}
			.ieTitle{
				ul{
					li:nth-child(1){
						flex-basis: 101px !important;
					}
					li:nth-child(2){
						flex-basis: 300px !important;
					}
					li:nth-child(3){
						flex-basis: 100.5px !important;
					}
					li:nth-child(4){
						flex-basis: 121px !important;
					}
					li:nth-child(5){
						flex-basis: 667px !important;
					}
					li:nth-child(6){
						flex-basis: 300.5px !important;
					}
					li:nth-child(7){
						flex-basis: 280px !important;
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