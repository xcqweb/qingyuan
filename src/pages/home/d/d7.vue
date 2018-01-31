<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    left:26px;
}
#d7{
    width:100%;
<<<<<<< HEAD
    height:100%;
  margin-top: -50px;
}
  ul{
    position:absolute;
    right:100px;
    top:82%;
=======
    height:80%;
    transform: translate(0,5%)
}
  ul{
   position:absolute;
    left:50%;
    transform: translate(-70%,0);
    top:72%;
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
  <div id="d7">
  </div>
  <ul>
      <li v-for='item in items' :style="{color:item.color}"><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
  </ul>
</div>
</template>

<script type="text/javascript">
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name:'d7',
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
                    name: '访问来源',
                    type: 'pie',
                    radius : '28%',
<<<<<<< HEAD
                    center: [ '48%'],
=======
                    center: [ '48%',"10%"],
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
                startAngle:90,
                // animation:false,
                animationType:'expansion',
                data:[
                    {
                        value:20.5,
                        name:'39%',
<<<<<<< HEAD
=======
                        ffname:'1000元-3000元',
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
                                    var index = params.data[0];
                                    return index
                                },
                                textStyle:{
                                    color:'#368df7',
                                    fontSize:14
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
<<<<<<< HEAD
=======
                          ffname:'1000元以下',
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
                         itemStyle:{
                            normal:{
                                color:'#75cf65'
                            },
                        }
                     },
                    {
                        value:19.8,
                         name:'33%',
<<<<<<< HEAD
=======
                        ffname:'3001元以上',
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
<<<<<<< HEAD
        }
    },
    mounted() {
          this.$nextTick(echarts_resize('d7',this))
=======
        },
        getResponse(){
            this.$axios.get(API_URL+'/qy/api/view/getSpendMoneyPowerData').then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    this.option.series[1].data.forEach((item,index)=>{
                        item.value = r.data.data[item.ffname]
                        item.name = r.data.data[item.ffname]+'%';
                    })
                    this.$nextTick(()=>{
                       this.$nextTick(echarts_resize('d7',this))
                    })
                }
            })
        }
    },
    created(){
       this.getResponse();
   },
    mounted() {
          
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    }
}
</script>


