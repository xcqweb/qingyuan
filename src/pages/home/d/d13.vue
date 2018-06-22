<style scoped="scoped">
	 .content{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #d13{
    width: 100%;
    height: 100%;
    position:absolute;
    /* left: 1.2rem; */
    right: 0;
    top: 6%;
    bottom: 0;
    margin: auto;
  }
</style>
<template>
	<div class="content">
		<div id="d13">
		</div>
	</div>
</template>

<script>
	import echarts_resize from '@/common/js/echarts_resize.js'
	import echarts from 'echarts'
	import optionProps from '@/common/js/mixin/optionProps.js'
	import Bus from '@/common/js/bus'
	import _ from 'lodash'
	export default {
		mixins:[optionProps],
		data(){
			return {
				hotel:'全部',
				type:2,
				endStr:'',
			    beginStr:'',
				option:{
					color:['#427EFF','#7F6AF7','#BB68F4','#FF8882','#F7C935','#FFFD37','#B1F223','#76CD66','#B7E986','#86EACD'],
					tooltip:{
						show:true,
						trigger:'item',
						formatter:function(params){
							return params.name+' : '+params.percent+'%'
						}
					},
					series : [
				        {
				            name: '签到比例分析',
				            type: 'pie',
				            selectedMode: "single",
				            radius : '48%',
				            center: ['54%', '55%'],
				            data:[],
                            labelLine :{
                                normal:{
                                    show:true,
                                    length:15,
                                    length2:10,
                                }
                                
                            },
                            label:{
                            	show:true,
                                normal:{
                                	color:'#fff',
                                	fontSize:15,
                                    formatter:function(params){
                                    	return (params.name).substr(0,12)+"\n"+(params.name).substr(12)+""+params.percent+"%"
                                    }
                                },
                                 emphasis:{
	                                show:true,
	                                position:'outside',
	                            }
                            },
                            itemStyle:{}
				        }
				    ]
				}
			}
		},
	    watch:{
	    	updatePlace:function(val){
	    		this.option.series[0].data=[];
	    		this.hotel=''
		        	var paramsObj = {
		                area:val.place,
		                name:val.turist,
		                category:this.slectType+1,
		                type:["day","month","year"][this.type],
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
	    		var paramsObj = {
					area:this.updatePlace.place,
	                name:val,
	                category:this.slectType+1,
	                type:["day","month","year"][this.type],
	               }
				this.getResponse(paramsObj);
	    	},
	    	//酒店景区选择
			slectType:function(val){
				if(val===1){this.hotel='全部'}
				var paramsObj = {
					area:this.updatePlace.place,
	                name:val===0?this.updatePlace.turist:this.hotel,
	                category:val+1,
	                type:["day","month","year"][this.type],
	               }
				this.getResponse(paramsObj);
			},
	    },
		 methods:{
            redom(id){
            	let _self = this;
            	if(this.chart){
	        		this.chart.dispose()
	        	}
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(this.option);
                this.chart.on('click', function (params) {
                	Bus.$emit('isRise',params.name)
            	});
            },
            getResponse:_.debounce(function(paramsObj){
            let _self = this;
              this.$axios.get(API_URL+'/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
            	let reData = r.data.data
            	if(reData.length>6){
            		var arr=[]
            		var sum=0
            		reData.forEach( (item,index) => {
            			if(index<=4){
            				arr.push({percent:item.percent,name:item.name})
            			}else{
            				sum+=item.percent
            			}
            		})
            		arr[5]={percent:sum,name:'其他'}
            		reData = arr
            	}
            	
            	
            	_self.option.series[0].data = []
                if(r.status ===200){
                	for(let i=0; i<reData.length; ++i){
                		_self.option.series[0].data.push({
                			value: reData[i].percent,
                			name: reData[i].name
                		})
                	}
                    _self.redom('d13')
                    
                }
            })
        },300)
        },
        created(){
        	var paramsObj = {
                area:"全部",
                name:"全部",
                type:'year'
            }
        	this.getResponse(paramsObj);
   		 },
        beforeDestroy(){
	    	Bus.$off('isRise')
	    },
	}
</script>

