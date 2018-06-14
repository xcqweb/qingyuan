<template>
	<div class="tips" v-clickOutside='hide'>
		<p class="icon" @click="showTips" title="详情"></p>
		<transition name='fade'>
			<p class="cons" v-show='status'>{{txt}}<span class="rowt"></span><span class="rowo"></span></p>
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
					return '游客来源地人数的排行与占比；景区游客人数的排行与占比。';
					break;
					
					case 'a2':
					return '显示实时游客人数的变化。选择全部时，显示所有景区的实时客流；选择某一景区时，显示某一景区的实时客流。';
					break;
					
					case 'a3':
					return '默认显示过去七天所有景区具体每一天的游客人数统计，可根据需要选择某一景区和任意时间段的历史客流数据。';
					break;
					
					case 'b1':
					return '以高亮的颜色区分游客旅游密集的区域。（1人以上：蓝色；3人以上：绿色，5人以上：黄色；10人以上：红色）。';
					break;
					
					case 'b2':
					return '显示实时游客人数的变化。选择全部时，显示所有景区的实时客流；选择某一景区时，显示某一景区的实时客流。';
					break;
					
					case 'b3':
					return '当前景区实时客流与景区容纳人数最大值的比例。（50%以下绿色，50%-70%黄色，70%以上红色）。';
					break;
					
					case 'b4':
					return '景区实时的路况展示。';
					break;
					
					case 'b5':
					return '当天天气实况以及未来两天天气预测。';
					break;
					
					case 'c1':
					return '包括游客的年龄、性别、消费水平、学历、职业。';
					break;
					
					case 'c2':
					return '人气较高的旅游路线排名。';
					break;
					
					case 'c3':
					return '默认显示过去七天所有景区具体每一天的游客人数统计，可根据需要选择某一景区和任意时间段的历史客流数据。';
					break;
					
					case 'c4':
					return '当月各市级游客来源地的比例。';
					break;
					
					case 'c5':
					return '游客在清远市旅游停留时间的平均时长。';
					break;
					
					case 'd1':
					return '根据OTA评价获取：4星5星好评，2星3星中评，1星差评。';
					break;
					
					case 'd2':
					return '从六个维度对评价的正负面进行对比，评分数值：1-5分，满分5分，纬度正面评分越高，正面评价越高；纬度负面评分越高，负面评价越高。';
					break;
					
					case 'd3':
					return '对评论中出现频率较高的“关键词”予以视觉化的展现，评价关键词频次越高，文字显示越大。';
					break;
					
					case 'd4':
					return '该景区差评除以总评价数得出占比，对频频出现差评的各景区、酒店予以直观展示。';
					break;
					
					case 'd5':
					return '对应景区的评价内容及来源。';
					break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@col:#355BFA;
@cols:#163387;
.tips{
	width: 104px;
	height: 104px !important;
	position: absolute;
	left: 98%;
	top: -78%;
	box-shadow: none !important;
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
		font-size: 14px;
		width: 260px;
		background-color: @col;
		text-align: left;
		border-radius: 4px;
		position: absolute;
		line-height: 24px;
		letter-spacing: 1px;
		font-style:  normal;
		font-family: '微软雅黑';
		left: -96px;
		top: 76px;
		z-index: 10000;
		
	}
	
	.cons{
		font-weight: 200;
		font-size: 14px;
		width: 260px;
		background-color: @cols;
		padding: 4px;
		text-align: left;
		padding: 8px;
		border-radius: 4px;
		border: 2px solid @col;
		position: absolute;
		line-height: 24px;
		letter-spacing: 1px;
		font-style:  normal;
		font-family: '微软雅黑';
		left: -96px;
		top: 76px;
		z-index: 10000;
		box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.3);
		.rowo{
			position: absolute;
			top: -7px;
			left: 118px;
			width: 0;
			height: 0;
			border-left: 16px solid transparent;
		    border-right: 16px solid transparent;
		    border-bottom: 8px solid @cols;
			border-color: transparent transparent @cols transparent;
			border-style: solid;
			z-index: 10000;
		}
		.rowt{
			position: absolute;
			top: -10px;
			left: 114px;
			width: 0;
			height: 0;
			border-left: 20px solid transparent;
		    border-right: 20px solid transparent;
		    border-bottom: 10px solid @col;
			border-color: transparent transparent @col transparent;
			border-style: solid;
			z-index: 10000;
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