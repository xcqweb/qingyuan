<template>
<div class="content">
  <div id="c13"></div>
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
    name:'c9',
    mixins: [optionProps],
    data(){
    return{
    		series:[
    		 {
		      "value": 200,
		      name: '高中及以下'
		    },
		    {
		      "value": 600,
		      name: '本科/专科'
		    },
		     {
		      "value": 160,
		      name: '硕士'
		    },
    		{
		      "value": 140,
		      name: '博士'
		    },
		     {
		      "value": 120,
		      name: '其他'
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
    	
    	//请求数据
	  	getData(){
	  		api.params.code = this.code;
	  		let data={code:0};
	  		data.code = this.code;
	  		api.touristAttr(data).then( (re) =>{
	  				let reData = re.data.data;
	  				//console.log(reData)
	  				let arrData = [];
	  				for(let i in reData){
	  					arrData.push(reData[i])
	  				}
	  				for(let i=0; i<this.series.length; ++i){
	  					this.series[i].value = arrData[i]
	  				}
	  				//console.log(this.series)
					if(re.status===200){
					}
					this.redom("c13");
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#fd0073','#5afbee', '#48ff00', '#ffff50', '#ff50c3','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            legend:{
            	  show:true,
                orient: 'vertical',
                top:'45%',
                right:'2%',
                width:'26',
                height:'80%',
                itemGap:20,
                itemWidth:10,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize: 20,
                    lineHeight:36
                    
                },
            		//width:'50%',
            		data:[
            			{name:'高中及以下',icon:'roundRect'},
            			{name:'本科/专科',icon:'roundRect'},
            			{name:'硕士',icon:'roundRect'},
            			{name:'博士',icon:'roundRect'},
            			{name:'其他',icon:'roundRect'},
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
		                    	let text = name ;
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
                right: '-5%',
                bottom: '5%',
                top:'28%',
                containLabel: true
            },
            series : [
                {
                    name:'消费偏好',
                    type:'pie',
                    radius : ['0%', '55%'],
                    center : ['36%', '70%'],
                    roseType : 'radius',
                    label: {
		                normal: {
		                    show: true,
		                    fontSize:16
		                },
		                emphasis: {
		                    show: false
		                }
		            },
		            lableLine: {
		                normal: {
		                    show: true,
		                    length:20,
                        length2:0,
		                },
		                emphasis: {
		                    show: true
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
      this.$nextTick(echarts_resize('c13',this))
    },
}
</script>

<style lang="less" scoped>
#c13{
    width:100%;
    height:100%;
    transform: translateY(0px);
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
