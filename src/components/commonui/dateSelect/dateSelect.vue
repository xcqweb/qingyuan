<template>
	<div class="box" v-clickOutside='hide'>
		<p class="title" @click="chose"><span>{{ctime}}</span><i :class="icon"></i></p>
		<ul class="list" v-show="showStatus" >
			<li v-for="(item,index) in years" @mouseover="showMonth(item.year)">{{item.year}}
				<ul class="subMenu" :class="comStyle">
					<li v-for="month in months" @click="choseDates(month)">{{month}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import Bus from '@/common/js/bus'
	let date = new Date();
	let year = date.getFullYear();
	let curMonth = date.getMonth()+1;
	let curDay = date.getDate();
	let yearData=[];
	for(let i=0,len=year-2000; i<len; i++){
		yearData[i] = {year:year-i}
	}
	export default{
		data(){
			return {
				years:yearData,
				months:[1,2,3,4,5,6,7,8,9,10,11,12],
				showStatus:false,
				choseDate:[],
				choseDateStart:[],
				ctime:'年  ~ 月',
				timer:null,
			}
		},
		props:['isStart'], 
		mounted(){
			Bus.$on('reset', () => {
				return this.ctime = '年  ~ 月';
			}),
			Bus.$on('swap',(data) => {
				if(this.isStart){
					this.ctime = data.begin[0]+" ~ "+ data.begin[1]
				}else{
					this.ctime = data.end[0]+" ~ "+ data.end[1]
				}
			})
		},
		beforeDestroy(){
			Bus.$off()
			this.$off()
		},
		computed:{
			icon(){
				if(this.showStatus){
					return 'up'
				}else{
					return 'down'
				}
			},
			comStyle(){
				let isIE = window.navigator.userAgent.indexOf('Trident')
				return isIE>-1?'ieScroll':''
			}
		},
		methods:{
			chose(){
				this.showStatus = !this.showStatus;
			},
			showMonth(val){
				if(this.isStart){
					this.choseDateStart[0] = val
				}else{
					this.choseDate[0] = val
				}
			},
			hide(){
				this.showStatus = false;
			},
			choseDates(data){
				this.showStatus = false;
				if(this.isStart){//开始日期
					if(this.choseDateStart[0]===year && data>curMonth){
						alert('选择时间不能大于当前月份!');
						this.ctime='年  ~ 月';
						return;
					}
					 this.choseDateStart[2] = '01'
					 this.choseDateStart[1] = data<10?"0"+data:data
					 this.ctime = this.choseDateStart[0] +" ~ "+ this.choseDateStart[1]
					 Bus.$emit('turistDate',{begin:this.choseDateStart})
				}else{//结束日期
					if(this.choseDate[0]===year && data>curMonth){
						alert('选择时间不能大于当前月份!');
						this.ctime='年  ~ 月';
						return;
					}
					this.choseDate[1] = data
					if(data===2){ //闰年2月28天
						if((this.choseDate[0] % 4 === 0 && this.choseDate[0] % 100 !== 0)  || this.choseDate[0] % 400 === 0){
							this.choseDate[2] = 29
						}else{
							this.choseDate[2] = 28
						}
					}else if(data===4||data===6||data===9||data===11){
						this.choseDate[2] = 30
					}else{
						this.choseDate[2] = 31
					}
					if(this.choseDate[0]===year && data===curMonth){
						this.choseDate[2] = curDay
					}
					this.choseDate[1] = data<10?"0"+data:data
					this.ctime = this.choseDate[0] +" ~ "+ this.choseDate[1]
					Bus.$emit('turistDate',{end:this.choseDate})
				}
			} 
		}
		
	}
</script>

<style lang="less" scoped="scoped">
	.box{
		width: 120px;
		height: 36px;
		position: relative;
		.title{
			width: 100%;
			height: 100%;
			line-height: 36px;
			border-radius: 8px;
			border: solid 2px #345bfa;
			cursor: pointer;
			font-size: 0.8rem;
			span{
				margin-left: -1rem;
			}
			.up{
	    			display: block;
	    			position: absolute;
	    			right: 10px;
	    			top: 18px;
	    			width: 0;
	    			height: 0;
	    			border-width: 6px;
	    			border-color: #fff transparent transparent;
	    			border-style: solid;
	    		}
	    		.down{
	    			display: block;
	    			position: absolute;
	    			right: 10px;
	    			top: 12px;
	    			width: 0;
	    			height: 0;
	    			border-width: 6px;
	    			border-color:  transparent transparent #fff;
	    			border-style: solid;
	    		}
		}
		.list{
			background: #193583;
			border: 1px solid #1b44ba;
			max-height: 210px;
			overflow-y: scroll;
			li{
				height: 30px;
				line-height: 30px;
					.subMenu{
						position: absolute;
						height: 210px;
						width: 120px;
						left: 116px;
						top: 40px;
						background: #193583;
						border: 1px solid #1b44ba;
						overflow-y: auto;
						display: none;
						li{
							height: 30px;
							line-height: 30px;
							cursor: pointer;
						}
						li:hover{
							background-color: #3B69BE;
						}
				}
				.ieScroll{
					left: 100px !important;
				}
			}
			li:hover{
				background-color: #3B69BE;
			}
			li:hover .subMenu{
				display: block;
				color: #fff;
				background: #193583;
			}
		}
	}
	
	
		 .subMenu::-webkit-scrollbar,.list::-webkit-scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subMenu::-webkit-scrollbar-track,.list::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.subMenu::-webkit-scrollbar-thumb,.list::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 3rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: #0F2059;
			}
			
			.subMenu::scrollbar,.list::scrollbar{
			    width: 10px;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subMenu::scrollbar-track,.list::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			.subMenu,.list{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			.subMenu::scrollbar-thumb,.list::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>