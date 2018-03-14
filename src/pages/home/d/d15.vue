<template>
	<div class="d15">
		<div class="comment">
			<ul class="title">
				<li>序号</li>
				<li>景区名称</li>
				<li>评价</li>
				<li>评论内容</li>
				<li>用户昵称</li>
				<li>评论时间</li>
			</ul>
			<div class="con" v-loadMore>
				<ul v-for="(item,index) in items">
					<li><span>{{index+1}}</span></li>
					<li><span>{{item.name}}</span></li>
					<li><span>{{item.comment}}</span></li>
					<li><span>{{item.con}}</span></li>
					<li><span>{{item.uid}}</span></li>
					<li><span>{{item.date}}</span></li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import optionProps from '@/common/js/mixin/optionProps.js'
	import loadMore from '@/common/js/directives/loadMore'
	Vue.directive('loadMore',loadMore)//注册自定义指令
	export default{
		name:'d15',
		mixins:[optionProps],
		data(){
			return{
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
	            }
				this.items = []
				this.getResponse(paramsObj);
			},
			update:function(val){
				var paramsObj = {
	                area:val.place,
	                name:val.turist,
	                pageId:1,
	                source:'全部',
	                beginTime:val.begin.join('-'),
	                endTime:val.end.join('-'),
	            }
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
				                   		_self.items.push({'name':item.name,'comment':'好评','con':item.con,'uid':item.uid,'date':item.date})
				                   })
				                }
				            })
		       },
		       //加载更多(已用自定义指令loadMore代替)
//		       loadMore:_.debounce( function(e){ //去抖函数
//		       		let _self = this;
//		       		if(e.target.scrollTop>360){
//		       			let num=1;
//		       			let paramsObj = {
//		                area:"全部",
//		                name:"全部",
//		                pageId:num++,
//		                source:'全部',
//		            }
//		       			this.getResponse(paramsObj)
//		       		}
//		       },300)
	  },
	  created () {
	        var paramsObj = {
	                area:"全部",
	                name:"全部",
	                pageId:1,
	                type:'day',
	                source:'全部',
	            }
	       this.getResponse(paramsObj);
	    },
	}
</script>

<style scoped lang="less">
	.d15{
		width: 100%;
		height: 100%;
		.comment{
			width: 1577/1642*100%;
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
					flex-basis: 800px;
					border-bottom: 2px solid #345bfa;
					/*border-right-color: transparent;*/
				}
				li:nth-child(5){
					flex-basis: 297px;
					border-bottom: 2px solid #345bfa;
				}
				li:nth-child(6){
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
						flex-basis: 300px;
					}
					li:nth-child(3){
						flex-basis: 100px;
					}
					li:nth-child(4){
						flex-basis: 800px;
						text-align: left;
						padding: 0 20px 0 20px;
						box-sizing: border-box;
						word-wrap: break-word; 
						word-break: normal; 
					}
					
					li:nth-child(4)::-webkit-scrollbar{
					    width: 0px;
					    height: 3rem;
					}
					/*定义滚动条的轨道，内阴影及圆角*/
					li:nth-child(4)::-webkit-scrollbar-track{
					    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
					    border-radius: 10px;
					}
					/*定义滑块，内阴影及圆角*/
					li:nth-child(4)::-webkit-scrollbar-thumb{
					    width: 0px;
					    height: 10rem;
					    border-radius: 10px;
					    -webkit-box-shadow: inset 0 0 6px #02275A;
					    background-color: #0F2059;
					}
					
					li:nth-child(4)::scrollbar{
					    width: 1px;
					    height: 3rem;
					}
					/*定义滚动条的轨道，内阴影及圆角*/
					li:nth-child(4)::scrollbar-track{
					    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
					    border-radius: 10px;
					}
					/*ie*/
					li:nth-child(4){
						scrollbar-face-color: #0F2059;
						scrollbar-highlight-color: ;
						scrollbar-shadow-color: #02275A;
						scrollbar-track-color: #263984;
					}
					 
					/*定义滑块，内阴影及圆角*/
					li:nth-child(4)::scrollbar-thumb{
					    width: 1px;
					    height: 10rem;
					    border-radius: 10px;
					    -webkit-box-shadow: inset 0 0 6px #02275A;
					    background-color: #0F2059;
					}
					
					li:nth-child(5){
						flex-basis: 300px;
						overflow: hidden;
					}
					li:nth-child(6){
						flex-basis: 300px;
						border-right-color: transparent;
					}
				}
			}
		}
		
		
	}
	
			.con::-webkit-scrollbar{
			    width: 0px;
			    height: 2rem;
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