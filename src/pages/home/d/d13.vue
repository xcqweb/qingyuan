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
	export default {
		mixins:[optionProps],
		data(){
			return {
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
                                }
                            },
                            itemStyle:{
                            }
				        }
				    ]
				}
			}
		},
	    watch:{
	    	updatePlace:function(val){
	    		this.option.series[0].data=[];
	    		
		        	var paramsObj = {
		                area:val.place,
		                name:val.turist,
		                category:this.slectType+1
		            }
		            this.getResponse(paramsObj);
	    	},
	    	
	    	hotelChose:function(val){
	    		var paramsObj = {
					area:this.updatePlace.place,
	                name:val,
	                category:this.slectType+1
	               }
				this.getResponse(paramsObj);
	    	},
	    		
	    	//酒店景区选择
			slectType:function(val){
				var paramsObj = {
					area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                category:val+1
	               }
				this.getResponse(paramsObj);
			},
	    },
		 methods:{
            redom(id){
            	if(this.chart){
	        		this.chart.dispose()
	        	}
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(this.option);
                this.chart.on('click', function (params) {
					Bus.$emit('isRise',params.name)
            });
                
            },
            getResponse(paramsObj){
            let _self = this;
              this.$axios.get(API_URL+'/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
            	let reData = r.data.data
            	//console.log(reData);
            	if(reData.length>5){
            		var arr=[]
            		var sum=0
            		reData.forEach( (item,index) => {
            			if(index<=3){
            				arr.push({percent:item.percent,name:item.name})
            			}else{
            				sum+=item.percent
            			}
            		})
            		arr[4]={percent:sum,name:'其他'}
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
                    _self.option.series[0].data[0].selected=true;
                    _self.redom('d13')
                    
                }
            })
        }
        },
        created(){
        	var paramsObj = {
                area:"全部",
                name:"全部"
            }
        	this.getResponse(paramsObj);
   		 },
        mounted(){
        }
	}
</script>

