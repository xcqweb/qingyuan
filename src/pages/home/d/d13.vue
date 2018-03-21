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
     transform: scale(1); 
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
				            radius : '60%',
				            center: ['58%', '55%'],
				            data:[],
                            labelLine :{
                                normal:{
                                    show:true,
                                    length:0,
                                    length2:10,
                                }
                                
                            },
                            label:{
                            	show:true,
                                normal:{
                                	color:'#fff',
                                    formatter:'{b}\n{c}%'
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
		                name:val.turist
		            }
		            this.getResponse(paramsObj);
	    	}
//	        updatePlace:{
//		        handler: function (val, oldVal) {
//		        	this.option.series[0].data=[];
//		        	var paramsObj = {
//		                area:val.place,
//		                name:val.turist
//		            }
//		            this.getResponse();
//		        },
//		        deep:true,
//	        },
	    },
		 methods:{
            redom(id){
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(this.option);
                this.chart.on('click', function (params) {
					Bus.$emit('isRise',params.name)
            });
                
            },
            getResponse(paramsObj){
            let _self = this;
              this.$axios.get('http://120.55.190.57/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
            	let reData = r.data.data
            	//console.log(reData);
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

