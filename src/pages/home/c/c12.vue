<template>
<div class="content">
  <div id="c12"></div>
  <!--<ul class="legend">
  	<li v-for="(item,i) in series">
  		<p :style="{color:color[i]}">{{percents[i]}}%</p>
  		<p>{{item.name}}</p>
  	</li>
  </ul>-->
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
		      name: '北京'
		    },
		    {
		      "value": 180,
		      name: '上海'
		    },
		     {
		      "value": 160,
		      name: '深圳'
		    },
    		{
		      "value": 140,
		      name: '广州'
		    },
		     {
		      "value": 120,
		      name: '重庆'
		    },
		    {
		      "value": 100,
		      name: '杭州'
		    },
		    {
		      "value": 230,
		      name: '成都'
		    },
		     {
		      "value": 200,
		      name: '武汉'
		    },
		    
		    {
		      "value": 120,
		      name: '苏州'
		    },
		    {
		      "value": 80,
		      name: '南昌'
		    },
		  ],
        color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
    		
    }
    },
    watch:{
    	code:function(){
    		this.getData();
    	}
    },
    methods:{
    	
	  	
	  	getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getInProvinceDetailData',{params:paramsObj}).then(r => {
                    //console.log(r)
                if(r.data.code ==="200"||r.data.code ===200){
                		let arrData = [];
                    arrData = r.data.data.topCity;
                    //console.log(arrData)
                    this.redom("c12");
                }
            })
       },
	  	
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#4EBBFC','#57ABFE', '#368DF7', '#7E6AF6', '#FF8885','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            legend:{
            	  show:true,
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
            		//width:'50%',
            		data:[
            			{name:'北京',icon:'circle'},
            			{name:'上海',icon:'circle'},
            			{name:'深圳',icon:'circle'},
            			{name:'广州',icon:'circle'},
            			{name:'重庆',icon:'circle'},
            			{name:'杭州',icon:'circle'},
            			{name:'成都',icon:'circle'},
            			{name:'武汉',icon:'circle'},
            			{name:'苏州',icon:'circle'},
            			{name:'南昌',icon:'circle'},
            		],
            	//data:['亲子','金融','汽车服务','休闲娱乐','化妆品','珠宝手表','数码','母婴用品','生活服务','奢侈品牌','大众品牌','服饰鞋帽'],
            	 formatter:function(name){
            	 	
	        	var oa = option.series[0].data;
	        	//console.log(oa)
	        	let num =0;
	        	for(let i=0; i<oa.length; ++i){
	        		num += oa[i].value
	        	}
	        	
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	let text = (oa[i].value/num * 100).toFixed(2) + '%'+ '\n\n' +  name ;
                    	return text
                    }
	        	}
	        }
            },
            tooltip : {
		        formatter: function(params){
		        	let text = params.data.name+"<br>"+params.percent+"%";
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
                    center : ['28%', '55%'],
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
                type:"day",
                city:1
            }
       this.getResponse(paramsObj);
    },
    computed:{
    	percents(){
    		let arr=[];
    		//let sum=0;
    		//for(let i=0; i<this.series.length; ++i){
    			//sum += this.series[i].value;
    		//}
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
}
.legend{
	width: 36%;
	height: 80%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 25%;
	li{
		width: 33%;
		line-height: 0.8rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.8rem;
		}
	}
}

.content{
    width:100%;
    height:100%;
    position:relative;
}
@media screen and (min-width: 1400px){
  ul{
    position:absolute;
    right:10%;
    top:30%;
    li{
        margin-top:10px;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
}
@media screen and (max-width: 1400px){
  ul{
    position:absolute;
    right:10%;
    top:15%;
    li{
        float:left;
        display:inline-block;
        font-size:.8rem;
        .circle{
            display:inline-block;
            height:8px;
            width:8px;
            margin-right:8px;
            border-radius:4px;
            background-color:red;
        }
    }

}
	.legend{
	width: 36%;
	height: 80%;
	color: #fff;
	font-size: 0.8rem;
	position: absolute;
	top: 10%;
	li{
		width: 33%;
		line-height: 0.8rem;
		margin-top: 0.8rem;
		float: left;
		p:first-child{
			font-size: 0.9rem;
			font-weight: bold;
		}
		p:last-child{
			margin-top: 0.4rem;
		}
	}
}

}
</style>
