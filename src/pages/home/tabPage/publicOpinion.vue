<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
        	<groupMenu
        		@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
        		@scienceType='getScienceType'
        		:isDate=true
        		:isScience=false
        	></groupMenu>
        </div>
        
         <!--4A级景区切换-->
        <div v-show="!scienceType">
        	<div class="leftScope">
        		<!--<h1>游客属性</h1>-->
	            <div class="item"
	                v-for='item in leftComponents' 
	                :class="item.id">
	                <h1>{{item.title}}</h1>
	                    <componet
	                    :is='item.name' 
	                    :key="item.id"  
	                    :updatePlace='updatePlace'
                		:update='update'
	                    ></componet>
	            </div>
	        </div>
        </div>
        <!--<div>-->
        	<div class="Ascience" v-show='scienceType'>
        		 <div class="item"
	                v-for='item in AComponents' 
	                :class="item.id">
	                <h1>{{item.title}}</h1>
	                    <componet
	                    :is='item.name' 
	                    :key="item.id"  
	                    :updatePlace='updatePlace'
                		:update='update'
	                    ></componet>
	            </div>
        	</div>
        <!--</div>-->
        
        <div class="rightScope">
            <div class="item" 
                v-for='item in rightComponents' 
                :class="item.id">
                <h1 v-bind:style="{ color: item.color }" >{{item.title}}</h1>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :updatePlace='updatePlace'
                	:update='update'
                    ></componet>
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
export default {
    props:['placeName','placeAttractions'],
    name: 'souceShow',
        data () {
            return {
            	updatePlace:{place:"全部",turist:"全部"},
        		update:{begin:['2018','02','02'],end:['2018','02','03']},
            	upday:0,
            	scienceType:false,
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
                	{name:'C2SS',id:'one',index:1,time:900,show:true,title:'年龄'},
                	{name:'C4',id:'two',index:2,time:900,show:true,title:'性别'},
                	{name:'D7',id:'three',index:3,time:900,show:true,title:'消费水平'},
                	{name:'C13',id:'four',index:4,time:900,show:true,title:'学历'},
                ],
                //4A级以上景区
                AComponents:[
                	{name:'A10',id:'one',index:1,time:900,show:true,title:'4A级以上景区'},
                ],
                rightComponents:[
                	{name:'D9SS',id:'one',index:1,time:100,show:false,title:'游客路线',tip:true},
                ]
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
             
        }
    },
    methods: {
        
        //获取选择的景区
        doubleChoseVal(val){
        	console.log(val)
        	this.updatePlace = val
        },
        //获取选择时间
        choseDateVal(val){
        	console.log(val)
        	this.update = val
        },
        //获取选择年,月,日
        choseDayVal(val){
        	console.log(val)
        	this.upday = val
        	
        },
        //获取4A级景区
        getScienceType(val){
        	this.scienceType = val
        },
        update1(){
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
             //console.log(this.components)
        },
        chose(item){
            this.tablistCom.forEach(function(list){
                list.status='unchose'
            })
            item.status='chose'
            this.place=item.name
        },
        
        render: function(h) { // h 为 createElement 函数，接受三个参数
            // tag 
            // data
            // children 具体看文档吧
            return h('div',this.allComponents.map(function(componentName) {
                return h(componentName)
            }))
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
						//   window.location.href=API_URL+":8081/login"
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
           //this.getResponse();
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/option.less';
</style>