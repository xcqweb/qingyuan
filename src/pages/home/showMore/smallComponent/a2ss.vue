<style lang='less' type='text/less' scoped>
.main_content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 15%;
}
.itembox{
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class='main_content' id='A1loding'>
    <div :id='idName' class='itembox'></div>
  </div>
</template>
<script>
import echarts_resize from '@/common/js/echarts_resize.js'
 import echarts from 'echarts';
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'a1ss',
    mixins: [optionProps],
    props:{
    },
    watch:{
          update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type=val.type
             		this.endStr = '';
	                this.beginStr = '';
             	    paramsObj = {
		                type:['day','month','year'][val.type],
		            }
             	}else{
             		 this.endStr = val.end.join('-');
	                 this.beginStr = val.begin.join('-');
	                paramsObj = {
	                    beginTime:this.beginStr,
	                    endTime:this.endStr
					}
             	}
                 
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data() {
      return {
      	idName:'a2ss',
      	type:0,
      	beginStr:'',
        endStr:'',
        reData:[],
        option : {
        color:['#75CF65','#B8E986','#84E6CC','#4CB9FA','#BB6AF4','#FF8785','#F4D26A'],
		    calculable: true,
		    tooltip: {
		        trigger: 'item',
		        formatter: function(params){
		        	let val = params.data.value
            	val = val===2.0019?0:val
		        	return params.seriesName+'<br>'+params.data.name+' : '+val+'%'
		        }
		    },
		    calculable: true,
		    legend: {
		    	show:true,
		        icon: 'circle',
		        x: 'center',
		        y: '6%',
		        itemGap:30,
		        itemWidth:10,
		        data: [
		            {name:'一天',textStyle:{color:'#75CF65'}},
		            {name:'两天',textStyle:{color:'#B8E986'}},
		            {name:'三天',textStyle:{color:'#84E6CC'}},
		            {name:'四天',textStyle:{color:'#4CB9FA'}},
		            {name:'五天',textStyle:{color:'#BB6AF4'}},
		            {name:'六天',textStyle:{color:'#FF8785'}},
		            {name:'七天及以上',textStyle:{color:'#F4D26A'}},
		        ],
		        textStyle: {
		            fontSize:'75%'
		        }
		    },
		    series: [{
		        name: '停留时长占比',
		        type: 'pie',
		        radius: [42,100],
		        avoidLabelOverlap: false,
		        startAngle: 0,
		        center: ['50%','50%'],
		        roseType: 'area',
		        clockwise:true,
		        selectedMode: 'single',
		        label: {
		            normal: {
		                show: true,
		                fontSize:'75%',
		                formatter: function(params){
		                	let val = params.data.value
		                	val = val===2.0019?0:val
						        	return params.data.name+' : '+val+'%'
						        }
		            },
		            emphasis: {
		                show: true
		            }
		        },
		        labelLine: {
		            normal: {
		                show: true,
		                smooth: false,
		                length: 20,
		                length2: 10
		            },
		            emphasis: {
		                show: false
		            }
		        },
		        data: [{
		                value: 20.2,
		                name: '一天',
		            },
		            {
		                value: 18.8,
		                name: '两天',
		            },
		            {
		                value: 6.58,
		                name: '三天',
		            },
		            {
		                value: 12.2,
		                name: '四天',
		            },
		            {
		                value: 11.2,
		                name: '五天',
		            },
		            {
		                value: 5.3,
		                name: '六天',
		            },
		            {
		                value: 5.8,
		                name: '七天及以上',
		            },
		            
		        ]
		    }]
		}
      }
    },
    computed:{

    },
    created(){
    	var paramsObj = {
	            type:['day','month','year'][this.type]
            }
       this.getResponse(paramsObj);
    },
    methods: {
    	getResponse(paramsObj){
    		let _self = this
			this.$axios.get(API_URL+'/qy/api/v2/view/selectCommandScenicStayDay',{params:paramsObj}).then(r => {
                if(r.data.code ==='200'||r.data.code ===200){
                	let re = r.data.data
                	if(!re.length){
                		let red = _self.option.series[0].data
                		for(let item of red){
                			item.value = 0
                		}
                	
                		 _self.redom(_self.idName)
                	}else{
                		re.forEach( (item,index) => {
	                		_self.option.series[0].data[index] = {name:_self.switchDay(item.day),value:item.avg_percent?item.avg_percent:2.0019}
	                	})
                  		 _self.redom(_self.idName)
                	}
                   
                }
            })
       },
    	
    	switchDay(num){
    		switch(num){
    			case '1':
    			return '一天';
    			break;
    			
    			case '2':
    			return '两天';
    			break;
    			
    			case '3':
    			return '三天';
    			break;
    			
    			case '4':
    			return '四天';
    			break;
    			
    			case '5':
    			return '五天';
    			break;
    			
    			case '6':
    			return '六天';
    			break;
    			
    			case '7':
    			return '七天及以上';
    			break;
    		}
    	},
  
 
      redom (id) {
      	if(this.chart){
      		this.chart.dispose()
      	}
        var _self= this;
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption(_self.option)
      },
      
    },
    mounted() {
    	this.redom(this.idName)
    }
  }
</script>
