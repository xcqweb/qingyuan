<style lang="less" scoped>
.d8s{
    width:90%;
    height:80%;
    .item{
        width:22%;
        height:40%;
        float: left;
        position: relative;
    }
}
</style>
<template>
    <div class="d8s">
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <d8ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            :overcrow = 'overcrow[index]' 
            ></d8ss>
        </div>
    </div>
</template>

<script>
import d8ss from '@/pages/home/showMore/smallComponent/d8ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'D8S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
    },
    data() {
      return {

            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            overcrow:[1.23,2.21,6.53,4.31,1.91,7.74,1.98,4.61,1.43],
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
        d8ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('hideWeeks')
        this.$emit('hideDoubleDate')
    }
  }
</script>

