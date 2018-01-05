<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
            <div class="border">
                <div class="qylable">区域：</div>
                <sleckte 
                :selectList="qyselectlist" 
                v-on:listenAtparent="catchmsg1"
                ></sleckte>
                <div class="jqlable">景区：</div>
                <sleckte 
                :selectList="jqselectlist" 
                v-on:listenAtparent="catchmsg2"
                ></sleckte>
            </div>
        </div>
        <div class="leftScope" >
            <div class="item"
                v-for='item in leftComponents' 
                @dblclick='showMore(item.name,item.title)'  
                :class="item.id">
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,leftComponents)' >
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
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
                <h1>{{item.title}}</h1>
                <span @click='cutover(item,rightComponents)' >
                    <img :src="cutoverImg"/>
                </span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
                    :commentProp = 'comment' 
                    :placeAttractionsProps = 'updateData.turist' 
                    :inItemsProps = 'inItems' 
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
                qyselectlist:{
                    width:'18%',
                    left:'20%',
                    title:'清城 ',
                    selectStatus:false,
                    place:[
                        "清城","清新","佛冈","英德","连州","连南","连山","阳山"
                    ]
                },
                updateData:{
                    palce:'清城',
                    turist:'飞霞风景名胜区',
                },
                startData:['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],                
                cityData:['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
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
                    {name:'A5',id:'one',index:1,time:100,show:false,title:'实时客流监测'},
                    {name:'B2',id:'two',index:2,time:300,show:false,title:'客流预警'},
                    {name:'B6',id:'three',index:3,time:600,show:false,title:'实时天气'},
                    {name:'D6',id:'four',index:4,time:900,show:false,title:'景区当前客流'},
                    {name:'D8',id:'five',index:5,time:600,show:false,title:'交通拥堵指数'},
                    {name:'D1',id:'six',index:6,time:900,show:false,title:'景区客流热力图'},
                ],
                rightComponents:[
                    {name:'C10',id:'one',index:1,time:1200,show:false,title:'粉丝关注渠道'},
                    {name:'B4',id:'two',index:2,time:1500,show:false,title:'路况监控'},
                    {name:'D3',id:'three',index:3,time:1800,show:false,title:'最新舆论'},
                ],
                
            }
        },
    computed: { 
        ...mapGetters({
            comment:'version/comment',
            inItems: 'version/inItems',
          }),
        tablistCom:function(){
            let arrb = [];
            forEach(this.placeAttractions,function(value,key){
                let items = {
                    name:value.place,
                    status: key === 0 ? 'chose' : 'unchose'
                }
                arrb.push(items)
            })
            return arrb
        },
         jqselectlist:function(){
            if(!this.cityData){
                this.cityData = this.startData;
            }
            return {
                width:'38%',
                left:'53%',
                title:this.cityData[0],
                selectStatus:false,
                place:this.cityData,
            }
        }
    },
    watch:{
        Attractions:function(val){
            
            return 
        }
    },
    methods: {
        catchmsg1(data){
            this.updateData.palce = data;
           return  this.cityData = this.switch(data)
        },
        catchmsg2(data){
           this.updateData.turist = data;
        },
        showMore:function(name,title){
            let mainContent = name+'S';
            $showMore.open(mainContent,title)
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
        switch(val){
            const  cityData = {
                "清城":['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                "清新":['太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',],
                "佛冈":['观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居'],
                "英德":['峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
                "连州":['清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖'],
                "连南":['油岭瑶寨','瑶族舞曲实景演出','云海花谷'],
                "连山":['大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田'],
                "阳山":['北山古寺','鱼水旅游风景区','龙凤温泉'],

            }
           return cityData[val]
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

        }
                    
    },
    components:{
        ...componetstatus,
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/souceShow.less';
</style>