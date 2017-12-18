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
        pieData:Array,
        scenic:String,
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
                    name:'0-17'
                }, {
                    icon:'circle',
                    name:'18-24'
                }, {
                    icon:'circle',
                    name:'25-29'
                }, {
                    icon:'circle',
                    name:'30-34'
                }, {
                    icon:'circle',
                    name:'35-39'
                }, {
                    icon:'circle',
                    name:'40-44'
                }, {
                    icon:'circle',
                    name:'45-49'
                }, {
                    icon:'circle',
                    name:'50-54'
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
                data:this.pieData,
      }],
    }
    }
    },
    methods:{
        redom(id){
            this.chart = echarts.init(document.getElementById(id));
            let w=this.chart.getWidth()
            let d=this.chart.getDom()
            this.chart.setOption(this.option);

        }
    },
    mounted() {
          this.$nextTick($sheet.echartRL(this.idName,this))
    }
}
</script>


