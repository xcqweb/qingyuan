<template>
    <div class="b2">
    	<div class="passagerBtn">客流预警</div>
        <div :id="idName" class="pieB2"></div>
        <span v-bind:class="fontColor">{{dataItem.percent}}%</span>
        <div class="text"><font>{{dataItem.currentNum}}人</font></div>
        <div class="scenic">{{dataItem.name}}</div>
    </div>
</template>

<script>
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
    	active:1,
    	option:{
     		color:['#ff0600','#fff'],
		    tooltip : {
		        show: false,
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    series : [
		        {
		            name:'Line 1',
		            type:'pie',
		            startAngle:450,
		            clockWise:true,
		            radius : [180,220],
		            itemStyle : {
		            	normal: {
						        label: {show:false},
						        labelLine: {show:false},
						        shadowBlur: 40,
						        shadowColor: 'rgba(40, 40, 40, 0.5)',
						    }
		            },
		            hoverAnimation: false,
		       
		            data:[
		                {
		                    //value:this.dataItem.currentNum,
		                    value:0,
		                    name:'01',
		                },
		                {
		                    //value:this.dataItem.warnNum,
		                    value:100,
		                    name:'invisible',
		                    itemStyle : {
							    normal : {
							        color: 'rgba(0,0,0,0.20)',
							        label: {show:false},
							        labelLine: {show:false}
							    },
							    emphasis : {
							        color: 'rgba(0,0,0,0)'
							    }
							}
		                }
		         
		            ]
		        }, 
		         {
		            name:'Line 2',
		            type:'pie',
		            startAngle:0,
		            clockwise:false,
		            radius : [160, 180],
		            itemStyle : {
		            	normal: {
						        label: {show:false},
						        labelLine: {show:false},
						        shadowBlur: 40,
						        shadowColor: 'rgba(40, 40, 40, 0.5)',
						    }
		            },
		            hoverAnimation: false,
		            data:[
		                {
		                    value:150, 
		                    name:'02'
		                },
		                {
		                    value:0,
		                    name:'invisible',
		                    itemStyle : {
							    normal : {
							        color: 'rgba(0,0,0,0.26)',
							        label: {show:false},
							        labelLine: {show:false}
							    },
							    emphasis : {
							        color: 'rgba(0,0,0,0)'
							    }
							}
		                }
		            ]
		        },
		    ]
		},
    	idName:'String',
    	dataItem:{
			"percent":0,
			"name":"笔架山度假区",
			"currentNum":0,
			"warnNum":8000
    	},
        
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
      fontColor(){
      	if(this.active===1){
      		return "color1"
      	}else if(this.active===2){
      		return "color2"
      	}else{
      		return "color3"
      	}
      },
      turistName(){
      		return this.updatePlace.turist
      }
  },
  methods:{
  	getResponse(paramsObj){
        let _self = this;
        this.$axios.get(API_URL+'/qy/api/v2/command/selectCommandScenicWarning',{params:paramsObj}).then(r => {
            if(r.data.data.length===0){
            	this.dataItem.name = this.updatePlace.turist
            	this.dataItem.percent = 0
            	this.dataItem.currentNum = 0
            	this.option.series[0].data[0].value = 0
            	this.redom(this.idName)
            	return
            }
            if(r.status ===200){
            	let reData = r.data.data
            	reData.sort(function(a,b){
            		return b.percent-a.percent
            	})
            	
            	this.dataItem = reData[0];
            	let p = this.dataItem.percent
            	//console.log(this.option.series[0].data[0].value)
            	if(this.dataItem.currentNum/this.dataItem.warnNum>=100){
            		this.dataItem.currentNum = this.dataItem.warnNum
            	}
            	this.option.series[0].data[0].value = this.dataItem.currentNum
            	this.option.series[0].data[1].value = this.dataItem.warnNum
            	if(p<=50){
            		this.option.color[0]='#80E36F'
            		this.active = 1
            	}else if(p>50 && p<70){
            		this.option.color[0]='#fda925'
            		this.active = 2
            	}else{
            		this.option.color[0]='#ff0600'
            		this.active = 3
            	}
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
			        color: 'rgba(0,0,0,0.26)',
			        label: {show:false},
			        labelLine: {show:false}
			    },
			    emphasis : {
			        color: 'rgba(0,0,0,0)'
			    }
			};
          this.chart.setOption(this.option);
      },
      
  },
  mounted() {
        this.$nextTick(echarts_resize(this.idName,this))
  },
}
</script>

<style lang="less" scoped>
.scenic{
        text-align: center;
        color: #fff;
        font-size: 24px;
        width:300px;
        height: 1.2rem;
        top:200px;
        left: 434px;
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
    	left: 236px;
    	z-index: 100;
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
            width: 300px;
            text-align: center;
            top: 269px;
            left: 434px;
            color:#ffe400;
            font-size:38px;
        }
    }
     .color1{
        	color: #80E36F !important;
        }
         .color2{
        	color: #fda925 !important;
        }
         .color3{
        	color: #ff0600 !important;
        }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>