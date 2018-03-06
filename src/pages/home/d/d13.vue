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
     transform: scale(1.6); 
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
	export default {
		mixins:[optionProps],
		data(){
			return {
				option:{
					color:['#427EFF','#7F6AF7','#BB68F4','#FF8882','#F7C935','#FFFD37','#B1F223','#76CD66','#B7E986','#86EACD'],
					series : [
				        {
				            name: '签到比例分析',
				            type: 'pie',
				            radius : '35%',
				            center: ['50%', '55%'],
				            data:[],
                            labelLine :{
                                normal:{
                                    show:true,
                                    length:0,
                                    length2:10,
                                }
                                
                            },
                            label:{
                                normal:{
                                    formatter:'{b}\n{d}%'
                                }
                            }
				        }
				    ]
				}
			}
		},
	    watch:{
	        updatePlace:{
	        handler: function (val, oldVal) {
	        	this.option.series[0].data=[];
	            this.getResponse();
	        },
	        deep:true,
	        },
	    },
		 methods:{
            redom(id){
            	
                this.chart = echarts.init(document.getElementById(id));
                this.chart.setOption(this.option);
                
            },
            getResponse(){
            let _self = this;
            var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist
            }
//            this.$axios.get(API_URL+'/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
	
            //this.$axios.get('http://120.55.190.57:8081/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
            this.$axios.get('https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/xcq',{params:paramsObj}).then(r => {
            	//console.log(r);
            	let reData = r.data.data
            	_self.option.series[0].data = []
                if(r.status ===200){
                	for(let i=0; i<reData.length; ++i){
                		
                		_self.option.series[0].data.push({
                			value: reData[i].percent,
                			name: reData[i].name
                		})
                	}
                    _self.option.series[0].data[0].selected=true;
//                  _self.option.series[0].data[0].label={
//                  normal:{
//                          show: true,
//                          position: 'inner',
//                          textStyle:{
//                          	fontSize:"100%",
//                          	fontWeight:'bold',
//                          	color:'#eee',
//                          	fontFamily:'Courier New'
//                          },
//                          formatter: function(params){
//                              return Math.round(params.percent) === 0 ? '' : Math.round(params.percent)+"%"  ;
//                          },
//                      }
//                      
//                  };
                    
                    _self.redom('d13')
                    
                }
            })
        }
        },
        created(){
        	this.getResponse();
   		 },
        mounted(){
        	this.$nextTick( ()=> {
        		this.redom("d13")
        	})
        }
	}
</script>

