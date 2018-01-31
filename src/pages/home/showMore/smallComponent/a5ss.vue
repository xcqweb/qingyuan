<style lang="less" scoped>
.A5{
    width:100%;
    height:100%;
    position: relative;
    .container{
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
}
</style>
<template>
  <div class="A5">
    <div :id="idName" class="container"></div>
    <div class="scenic">{{scenics}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
    name: 'a5ss',
    props:{
        idName:String,
        scenics:String,
<<<<<<< HEAD
    },
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
              value = value + Math.random() * 21 - 10;
              return {
                  name: now.toString(),
                  value: [
                      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                      Math.round(value)
                  ]
              }
          }

          var data = [];
          var now = +new Date(2001, 9, 3);
          var oneDay = 24 * 3600 * 1000;
          var value = Math.random() * 700;
          for (var i = 0; i < 50; i++) {
              data.push(randomData());
          }

          var option = {
              grid: {
                 show: true,
                 left: '20%',
                 top: '15%',
                 right: '10%',
                 bottom: '20%',
                 borderWidth: 0,
                 borderColor: 'rgba(170,172,178,0.33)',
                 backgroundColor: 'rgba(0,0,0,0)',
             },

              xAxis: {
                  type: 'time',
                  splitLine: {
                      show: false
                  },
                   axisLabel: {
                       textStyle: {
                           color: '#ffffff',//x坐标轴标签字体颜色
                           fontSize: 12,
                       },
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
                  min:0,
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
                  name: '模拟数据',
                  type: 'line',
                  showSymbol: false,
                  hoverAnimation: false,
                  lineStyle:{
                      normal:{
                          color:'#6e8bf9',
                          shadowColor: 'rgba(0, 0, 0, 0.5)',
                          shadowBlur: 4,
                          shadowOffsetY:14,
                      }
                  },
                  data: data
              }]
          };
          let _self=this;
          this.chart.setOption(option);
          if (this.reTimer) {
            window.clearInterval(this.reTimer)
          }
          this.reTimer=setInterval(function () {
              for (var i = 0; i < 5; i++) {
                  data.shift();
                  data.push(randomData());
              }
                _self.chart.setOption({
                  series: [{
                      data: data
                  }]
              });
          }, 3000);
      }
    },
    mounted() {
        this.$nextTick(echarts_resize(this.idName,this))
      },
=======
        barNum:Number,
        updatePlace: String,
    },
    watch:{
        updatePlace:function(){
            this.redomData(this.barNum)
        },
        barNum:function(){
            this.redomData(this.barNum)
        }
    },
    
    data () {
        return {
            reTimer:null,
            option : {
                backgroundColor: 'rgba(0,0,0,0)',
                color: ['#00ffff', '#00ffa2', '#f0e750'],
                grid: {
                    show: true,
                    left: this.scenics ===""?'10%':'18%',
                    top: '20%',
                    right: '5%',
                    bottom: '16%',
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
            }
        }
    },
    
    computed: { 
    },
    methods: {
        addZero(now){
            if(now.getMinutes() > 9){
                
                var minutes =now.getMinutes() 
            }else{
                var minutes ="0"+now.getMinutes()
            }
            if(now.getSeconds()>9){
                var seconds =now.getSeconds() 
            }else{
                var seconds ="0"+now.getSeconds()
            }
            if(now.getHours()>9){
                var hours =now.getHours() 
            }else{
                var hours ="0"+now.getHours()
            }
            return [ hours,minutes,seconds].join(':')
        },
        redomData(val){
                let _self=this
                var date = [];
                var data = [];
                let  powAverage =2
                let  average =1

                if(val>1440){
                     powAverage = val/3880 ;
                     average = val/1440 ;
                }else{
                     powAverage = 2 ;
                     average = 1 ;
                }
                for(let xi = 9; xi >1;xi--){
                    date.push(this.addZero(new Date(new Date().getTime() - xi*5 * 1000)))
                    data.push(Math.round(Math.pow(Math.random()*powAverage,2)))
                }
                var j = 8;
                var nowDate = new Date();
                var now = +new Date(nowDate.getTime());
                var oneDay = 2.5 * 1000;
                
                function randomData() {
                    now = new Date(+now + oneDay);
                    if(Math.random()>0.4 && powAverage>10){
                        value =(1- (Math.random()-1)/2)*average;
                    }else{
                        var value = Math.pow(Math.random()*powAverage,2);
                        
                    }
                    return {
                            xData: _self.addZero(now),
                            sData: Math.round(value)
                    }
                }
                _self.option.xAxis.data=date;
                _self.option.series.data=data;
                _self.chart.setOption(_self.option, true);
                
                if (_self.reTimer) {
                    window.clearInterval(_self.reTimer)
                }
                _self.reTimer=setInterval(function () {
                    j++
                    date.shift();
                    data.shift();
                    date.push(randomData().xData);
                    data.push(randomData().sData);
                    _self.option.xAxis.data=date;
                    _self.option.series.data=data;
                    _self.chart.setOption({
                        xAxis: {
                            data: date
                        },
                    series: [{
                        data: data
                    }]
                });
            }, 5000);
        },   
        redom(){
                let _self=this            
                var dom = document.getElementById(this.idName);
                this.chart = echarts.init(dom);
                if (this.option && typeof this.option === "object") {    
                   this.chart.setOption(this.option, true);
                } 
        },
    },
    mounted() {
        echarts_resize(this.idName,this);
        
        this.redomData(this.barNum);
    },
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    components:{

    }
}
</script>

