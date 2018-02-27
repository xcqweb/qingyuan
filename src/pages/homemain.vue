<template>
  <div id="mainhome">
  	<div class="header">清远市旅游大数据应用和应急管理智慧平台</div>
  	<div class="nav">
  		<headerBody />
  	</div>
    <router-view class='mockrouter' 
    :placeName = 'placeName' 
    :placeAttractions = 'placeAttractions' 
    ></router-view>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import { mapGetters } from 'vuex'
 import echarts from 'echarts';
import vmask from '../components/commonui/mask.vue'
import headerBody from '@/pages/home/header.vue'
export default {
        data() {
            return {
                headerStatus:false,
                allComponents: [],
                componentName: '',
                topComponents:[
                    {name:'vtopOne',id:'one',title:'浦江客流人数分析'},
                    {name:'vprofies',id:'two',title:'景区概况'},
                    {name:'vtopThree',id:'three',title:''},
                    {name:'vcontentment',id:'four',title:'游客满意度'},
                ],
                bottomComponents:[
                    {name:'vtimeOn',id:'one',title:'客流实时监测'},
                    {name:'vchartMap',id:'two',title:'国内游客来源地'},
                    {name:'vrinking',id:'three',title:'游客来源排行榜'},
                    {name:'vpercenPie',id:'four',title:'营销推广'},
                    {name:'vvideo',id:'five',title:'视频监控'},
                ],
                text:'headerBody',
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
        },
        created () {
            // this.getResponse();
        },
        mounted() {
        }
    }
</script>

<style lang="less" type="text/less" scoped >
/*h1标题颜色，当前颜色白*/
@hColor:#efeefd;
/*文本内容颜色*/
@textColor:#8687c0;
@headerBackColor:#122461;
@topBottomColor:#163387;
@borderColor:#355BFA;
@borderLen: 18px;

#mainhome{
    width:100vw;
    height: 100vh;
    position: relative;
    background-color: #0d1f6d;
    overflow: hidden;
    .header{
        width: 100%;
        height: 90/1080*100%;
        background-color: @headerBackColor;
        z-index: 2500;
        font-size: 1.6rem;
        color: #fff;
        line-height: 3rem;
        border: 2px solid @borderColor;
    }
    .nav{
    	 height: 990/1080*100%;
    	 width:  90/1920*100%;
    	 background-color: #122461;
    	 border-right: 2px solid @borderColor;
    }
}
</style>
