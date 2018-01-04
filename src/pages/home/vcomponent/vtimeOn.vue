<template>
  <div class="A5">
    <div id="container"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name: 'a5',
    data () {
      return {
        reTimer:null,
      }
    },
    computed: { 
    },
    methods: {
      redom(id,xyfonsiz){
          this.chart = echarts.init(document.getElementById(id));
          function randomData() {
              now = new Date(+now + oneDay);
              var value = Math.random() * 600+100;
              if(now.getMinutes() > 10){
                  var minutes =now.getMinutes() 
              }else{
                  var minutes ="0"+now.getMinutes()
              }
              if(now.getSeconds()>10){
                  var seconds =now.getSeconds() 
              }else{
                  var seconds ="0"+now.getSeconds()
              }
              if(now.getHours()>10){
                  var hours =now.getHours() 
              }else{
                  var hours ="0"+now.getHours()
              }
              return {
                    xData: [ hours,minutes,seconds].join(':'),
                    sData: Math.round(value)
              }
          }

          var xdata = [];
          var sdata = [];
          var j = 8;
          var now = +new Date();
          var oneDay = 5 * 1000;
          
          for (var i = 0; i < 200; i++) {
            //   debugger;
            let  dataObji = randomData();
            xdata.push(dataObji.xData);
            sdata.push(dataObji.sData);
          }
        let date=xdata.slice(0,8);
        let data=sdata.slice(0,8);
          var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            color: ['#00ffff', '#00ffa2', '#f0e750'],
            grid: {
               show: true,
               left: '10%',
               top: '15%',
               right: '5%',
               bottom: '10%',
               borderWidth: 0,
               borderColor: 'rgba(170,172,178,0.33)',
               backgroundColor: 'rgba(0,0,0,0)',
           },
           tooltip:{
                show:true,
                trigger:'axis',
                formatter:function(params){
                    return params[0].name+"<br>游客人数："+ params[0].value+"人"
                },
            },
           calculable: true,
           xAxis: [{
               type: 'category',
               //在（type: 'category'）中设置data有效
               splitLine: { //坐标轴在 grid 区域中的分隔线；
                   show: false,
                   lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                       color: 'rgba(170,172,178,0.33)'
                   }
               },
               axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                   show: true,
                   lineStyle: {
                       color: '#20549f',
                       shadowBlur:50,
                       shadowColor:'#05a1cd',
                   },
               },
               axisLabel: {
                   textStyle: {
                       color: '#ffffff',//x坐标轴标签字体颜色
                       fontSize: 15,
                   },
               },
               axisTick:{
                    show:false,
                }
           }],
           yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%'],
                  axisLabel: {
                       textStyle: {
                           color: '#ffffff',//x坐标轴标签字体颜色
                           fontSize: 12,
                       },
                       formatter: '{value}人'
                  },
                  splitLine:{
                      show:true,
                      lineStyle:{
                          color:'#20549f',
                          width:1,
                          type:'solid'
                      },
                  },
                  axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                       show: true,
                          lineStyle: {
                              color: '#20549f'
                       },
                  },

              },
           series: [{
                       type: 'line',
                    //    smooth: true, //是否平滑曲线显示
                       lineStyle:{
                            normal:{
                                color:'#6e8bf9',
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 4,
                                shadowOffsetY:14,
                            }
                        },
                       

                    //    areaStyle: { //区域填充样式
                    //        normal: {
                    //            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    //            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //                offset: 0,
                    //                color: 'rgba(0,222,255,0.4)'
                    //            }, {
                    //                offset: 1,
                    //                color: 'rgba(0,222,255,0)'
                    //            }], false),
                    //            opacity:0.8,
                    //        }
                    //    },
                       itemStyle: { //折现拐点标志的样式
                           normal: {
                               color: 'rgba(113,191,255,1)',
                               borderColor:'rgba(113,191,255,1)',
                               borderWidth:10,
                               opacity:0,
                           }
                       },
                       label:{
                            normal:{
                                show:true,
                                color:'#ffffff',
                                fontSize:14,
                                color:'#6e8bf9',
                                formatter:function(params){
                                    return params.value
                                },
                            },
                            emphasis:{
                                show:true,
                                color:'#ffffff',
                                fontSize:14,
                                color:'#6e8bf9',
                                formatter:function(params){
                                    
                                    return  params.value
                                },
                            },

                        },
                   }

               ] //series结束
          };
          let _self=this;
          this.chart.setOption(option);
          if (this.reTimer) {
            window.clearInterval(this.reTimer)
          }
          this.reTimer=setInterval(function () {
              j++
                date.shift();
                data.shift();
                date.push(xdata[j]);
                data.push(sdata[j]);
                option.xAxis.data=date;
                option.series.data=data;
                _self.chart.setOption({
                    xAxis: {
                        data: date
                    },
                  series: [{
                      data: data
                  }]
              });
          }, 5000);
      }
    },
    mounted() {
        this.$nextTick(echarts_resize('container',this))
      },
    components:{

    }
}
</script>

<style lang="less" scoped>
.A5{
    width:100%;
    height:100%;
    #container{
        width:100%;
        height:100%;
    }
}
</style>