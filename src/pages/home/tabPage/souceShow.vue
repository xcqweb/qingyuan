<template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
        	<groupMenu
        		@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
        		@scienceType='getScienceType'
        		:isDate=false
        		:isScience=true
        	></groupMenu>
        </div>
        
         <!--4A级景区切换-->
        <div v-show="!scienceType">
        	<div class="leftScope">
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
        		update:{},
        		upday:{},
                leftComponents:[
                	{name:'D1SS',id:'one',index:1,time:900,show:true,title:'客流热力图'},
                    {name:'A5SS',id:'two',index:2,time:100,show:true,title:'实时客流',tip:true},
                    {name:'B2SS',id:'three',index:1,time:300,show:true,title:'预警',color:'',},
                ],
                //4A级以上景区
                AComponents:[
                	{name:'A10',id:'one',index:1,time:900,show:true,title:''},
                ],
                rightComponents:[
                	{name:'B4SS',id:'two',index:3,time:100,show:true,title:'实时路况',tip:true},
                	
                	{name:'B6S',id:'one',index:2,time:600,show:true,title:'实时天气'},
                ]
            }
        },
    computed: { 
        ...mapGetters({
            comment:'version/comment',
            inItems: 'version/inItems',
          }),
          scienceType(){
          	let val = this.$store.getters['hotMap/getState']
          	return val
          }
         
    },
    watch:{
        Attractions:function(val){
             
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
    @import '../../../assets/style/souceShow.less';
</style>