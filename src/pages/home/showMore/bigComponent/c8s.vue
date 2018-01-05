<style lang="less" scoped>
.c8s{
    width:90%;
    height:80%;
    .item{
        width:45%;
        height:54%;
        float: left;
        margin-left:2%;
        position: relative;
    }
    
}
</style>
<template>
    <div class="c8s">
        <div v-for="(item,index) in rankItems" :key="idName[index]" class="item">
            <c8ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='item.name' 
            :rankItems ='item.data' 
            :updateSheng ='updateSheng'
            ></c8ss>
        </div>
    </div>
</template>

<script>
import c8ss from '@/pages/home/showMore/smallComponent/c8ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import c8sJson from '@/pages/home/showMore/bigComponent/json/c8s.json'
  export default {
    name:'c8s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        dateIndex:Number,
        updatePlace:String,
        updateSheng:String,
    },
    watch:{
        updatePlace:function(val){
            // this.rankItems = b16sJson[val]//data[全部][省][日]
            this.rankItems = c8sJson[val][this.updateSheng][this.dateChose[this.dateIndex].context]
        },
        updateSheng:function(val){
            this.rankItems = c8sJson[this.updatePlace][val][this.dateChose[this.dateIndex].context]
        },
        dateIndex:function(val){
            this.rankItems = c8sJson[this.updatePlace][this.updateSheng][this.dateChose[val].context]
        }
    },
    data() {
      return {
          dateChose:[
            {context:'日',class:'chose'},
            {context:'月',class:''},
            {context:'年',class:''},
            ],
            rankItems:c8sJson["全部"]["省"]["日"],
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
        c8ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose);
        this.$emit('showShennei');
    }
  }
</script>

