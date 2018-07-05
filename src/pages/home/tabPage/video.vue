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
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/videos.less';
</style>
