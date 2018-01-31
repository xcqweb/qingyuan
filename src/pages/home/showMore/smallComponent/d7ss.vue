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
    <div class="scenic">{{datas.name}}</div>
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
        datas:Object,
        index:Number,
        dateIndex:Number,
    },
    watch:{
//        isActive:function(val){
//            this.option.series[0].startAngle =60+Math.random()*221;
//            this.chart.setOption(this.option);
//        },
      //监听数据变化重新渲染echarts
      datas:{
          handler: function (val, oldVal) {
                this.option.series[0].data.forEach((item,index)=>{
                    item.value = val[item.ffname]
                    item.name = val[item.ffname]+'%';
                })
                this.$nextTick(()=>{
                    this.chart.setOption(this.option);
                })
            },
            deep: true
      },
      dateIndex:{
          handler:function(){
              this.option.series[0].data.forEach((item,index)=>{
                    item.value = this.datas[item.ffname]
                    item.name = this.datas[item.ffname]+'%';
                })
                this.$nextTick(()=>{
                    this.chart.setOption(this.option);
                })
          },
          deep: true
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
                        value:0,
                        name: "%",
                        ffname:'1000元-3000元',
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
                        value:0,
                         name:"%",
                         ffname:'1000元以下',
                         itemStyle:{
                            normal:{
                                color:'#75cf65'
                            },
                        }
                     },
                    {
                        value:0,
                         name:"%",
                         ffname:'3001元以上',
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
            this.option.series[0].data.forEach((item,index)=>{
            item.value = this.datas[item.ffname]
            item.name = this.datas[item.ffname]+'%';
        })
            this.chart.setOption(this.option);
        }
    },
    mounted() {
        this.$nextTick(echarts_resize(this.idName,this))
    },
}
</script>


