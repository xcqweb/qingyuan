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
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'a5ss',
    mixins:[optionProps],
    watch:{
        updatePlace:function(val){
        	if(val.place==='全市'){
        		return
        	}
        	var paramsObj = {
                area:val.place,
                name:val.turist,
            }
            this.getResponse(paramsObj)
        }
    },
    
    data () {
        return {
        	barNum:0,
            reTimer:null,
            idName:"a5ss",
            scenics:"",
            option : {
                backgroundColor: 'rgba(0,0,0,0)',
                color: ['#00ffff', '#00ffa2', '#f0e750'],
                grid: {
                    show: true,
                    left: this.scenics ===""?'10%':'18%',
                    top: '27%',
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
                        minInterval: 1,
                 		splitNumber:5,
                        axisLabel: {
                            textStyle: {
                                color: '#ffffff',//x坐标轴标签字体颜色
                                fontSize: 16,
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
                            smooth: true, //是否平滑曲线显示
                            lineStyle:{
                                    normal:{
                                        color:'#ff359e',
                                        width:6,
                                        shadowColor: '#060f2f',
                                        shadowBlur: 4,
                                        shadowOffsetY:16,
                                        //opacity:0.66
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
                                    borderWidth:6,
                                    opacity:0,
                                }
                            },
                            label:{
                                    normal:{
                                        show:true,
                                        color:'#ffffff',
                                        fontSize:16,
                                        color:'#6e8bf9',
                                        formatter:function(params){
                                            return params.value
                                        },
                                    },
                                    emphasis:{
                                        show:true,
                                        color:'#ffffff',
                                        fontSize:16,
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
                     powAverage = val/2000 ;
                     average = val/1440 ;
                }else if(val>0 && val<=1400){
                     powAverage = 2 ;
                     average = 1 ;
                }else{
                	powAverage = 0 ;
                }
				function updateRandom() {
					  var p = Math.random(), n = Math.random() / 20;
					  if( p < 0.9 )
					    return 0.9 + n;
					  if( p < 1 )
					    return 0.95 + n;
					}
                for(let xi = 9; xi >1;xi--){
                    date.push(this.addZero(new Date(new Date().getTime()+10*1000 - xi*5 * 1000)));
                    data.push((val*updateRandom()).toFixed(0))
                }
                
                function randomData() {
                	var nowDate = new Date();
                	var now = +new Date(nowDate.getTime());
                    let nows = new Date(+now);
                    if(Math.random()>0.4 && powAverage>10){
                        value =(1- (Math.random()-1)/2)*average;
                    }else if(powAverage>0 && powAverage<=10){
                        var value = Math.pow(Math.random()*powAverage,2);
                        
                    }else{
                    	var value = 0
                    }
                    return {
                            xData: _self.addZero(nows),
                            sData: (val*updateRandom()).toFixed(0)
                    }
                }
                _self.option.xAxis.data=date;
                _self.option.series.data=data;
                 _self.chart.setOption({
                        xAxis: {
                            data: date
                        },
                    series: [{
                        data: data
                    }]})
                
                if (_self.reTimer) {
                    window.clearInterval(_self.reTimer)
                }
                _self.reTimer=setInterval(function () {
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
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/command/getCommandPassengerData',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    this.barNum = r.data.data.num;
                    this.redomData(this.barNum)
                }
            })
        }
    },
    created(){
            var paramsObj = {
                area:"全部",
                name:"全部",
            }
          this.getResponse(paramsObj);
        
    },
    beforeDestroy(){
    	
    	window.clearInterval(this.reTimer)
    },
    mounted() {
    	this.$nextTick( () => {
    		echarts_resize(this.idName,this);
    	})
        
    },
}
</script>

