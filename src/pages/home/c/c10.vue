<<<<<<< HEAD
<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#c10{
    width:100%;
    height:60%;
}
ul{
    li{
        float: left;
        width: 45%;
        margin-top: 10%;
        
    }
}
</style>
<template>
    <div class="content">
        <div id="c10"></div>
         <ul>
            <li v-for='item in items' :style="{color:item.color}">{{item.year}}</li>
        </ul>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name:'c10',
    data(){
    return{
        items:[{
                year:'微信：34%',
                color:'#368df7',
            },
            {
                year:'公众号：20%',
                color:'#fe6e40',
            },
            {
                year:'微博：19%',
                color:'#75cf65',
            },
            {
                year:'朋友介绍：17%',
                color:'#ffd800',
            },
            {
                year:'其他：10%',
                color:'#c184ff',
            }
            ],
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius: ['48%', '58%'],
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
                        value:30.5, 
                        name:'微信',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                         name:'微博',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                         name:'公众号',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                      {
                        value:19.8,
                         name:'朋友介绍',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#ffd800'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[3]
                                },
                                textStyle:{
                                    color:'#ffd800'
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
                                color:'#ffd800'
                            },
                        }
                     },
                      {
                        value:9.8,
                         name:'其他',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#c184ff'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[4]
                                },
                                textStyle:{
                                    color:'#c184ff'
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
                                color:'#c184ff'
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
            let w=this.chart.getWidth()
            let d=this.chart.getDom()
            this.chart.setOption(this.option);

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL('c10',this))
    }
}
</script>

=======
<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
}
#c10{
    width:100%;
    height:60%;
}
ul{
    li{
        float: left;
        width: 45%;
        margin-top: 10%;
        
    }
}
</style>
<template>
    <div class="content">
        <div id="c10"></div>
         <ul>
            <li v-for='item in items' :style="{color:item.color}">{{item.year}}</li>
        </ul>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name:'c10',
    data(){
    return{
        items:[{
                year:'微信：34%',
                color:'#368df7',
            },
            {
                year:'公众号：20%',
                color:'#fe6e40',
            },
            {
                year:'微博：19%',
                color:'#75cf65',
            },
            {
                year:'朋友介绍：17%',
                color:'#ffd800',
            },
            {
                year:'其他：10%',
                color:'#c184ff',
            }
            ],
        option:{
          backgroundColor: 'rgba(0,0,0,0)',
          color: ['#368DF7', '#6F5DDA', '#75CF65'],
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius: ['48%', '58%'],
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
                        value:30.5, 
                        name:'微信',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                         name:'微博',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                         name:'公众号',
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
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
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
                      {
                        value:19.8,
                         name:'朋友介绍',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#ffd800'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[3]
                                },
                                textStyle:{
                                    color:'#ffd800'
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
                                color:'#ffd800'
                            },
                        }
                     },
                      {
                        value:9.8,
                         name:'其他',
                         label:{
                            normal:{
                                show:true,
                                position:'outside',
                                textStyle:{
                                    color:'#c184ff'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                formatter:function(params){
                                    var msgs = ['微博','微信','公众号','朋友介绍','其他']
                                    var msg = '';
                                    var index = params.dataIndex ;
                                    return msgs[4]
                                },
                                textStyle:{
                                    color:'#c184ff'
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
                                color:'#c184ff'
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
            let w=this.chart.getWidth()
            let d=this.chart.getDom()
            this.chart.setOption(this.option);

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL('c10',this))
    }
}
</script>

>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
