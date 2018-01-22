<style lang="less" scoped>
.c2s{
    width:90%;
    height:80%;
    .c211{
        width:22%;
        height:38%;
        float: left;
    }
    ul{
        width:80%;
        height: 8%;
        transform: translate(10%,0);
        text-align: center;
        li{
            margin-top:10px;
            color:white;
            width:10%;
            float: left;
            .circle{
                display:inline-block;
                height:8px;
                width:8px;
                margin-right:8px;
                border-radius:4px;
                background-color:red;
            }
        }
    }
}
</style>
<template>
    <div class="c2s">
        <ul class="">
            <li v-for='item in ageitems'><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
        </ul>
        <nianling 
        class="c211" 
        v-if="c2sShow"
        v-for="(item,index) in nianItems" 
        :key="idName[index]"
        :idName='idName[index]' 
        :pieData='item' 
        :scenic = 'item["name"]'
        :isActive ='isActive' 
        :dateIndex ='dateIndex'
        ></nianling>
    </div>
</template>

<script>
import nianling from '@/pages/home/showMore/smallComponent/nialing_pie.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'C2S',
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
    data() {
      return {
        //   idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            c2sShow:true,
            nianItems:[
        ],
             dateChose:[
                {context:'日',class:'chose'},
                {context:'月',class:''},
                {context:'年',class:''},
            ],
            ageitems:[{
                year:'0-19',
                color:'#FF8885',
            },

            {
                year:'19-25',
                color:'#57ABFE',
            },
            {
                year:'26-35',
                color:'#368DF7',
            },
            {
                year:'36-45',
                color:'#7E6AF6',
            },
            {
                year:'46-55',
                color:'#E39A50',
            },
            {
                year:'55以上',
                color:'#FFCD38',
            },
            ],
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            dataItems:[
               
          ]
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
        nianling,
    },
    methods:{
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getDayAgeDetailData',{params:paramsObj}).then(r => {
                    
                if(r.data.code ==="200"||r.data.code ===200){
                    this.nianItems = r.data.data; 
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

        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

