<style lang="less" scoped>
.d9s{
    width:90%;
    height:80%;
    .item{
        width:90%;
        height:54%;
        float: left;
        margin-left:2%;
        position: relative;
    }
    
}
</style>
<template>
    <div class="d9s">
        <div class="item">
            <d9ss 
            class="c211" 
            :idName='"d9ss"' 
            :scenics='""' 
            :rankItems ='rankItems' 
            ></d9ss>
        </div>
    </div>
</template>

<script>
import d9ss from '@/pages/home/showMore/smallComponent/d9ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import d9sJson from '@/pages/home/showMore/bigComponent/json/d9s.json'
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
            if(this.dateIndex ===2){
                 this.rankItems = d9sJson[val][this.dateChose[0].context]
            }else{
                 this.rankItems = d9sJson[val][this.dateChose[this.dateIndex].context]
            }
           
        },

        dateIndex:function(val){
            this.rankItems = d9sJson[this.updatePlace][this.dateChose[val].context]
            if(val ===2){
                this.rankItems = d9sJson[this.updatePlace][this.dateChose[0].context]
            }
        }
    },
    data() {
      return {
          dateChose:[
            {context:'日',class:'chose'},
            {context:'月',class:''},
            {context:'年',class:''},
            ],
            rankItems:d9sJson["全部"]["日"],
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
        d9ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose);
        // this.$emit('showShennei');
    }
  }
</script>

