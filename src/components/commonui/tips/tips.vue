<template>
	<div class="tips" v-clickOutside='hide'>
		<p class="icon" @click="showTips" title="详情"></p>
		<transition name='fade'>
			<p class="con" v-show='status'>{{txt}}<span class="row"></span></p>
		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				status:false,
				txt:''
			}
		},
		props:{
			type:{
				type:String,
				default:'a1'
			}
		},
		methods:{
			hide(e){
				this.status = false
			},
			showTips(){
				this.txt = this.switchNum(this.type)
				this.status = !this.status
			},
			switchNum(type){
				switch(type){
					case 'a1':
					return '空间空间框架和很高很高很高空间空间框架和很高很高很高空间空间框架和很高很高很高空间空间框架和很高很高很高空间空间框架和很高很高很高';
					break;
					
					case 'a2':
					return '6666';
					break;
					
					case 'a3':
					return 'a3';
					break;
					
					case 'b1':
					return 'b1';
					break;
					
					case 'b2':
					return 'b2';
					break;
					
					case 'b3':
					return 'b3';
					break;
					
					case 'b4':
					return 'b4';
					break;
					
					case 'b5':
					return 'b5';
					break;
					
					case 'c1':
					return 'c1';
					break;
					
					case 'c2':
					return 'c2';
					break;
					
					case 'c3':
					return 'c3';
					break;
					
					case 'c4':
					return 'c4';
					break;
					
					case 'c5':
					return 'c5';
					break;
					
					case 'd1':
					return 'd1';
					break;
					
					case 'd2':
					return 'd2';
					break;
					
					case 'd3':
					return 'd3';
					break;
					
					case 'd4':
					return 'd4';
					break;
					
					case 'd5':
					return 'd5';
					break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@col:#3d55be;
.tips{
	width: 104px;
	height: 104px !important;
	position: absolute;
	left: 98%;
	top: -78%;
	.icon{
		width: 104px;
		height: 104px;
		background: url(../../../assets/images/tips/tips.png) no-repeat;
		background-size: 75%;
		background-position: 0 10px;
		cursor: pointer;
	}
	.con{
		font-weight: 100;
		font-size: 13px;
		width: 312px;
		border: 1px solid @col;
		background-color: @col;
		padding: 5px;
		border-radius: 4px;
		position: absolute;
		line-height: 20px;
		letter-spacing: 1px;
		font-style: italic;
		font-family: '楷体';
		left: -120px;
		top: 80px;
		.row{
			position: absolute;
			top: -20px;
			left: 148px;
			width: 0;
			height: 0;
			border-width: 10px;
			border-color: transparent transparent @col transparent;
			border-style: solid;
			z-index: 1000;
		}
	}
}

.fade-enter-active {
  transition: all 0.5s ease-out;
}
.fade-leave-active{
	transition: all .5s ease-in;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateY(15px);
}
</style>