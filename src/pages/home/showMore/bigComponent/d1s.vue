<style lang="less" scoped>
.d1s{
    width:90%;
    height:80%;

}
</style>
<template>
    <div class="d1s">
        <!-- <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <d1ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            :lenLat = 'lenLat[index]' 
            ></d1ss>
        </div> -->
        <d1ss 
            class="c211 item" 
            :scenics='scenicsep' 
            :updatePlace ='updatePlace' 
            :idName = 'idSingle'
            ></d1ss>
    </div>
</template>

<script>
import d1ss from '@/pages/home/showMore/smallComponent/d1ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'D1S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        updatePlace:String,
    },
    data() {
      return {
          scenicsep:'',
          idSingle:'d1ss',
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            lenLat:[{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},{len:4,lat:6},],
      }
    },
    // props: {
    //     mainContent: {
    //         type: String,
    //         default: function () {
    //                 return 'D2S'
    //         }
    //     },
    // },
    components: {
        d1ss,
    },
    methods:{
        
    },
    
    mounted(){
        this.$emit('hideWeeks')
         this.$emit('hideVdate')
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

