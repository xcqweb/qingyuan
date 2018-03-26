<template>
<div class="content">
  <div id="c14"></div>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'c12',
    mixins: [optionProps],
    data(){
    return{
    		dataY: [254, 3254, 1654, 2454, 4757, 2011, 1211,545,4800,1243,2130,1242,1542,1245,1485],
    		dataX:['工程师', '策划', '涉文案', '设计师', '会计', '教师', '家政','店长','收银','公关','产品经理','律师','法官','投资','供应链'],
    }
    },
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
    methods:{
    	
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		let data={code:0};
	  		data.code = this.code;
	  		api.touristAttr(data).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
	  				let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.series.length; ++i){
	  					this.series[i].value = arrData[i]
	  				}
	  				//console.log(this.series)
					if(re.status===200){
					}
					this.redom("c12");
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            	tooltip:{
            		show:true
            	},
					    xAxis: {
					        data: this.dataX,
					        axisLine: {
					            lineStyle: {
					                color: '#0177d4'
					            }
					        },
					        axisLabel: {
					            color: '#fff',
					            fontSize: 12
					        }
					    },
					    yAxis: {
					       // name: "（人）",
					        nameTextStyle: {
					            color: '#fff',
					            fontSize: 16
					        },
					        axisLine: {
					            lineStyle: {
					                color: '#0177d4'
					            }
					        },
					        interval: 1000,
					        axisLabel: {
					            color: '#fff',
					            fontSize: 16
					        },
					        splitLine: {
					            show:true,
					            lineStyle: {
					                color: '#0177d4'
					            }
					        },
					        interval:500,
					        max:5000
					
					    },
						    series: [{
						        type: 'bar',
						        barWidth: 18,
						        itemStyle:{
						            normal:{
						                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						                    offset: 0,
						                    color: '#92ff1e'
						                }, {
						                    offset: 0.8,
						                    color: '#45BB73'
						                }], false),
						                barBorderRadius: 50,
						            }
						        },
						        data: this.dataY
						    }]
						};
            this.chart.setOption(option);
        }
    },
    created(){
    },
    computed:{
    	percents(){
    		let arr=[];
    		//let sum=0;
    		//for(let i=0; i<this.series.length; ++i){
    			//sum += this.series[i].value;
    		//}
    		for(let i=0; i<this.series.length; ++i){
    			arr[i] = this.series[i].value;
    		}
    		return arr
    	}
    },
    mounted() {
      this.$nextTick(echarts_resize('c14',this))
    },
}
</script>

<style lang="less" scoped>
#c14{
    width:100%;
    height:100%;
    transform: scale(1.1) translate(5%,13%);
}
.legend{
	width: 36%;
	height: 80%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 25%;
	li{
		width: 33%;
		line-height: 0.8rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.8rem;
		}
	}
}

.content{
    width:100%;
    height:100%;
    position:relative;
}
@media screen and (min-width: 1400px){
  ul{
    position:absolute;
    right:10%;
    top:30%;
    li{
        margin-top:10px;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
}
@media screen and (max-width: 1400px){
  ul{
    position:absolute;
    right:10%;
    top:15%;
    li{
        float:left;
        display:inline-block;
        font-size:.8rem;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
	.legend{
	width: 36%;
	height: 80%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 10%;
	li{
		width: 33%;
		line-height: 0.8rem;
		margin-top: 0.8rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.4rem;
		}
	}
}

}
</style>
