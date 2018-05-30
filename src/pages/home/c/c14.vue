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
    	  beginStr:'',
        endStr:'',
    		dataY: [254, 3254, 1654, 2454, 4757, 2011, 1211,545,4800,1243,2130,1242,1542,1245,1485],
    		dataX:['工程师', '策划', '涉文案', '设计师', '会计', '教师', '家政','店长','收银','公关','产品经理','律师','法官','投资','供应链'],
    }
    },
    watch:{
			updatePlace:function(val){
             let paramsObj = {}
    		if(this.endStr||this.beginStr){
    			paramsObj = {
                area:val.place,
                name:val.turist,
                beginTime:this.beginStr,
	              endTime:this.endStr
            }
    		}else{
    			paramsObj = {
                area:val.place,
                name:val.turist,
                type:["day","month","year"][this.type],
            }
    		}
            this.getResponse(paramsObj);
        },
        update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type=val.type;
             		this.endStr = '';
	              this.beginStr = '';
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            }
             	}else{
             		 this.endStr = val.end.join("-");
	                 this.beginStr = val.begin.join("-");
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:this.beginStr,
	                    endTime:this.endStr
					}
             	}
                 
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    methods:{
    	
    	//请求数据
	  	getResponse(paramsObj){
			let _self = this;
	        this.$axios.get(API_URL+'/qy/api/v2/view/getVocation',{params:paramsObj}).then(r => {
	        	if(!r){
                	return
                }
						let reData = r.data.data
						//console.log(reData)
						_self.dataY = []
		                _self.dataX = []
		                if(r.data.code ==="200"||r.data.code ===200){
		                	reData.forEach( (v,i) => {
		                		if(i<15){
		                			_self.dataY.push(v.num)
		                			_self.dataX.push(v.description.substr(0,2))
		                		}
		                		
		                	})
		                	
		                   _self.redom('c14')
		                }
		            })
       },
        redom(id){
        	if(this.chart){
        		this.chart.dispose()
        	}
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
    	let paramsObj = {
    		area:'全部',
    		name:'全部',
    	}
    	this.getResponse(paramsObj)
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
