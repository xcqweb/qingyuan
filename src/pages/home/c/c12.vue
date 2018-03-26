<template>
<div class="content">
  <div id="c12"></div>
  <ul class="legend">
  	<li v-for="(item,i) in series">
  		<p>{{item.percent}}%</p>
  		<p>{{item.name}}</p>
  		<p class="circle" :style="{background:color[i]}"></p>
  	</li>
  </ul>
</div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'c12',
    mixins: [optionProps],
    data(){
    return{
    		series:[
    		 {
		      "value": 200,
		      	name: '北京',
		      	percent:''
		    },
		    {
		      "value": 180,
		      name: '上海',
		      percent:''
		    },
		     {
		      "value": 160,
		      name: '深圳',
		      	percent:''
		    },
    		{
		      "value": 140,
		      name: '广州',
		      	percent:''
		    },
		     {
		      "value": 120,
		      name: '重庆',
		      	percent:''
		    },
		    {
		      "value": 100,
		      name: '杭州',
		      	percent:''
		    },
		    {
		      "value": 230,
		      name: '成都',
		      	percent:''
		    },
		     {
		      "value": 200,
		      name: '武汉',
		      	percent:''
		    },
		    
		    {
		      "value": 120,
		      name: '苏州',
		      	percent:''
		    },
		    {
		      "value": 80,
		      name: '南昌',
		      	percent:''
		    },
		  ],
		  
        color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
    		
    }
    },
    watch:{
    	updatePlace:function(val){
	            var paramsObj = {
	                area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                type:["day","month","year"][this.upday],
	            }
	            this.getResponse(paramsObj);
	        },
	        upday:function(val){
	            var paramsObj = {
	                area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                type:["day","month","year"][this.upday],
	            }
	            this.getResponse(paramsObj);
	        },
	        update:{
	             handler:function(val, oldVal){
	                 let end = val.end.join("-")
	                 let begin = val.begin.join("-")
	                 var paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:begin,
	                    endTime:end
					}
	                 this.getResponse(paramsObj);
	             },
	             deep:true,
	        }
    },
    methods:{
	  	getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/view/getPersonSourceCity',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                	let reData = r.data.data.inCountryCity;
                	reData.forEach( (item,index) => {
                		this.series[index].name = item.city;
                		//this.series[index].value = Math.sqrt(item.num);
                		this.series[index].value = item.num;
                		this.series[index].percent = item.zhanRate.toFixed(1);
                	})
                    this.redom("c12");
                }
            })
       },
	  	
        redom(id){
        	let _self = this
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            legend:{
            	show:false,
                orient: 'vertical',
                top:'20%',
                right:'15%',
                width:'26',
                height:'60%',
                itemGap:36,
                itemWidth:10,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:'82%',
                    lineHeight:36
                    
                },
            },
            tooltip : {
		        formatter: function(params){
		        	let text = params.data.name+"<br>"+params.percent.toFixed(1)+"%";
		        	return text
		        }
		        },
            grid: {
                left: '15%',
                right: '20%',
                bottom: '5%',
                top:'28%',
                containLabel: true
            },
            series : [
                {
                    name:'消费偏好',
                    type:'pie',
                    radius : ['0%', '65%'],
                    center : ['26%', '65%'],
                    roseType : 'area',
                    label: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: false
		                }
		            },
		            lableLine: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: false
		                }
		            },
                    data: this.series,
                } 
            ]
        };
            this.chart.setOption(option);
        }
    },
    created(){
    	 var paramsObj = {
                area:"全部",
                name:"全部",
            }
       this.getResponse(paramsObj);
    },
    computed:{
    	percents(){
    		let arr=[];
    		
    		for(let i=0; i<this.series.length; ++i){
    			arr[i] = this.series[i].value;
    		}
    		return arr
    	}
    },
    mounted() {
        this.$nextTick(echarts_resize('c12',this))
    },
}
</script>

<style lang="less" scoped>
#c12{
    width:100%;
    height:100%;
    transform: scale(1.2);
}
.legend{
	width: 36%;
	height: 66%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 100px;
	right: 130px;
	li{
		width: 33%;
		height: 38px;
		line-height: 0.8rem;
		float: left;
		position: relative;
		margin-top: 20px;
		margin-left: 44px;
		p:first-child{
			font-size: 19px;
			color: #f6f9ff;
			font-weight: bold;
		}
		p:nth-child(2){
			margin-top: 10px;
			font-size: 16px;
			color: #b2bbeb;
		}
		.circle{
            display:inline-block;
            height:14px;
            width:14px;
            margin-right:8px;
            border-radius:50%;
            position: absolute;
            left: -10px;
            top: 13px;
        }
	}
}

.content{
    width:100%;
    height:100%;
    position:relative;
}

</style>
