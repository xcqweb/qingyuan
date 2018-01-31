<style lang="less" scoped>
.c4s{
<<<<<<< HEAD
    width:90%;
    height:80%;
    .item{
        width:22%;
        height:40%;
        float: left;
        position: relative;
    }
=======
    width:80%;
    height:100%;

>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
}
</style>
<template>
    <div class="c4s">
<<<<<<< HEAD
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
=======
        <!-- <div v-for="(item,index) in scenics" :key="idName[index]" class="">
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
            <traffic 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            :lenLat = 'lenLat[index]' 
            ></traffic>
<<<<<<< HEAD
        </div>
=======
        </div> -->
        <traffic 
            class="c211 item" 
            :idName='idName[0]' 
            :scenics='scenicsep' 
            :lenLat = 'lenLat[0]' 
            :updatePlace ='updatePlace'
            ></traffic>
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    </div>
</template>

<script>
import traffic from '@/pages/home/showMore/smallComponent/traffic.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'C4S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
<<<<<<< HEAD
    },
    data() {
      return {

=======
        updatePlace:String,
    },
    data() {
      return {
          scenicsep:"",
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
        traffic,
    },
    methods:{

    },
    mounted(){
        this.$emit('hideWeeks');
        this.$emit('hideVdate');
<<<<<<< HEAD
=======
        this.$emit('showDateFormatChose',[])
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    }
  }
</script>

