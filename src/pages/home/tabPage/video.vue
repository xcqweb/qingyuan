<template>
  <div id="apphome" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="leftScope">
        <div v-for='topItem in leftComponents' 
        :class='topItem.id' 
        class="item">
            <div v-if='topItem.show'>
                <componet 
                :is='topItem.name'  
                :key="topItem.id" 
                :updatePlace='updatePlace'
                :update='update'
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

export default {
        props:['',],
        mixins:[],
        data() {
            return {
            		updatePlace:{place:"全部",turist:"全部"},
            		update:{begin:['2018','02','02'],end:['2018','02','03']},
            		upday:0,
            	  toggleName:'C8',
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
//                   {name:'D16',id:'one',index:1,time:1200,show:true,title:``,},
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
	        	//获取选择的景区
		        doubleChoseVal(val){
		        	
		        	this.updatePlace = val
		        	console.log(this.updatePlace)
		        },
		        //获取选择时间
		        choseDateVal(val){
		        	console.log(val)
		        	this.update = val
		        },
		        //获取选择年,月,日
		        choseDayVal(val){
		        	console.log(val)
		        	t//his.upday = val
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
        created () {
            
            // this.getResponse();
        },
        mounted() {
        }
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/videos.less';
</style>
