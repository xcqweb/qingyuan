<style lang="less" scoped>
.b6s{
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
    <div class="b6s">
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <b6ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            ></b6ss>
        </div>
    </div>
</template>

<script>
import b6ss from '@/pages/home/showMore/smallComponent/b6ss.vue'
  export default {
    name:'B6S',
    props:{
        scenics:Array,
    },
    data() {
      return {

            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
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
        b6ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('hideWeeks')
        this.$emit('hideDoubleDate')
    }
  }
</script>

