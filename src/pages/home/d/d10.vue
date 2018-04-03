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
	let img1 = 'image://static/img/rad1.png'
	let img2 = 'image://static/img/rad2.png'
    export default {
        name:'d10',
        mixins:[optionProps],
        data () {
            return {
              option :{
                color:['#ffe86e','#caff36'],
                textStyle:{
                  color: '#fff',
                  fontSize:12
                },
                tooltip: {
                	position:[390,90],
                	trigger:'item'
                },
                legend: {
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
                    { name: '景区管理', max: 52000},
                    { name: '清洁卫生', max: 52000},
                    { name: '客流状况', max: 52000},
                    { name: '服务设施', max: 52000},
                    { name: '服务水平', max: 52000},
                    { name: '旅游交通', max: 52000},
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
                      value : [20000, 30000, 5000, 12000, 14000, 26000],
                      name : '纬度负面',
                      zlevel:123,
                      areaStyle: {
                      	normal: {
                      		opacity:0.9,
                      	}
                      },
                      lineStyle:{
                        normal:{
                          color:['#BAE710']
                        }
                      }
                    },
                    {
                      value : [10000, 20000, 28000, 35000, 50000, 19000],
                      name : '纬度正面',
                      zlevel:1,
                      lineStyle:{
                        normal:{
                          color:['#caff36']
                        }
                      }
                    }
                  ]
                }]
              }
            }
        },
        watch:{
        	updatePlace:function(val){
        	}
        },
        methods:{
            redom(id){
            	if(this.chrat){
            		this.chart.dispose()
            	}
              this.chart = echarts.init(document.getElementById(id));
              this.chart.setOption(this.option);
            }
        },
        created(){
        	
        },
        mounted() {
        	this.$nextTick( () => {
        		this.redom("latitudeAnalyse");
        		echarts_resize("latitudeAnalyse",this);
        	})
         
        }
    }
</script>
