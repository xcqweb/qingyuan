<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
        	<groupMenu
        		@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
        		:isDate=true
        	></groupMenu>
        </div>
        <!--<div class="leftScope" >
            <div class="item"
                v-for='item in leftComponents' 
                @dblclick='showMore(item.name,item.title)'  
                :class="item.id">
                <h1>{{item.title}}</h1>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :tip = "item.tip"
                    :place='updateData.turist' 
                    :mainPageSelect = 'updateData'
                    :commentProp = 'comment'
                    ></componet>
                </div>
            </div>
        </div>
        <div class="rightScope">
            <div class="item" 
                v-for='item in rightComponents' 
                @dblclick='showMore(item.name,item.title)'  
                :class="item.id">
                <h1 v-bind:style="{ color: item.color }" >{{item.title}}</h1>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
                    :mainPageSelect = 'updateData'
                    :commentProp = 'comment' 
                    :placeAttractionsProps = 'updateData.turist' 
                    :inItemsProps = 'inItems' 
                    ></componet>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts';
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus.js'
import forEach from 'lodash/forEach'
import { mapGetters } from 'vuex';
import setTimeComponents from '@/common/js/mixin/setTimeComponents.js'
import midScreen from '@/common/js/mixin/midScreen.js'
export default {
    props:['placeName','placeAttractions'],
    name: 'souceShow',
    mixins:[setTimeComponents,midScreen],
        data () {
            return {
                place:'连州地下河',
                cutoverImg:require('../../../assets/切换.png'),
                
                moudle:[
                    {name:'A5',title:'实时客流监测'},
                    {name:'B2',title:'客流预警'},
                    {name:'B6',title:'实时天气'},
                    {name:'D6',title:'景区当前客流'},
                    {name:'D8',title:'交通拥堵指数'},
                    {name:'D1',title:'景区客流热力图'},
                    {name:'A9',title:'视频监控'},
                    {name:'B4',title:'路况监控'},
                    {name:'D3',title:'最新舆论'},
                    {name:'B16',title:`国内游客来源地`},
                    {name:'C2',title:'年龄分析'},
                    {name:'C4',title:'游客男女比例'},
                    {name:'B4',title:'路况监测'},
                    {name:'A1',title:'客流人数分析'},
                    {name:'A5',title:'客流实时监测'},
                    {name:'A9',title:'视频监控'},
                    {name:'C8',title:'游客来源排行'},
                ],
                tablist:this.tablistCom,
                current:[
                    {name:'A5',title:'实时客流监测'},
                    {name:'B2',title:'客流预警'},
                    {name:'B6',title:'实时天气'},
                    {name:'D6',title:'景区当前客流'},
                    {name:'D8',title:'交通拥堵指数'},
                    {name:'D1',title:'景区客流热力图'},
                    {name:'A9',title:'视频监控'},
                    {name:'B4',title:'路况监控'},
                    {name:'D3',title:'最新舆论'},
                ],
                cutoverStatus:null,
                leftComponents:[
                    {name:'A5',id:'one',index:1,time:100,show:false,title:'实时客流监测',tip:true},
                    {name:'B2',id:'two',index:2,time:300,show:false,title:'客流预警',color:'red',},
                    {name:'B6',id:'three',index:3,time:600,show:false,title:'实时天气'},
                    {name:'D6',id:'four',index:4,time:900,show:false,title:'景区当前客流'},
                    {name:'A3',id:'five',index:5,time:600,show:false,title:'游客评价'},
                    {name:'D1',id:'six',index:6,time:900,show:false,title:'景区客流热力图'},
                    {name:'D13',id:'seven',index:7,time:900,show:false,title:'景点可提升度'},
                ],
                rightComponents:[
                    {name:'D9',id:'one',index:1,time:1200,show:false,title:'游客路线排行'},
                    {name:'D12',id:'two',index:2,time:1500,show:false,title:'客流停留时长分析(平均)'},
                    {name:'D10',id:'three',index:3,time:1800,show:false,title:'维度正负面分析'},
                    {name:'D11',id:'four',index:4,time:2100,show:false,title:'旅游关键词'},
                ],
                
            }
        },
    computed: { 
        ...mapGetters({
            comment:'version/comment',
            inItems: 'version/inItems',
          }),
    },
    watch:{
        Attractions:function(val){
            
            return 
        }
    },
    methods: {
        waringColor(val){
            this.leftComponents[1].color = val;
        },
        showMore:function(name,title){
            let mainContent = name+'S';
            if(name ==='D10'||name ==='D11'||name==='D13'){
                $showMore.open('A3S',title)
            }else{
                $showMore.open(mainContent,title)
            }
            
        },
        //获取选择的景区
        doubleChoseVal(val){
        	console.log(val)
        },
        //获取选择时间
        choseDateVal(val){
        	console.log(val)
        },
        //获取选择年,月,日
        choseDayVal(val){
        	console.log(val)
        },
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
        chose(item){
            this.tablistCom.forEach(function(list){
                list.status='unchose'
            })
            item.status='chose'
            this.place=item.name
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
                    let _self = this;
                    let toast_chosed_index =data.numb.index-1;
                    //去除相同模块
                    for (var i=0 ,len = _self.leftComponents.length; i<len ;i++){
                        //如果切换过来的Item 和当前模块有重复的，则互换模块
                       (function(){
                            if(_self.leftComponents[i].name === data.item.name){
                                _self.leftComponents[i].name = item.name;
                                _self.leftComponents[i].title = item.title;
                        }
                       })(i)
                    }
                    for (var i=0 ,len = _self.rightComponents.length; i<len ;i++){
                        //如果切换过来的Item 和当前模块有重复的，则互换模块
                       (function(){
                            if(_self.rightComponents[i].name === data.item.name){
                                _self.rightComponents[i].name = item.name;
                                _self.rightComponents[i].title = item.title;
                        }
                       })(i)
                    }
                    this.cutoverStatus[toast_chosed_index].name=data.item.name
                    this.cutoverStatus[toast_chosed_index].title=data.item.title
                    Bus.$off("cutoverMoudle")
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

        },
        getResponse(){
                this.$axios.get(API_URL+'/qy/api/view/checkLogin').then(r => {
                    
                        if(r.data.code ==="-1"||r.data.code ===-1){
                        //测试
						//window.location.href=API_URL+":8081/login"
						//旅游局
						window.location.href=API_LOGIN
                        }
                })
            },
                    
    },
    components:{
        ...componetstatus,
    },
    created () {
        // this.getResponse();
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/souceShow.less';
</style>