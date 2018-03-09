<template>
    <div class="box">
        <iframe src="http://zb.zjht100.com/LiveVideo/MapVideo/Index?id=qylyj
"></iframe>
    </div>
</template>

<script>
import Vue from 'vue'
 import echarts from 'echarts';
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import { mapGetters } from 'vuex'
export default {
    props:['placeName','placeAttractions'],
    name: 'barChartOption',
        data () {
            return {
                leftComponents:[
                    {name:'C1',id:'one',index:1,time:100,show:false,title:'出行方式分析'},
                    {name:'C3',id:'two',index:2,time:300,show:false,title:`${this.placeName}客流热地图`},
                    {name:'C2',id:'three',index:3,time:600,show:false,title:'年龄分析'},
                    {name:'C6',id:'four',index:4,time:900,show:false,title:'游客关注点'},
                    {name:'C9',id:'five',index:5,time:1200,show:false,title:`${this.placeName}客流人数分析`},
                    {name:'C4',id:'six',index:6,time:1500,show:false,title:'游客男女比例'},
                    {name:'C5',id:'seven',index:7,time:1800,show:false,title:'游客详细客源地分布'},
                ],
                rightComponents:[
                    {name:'C7',id:'one',index:1,time:2100,show:false,title:'景区游客排行'},
                    {name:'C8',id:'two',index:2,time:2400,show:false,title:'游客来源排行'},
                ],
                
            }
        },
    computed: { 
      ...mapGetters({
          inItems: 'version/inItems',
          
        }),
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
        },
                    headerEnter(){
                        this.headerStatus=true;
                    },
                    headerLeave(){
                        this.headerStatus=false;
                    },
                    getResponse(){
	                this.$axios.get(API_URL+'/qy/api/view/checkLogin').then(r => {
	                    
	                        if(r.data.code ==="-1"||r.data.code ===-1){
	                        //测试
							//   window.location.href=API_URL+":8081/login"
							//旅游局
							window.location.href=API_LOGIN
	                        }
                })
            },
                    
    },
    created () {
        // this.getResponse();
    },
    components:{
        ...componetstatus,
    },
    mounted(){
        let _self=this
        let arr = _self.leftComponents.concat(_self.rightComponents)
        var lentop=arr.length
        for (var j = 0 ; j < lentop; j++) {
            (
                function(){
                    let n=j
                    window.setTimeout(() => {        
                        arr[n].show=true
                    }, arr[n].time); 
                }
            )()  
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/precision.less';
</style>