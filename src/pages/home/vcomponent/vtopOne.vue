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
        oneweekMock:[
            // {"nub":"6293","date":"12/29"},
            // {"nub":"5331","date":"12/30"},
            // {"nub":"8112","date":"12/31"},
            // {"nub":"4199","date":"1/1"},
            // {"nub":"7258","date":"1/2"},
            // {"nub":"9122","date":"1/3"},
            // {"nub":"6189","date":"1/4"}
        ],
      }
    },
    methods: {
      getResponse(){
            this.$axios.get('http://120.55.190.57/qy/api/view/getSevenDayData').then(r => {
                
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