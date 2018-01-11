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
// import d9sJson from '@/pages/home/showMore/bigComponent/json/d9s.json'
  export default {
    name:'c8s',
    mixins: [showMoreData],
    props:{
        scenics:{
            required:false,
        },
        dateIndex:Number,
        updatePlace:{
            default: "全部"
        },
        updateTurist:{
            default: "全部"
        },
        timeDate:Object,
    },
    watch:{
        updatePlace:{
            handler: function (val, oldVal) {
                var paramsObj = {
                    area:val,
                   type: ["day","month","year"][this.dateIndex]
                }
               this.getResponse();
            },
            deep:true,
        },
        updateTurist:function(val){
            // this.rankItems = b16sJson[val]//data[全部][省][日]
            // console.log(val)
            // debugger
            // console.log(d9sJson[this.updatePlace][this.dateChose[this.dateIndex].context])
            this.getResponse();
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
        },
        dateIndex:function(val){
            var paramsObj = {
                area:this.updatePlace,
                type: ["day","month","year"][val]
            }
             this.getResponse(paramsObj);
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
        d9ss,
    },
    methods:{
        getResponse(paramsObj){
            
            this.$axios.get('http://120.55.190.57/qy/api/command/getCommandScenicTrackDetail',{params:paramsObj}).then(r => {
                
                if(r.data.code ==="200"||r.data.code ===200){
                    this.rankItems = r.data.data;
                    this.rankItems.forEach((item,index)=>{
                        this.rankItems[index].track = item.track.split("==>").slice(0,3) ;
                    })
                }
            })
        }
    },
    created () {
        var paramsObj = {
                area:this.updatePlace,
                name:this.updateTurist,
                type:"day"
            }
        this.getResponse(paramsObj);
    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose);
         this.$emit('showDoubleSelect');
    }
  }
</script>

