<template>
    <div class="box">
        <div class="leftSide" >
            <div class="item"
                v-for='item in leftComponents' 
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,leftComponents)'>
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id" 
                    :placeName = 'placeName'
                    ></componet>
                </div>
            </div>
        </div>
        <div class="rightSide">
            <div class="item" 
                v-for='item in rightComponents' 
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,rightComponents)'>
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id" 
                    ></componet>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
 import echarts from 'echarts';
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
export default {
    name: 'barChartOption',
    props:['placeName',],
        data () {
            return {
                cutoverImg:require('../../../assets/切换.png'),
                moudle:[
                    {name:'B16',title:'国内游客来源地',},
                    {name:'B1',title:'富民指数分析',},
                    {name:'B2',title:'客流预警',},
                    {name:'B3',title:'旅游营销分析',},
                    {name:'B4',title:'路况监控',},
                    {name:'B5',title:'拥堵指数',},
                    {name:'B6',title:'实时天气',},  
                    {name:'B7',title:'省内游客来源地',},
                    {name:'B8',title:'村庄收益分析',},
                    {name:'C1',title:'出行方式分析'},
                    {name:'B10',title:'交通预警',},
                    {name:'B11',title:'1',},
                    {name:'B12',title:'2',},
                    {name:'B13',title:'3',},
                    {name:'B14',title:'4',},
                    {name:'B15',title:'5',},
                    
                ],
                current:[
                    {name:'B16',title:'国内游客来源地'},
                    {name:'A1',title:'客流人数分析'},
                    {name:'A5',title:'实时客流监测'},
                    {name:'B1',title:'富民指数'},
                    {name:'B6',title:'实时天气'},
                    {name:'B5',title:'拥堵指数'},
                    {name:'B2',title:'客流预警'},
                    {name:'C1',title:'出行方式分析'},
                    {name:'A9',title:'视频监控'},
                    {name:'B4',title:'路况监控'},
                ],
                cutoverStatus:null,
                leftComponents:[
                    {name:'B16',id:'one',index:1,time:100,show:false,title:'国内游客来源地'},
                    {name:'A1',id:'two',index:2,time:300,show:false,title:'客流人数分析'},
                    {name:'A5',id:'three',index:3,time:600,show:false,title:'实时客流监测'},
                    {name:'B1',id:'four',index:4,time:900,show:false,title:'富民指数'},
                    {name:'B6',id:'five',index:5,time:1200,show:false,title:'实时天气'},
                    {name:'B5',id:'six',index:6,time:1500,show:false,title:'拥堵指数'},
                    {name:'B2',id:'seven',index:7,time:1800,show:false,title:'客流预警'},
                    {name:'C1',id:'eight',index:8,time:2100,show:false,title:'出行方式分析'},
                ],
                rightComponents:[
                    {name:'A9',id:'one',index:1,time:2400,show:false,title:'视频监控'},
                    {name:'B4',id:'two',index:2,time:2700,show:false,title:'路况监控'},
                ],
                
            }
        },
    computed: { 
    },
    methods: {
        update(){
             this.barChartOption.series[0].data[3]={
                symbolSize:15,
                value:2114,
                itemStyle: {
                 normal: {
                        color: 'white',
                        opacity:1,
                        borderWidth:5,
                        borderColor:'#098DFF',
                        shadowBlur:5,
                        shadowColor:'#098DFF'
                    }
                }
            }
            this.barChartOption = Object.assign({}, this.barChartOption, )
        },
        console(){
        },
        headerEnter(){
            this.headerStatus=true;
        },
        headerLeave(){
            this.headerStatus=false;
        },
                    
    },
    components:{
        ...componetstatus,
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/prodcut.less';
</style>