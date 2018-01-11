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
            :rankItems ='item.value' 
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
        timeDate:Object,
    },
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:this.updatePlace,
                city:this.updateSheng==="省"?1:2,
                type:["day","month","year"][this.dateIndex],
            }
            this.getResponse(paramsObj);
        },
        updateSheng:function(val){
            var paramsObj = {
                    area:this.updatePlace,
                    city:this.updateSheng==="省"?1:2,
                    type:["day","month","year"][this.dateIndex],
                }
            this.getResponse(paramsObj);
        },
        dateIndex:function(val){
            var paramsObj = {
                area:this.updatePlace,
                city:this.updateSheng==="省"?1:2,
                type:["day","month","year"][this.dateIndex],
            }
            this.getResponse(paramsObj);
        },
        timeDate:{
             handler:function(val, oldVal){
                 let end = val.end.join("-")
                 let begin = val.begin.join("-")
                 var paramsObj = {
                    area:this.updatePlace,
                    city:this.updateSheng==="省"?1:2,
                    beginTime:begin,
                    endTime:end
                }
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data() {
      return {
          dateChose:[
            {context:'日',class:'chose'},
            {context:'月',class:''},
            {context:'年',class:''},
            ],
            rankItems:[],
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
        getResponse(paramsObj){
            this.$axios.get('http://120.55.190.57/qy/api/view/getTouristSourceDetailData',{params:paramsObj}).then(r => {
                    
                if(r.data.code ==="200"||r.data.code ===200){
                    this.rankItems = r.data.data; 
                }
            })
        }
    },
    created () {
        var paramsObj = {
                area:"全部",
                type:"day",
                city:1
            }
       this.getResponse(paramsObj);
    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose);
        this.$emit('showShennei');
    }
  }
</script>

