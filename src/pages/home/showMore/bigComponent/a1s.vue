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
        <div v-for="(item,index) in rankItems" :key="idName[index]" class="item">
            <a1ss 
            v-if="a1sShow"
            class="c211" 
            :idName='idName[index]' 
            :scenics='item["name"]'
            :isActive ='isActive' 
            :barData='item["value"]' 
            ></a1ss>
        </div>
    </div>
</template>

<script>
import a1ss from '@/pages/home/showMore/smallComponent/a1ss.vue'
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
        timeDate:Object,
    },
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:this.updatePlace,
                type:["day","month","year"][this.dateIndex],
            }
            this.getResponse(paramsObj);
        },
        dateIndex:function(val){
            var paramsObj = {
                area:this.updatePlace,
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
                    beginTime:begin,
                    endTime:end
                }
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    // watch:{
    //     dayIndex:function(val){
    //         let _self = this;
    //         this.nianItems = a1sJson[this.updayPlace][this.dayChose[val].context];
    //         this.a1sShow = false;
    //         setTimeout(() =>{_self.a1sShow = true},0)
    //     },
    //     updayPlace:function(val){
    //         let _self = this;
    //         this.nianItems = a1sJson[val][this.dayChose[this.dayIndex].context];
    //         this.a1sShow = false;
    //         setTimeout(() =>{_self.a1sShow = true},0)
    //     }
    // },
    data() {
      return {
          a1sShow:true,
           nianItems:[
        ],
        rankItems:[],
          dayChose:[
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
        a1ss,
    },
    methods:{
        getResponse(paramsObj){
            this.$axios.get('http://120.55.190.57/qy/api/view/getDayCountDetailData',{params:paramsObj}).then(r => {

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
        this.$emit('showDateFormatChose',this.dayChose)
    }
  }
</script>

