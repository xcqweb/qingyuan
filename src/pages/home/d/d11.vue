<style lang="less" scoped>
.d11{
    height:100%;
    width:100%;
    color: white;
}
#chartId{
    width:100%;
    height:90%;
    margin-top: 5%;
}
</style>
<template>
    <div class="d11">
        <div id="chartId"></div>
    </div>
</template>

<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
import optionProps from '@/common/js/mixin/optionProps.js'
import echarts from 'echarts'
import Bus from '@/common/js/bus'
import _ from 'lodash'
require('echarts-wordcloud');
  export default {
    name:'d11',
    mixins:[optionProps],
   watch:{
        updatePlace:{
        handler: function (val, oldVal) {
        	this.hotel = ''
        		var paramsObj = {}
        		if(this.endStr||this.beginStr){
	        			paramsObj = {
			                area:val.place,
			                name:val.turist,
			                beginTime:this.beginStr,
			                endTime:this.endStr,
			                category:this.slectType+1,
			            }
	        		}else{
	        				paramsObj = {
				                area:val.place,
				                name:val.turist,
				                type:["day","month","year"][this.type],
				                category:this.slectType+1,
				            }
        		}
        	this.yunData=[]
     		this.getResponse(paramsObj);
        },
        deep:true,
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
	                name:this.hotel||this.updatePlace.turist,
	                category:this.slectType+1,
	                type:["day","month","year"][val.type],
	            }
         	}else{
         		this.endStr = val.end.join("-");
	            this.beginStr = val.begin.join("-");
                paramsObj = {
                    area:this.updatePlace.place,
                    name:this.hotel||this.updatePlace.turist,
                    category:this.slectType+1,
                    beginTime:this.beginStr,
                    endTime:this.endStr
				}
         	}
             
             this.getResponse(paramsObj);
         },
         deep:true,
        },
	        
        hotelChose:function(val){
        	this.hotel = val
        	var paramsObj = {}
        		if(this.endStr||this.beginStr){
	        			paramsObj = {
			                area:this.updatePlace.place,
			                name:val,
			                beginTime:this.beginStr,
			                endTime:this.endStr,
			                category:this.slectType+1,
			            }
	        		}else{
	        				paramsObj = {
				                area:this.updatePlace.place,
				                name:val,
				                type:["day","month","year"][this.type],
				                category:this.slectType+1,
				            }
        		}
    		this.yunData=[]
            this.getResponse(paramsObj);
        },
        slectType:function(val){
        	if(val===1){this.hotel='全部'}
        	var paramsObj = {}
        		if(this.endStr||this.beginStr){
	        			paramsObj = {
			                area:this.updatePlace.place,
			                name:val===0?this.updatePlace.turist:this.hotel,
			                beginTime:this.beginStr,
			                endTime:this.endStr,
			                category:val+1,
			            }
	        		}else{
	        				paramsObj = {
				                area:this.updatePlace.place,
				                name:val===0?this.updatePlace.turist:this.hotel,
				                category:val+1,
				                type:["day","month","year"][this.type],
			            	}
        		}
        		this.yunData=[]
                this.getResponse(paramsObj);
        }
    },
    data() {
        return {
        	beginStr:'',
            endStr:'',
        	hotel:'全部',
        	type:2,
            chart:null,
            yunData:[],
            option : {
                tooltip: {
                	show:true,
                	formatter:function(params){
                		return "关键词 :"+"<br />"+params.name
                	}
                },
                series: [{
                    name: '旅游关键词',
                    type: 'wordCloud',
                    gridSize: 20,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
                    shape: 'circle',
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 212+43),
                                    Math.round(Math.random() * 191+64),
                                    Math.round(Math.random() * 67+188)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [ ]
                }]
            }
        }
    },
    methods:{
        redom(id){
        	if(this.chart){
        		this.chart.dispose()
        	}
            this.chart = echarts.init(document.getElementById(id));
            var JosnList = [];
            JosnList.push(...this.yunData);
            
            this.option.series[0].data = JosnList;
            this.chart.setOption(this.option);
             this.chart.on('click', function (params) {
				Bus.$emit('keyWords',params.name)
            });
        },
        getResponse:_.debounce(function(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/command/getKeWords',{params:paramsObj}).then(r => {
				//console.log(r)
                if(r.data.code ==='200'||r.data.code ===200){
                    this.yunData = r.data.data;
                    this.$nextTick(echarts_resize('chartId',this))
                }
                
            })
        },300)
    },
    created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
                category:this.slectType+1,
                type:'year'
                //limit:5 //关键字个数
            }
       this.getResponse(paramsObj);
    },
    beforeDestroy(){
    	Bus.$off('keyWords')
    },
  }
</script>

