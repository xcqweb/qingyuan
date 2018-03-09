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
                leftComponents:[
                	{name:'A3',id:'one',index:1,time:900,show:true,title:'游客评价'},
                	{name:'D10',id:'two',index:2,time:900,show:true,title:'评价正负面'},
                	{name:'D11',id:'three',index:3,time:900,show:true,title:'关键词'},
                	{name:'D13',id:'four',index:4,time:900,show:true,title:'景区可提升度'},
                ],
                //4A级以上景区
                AComponents:[
                	{name:'A10',id:'one',index:1,time:900,show:true,title:'4A级以上景区'},
                ],
                rightComponents:[
                	{name:'D15',id:'one',index:1,time:100,show:false,title:'评论详情',tip:true},
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