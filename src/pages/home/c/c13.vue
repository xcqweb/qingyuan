<template>
<div class="content">
  <div id="c13"></div>
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
		  ],
		  icondata:[
			{name:'博士',icon:'roundRect'},
			{name:'硕士',icon:'roundRect'},
			{name:'本科/专科',icon:'roundRect'},
			{name:'高中及以下',icon:'roundRect'},
    	],
    }
    },
    watch:{
			updatePlace:function(val){
				var paramsObj = {
	                area:val.place,
	                name:val.turist,
	            }
					this.getResponse(paramsObj);
			},
			update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type=val.type
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            }
             	}else{
             		let end = val.end.join("-")
	                 let begin = val.begin.join("-")
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:begin,
	                    endTime:end
					}
             	}
                 
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    methods:{
    	
    	//请求数据
	  	getResponse(paramsObj){
			let _self = this;
	        this.$axios.get(API_URL+'/qy/api/v2/view/getEducation',{params:paramsObj}).then(r => {
						let reData = r.data.data
						_self.series = []
		                if(r.data.code ==="200"||r.data.code ===200){
		                	var num=0
		                   reData.forEach( (item,index) => {
		                   	
		                   	if(index<4){
		                   		num+=item.percent
		                   	}else if(index===4){
		                   		_self.series.push({name:'本科/专科',value:item.percent*100})
		                   	}else{
		                   		_self.series.push({name:item.description,value:item.percent*100})
		                   	}
		                   		
		                   })
		                   _self.series.push({name:"高中及以下",value:num*100})
		                   _self.redom('c13')
		                }
		            })
       },
        redom(id){
        	if(this.chart){
        		this.chart.dispose()
        	}
            this.chart = echarts.init(document.getElementById(id));
            let option = {
            color:['#B8E986','#E39A50', '#48ff00', '#FFCD38', '#ff50c3','#FFCD38',  '#E39A50', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
            calculable : true,
            legend:{
            	  show:true,
                orient: 'vertical',
                top:'40%',
                right:'5%',
                width:'26',
                height:'80%',
                itemGap:28,
                itemWidth:12,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize: 16,
                    lineHeight:36
                    
                },
            		//width:'50%',
            		data:this.icondata,
            	//data:['亲子','金融','汽车服务','休闲娱乐','化妆品','珠宝手表','数码','母婴用品','生活服务','奢侈品牌','大众品牌','服饰鞋帽'],
            	 formatter:(name) => {
			        	for(var i = 0; i < this.icondata.length; i++){
		                    if(name==this.icondata[i].name){
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
                    center : ['36%', '68%'],
                    roseType : 'radius',
                    //roseType : 'area',
                    label: {
		                normal: {
		                    show: true,
		                    fontSize:16
		                },
		                emphasis: {
		                    show: true
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
    	let paramsObj = {
    		area:'全部',
    		name:'全部',
    	}
    	this.getResponse(paramsObj)
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
      this.$nextTick(echarts_resize('c13',this))
    },
}
</script>

<style lang="less" scoped>
#c13{
    width:106%;
    height:100%;
    transform: translateY(0px);
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

</style>
