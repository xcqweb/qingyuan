<!--维度正负面分析-->
<style lang="less" scoped>
  .d10{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #latitudeAnalyse{
    width: 100%;
    height: 100%;
    position:absolute;
    left: 10px;
    right: 0;
    top: 0px;
    bottom: 0;
    margin: auto;
  }
</style>
<template>
  <div class="d10">
    <div id="latitudeAnalyse"></div>
    
     <div style="display: none;">
	  	<img src="../../../assets/images/rad/rad1.png"/>
	  	<img src="../../../assets/images/rad/rad2.png"/>
	  </div>
  </div>
</template>


<script>
  import echarts_resize from '@/common/js/echarts_resize.js'
  import echarts from 'echarts'
  import optionProps from '@/common/js/mixin/optionProps.js'
  import _ from 'lodash'
	let img1 = 'image://static/img/rad1.png'
	let img2 = 'image://static/img/rad2.png'
    export default {
        name:'d10',
        mixins:[optionProps],
        data () {
            return {
            	beginStr:'',
              endStr:'',
            	hotel:'全部',
            	type:2,
              option :{
                color:['#ffe86e','#caff36'],
                textStyle:{
                  color: '#fff',
                  fontSize:12
                },
                tooltip: {
                	trigger:'item',
                	backgroundColor:'rgba(100,100,100,0.8)',
                	extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.9)'
                },
                legend: {
                	left:320,
                  label:{
                    show:true,
                  },
                  data: [

                    {name:'纬度正面',
                      textStyle:{
                        color:'#caff36',
                        fontWeight: 'bold',
                        fontSize:16
                      },
                      icon:img1,

                    },
                    {name:'纬度负面',
                      textStyle:{
	                        color:'#ffe86e',
	                        fontWeight: 'bold',
	                        fontSize:16
                      },
                      icon:img2
                    }
                  ],
                  top: '10%'
                },
                radar: {
                	center:['50%','55%'],
                	radius:'50%',
                	name: {
					            textStyle: {
					                color: '#fff',
					                fontSize:16
					           }
					        },
                  indicator: [
                    { name: '景区管理', max: 5.0,min:3},
                    { name: '清洁卫生', max: 5.0,min:3},
                    { name: '客流状况', max: 5.0,min:3},
                    { name: '服务设施', max: 5.0,min:3},
                    { name: '服务水平', max: 5.0,min:3},
                    { name: '旅游交通', max: 5.0,min:3},
                  ],
                },
                series: [{
                  name: '维度正负面分析',
                  type: 'radar',
                  z:100,
                  areaStyle: {
                  	normal: {
                  		opacity:0.6,
                  	}
                  },
                  data : [
                    {
                      value : [],
                      name : '纬度负面',
                      zlevel:123,
                      areaStyle: {
                      	normal: {
                      		opacity:0.8,
                      	}
                      },
                      lineStyle:{
                        normal:{
                          color:['#BAE710']
                        }
                      }
                    },
                    {
                      value : [],
                      name : '纬度正面',
                      zlevel:1,
                      areaStyle: {
                      	normal: {
                      		opacity:0.3,
                      	}
                      },
                      lineStyle:{
                        normal:{
                          color:['#caff36']
                        }
                      }
                    }
                  ],
                  animation:true
                }]
              }
            }
        },
        watch:{
        	updatePlace:function(val){
        		this.hotel=''
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
			                name:this.hotel||this.updatePlace.turist,
			                type:["day","month","year"][val.type],
			            }
	             	}else{
	             			  this.endStr = val.end.join("-");
	                    this.beginStr = val.begin.join("-");
			                paramsObj = {
		                    area:this.updatePlace.place,
		                    name:this.hotel||this.updatePlace.turist,
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
        methods:{
            redom(id){
            	if(this.chrat){
            		this.chart.dispose()
            	}
              this.chart = echarts.init(document.getElementById(id));
              this.chart.setOption(this.option);
            },
            //请求数据
				  	getResponse:_.debounce(function(paramsObj){
				            this.$axios.get(API_URL+'/qy/api/v2/command/getCommentEachDimension',{params:paramsObj}).then(r => {
				            	//console.log(r.data.data)
				                  if(!r){
				                  	this.option.series[0].data[0].value=[]
				                  	this.option.series[0].data[1].value=[]
				                  	return
				                  }
				                if(r.data.code ==="200"||r.data.code ===200){
				                	let good = r.data.data.good;
				                	let bad = r.data.data.bad;
				                	good.forEach( (v,i) => {
				                		if(i<6){
				                			this.option.radar.indicator.name = v.name
				                		  this.option.series[0].data[1].value[i] = v.value
				                		}
				                	})
				                	
				                	bad.forEach( (v,i) => {
				                		if(i<6){
				                			this.option.radar.indicator.name = v.name
				                		  this.option.series[0].data[0].value[i] = v.value
				                		}
				                	})
				                    	this.redom("latitudeAnalyse");
				                }
				            })
				       },300),
            
        },
        created(){
        	var paramsObj = {
                area:"全部",
                name:"全部",
                type:"year",
                category:this.slectType+1,
            }
       		this.getResponse(paramsObj);
        },
        mounted() {
        	this.$nextTick( () => {
        		this.redom("latitudeAnalyse");
        		echarts_resize("latitudeAnalyse",this);
        	})
         
        }
    }
</script>
