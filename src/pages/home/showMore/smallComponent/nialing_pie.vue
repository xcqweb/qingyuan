<style lang="less" scoped>
.content{
    width:100%;
    height:100%;
    position:relative;
    .c985{
        width:100%;
        height:90%;
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
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name:'nianlingpie',
    // mixins: [adaptation],
    props:{
        idName:String,
        pieData:Object,
        scenic:String,
        isActive:Boolean,
        dateIndex:Number,
    },
    watch:{
        isActive:function(val){
            this.option.series[0].startAngle =60+Math.random()*221;
            this.chart.setOption(this.option);
        },
        dateIndex:function(){
            this.$nextTick($sheet.echartRL(this.idName,this))
        },
        pieData:{
            handler: function (val, oldVal) {
                
                this.option.series[0].data.forEach((item,index)=>{
                        item.value = val[item.name];
                    })
                this.$nextTick(()=>{
                    this.chart.setOption(this.option);
                })
            },
            deep: true
        }
    },
    data(){
    return{
        option:{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color:['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD'],
          legend:{
                show:false,
                orient: 'vertical',
                top:'40%' ,
                left:'55%',
                width:'20%',
                height:'45%',
                itemGap:10,
                itemWidth:12,
                itemHeight:10,
                textStyle:{
                    color:'white',
                },
                data:[{
                    icon:'circle',
                    name:'0-19'
                }, {
                    icon:'circle',
                    name:'19-25'
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
                center: ['50%', '50%'],
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
                                return Math.round(params.percent) === 0 ? '' : Math.round(params.percent)+"%"  ;
                            },
                        },
                        emphasis:{
                            show: false
                        }
                },
                data:[
            {"value":0, "name":"0-19"},
            {"value":0, "name":"19-25"},
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
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            // console.log(this.pieData)
            //  debugger
            this.option.series[0].data.forEach((item,index)=>{
                        item.value = this.pieData[item.name];
                       
                    })
            this.$nextTick(()=>{
                this.chart.setOption(this.option);
            })
            

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL(this.idName,this))
    }
}
</script>


