<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
        	<groupMenut
        		@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
        		@scienceType='getScienceType'
        		@hotelChose='gethotel'
        		@selectType='getslectType'
        		:isDate=true
        		:isScience=false
        	></groupMenut>
        </div>
        
         <!--4A级景区切换-->
        <div>
        	<div class="leftScope">
        		<!--<h1>游客属性</h1>-->
	            <div class="item"
	                v-for='item in leftComponents' 
	                :class="item.id">
	                <h1>{{item.title}}<tips :type='item.type'></tips></h1>
	                    <componet
	                    :is='item.name' 
	                    :key="item.id"  
	                    :updatePlace='updatePlace'
                		:update='update'
                		:hotelChose="hotelChose"
                		:slectType='slectType'
	                    ></componet>
	            </div>
	        </div>
        </div>
        
        <div class="rightScope">
            <div class="item" 
                v-for='item in rightComponents' 
                :class="item.id">
                <h1 v-bind:style="{ color: item.color }" >{{item.title}}<tips :type='item.type'></tips></h1>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :updatePlace='updatePlace'
                	:update='update'
                	:slectType='slectType'
                	:hotelChose="hotelChose"
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
            	hotelChose:'全部',
            	slectType:0,
                leftComponents:[
                	{name:'A3',id:'one',index:1,time:900,show:true,title:'游客评价',type:'d1'},
                	{name:'D10',id:'two',index:2,time:900,show:true,title:'评价正负面',type:'d2'},
                	{name:'D11',id:'three',index:3,time:900,show:true,title:'关键词',type:'d3'},
                	{name:'D13',id:'four',index:4,time:900,show:true,title:'可提升度',type:'d4'},
                ],
                
                //4A级以上景区
                AComponents:[
                	{name:'A10',id:'one',index:1,time:900,show:true,title:'4A级以上景区'},
                ],
                rightComponents:[
                	{name:'D15',id:'one',index:1,time:100,show:false,title:'评论详情',tip:true,type:'d5'},
                ]
            }
        },
    methods: {
        //获取选择的景区
        doubleChoseVal(val){
        	//console.log(val)
        	this.updatePlace = val
        	this.hotelChose = '全部'
        },
        //获取选择时间
        choseDateVal(val){
        	//console.log(val)
        	this.update = val
         },
        //获取选择年,月,日
        choseDayVal(val){
        	//console.log(val)
        	this.update = {type:val}
        },
        //获取4A级景区
        getScienceType(val){
        	this.scienceType = val
        },
        //获取酒店选择值
        gethotel(val){
        	this.hotelChose = val
        },
        
        //获取选择类型酒店或景区
        getslectType(val){
        	this.slectType = val;
        	this.updatePlace.turist = '全部'
        },
    },
    components:{
        ...componetstatus,
    },
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/option.less';
</style>