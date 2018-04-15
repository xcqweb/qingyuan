<template>
  <div class="main_content">
        <a1ss 
        class="c211" 
        :idName='"a1chart"' 
        :scenics='""'
        :isActive ='isActive' 
        :barData='oneweekMock' 
        ></a1ss>
  </div>
</template>
<script>
import echarts_resize from '../../../common/js/echarts_resize.js'
import a1ss from '@/pages/home/showMore/smallComponent/a1ss.vue'
import echarts from 'echarts';
import Vue from 'vue'
export default {
    name:'a1',
    data() {
      return {
        chart: null,
        isActive:true,
        oneweekMock:[],
      }
    },
    methods: {
      getResponse(){
            this.$axios.get(API_URL+'/qy/api/view/getSevenDayData').then(r => {
                
                if(r.data.code ==="200"||r.data.code ===200){
                
                    this.oneweekMock = r.data.data
                }
            })
        }
    },
    
    mounted() {

    },
    components: {
        a1ss,
    },
    created(){
       this.getResponse();
   },
  }
</script>
<style lang="less" type="text/less" scoped>
.main_content{
    width:100%;
    height:100%;
    .c211{
        width:100%;
        height:120% !important;
    }
}
</style>