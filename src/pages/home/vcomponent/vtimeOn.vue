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
                 left: '10%',
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