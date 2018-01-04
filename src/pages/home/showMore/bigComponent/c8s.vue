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
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <c8ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            :rankItems ='rankItems' 
            ></c8ss>
        </div>
    </div>
</template>

<script>
import c8ss from '@/pages/home/showMore/smallComponent/c8ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import b16sJson from '@/pages/home/showMore/bigComponent/json/b16s.json'
  export default {
    name:'c8s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        dateIndex:Number,
        updatePlace:String,
        
    },
    watch:{
        updatePlace:function(val){
            // this.rankItems = b16sJson[val]
        }
    },
    data() {
      return {
          dateChose:[
            {context:'日',class:'chose'},
            {context:'月',class:''},
            {context:'年',class:''},
            ],
            rankItems:[
              {"place":"广东省","numb":"415,686","rise":"up","percent":"37.85%"},
            {"place":"河北省","numb":"343,146","rise":"down","percent":"31.25%"},
            {"place":"湖北省","numb":"285,127","rise":"up","percent":"25.96%"},
            {"place":"福建省","numb":"181,456","rise":"up","percent":"25.96%"},
            {"place":"四川省","numb":"52,036","rise":"up","percent":"16.52%"},
            {"place":"浙江省","numb":"37,292","rise":"down","percent":"4.2%"}
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
        c8ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

