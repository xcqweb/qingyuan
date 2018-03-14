<template>
  <div id="apphome" onselectstart="return false;" style="-moz-user-select:none;">
    <div class="leftScope">
        <div v-for='topItem in leftComponents' 
        :class='topItem.id' 
        class="item">
            <div v-if='topItem.show'>
            	<keep-alive>
                <componet 
                :is='topItem.name'  
                :key="topItem.id" 
                :updatePlace='updatePlace'
                :update='update'
                ></componet>    
              </keep-alive>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
 import echarts from 'echarts';
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus.js'

export default {
        data() {
            return {
            		updatePlace:{place:"全部",turist:"全部"},
            		update:{begin:['2018','02','02'],end:['2018','02','03']},
            		upday:0,
            	  toggleName:'C8',
                leftComponents:[
                     {name:'D16',id:'one',index:1,time:1200,show:true,title:``,},
                ],
            }
        },
        
        components: {
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
