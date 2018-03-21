<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    margin-top: 40px;
    .c985{
        width:100%;
        height:100%;
        transform: scale(1.25);
    }
    .scenic{
        text-align: center;
        color: white;
    }
}
</style>
<template>
    <div class="content">
        <div :id="idName" class="c985"></div>
        <div class="scenic">{{scenic}}</div>
    </div>  
</template>

<script type="text/javascript">
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name:'nianlingpie',
    mixins: [optionProps],
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
    data(){
    return{
    	idName:'nianlingpie',
    	scenic:'',
    	isActive:true,
        option:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color:['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
          tooltip:{
          	show:true,
          	trigger:'item',
          	formatter:'{b}  {c}%'
          },
          legend:{
                show:true,
                orient: 'vertical',
                top:'30%' ,
                right:'15%',
                width:'20%',
                height:'45%',
                itemGap:10,
                itemWidth:12,
                itemHeight:10,
                textStyle:{
                    color:'#fff',
                    fontSize:18
                },
                data:[{
                    icon:'circle',
                    name:'0-19'
                }, {
                    icon:'circle',
                    name:'20-25'
                }, {
                    icon:'circle',
                    name:'26-35'
                }, {
                    icon:'circle',
                    name:'36-45'
                }, {
                    icon:'circle',
                    name:'46-55'
                }, {
                    icon:'circle',
                    name:'55以上'
                }],
            },
          series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '60%',
                center: ['26%', '50%'],
                // selecteMode:'single',
                // selectedOffset:30,
                // roseType:"area",
                startAngle:90,
                labelLine: {
                    normal: {
                        show: false,
                    }
                },
                // animation:false,
                animationType:'expansion',
                label:{
                    normal:{
                            show: true,
                            position: 'inner',
                            formatter: function(params){
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent).toFixed(1)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: true
                        }
                },
                data:[
	            {"value":0, "name":"0-19"},
	            {"value":0, "name":"20-25"},
	            {"value":0, "name":"26-35"},
	            {"value":0, "name":"36-45"},
	            {"value":0, "name":"46-55"},
	            {"value":0, "name":"55以上"}
      	  ],
      }],
    }
    }
    },
    methods:{
    	//获取数据
    	getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/view/getDayAgeData',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                  	//console.log(r.data)
                    this.pieData = r.data.data[0]; 
                    this.redom(this.idName)
                }
            })
       },
    	
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            this.option.series[0].data.forEach((item,index)=>{
                        item.value = this.pieData[item.name].toFixed(1);
                    })
            this.$nextTick(()=>{
                this.chart.setOption(this.option);
            })
            

        }
    },
     created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
                type:"day",
            }
       this.getResponse(paramsObj);
    },
    mounted() {
          //this.$nextTick(echarts_resize(this.idName,this))
    }
}
</script>


