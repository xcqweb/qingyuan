<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    margin-top: 40px;
    .c985{
        width:100%;
        height:100%;
    }
    .scenic{
        text-align: center;
        color: #fff;
    }
}
</style>
<template>
    <div class="content">
        <div :id="idName" class="c985"></div>
        <div class="scenic">{{scenic}}</div>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'nianlingpie',
    mixins: [optionProps],
   	watch:{
        updatePlace:function(val){
            let paramsObj = {}
    		if(this.endStr||this.beginStr){
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
             		this.type=val.type;
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
    data(){
    return{
    	beginStr:'',
        endStr:'',
    	idName:'nianlingpie',
    	scenic:'',
    	type:0,
    	isActive:true,
        option:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color:['#FF8885','#57FE90', '#0096ff', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
          tooltip:{
          	show:true,
          	trigger:'item',
          	formatter:function(params){
          		let text = params.data.name+"<br>"+params.percent.toFixed(0)+"%";
          		return text
          	}
          },
          legend:{
                show:true,
                orient: 'vertical',
                top:'20%' ,
                right:'6%',
                width:'20%',
                height:'45%',
                itemGap:10,
                itemWidth:12,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:18
                },
                data:[{
                    icon:'circle',
                    name:'0-19',
                    textStyle:{color:'#FF8885'}
                }, {
                    icon:'circle',
                    name:'20-29',
                    textStyle:{color:'#57FE90'}
                }, {
                    icon:'circle',
                    name:'30-39',
                    textStyle:{color:'#0096ff'}
                }, {
                    icon:'circle',
                    name:'40-49',
                    textStyle:{color:'#7E6AF6'}
                }, {
                    icon:'circle',
                    name:'50-59',
                    textStyle:{color:'#E39A50'}
                }, {
                    icon:'circle',
                    name:'60岁以上',
                    textStyle:{color:'#FFCD38'}
                }],
            },
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '60%',
                selectedMode: "single",
                center: ['28%', '42%'],
                startAngle:180,
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                // animation:false,
                animationType:'expansion',
                label:{
                    normal:{
                            show: true,
                            position: 'inner',
                            fontSize: 16,
                            formatter: function(params){
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent).toFixed(0)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: true
                        }
                },
                data:[
	            {"value":100, "name":"0-19"},
	            {"value":0, "name":"20-29"},
	            {"value":0, "name":"30-39"},
	            {"value":0, "name":"40-49"},
	            {"value":0, "name":"50-59"},
	            {"value":0, "name":"60岁以上"}
      	  ],
      }],
    }
    }
    },
    methods:{
    	//获取数据
    	getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/view/getDayAgeData',{params:paramsObj}).then(r => {
            	if(!r){
            		this.pieData={"0-19":0,"20-29":100,"30-39":0, "40-49":0,"50-59":0,"60岁以上":0}
            		this.option.series[0].label.normal.show = false
            		this.option.series[0].label.emphasis.show = false
            		this.option.tooltip.show = false
            		this.option.legend.show = false
            		this.redom(this.idName)
            		return
            	}
                if(r.data.code ==="200"||r.data.code ===200){
                	
                	this.option.series[0].label.normal.show = true
            		this.option.series[0].label.emphasis.show = true
            		this.option.tooltip.show = true
            		this.option.legend.show = true
                    this.pieData = r.data.data[0]; 
                    this.redom(this.idName)
                }
            })
       },
    	
        redom(id){
        	if(this.chart){
        		this.chart.dispose()
        	}
            this.chart = echarts.init(document.getElementById(id));
            this.option.series[0].data.forEach((item,index)=>{
                        item.value =Math.abs(this.pieData[item.name].toFixed(1));
                    })
            this.$nextTick(()=>{
                this.chart.setOption(this.option);
            })
            

        }
    },
     created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
                type:"day",
            }
       this.getResponse(paramsObj);
    },
    mounted() {
          //this.$nextTick(echarts_resize(this.idName,this))
    }
}
</script>


