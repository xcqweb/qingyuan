<template>
  <div id="apphome" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="leftScope">
        <div v-for='topItem in leftComponents' 
        :class='topItem.id' 
        @dblclick='showMore(topItem.name,topItem.title)'  
        class="item">
            <h1>{{topItem.title}}</h1>
            <!-- <span @click='cutover(topItem,leftComponents)' >
                <img :src="cutoverImg"/>
            </span> -->
             <!-- <span class="close" @click='closeMid(topItem)' v-if="!topItem.icon"></span> -->
            <div class="border" v-if='topItem.show'>
                <componet 
                :is='topItem.name'  
                :key="topItem.id" 
                :chosemMoudle='cutoverMoudle' 
                :lazyLoad='setLazy'
                ></componet>    
            </div>
        </div>
    </div>
    <div class="rightScope">
        <div v-for='topItem in rightComponents' 
        :class='topItem.id' 
        @dblclick='showMore(topItem.name,topItem.title)'  
        class="item">
            <h1>{{topItem.title}}</h1>
            <!-- <span @click='cutover(topItem,rightComponents)'>
                <img :src="cutoverImg"/>
            </span> -->
            <!-- <span class="close" @click='closeMid(topItem)' v-if="!topItem.icon"></span> -->
            <div class="border" v-if='topItem.show'>
                <componet
                :is='topItem.name' 
                :key="topItem.id" 
                :chosemMoudle='cutoverMoudle' 
                :lazyLoad='setLazy'
                ></componet>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
 import echarts from 'echarts';
import vmask from '@/components/commonui/mask.vue'
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus.js'
import setTimeComponents from '@/common/js/mixin/setTimeComponents.js'
import midScreen from '@/common/js/mixin/midScreen.js'
export default {
        props:['',],
        mixins:[setTimeComponents,midScreen],
        data() {
            return {
                placeName:'',
                cutoverImg:require('../../../assets/切换.png'),
                headerStatus:false,
                allComponents: [],
                componentName: '',
                moudle:[
                    {name:'B16',title:`国内游客来源地`},
                    {name:'C2',title:'年龄分析'},
                    {name:'C4',title:'游客男女比例'},
                    {name:'B4',title:'路况监测'},
                    {name:'A1',title:'客流人数分析'},
                    {name:'A5',title:'客流实时监测'},
                    {name:'C8',title:'游客来源排行'},
                    {name:'A5',title:'实时客流监测'},
                    {name:'B2',title:'客流预警'},
                    {name:'B6',title:'实时天气'},
                    {name:'D6',title:'景区当前客流'},
                    {name:'D8',title:'交通拥堵指数'},
                    {name:'D1',title:'景区客流热力图'},
                    {name:'B4',title:'路况监控'},
                    {name:'D3',title:'最新舆论'},
                ],
                current:[
                    {name:'B16',title:`国内游客来源地`},
                    {name:'C2',title:'年龄分析'},
                    {name:'C4',title:'游客男女比例'},
                    {name:'B4',title:'路况监测'},
                    {name:'A1',title:'客流人数分析'},
                    {name:'A5',title:'客流实时监测'},
                    {name:'C8',title:'游客来源排行'},
                ],
                leftComponents:[
                     {name:'B16',id:'one',index:1,time:100,show:false,title:`省内游客来源地`,},
                     {name:'C2',id:'two',index:2,time:300,show:false,title:'年龄分析'},
                    {name:'C4',id:'three',index:3,time:600,show:false,title:'游客男女比例'},
                    {name:'B4',id:'four',index:4,time:900,show:false,title:'路况监测'},
                     {name:'A1',id:'five',index:5,time:600,show:false,title:'客流人数分析(单位/人)'},
                      {name:'A5',id:'six',index:6,time:900,show:false,title:'客流实时监测'},
                ],
                rightComponents:[
                     {name:'D7',id:'one',index:1,time:1200,show:false,title:'消费水平分析'},
                     {name:'C8',id:'two',index:2,time:1500,show:false,title:'游客来源排行'},
                ],
                
                text:'headerBody',
                
                cutoverStatus:null,
            }
        },
        
        components: {
                vmask,
                headerBody,
                ...componetstatus,
        },
        methods: {
            console(){
                console.log(this.components)
            },
            
            headerEnter(){
                this.headerStatus=true;
            },
            headerLeave(){
                this.headerStatus=false;
            },
            showMore:function(name,title){
                let mainContent = name+'S';
                $showMore.open(mainContent,title)
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
                        window.location.href=API_URL+":8081/login"
                        }
                })
            },
            
        },
        created () {
            
            this.getResponse();
        },
        mounted() {
        }
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/home.less';

</style>
