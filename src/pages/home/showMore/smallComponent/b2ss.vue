<template>
    <div class="b2">
    	<div class="passagerBtn">客流预警</div>
        <div :id="idName" class="pieB2"></div>
        <span v-bind:class="{fontRed:fontRedData}">{{dataItem.percent}}%</span>
        <div class="text"><font>{{dataItem.warnNum}}人</font></div>
        <div class="scenic">{{turistName}}</div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
  name: 'b2',
   mixins: [optionProps],
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:val.place,
                name:val.turist,
            }
       		this.getResponse(paramsObj);
        }
    },
  data () {
  	
    return {
    	idName:'String',
    	dataItem:{
			"percent":1,
			"name":"笔架山度假区",
			"currentNum":69,
			"warnNum":8000
    	},
        imgacircle:require('../../../../assets/images/home/b/circle.png'),
        
    }
  },
  created(){
  	var paramsObj = {
            area:'全部',
            name:'全部'
        }
  	this.getResponse();
  },
  computed: { 
      warningText:function(){
          return this.dataItem.noTitle === false ? '客流预警'+this.dataItem.warningNub : '';
      },
      fontRedData:function(){
         return this.dataItem.percent<90 ? false : true;
      },
      turistName(){
      	if(this.updatePlace.place==='全部' && this.updatePlace.turist==='全部'){
      		return '全部'
      	}else{
      		return this.updatePlace.turist
      	}
      }
  },
  methods:{
  	getResponse(paramsObj){
        let _self = this;
        this.$axios.get(API_URL+'/qy/api/v2/command/selectCommandScenicWarning',{params:paramsObj}).then(r => {
            
            if(r.status ===200){
                //console.log(r.data.data)
            	this.dataItem = r.data.data[0];
            	this.redom(this.idName)
            }
        })
      },
      redom(id){
           if(this.chart){
                this.chart.dispose();
            }
          this.chart = echarts.init(document.getElementById(id));
          var dataStyle = { 
			    normal: {
			        label: {show:false},
			        labelLine: {show:false},
			        shadowBlur: 40,
			        shadowColor: 'rgba(40, 40, 40, 0.5)',
			    }
			};
			var placeHolderStyle = {
			    normal : {
			        color: 'rgba(0,0,0,0)',
			        label: {show:false},
			        labelLine: {show:false}
			    },
			    emphasis : {
			        color: 'rgba(0,0,0,0)'
			    }
			};
          let option={
			    color: ['#ff0600','#fff'],
			    tooltip : {
			        show: false,
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    series : [
			        {
			            name:'Line 1',
			            type:'pie',
			            clockWise:false,
			            radius : [180,220],
			            itemStyle : dataStyle,
			            hoverAnimation: false,
			       
			            data:[
			                {
			                    value:this.dataItem.currentNum,
			                    name:'01'
			                },
			                {
			                    value:this.dataItem.warnNum,
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			         
			            ]
			        }, 
			         {
			            name:'Line 2',
			            type:'pie',
			            clockWise:false,
			            radius : [160, 180],
			            itemStyle : dataStyle,
			            hoverAnimation: false,
			            data:[
			                {
			                    value:150, 
			                    name:'02'
			                },
			                {
			                    value:0,
			                    name:'invisible',
			                    itemStyle : placeHolderStyle
			                }
			            ]
			        },
			    ]
			};
          this.chart.setOption(option);
      }
  },
  mounted() {
        this.$nextTick(echarts_resize(this.idName,this))
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.scenic{
        text-align: center;
        color: #fff;
        font-size: 24px;
        width:216px;
        height: 1.2rem;
        top:200px;
        left: 454px;
        position: absolute;
    }
.b2{
    height:100%;
    width:100%;
    position:relative;
    .passagerBtn{
    	position: absolute;
    	border: 2px solid #ffe400;
    	color: #ffe400;
    	border-radius: 6px;
    	width: 102px;
    	height: 30px;
    	line-height: 30px;
    	top: 40px;
    	left: 152px;
    }
    span{
        position:absolute;
        top:58%;
        left:30%;
        color:#1da7fe;
        transform: translate(-50%,-50%);
        font-size:.8rem;
        color: #ffe400;
        font-size: 56px;
        &.fontRed{
                color:red;
            }
    }
    .pieB2{
        height:100%;
        width:100%;
        position:absolute;
        transform: scale(0.658);
	    left: -20%;
	    top: 8%;
    }
    .text{
        width:100%;
        position:absolute;
        left:0;
        top:0;
        text-align: right ;
        text-align: center;
        font{
            position: absolute;
            width: 152px;
            top: 269px;
            left: 486px;
            color:#ffe400;
            font-size:38px;
            
        }
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>