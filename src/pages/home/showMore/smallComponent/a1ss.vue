<style lang="less" type="text/less" scoped>
.scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
    }
.main_content {
  width: 100%;
  height: 100%;
  position: relative;
}
.load{
  width: 100%;
  height: 100%;
  position: absolute;
  
}
.loading{
    margin-top: 30%;
    height: 50px;
    color: #05a1cd;
     font-size: 30px;
  }
  .reload{
  width: 100%;
  height: 100%;
  position: absolute;
  
}
.reloading{
    margin-top: 30%;
    height: 150px;
    width: 200px;
    margin-left: 37%;
    font-size: 30px;
  }
.itembox{
  width: 100%;
  height: 100%;
  div{
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="main_content" id="A1loding">
    <div :id="idName" class="itembox"></div>
  </div>
</template>
<script>
import echarts_resize from '@/common/js/echarts_resize.js'
 import echarts from 'echarts';
import optionProps from '@/common/js/mixin/optionProps.js'
import RW from '@/common/js/until/index.js'
export default {
    name:'a1ss',
    mixins: [optionProps],
    props:{
    },
    watch:{
        updatePlace:function(val){
        	let paramsObj = {}
            if(this.beginStr||this.endStr){
    			paramsObj = {
                area:val.place,
                name:val.turist,
                beginTime:this.beginStr,
	            endTime:this.endStr
            }
    		}else{
    			paramsObj = {
                area:val.place,
                name:val.turist,
                type:["day","month","year"][this.type],
            }
    		}
            this.getResponse(paramsObj);
        },
          update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type=val.type
             		this.endStr = '';
	                this.beginStr = '';
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            }
             	}else{
             		 this.endStr = val.end.join("-");
	                 this.beginStr = val.begin.join("-");
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:this.beginStr,
	                    endTime:this.endStr
					}
             	}
                 
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data() {
      return {
      	idName:'a1ss',
      	type:0,
      	isDate:false,
      	barData:[],
        scenics:'',
        chart: null,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        beginStr:'',
        endStr:'',
        option:{
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '8%',
                         top: '30%',
                         right: '10%',
                         bottom: '10%',
                         borderWidth: 0,
                         backgroundColor: 'rgba(0,0,0,0)',
                     },
                    xAxis: [
                        {
                        axisLabel :{  
                            interval:0   
                        }  ,
                        show:true,
                        barGap: 0,
                      //  boundaryGap: false,
                        
                        padding:0,
                        barMaxWidth:4,
                        type: 'category',
                        // data: datax,
                        fontSize: 6,
                        scale: true,
                        lineStyle:2,
                        splitNumber:14,
                        minInterval:7,
                        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
                             show: true,
                                lineStyle: {
                                    color: 'rgba(170,172,178,0.53)'
                             },
                        },
                         axisLabel: {
                             textStyle: {
                                 color: '#ffffff',//x坐标轴标签字体颜色
                                 fontSize: 16,
                             },
                        },
                        axisTick:{
                                show:false,
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:'#20549f',
                                width:1,
                                type:'solid'
                            },
                        }

                        }
                    ],
                    yAxis:{
                    	name:"单位 : (人次)",
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff',
                          fontSize:16,
                          padding:[0,0,15,50],
                        },
                        splitLine:{
                          show:false,
                        },
                        axisLabel:{
                            showMinLabel:true,
                          textStyle:{
                            color:'rgba(0,0,0,0)',
                            fontSize: 12,
                          }
                        },
                        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
                            show: false,
                            lineStyle: {
                                color: 'rgba(170,172,178,0.53)'
                            },
                        },
                        axisTick:{
                            show:false,
                        }
                    },
//                   dataZoom: [
//			            {
//			                show: false,
//			                start: 0,
//			                end: 100
//			            },
//			            {
//			                type: 'inside',
//			                start: 0,
//			                end: 100
//			            },
//			            {
//			                show: false,
//			                yAxisIndex: 0,
//			                filterMode: 'empty',
//			                width: 30,
//			                height: '80%',
//			                showDataShadow: false,
//			                left: '93%'
//			            }
//			        ],
                    series : [
                    {
                        name:'计划',
                        type:'bar',
                        barMaxWidth:24,
                        // data:datay,
                        itemStyle:{
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                    {offset: 0, color: '#16d5f8'},
                                    {offset: 0.6,color:'#4099e4'},
                                    {offset: 1, color: '#4279ff'}
                                    ]
                                ),
                                barBorderRadius: 50,
                            }
                        },
                        label:{
                        normal:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#2CC9E2',
                                fontSize:14
                            }
                        }
                       },
                    }
                
                ]
            }//option
      }
    },
    computed:{

      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    created(){
    	var paramsObj = {
                area:this.updatePlace.place,
	            name:this.updatePlace.turist,
	            type:["day","month","year"][this.type]
            }
       this.getResponse(paramsObj);
    },
    methods: {
    	
    	getResponse(paramsObj){
			this.$axios.get(API_URL+'/qy/api/v2/view/getDayCountData',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                	//console.log(r)
                    this.barData = r.data.data[0].value; 
                    this.redom7()
                }
            })
       },
    	
    	
    redom7(){
        if(this.chart){
            this.chart.dispose();
        }
      let dataY=[];
      let dataX=[];
      for (var i = 0; i < this.barData.length; i++) {
          dataY.push(this.barData[i].num||this.barData[i].sum);
          dataX.push(this.barData[i].dayId);
          
      }
      		let pattern = /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/
      		if(pattern.test(dataX[0])){
      			dataX = RW.array_until.transformDate(dataX)
      		}
      	
      this.$nextTick(echarts_resize(this.idName,this,dataX,dataY))
    },
 
      redom (id,xyfonsiz,datax,datay) {
        var _self= this;
        _self.loading=false;
        this.chart = echarts.init(document.getElementById(id))
         _self.option.xAxis[0].data=datax;
        _self.option.series[0].data=datay;
    
        this.chart.setOption(_self.option)
      }
    },
    mounted() {
                //   this.isActive=true;
                let dataY=[];
                let dataX=[];
                for (var i = 0; i < this.barData.length; i++) {
                    dataY.push(this.barData[i].num);
                    dataX.push(this.barData[i].dayId.replace(/-/g,"/"))
                }
                this.$nextTick(echarts_resize(this.idName,this,dataX,dataY))
    }
  }
</script>
