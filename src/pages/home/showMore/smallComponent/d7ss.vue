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
    <div class="scenic">{{data[index].name}}</div>
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
        data:Array,
        index:Number
    },
    watch:{
//        isActive:function(val){
//            this.option.series[0].startAngle =60+Math.random()*221;
//            this.chart.setOption(this.option);
//        },
      //监听数据变化重新渲染echarts
      data:function(){
        this.option.series[0].startAngle =60+Math.random()*221;
        this.chart.setOption(this.option);
      }
    },
    data(){
    return{
        items:[{
          year:'1000元以下',
          color:'#368df7'
        },
          {
            year:'1001元-3000元',
            color:'#75cf65',
          },
          {
            year:'3001元以上',
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
                radius: ['41%', '52%'],
                center: ['50%', '55%'],
                startAngle:90,
                animationType:'expansion',
                data:[
                    {
                        value:this.data[this.index].data[0].percent,
                        name: this.data[this.index].data[0].percent+"%",
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
                        value:this.data[this.index].data[1].percent,
                         name:this.data[this.index].data[1].percent+"%",
                         itemStyle:{
                            normal:{
                                color:'#75cf65'
                            },
                        }
                     },
                    {
                        value:this.data[this.index].data[2].percent,
                         name:this.data[this.index].data[2].percent+"%",
                         label:{
                           emphasis :{
                                show:true,
                              formatter:'{a}',
                              textStyle:{
                                    color:'#fe6e40'
                                }
                            },
                            emphasis:{
                                show:true,
                                position:'outside',
                                align:'right',
                                textStyle:{
                                    color:'#fe6e40'
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


