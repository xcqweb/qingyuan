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
<<<<<<< HEAD
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <d6ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
=======
        <div v-for="(item,index) in nianItems" :key="idName[index]" class="item">
            <d6ss 
            v-if="a1sShow"
            class="c211" 
            :idName='idName[index]' 
            :scenics='item.name'
            :dataItem = 'item'
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
            ></d6ss>
        </div>
    </div>
</template>

<script>
import d6ss from '@/pages/home/showMore/smallComponent/d6ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
<<<<<<< HEAD
  export default {
    name:'d6s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
    },
    data() {
      return {

=======
// import a1sJson from '@/pages/home/showMore/bigComponent/json/a1s.json'
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
            this.getResponse();
            this.a1sShow = false;
            setTimeout(() =>{this.a1sShow = true},0)
        },
    },
    data() {
      return {
            nianItems:[],
            a1sShow:true,
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
<<<<<<< HEAD

=======
        getResponse(val){
            var paramsObj = {
                area:this.updatePlace,
            }
            this.$axios.get(API_URL+'/qy/api/command/getCommandCurrentPersonDetail',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    this.nianItems = r.data.data;
                }   
            })
        }
    },
    created () {
        this.getResponse();
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    },
    mounted(){
        this.$emit('hideWeeks')
        this.$emit('hideDoubleDate')
<<<<<<< HEAD
=======
         this.$emit('hideVdate')
        
        this.$emit('showDateFormatChose',[])
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    }
  }
</script>

