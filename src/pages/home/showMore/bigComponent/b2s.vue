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
        <div v-for="(item,index) in dataItems" :key="idName[index]" class="item">
            <b2ss 
            v-if="b2sShow"
            class="c211" 
            :idName='idName[index]' 
            :scenics='item.name' 
            :dataItem = 'item.data'
            ></b2ss>
        </div>
    </div>
</template>

<script>
import b2ss from '@/pages/home/showMore/smallComponent/b2ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import b2sjson from '@/pages/home/showMore/bigComponent/json/b2s.json'
  export default {
    name:'B2S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        updatePlace:String,
    },
    watch:{

        updatePlace:function(val){
            let _self = this;
            this.dataItems = b2sjson[val];
            this.b2sShow = false;
            setTimeout(() =>{_self.b2sShow = true},0)
        }
    },
    data() {
      return {

            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            dataItems:b2sjson["全部"],
            b2sShow:true,
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
        this.$emit('hideVdate')
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

