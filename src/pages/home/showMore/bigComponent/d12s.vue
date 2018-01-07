<style lang="less" scoped>
.c4s{
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
    <div class="c4s">
        <div v-for="(item,index) in nianItems" :key="idName[index]" class="item">
            <d12ss 
            v-if="a1sShow"
            class="c211" 
            :idName='idName[index]' 
            :scenics='item["name"]'
            :isActive ='isActive' 
            :barData='item["data"]' 
            ></d12ss>
        </div>
    </div>
</template>

<script>
import d12ss from '@/pages/home/showMore/smallComponent/d12ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import a1sJson from '@/pages/home/showMore/bigComponent/json/a1s.json'
  export default {
    name:'A1S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        isActive:Boolean,
        dateIndex:Number,
        updatePlace:String,
    },
    watch:{
        dateIndex:function(val){
            let _self = this;
            this.nianItems = a1sJson[this.updatePlace][this.dateChose[val].context];
            this.a1sShow = false;
            setTimeout(() =>{_self.a1sShow = true},0)
        },
        updatePlace:function(val){
            let _self = this;
            this.nianItems = a1sJson[val][this.dateChose[this.dateIndex].context];
            this.a1sShow = false;
            setTimeout(() =>{_self.a1sShow = true},0)
        }
    },
    data() {
      return {
          a1sShow:true,
           nianItems:a1sJson["全部"]["周"],
          dateChose:[
                {context:'周',class:'chose'},
                {context:'月',class:''},
                {context:'年',class:''},
            ],
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
        d12ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

