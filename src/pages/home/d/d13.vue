<template>
	<div class="content">
		<div id="d13">
		</div>
	</div>
</template>

<script>
	import echarts_resize from '@/common/js/echarts_resize.js'
	import echarts from 'echarts'
	
	import '@/common/js/d3/jquery.js'
	import '@/common/js/d3/3Dpie.js'
	export default {
		data(){
			return {
				option:{
					color:['#427EFF','#7F6AF7','#BB68F4','#FF8882','#F7C935','#FFFD37','#B1F223','#76CD66','#B7E986','#86EACD'],
					series : [
				        {
				            name: '签到比例分析',
				            type: 'pie',
				            radius : '55%',
				            center: ['40%', '50%'],
				            data:[],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            },
				            itemStyle: {
				                normal: {
				                    label:{ 
			                            show: true, 
				                            //position:'inside',
			                            formatter: '{b}' 
			                        }
				                },
			                    labelLine :{show:true}
				            }
				        }
				    ]
				}
			}
		},
		props:{
	        mainPageSelect:Object,
	    },
	    watch:{
	        mainPageSelect:{
	        handler: function (val, oldVal) {
	        	this.option.series[0].data=[];
	            this.getResponse();
	        },
	        deep:true,
	        },
	    },
		 methods:{
            redom(id){
//          	let salesData = [{
//				    label: "Basic",
//				    color: "#427EFF"
//				}, {
//				    label: "Plus",
//				    color: "#7F6AF7"
//				}, {
//				    label: "Lite",
//				    color: "#BB68F4"
//				}, {
//				    label: "Elite",
//				    color: "#FF8882"
//				}, {
//				    label: "Delux",
//				    color: "#F7C935"
//				}, {
//				    label: "Delux",
//				    color: "#F7C935"
//				}, {
//				    label: "Delux",
//				    color: "#FFFD37"
//				}, {
//				    label: "Delux",
//				    color: "#B1F223"
//				}, {
//				    label: "Delux",
//				   color: "#76CD66"
//				}, {
//				    label: "Delux",
//				    color: "#B7E986"
//				}, {
//				    label: "Delux",
//				    color: "#86EACD"
//				}];
//				
//				
//				
//				
//				var width = document.getElementById('d13').clientWidth/0.6,
//				    height = document.getElementById('d13').clientHeight/0.6;
//				var svg = d3.select("#d13").append("svg")
//				    .attr("width", width)
//				    .attr("height", height)
//				    .append("g").attr("id", "circleDonut");
//				Donut3D.draw("circleDonut", randomData(), 150, 150, 130, 100, 30, 0);
//				function randomData() {
//				    return salesData.map(function(d) {
//				        return {
//				            label: d.label,
//				            value: 1000 * Math.random(),
//				            color: d.color
//				        };
//				    });
//				}
//				$('#d13 div').css('display', 'none')
                  this.chart = echarts.init(document.getElementById(id));
                  this.chart.setOption(this.option);
                
            },
            getResponse(){
            let _self = this;
            var paramsObj = {
                area:this.mainPageSelect.place,
                name:this.mainPageSelect.turist
            }
//            this.$axios.get(API_URL+'/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
	
            //this.$axios.get('http://120.55.190.57:8081/qy/api/command/selectCommandScenicRaiseUp',{params:paramsObj}).then(r => {
            this.$axios.get('https://www.easy-mock.com/mock/5a55b07fde90b06840dd913f/example/xcq',{params:paramsObj}).then(r => {
            	console.log(r);
            	let reData = r.data.data
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
        	console.log(d3)
   		 },
        mounted(){
        	this.$nextTick( ()=> {
        		echarts_resize("d13",this);
        		this.redom("d13");
        	})
        }
	}
</script>

<style scoped="scoped">
	 .content{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #d13{
    width: 90%;
    height: 90%;
    position:absolute;
    left: 1.2rem;
    right: 0;
    top: 10%;
    bottom: 0;
    margin: auto;
    transform: scale(0.90);
  }
</style>