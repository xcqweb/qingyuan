<!--维度正负面分析-->
<style lang="less" scoped>
  .d10{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #latitudeAnalyse{
    width: 100%;
    height: 100%;
    position:absolute;
    left: 10px;
    right: 0;
    top: 0px;
    bottom: 0;
    margin: auto;
    transform: scale(0.90);
  }
</style>
<template>
  <div class="d10">
    <div id="latitudeAnalyse"></div>
  </div>
</template>


<script>
  import echarts_resize from '@/common/js/echarts_resize.js'
  import echarts from 'echarts'

    export default {
        name:'d10',
        data () {
            return {
              option :{
                color:['#76DBF7','#BAE710'],
                textStyle:{
                  color: '#fff',
                  fontSize:12
                },
                tooltip: {},
                legend: {
                  label:{
                    show:true,
                    position:'outside'
                  },
                 // data:['纬度正面','纬度负面'],
                  data: [

                    {name:'纬度正面',
                      textStyle:{
                        color:'#fff',
                        fontWeight: 'bold'
                      },
                      icon:'circle',

                    },
                    {name:'纬度负面',
                      textStyle:{
                        color:'#fff',
                        fontWeight: 'bold'
                      },
                      icon:'circle'
                    }
                  ],
                  bottom:-5,
                  left:0
                },
                radar: {
                  indicator: [
                    { name: '景区管理', max: 6500},
                    { name: '清洁卫生', max: 16000},
                    { name: '客流状况', max: 30000},
                    { name: '服务设施', max: 38000},
                    { name: '服务水平', max: 52000},
                    { name: '景色景点', max: 25000},
                    { name: '旅游交通', max: 25000},
                    { name: '门票物价', max: 25000},
                    { name: '厕所', max: 25000}
                  ]
                },
                series: [{
                  name: '维度正负面分析',
                  type: 'radar',
                  // areaStyle: {normal: {}},
                  data : [
                    {
                      value : [4300, 10000, 28000, 35000, 50000, 19000,12000,20000,9000],
                      name : '纬度正面',
                      lineStyle:{
                        normal:{
                          color:['#76DBF7']
                        }
                      }
                    },
                    {
                      value : [5000, 14000, 28000, 31000, 42000, 21000,18000,16000,20000],
                      name : '纬度负面',
                      lineStyle:{
                        normal:{
                          color:['#BAE710']
                        }
                      }
                    }
                  ]
                }]
              }
            }
        },
        props: {
          scenics: Array,
          isActive: Boolean,
          title: String,
          dateIndex: Number
        },
        methods:{
            redom(id){
              this.chart = echarts.init(document.getElementById(id));
              this.chart.setOption(this.option);
              //this.$nextTick(echarts_resize('latitudeAnalyse',this));
            }
        },
        mounted() {
         this.redom("latitudeAnalyse");
        }
    }
</script>
