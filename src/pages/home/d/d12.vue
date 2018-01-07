<style lang="less" scoped>
.d12{
    width:95%;
    height:80%;
   
    .d12_chart{
        width:100%;
        height:125%;
        position: relative;
    }
}
</style>
<template>
    <div class="d12">
        <div class="d12_chart">
            <d12ss 
            class="" 
            :idName='"d12"' 
            :scenics='""'
            :barData='propsData' 
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
    props:{
        mainPageSelect:Object,
    },
    watch:{
        // mainPageSelect:function(val){
            
        // }
        mainPageSelect:{
            handler: function (val, oldVal) {
                
                 //判断是否直接点击二级下拉
                if(val.place ===oldVal.place){
                    //如果点击“全部”则：···
                    if(val.turist === "全部"){
                    this.propsData = a1sJson[val.place]["周"][1]["data"];
                    //如果点击“全部按钮以外”
                    }else if(val.turist != "全部"){
                    this.propsData = a1sJson[val.place]["周"][2]["data"];
                    }

                //如果直接点击一级下拉框
                }else if(val.place !=oldVal.place){
                    this.propsData = a1sJson[val.place]["周"][2]["data"];
                }
            },
            deep:true,
        }
    },
    data() {
      return {
          a1sShow:true,
           propsData:a1sJson["全部"]["周"][0]["data"],
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

