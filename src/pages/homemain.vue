<template>
  <div id="mainhome">
  	<div class="header">
  		<img src="../assets/images/title.png" alt="" />
  	</div>
  	<div class="nav">
  		<headerBody />
  	</div>
    <router-view class='mockrouter' 
    :placeName = 'placeName' 
    :placeAttractions = 'placeAttractions' 
    ></router-view>
    <div class="slecToast" @click="tHide" v-if="false"></div>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
 import echarts from 'echarts';
import vmask from '../components/commonui/mask.vue'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus'
export default {
        data() {
            return {
                headerStatus:false,
                allComponents: [],
                componentName: '',
                text:'headerBody',
                toast:false
            }
        },
        components: {
                vmask,
                headerBody,
        },
        computed: { 
          ...mapGetters({
              placeName: 'version/name',
              placeAttractions:'version/placeAttractions',
              comment:'version/comment',
            }),
            isToast(){
            	return this.toast;
            }
        },
        methods: {
            console(){
                console.log(this.components)
            },
            getResponse(){
                this.$axios.get(API_URL+'/qy/api/view/checkLogin').then(r => {
                    
                        if(r.data.code ==="-1"||r.data.code ===-1){
                        window.location.href=API_URL+"/login"
                        }
                })
            },
            tHide(){
            	this.toast = false
            	Bus.$emit('hideOverlay',false)
            }
        },
        created () {
            // this.getResponse();
        },
        mounted() {
        	Bus.$on('showOverlay',(data) => {
        		this.toast = data
        	})
        }
    }
</script>

<style lang="less" type="text/less" scoped >
/*h1标题颜色，当前颜色白*/
@hColor:#efeefd;
/*文本内容颜色*/
@textColor:#8687c0;
@headerBackColor:#163387;
@topBottomColor:#163387;
@borderColor:#355BFA;
@borderLen: 18px;

#mainhome{
    width: 100%;
  	height: 1080px;
    position: relative;
    background-color: #0d1b48;
	  overflow: hidden;
	  .slecToast{
	  	width: 100%;
	  	height: 100%;
	  	position: absolute;
	  	top: 0;
	  	left: 0;
	  	z-index: 900;
	  }
    .header{
        width: 100%;
        height: 100/1080*100%;
        box-sizing: border-box;
        background-color: @headerBackColor;
        z-index: 2500;
        font-size: 44px;
        color: #fff;
        border: 3px solid @borderColor;
        img{
        	margin-top: 15px;
        }
    }
    .mockrouter{
    	left: 136/3840*100%;
    }
    .nav{
    	 height: 980/1080*100%;
    	 width:  120/3840*100%;
    	 background-color: #122461;
    	 border-right: 3px solid @borderColor;
    }
}
</style>
