<style lang="less" scoped>
.b2s{
    width:90%;
    height:80%;
    .item{
        width:22%;
        height:42%;
        float: left;
        position: relative;
    }
}
</style>
<template>
    <div class="b2s">
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <b2ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            :dataItem = 'dataItems[index]'
            ></b2ss>
        </div>
    </div>
</template>

<script>
import b2ss from '@/pages/home/showMore/smallComponent/b2ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'B2S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
    },
    data() {
      return {

            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            dataItems:[87.1,91.2,55.2,46.1,78.4,21.1,93.1,21.3,12.4],
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
        b2ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('hideWeeks')
        this.$emit('hideDoubleDate')
    }
  }
</script>

