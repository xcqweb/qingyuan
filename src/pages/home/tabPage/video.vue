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
                ></componet>    
              </keep-alive>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'

export default {
        data() {
            return {
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
            getResponse(){
                this.$axios.get(API_URL+'/qy/api/view/checkLogin').then(r => {
                        if(r.data.code ==="-1"||r.data.code ===-1){
                        //测试
												window.location.href=API_URL+":8081/qylv3.0/login"
												//旅游局
												//window.location.href=API_LOGIN
                        }
                })
            },
            
        },
        created () {
          // this.getResponse();
        },
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/videos.less';
</style>
