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
                name:'访问来源',
                type:'pie',
                radius: ['51%', '57%'],
                center: ['50%', '45%'],
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
                            }
                        },
                        labelLine:{
                            normal:{
                                show:true,
                                length:2,
                                length2:2,
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
    update(){
        this.$nextTick(echarts_resize(this.idName,this))
    }
}
</script>


