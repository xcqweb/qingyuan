<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
        	<groupMenus
        		@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
        		@scienceType='getScienceType'
        		:isDate=false
        		:isScience=true
        		:isshow4A=true
        	></groupMenus>
        </div>
        
         <!--4A级景区切换-->
        <div v-if="!scienceType">
        	<div class="leftScope">
	            <div class="item"
	                v-for='item in leftComponents' 
	                :class="item.id">
	                <h1>{{item.title}}<tips :type='item.type'></tips></h1>
	                <keep-alive>
	                    <componet
	                    :is='item.name' 
	                    :key="item.id"  
	                    :updatePlace='updatePlace'
                		:update='update'
	                    ></componet>
	                </keep-alive>
	            </div>
	        </div>
        </div>
        <!--<div>-->
        	<div class="Ascience" v-show='scienceType'>
        		 <div class="item"
	                v-for='item in AComponents' 
	                :class="item.id">
	                <h1>{{item.title}}</h1>
	                <keep-alive>
	                    <componet
	                    :is='item.name' 
	                    :key="item.id"  
	                    :updatePlace='updatePlace'
                		:update='update'
	                    ></componet>
	                </keep-alive>
	            </div>
        	</div>
        <!--</div>-->
        
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
                    ></componet>
            </div>
        </div>
    </div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
export default {
    name: 'souceShow',
        data () {
            return {
            	updatePlace:{place:"全部",turist:"全部"},
        		update:{},
        		upday:0,
                leftComponents:[
                	{name:'D1SS',id:'one',index:1,time:900,show:true,title:'客流热力图',type:'b1'},
                    {name:'A5SS',id:'two',index:2,time:100,show:true,title:'实时客流',tip:true,type:'b2'},
                    {name:'B2SS',id:'three',index:1,time:300,show:true,title:'客流预警',color:'',type:'b3'},
                ],
                //4A级以上景区
                AComponents:[
                	{name:'A10',id:'one',index:1,time:900,show:true,title:''},
                ],
                rightComponents:[
                	{name:'B4SS',id:'two',index:3,time:100,show:true,title:'实时路况',tip:true,type:'b4'},
                	
                	{name:'B6S',id:'one',index:2,time:600,show:true,title:'实时天气',type:'b5'},
                ]
            }
        },
    computed: { 
          scienceType(){
          	let val = this.$store.getters['hotMap/getState']
          	return val
          }
         
    },
    methods: {
        
        //获取选择的景区
        doubleChoseVal(val){
        	//console.log(val)
        	this.updatePlace = val
        },
        //获取选择时间
        choseDateVal(val){
        	//console.log(val)
        	this.update = val
        },
        //获取选择年,月,日
        choseDayVal(val){
        	//console.log(val)
        	this.upday = val
        },
        //获取4A级景区
        getScienceType(val){
        	//console.log(val)
        	this.$store.commit('hotMap/TRANSFORMA',val)
        },
                    
    },
    components:{
        ...componetstatus,
    },
}
</script>

<style lang="less" scoped>
    @import '../../../assets/style/souceShow.less';
</style>