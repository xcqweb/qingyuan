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
.week{
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size:0.8rem;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
      float: left;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../../assets/images/home/透明框—14日.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
      .chose{
          background-image:url('../../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
      }
</style>
<template>
  <div class="main_content" id="A1loding">
    <div :id="idName" class="itembox"></div>
    <!-- <div class="week">
        <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</span>
        <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</span>
    </div> -->
     <!--<div class="scenic">{{scenics}}</div>-->
  </div>
</template>
<script>
import echarts_resize from '@/common/js/echarts_resize.js'
 import echarts from 'echarts';
import { mapGetters } from 'vuex'
import store from '@/vuex/index' 
import { mapActions } from 'vuex'
import timeMixin from '@/common/js/mixin/timeMixin.js'
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import RW from '@/common/js/until/index.js'
export default {
    name:'a1ss',
    mixins: [optionProps],
    props:{
    },
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        upday:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        update:{
             handler:function(val, oldVal){
                 let end = val.end.join("-")
                 let begin = val.begin.join("-")
                 var paramsObj = {
                    area:this.updatePlace.place,
                    beginTime:begin,
                    endTime:end
                }
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data() {
      return {
      	idName:'a1ss',
      	barData:[
            {"num":"1293","dayId":"6/14"},
            {"num":"2331","dayId":"6/15"},
            {"num":"1012","dayId":"6/16"},
            {"num":"999","dayId":"6/17"},
            {"num":"2458","dayId":"6/18"},
            {"num":"2122","dayId":"6/19"},
            {"num":"1789","dayId":"6/20"}
        ],
        scenics:'',
        chart: null,
        xnub:null,
        ynub:null,
        loading:true,
        reloading:false,
        
        oneweekMock:[
            {"nub":"1293","date":"6/14"},
            {"nub":"2331","date":"6/15"},
            {"nub":"1012","date":"6/16"},
            {"nub":"999","date":"6/17"},
            {"nub":"2458","date":"6/18"},
            {"nub":"2122","date":"6/19"},
            {"nub":"1789","date":"6/20"}
        ],
        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
        opinionData1: [

        ],
        opinionData2: this.$store.state.data,
        opinionData: [
            {value:26, name:'学习氛围差'},
            {value:31, name:'学习氛围一般'},
            {value:8, name:'学习氛围很好'}
          ],
        option:{
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: ['#1F6ABB','#3897C5','#A4C5E6'],
                    grid: {
                         show: true,
                         left: '15%',
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
                        barMaxWidth:6,
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
                                 fontSize: 18,
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
                    	name:"单位 : (人)",
                        show:true,
                        nameTextStyle:{
                          color:'#ffffff',
                          fontSize:16
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
                    series : [
                    {
                        name:'计划',
                        type:'bar',
                        barMaxWidth:30,
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
                                fontSize:20
                            }
                        }
                       },
                    }
                
                ]
            }//option
      }
    },
    store:store,
    computed:{

      isCase:{
        get: function(){
          return window.location.hash.length > 3 ? true :false;
        } 
      },
    },
    created(){
    	var paramsObj = {
                area:"全部",
                type:"day",
                city:1
            }
       this.getResponse(paramsObj);
    },
    methods: {
    	
    	getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getDayCountDetailData',{params:paramsObj}).then(r => {

                if(r.data.code ==="200"||r.data.code ===200){
                	
                    this.rankItems = r.data.data; 
                    this.barData = r.data.data[0].value; 
                    this.twoWeekMock = r.data.data[0].value;
                    
                    //console.log(this.barData)
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
      	dataX =this.upday===0?RW.array_until.transformDate(dataX):dataX
      this.$nextTick(echarts_resize(this.idName,this,dataX,dataY))
    },
    redom14(){
        if(this.chart){
            this.chart.dispose();
        }
        let dataY=[];
        let dataX=[];
        for (var i = 0; i < this.twoWeekMock.length; i++) {
            dataY.push(this.twoWeekMock[i].num);
            dataX.push(this.twoWeekMock[i].dayId)
        }
    // this.isActive=false;
    this.$nextTick(echarts_resize(this.idName,this, this.upday===1?RW.array_until.transformDate(dataX):dataX,dataY))
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
    components:{},
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
