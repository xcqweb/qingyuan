<style lang="less" scoped>
.c8s{
    width:90%;
    height:80%;
    .item{
        width:20%;
        height:44%;
        float: left;
        margin-left:2%;
        position: relative;
    }
}
</style>
<template>
    <div class="c8s">
        <div v-for="(item,index) in nianItems" :key="idName[index]" class="item">
            <d6ss 
            v-if="a1sShow"
            class="c211" 
            :idName='idName[index]' 
            :scenics='item["name"]'
            :dataItem = 'item.data'
            ></d6ss>
        </div>
    </div>
</template>

<script>
import d6ss from '@/pages/home/showMore/smallComponent/d6ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import a1sJson from '@/pages/home/showMore/bigComponent/json/a1s.json'
  export default {
    name:'d6s',
    mixins: [showMoreData],

    props:{
        scenics:Array,
        isActive:Boolean,
        updatePlace:String,
    },
    watch:{
        updatePlace:function(val){
            let _self = this;
            this.nianItems = a1sJson[val]["年"];
            this.a1sShow = false;
            setTimeout(() =>{_self.a1sShow = true},0)
        },
    },
    data() {
      return {
            nianItems:a1sJson["全部"]["年"],
            a1sShow:true,
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
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
        d6ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('hideWeeks')
        this.$emit('hideDoubleDate')
         this.$emit('hideVdate')
        
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

