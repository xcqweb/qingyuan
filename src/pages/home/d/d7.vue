<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    left:26px;
    margin-top: -26px;
}
#d7{
    width:100%;
    height:100%;
    transform: scale(1.3) translate(-6%,10%);
}
  ul{
   position:absolute;
   font-size: 20px;
    right:-26%;
    transform: translate(-70%,0);
    top:36%;
    li{
        margin-top:42px;
        text-align:left;
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
</style>
<template>
<div class="content">
  <div id="d7">
  </div>
  <ul>
      <li v-for='item in items' :style="{color:item.color}"><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.name}}</li>
  </ul>
</div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'d7',
    mixins: [optionProps],
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
    data(){
    return{
    	beginStr:'',
        endStr:'',
        items:[{
                name:'1000元以下',
                color:'#368df7'
            },
            {
                name:'1001元-3000元',
                color:'#75cf65',
            },
            {
                name:'3000元以上',
                color:'#fe6e40',
            }
            ],
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
            legend:{
                show:true,
                orient: 'vertical',
                top:'20%' ,
                left:'55%',
                width:'20%',
                height:'45%',
                itemGap:10,
                itemWidth:12,
                itemHeight:10,
                textStyle:{
                    color:'white',
                },
            },
          series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '28%',
                    center: [ '48%',"10%"],
                    data:[{
                        value:20.5,
                        name:'39%',
                        itemStyle: {
                            normal:{
                                    color:'rgba(0, 0, 0, 0)'
                                },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                            }
                        }
                    ],

                },
              {
                name:'访问来源',
                type:'pie',
                radius: ['33%', '40%'],
                center: ['39%', '55%'],
                selectedMode: "single",
                startAngle:90,
                animation:true,
                animationType:'expansion',
                data:[
                    {
                        value:20.5,
                        name:'1000元-3000元',
                        ffname:'1000元-3000元',
                        label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#368df7',
                                    fontSize:14
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'left',
                                formatter:function(params){
                                    var index = params.data[0];
                                    return index
                                },
                                textStyle:{
                                    color:'#368df7',
                                    fontSize:14
                                }
                            }
                        },
                         labelLine:{
                        	normal:{
                        		show:true
                        	}
                        },
                        itemStyle:{
                            normal:{
                                color:'#368DF7'
                            },
                            emphasis: {
                                color: '#368DF7',
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }

                    },
                    {
                        value:16.0,
                         name:'1000元以下',
                         ffname:'1000元以下',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#75cf65',
                                    fontSize:14
                                },
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                              formatter:function(params) {
                                var index = params.data[1];
                                return index
                              },
                                textStyle:{
                                    color:'#75cf65',
                                    fontSize:14
                                }
                            }
                        },
                        labelLine:{
                        	normal:{
                        		show:true
                        	}
                        },
                         itemStyle:{
                            normal:{
                                color:'#75cf65'
                            },
                        }
                     },
                    {
                        value:19.8,
                         name:'3001元以上',
                        ffname:'3000元以上',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#fe6e40',
                                    fontSize:14
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
	                              formatter:function(params) {
	                                var index = params.data[2];
	                                return index
	                              },
                                textStyle:{
                                    color:'#fe6e40',
                                    fontSize:14
                                }
                            }
                        },
                         labelLine:{
                        	normal:{
                        		show:true
                        	},
                        	emphasis:{
                        		show:true
                        	}
                        },
                         itemStyle:{
                            normal:{
                                color:'#fe6e40'
                            },
                        }
                     },
                ]
            },
          ]
      },
    }
    },
    methods:{
        redom(id){
        	if(this.chart){
        		this.chart.dispose()
        	}
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        },
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/view/getSpendMoneyPowerData',{params:paramsObj}).then(r => {
            	if(!r){
            		let reData = {'1000元-3000元':0,'1000元以下':0,'3000元以上':100}
            		this.option.series[1].data[0].label.normal.show = false
            		this.option.series[1].data[1].label.normal.show = false
            		this.option.series[1].data[2].label.normal.show = false
            		this.option.series[1].data[2].label.emphasis.show = false
            		this.option.series[1].data[0].labelLine.normal.show = false
            		this.option.series[1].data[1].labelLine.normal.show = false
            		this.option.series[1].data[2].labelLine.normal.show = false
            		this.option.series[1].animation= false
            		
            		this.option.series[1].data.forEach((item,index)=>{
                        item.value = (reData[item.ffname])
                        item.name = (reData[item.ffname]).toFixed(1)+'%';
                    })
                       this.$nextTick(echarts_resize('d7',this))
            		return
            	}
            	
                if(r.data.code ==="200"||r.data.code ===200){
                	this.option.series[1].data[0].label.normal.show = true
            		this.option.series[1].data[1].label.normal.show = true
            		this.option.series[1].data[2].label.normal.show = true
            		this.option.series[1].data[2].label.emphasis.show = true
            		this.option.series[1].data[0].labelLine.normal.show = true
            		this.option.series[1].data[1].labelLine.normal.show = true
            		this.option.series[1].data[2].labelLine.normal.show = true
            		this.option.series[1].animation= true
            		
                    this.option.series[1].data.forEach((item,index)=>{
                        item.value = (r.data.data[0][item.ffname])
                        item.name = (r.data.data[0][item.ffname]).toFixed(1)+'%';
                    })
                       this.$nextTick(echarts_resize('d7',this))
                }
            })
        }
    },
    created(){
    	var paramsObj = {
                area:"全部",
                name:"全部",
                type:"year",
            }
       this.getResponse(paramsObj);
   },
    mounted() {
          
    }
}
</script>


