<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
.d7ss{
    width:100%;
    height:100%;
}
.scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
    }
  ul{
    position:absolute;
    right:20px;
    top:40%;
    li{
        margin-top:10px;
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
    <div :id="idName" class="d7ss">
    </div>
    <div class="scenic">{{scenics}}</div>  
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name:'d7',
    props:{
        idName:String,
        scenics:String,
        isActive:Boolean,
    },
    watch:{
        isActive:function(val){
            this.option.series[0].startAngle =60+Math.random()*221;
            this.chart.setOption(this.option);
        }
    },
    data(){
    return{
        items:[{
                year:'支付宝',
                color:'#368df7',
            },
            {
                year:'微信',
                color:'#75cf65',
            },
            {
                year:'现金',
                color:'#fe6e40',
            }
            ],
         option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
          series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '0',
                    center: ['50%', '58%'],
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
                            },
                             labelLine:{
                                normal:{
                                    show:true,
                                    length:0,
                                    length2:0,
                                    lineStyle:{
                                        color:'rgba(0,0,0,0)'
                                    }
                                }
                            },
                            label:{
                                    normal:{
                                        show:true,
                                        position:'inside',
                                        align:'center',
                                        textStyle:{
                                            color:'white'
                                        },
                                        formatter:function(params){
                                            var msgs = ['321万元','521万元','821万元',]
                                            var msg = (1000+Math.round(Math.random()*100))+'万元';
                                            var index = params.dataIndex ;
                                            return msg
                                        },
                                        fontSize:18,
                                        
                                    },
                            },
                        }
                    ],
                    
                },
              {
                name:'访问来源',
                type:'pie',
                radius: ['41%', '47%'],
                center: ['50%', '55%'],
                // selecteMode:'single',
                // selectedOffset:30,
                // roseType:"area",
                startAngle:90,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                // animation:false,
                animationType:'expansion',
                data:[
                    {
                        value:20.5, 
                        name:'39%',
                        label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#368df7'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'left',
                                formatter:function(params){
                                    var msgs = ['321万元','521万元','821万元',]
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[1]
                                },
                                textStyle:{
                                    color:'#368df7'
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:10,
                                length2:10,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
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
                         name:'26%',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#75cf65'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['321万元','521万元','821万元',]
                                    var msg = '';
                                    var index = params.dataIndex ;
                           
                                    return msgs[0]
                                },
                                textStyle:{
                                    color:'#75cf65'
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:10,
                                length2:10,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
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
                         name:'33%',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#fe6e40'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['321万元','521万元','821万元',]
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[2]
                                },
                                textStyle:{
                                    color:'#fe6e40'
                                }
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:5,
                                length2:5,
                                lineStyle:{
                                    color:'rgba(0,0,0,0)'
                                }
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
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption(this.option);
        }
    },
    mounted() {
          this.$nextTick(echarts_resize(this.idName,this))
    },
}
</script>


