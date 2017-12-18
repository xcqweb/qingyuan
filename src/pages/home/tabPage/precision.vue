<template>
    <div class="box">
        <div class="leftSide" >
            <div class="item"
                v-for='item in leftComponents' 
                :class="item.id">
                <h1></h1>
                <span >

                </span>
                <div class="border" >

                </div>
            </div>
        </div>
        <div class="rightSide">
            <div class="item" 
                v-for='item in rightComponents' 
                :class="item.id">
                <doubleSelection
                v-on:listenDoubleSelection="" 
                class="row"
                ></doubleSelection>
                <h1></h1>
                <span>

                </span>
                <div class="border" >

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
import { mapGetters } from 'vuex'
import Bus from '@/common/js/bus.js'
export default {
    props:['placeName','placeAttractions'],
    name: 'barChartOption',
        data () {
            return {
                cutoverImg:require('../../../assets/切换.png'),
                moudle:[
                    {name:'C1',title:'出行方式分析'},
                    {name:'C3',title:`${this.placeName}客流热地图`},
                    {name:'C2',title:'年龄分析'},
                    {name:'C6',title:'游客关注点'},
                    {name:'C9',title:`${this.placeName}客流人数分析`},
                    {name:'C4',title:'游客男女比例'},
                    {name:'C5',title:'游客详细客源地分布'},
                    {name:'C7',title:'景区游客排行'},
                    {name:'C8',title:'游客来源排行'},
                    {name:'C10',title:'10',},
                    {name:'C11',title:'1',},
                    {name:'C12',title:'2',},
                    {name:'C13',title:'3',},
                    {name:'C14',title:'4',},
                    {name:'C15',title:'5',},
                    {name:'C16',title:'6',},
                    {name:'C17',title:'7',},
                    {name:'C18',title:'8',},
                ],
                current:[
                    {name:'C1',title:'出行方式分析'},
                    {name:'C3',title:`${this.placeName}客流热地图`},
                    {name:'C2',title:'年龄分析'},
                    {name:'C6',title:'游客关注点'},
                    {name:'C9',title:`${this.placeName}客流人数分析`},
                    {name:'C4',title:'游客男女比例'},
                    {name:'C5',title:'游客详细客源地分布'},
                    {name:'C7',title:'景区游客排行'},
                    {name:'C8',title:'游客来源排行'},
                    {name:'',title:'视频监控'},
                    {name:'',title:'视频监控'},

                ],
                cutoverStatus:null,
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
            this.barChartOption = Object.assign({}, this.barChartOption, )
        },
        console(){
                        console.log(this.components)
                    },
                    headerEnter(){
                        this.headerStatus=true;
                    },
                    headerLeave(){
                        this.headerStatus=false;
                    },
                    add: function() {
                        this.allComponents.push(this.componentName)
                        // 重置输入框
                        this.componentName = ''
                    },
                    add (name, text) {
                           this.items.push({
                             component: name,
                             text: text
                           })
                        },
                    render: function(h) { // h 为 createElement 函数，接受三个参数
                        // tag 
                        // data
                        // children 具体看文档吧
                        return h('div',this.allComponents.map(function(componentName) {
                            return h(componentName)
                        }))
                    },
                    cutover(item,topOrBottom){
                        this.cutoverStatus=topOrBottom;
                        Bus.$on('cutoverMoudle', data => {
                            let i =data.numb.index-1
                            this.cutoverStatus[i].name=data.item.name
                            this.cutoverStatus[i].title=data.item.title
                        })
                        $toast.open(item,this.current,this.moudle);
                    },
                    cutoverMoudle(moudle){
                        

                    },
                    setLazy(){
                        // console.log(item)
                        // window.setTimeout((item) => {
                                
                        //         item.show = true;
                        //     }, item.time);
                    },
                    lazy(){

                    }
                    
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