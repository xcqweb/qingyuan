<style lang="less" scoped>
.d7s{
    width:90%;
    height:80%;
    .item{
        width:20%;
        height:44%;
        float: left;
        margin-left:2%;
        position: relative;
    }
    ul{
        width:80%;
        height: 8%;
        transform: translate(10%,0);
        text-align: center;
        li{
            margin-top:10px;
            color:white;
            padding: 0px 20px;
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
    <div class="d7s">
        <ul class="">
            <li v-for='item in ageitems'><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
        </ul>
        <div v-for="(item,index) in propsToSmall" :key="idName[index]" class="item">
            <d7ss
            class="c211"
            :idName='idName[index]'
            :scenics='item.name'
            :isActive ='isActive'
            :datas="item"
            :dateIndex = 'dateIndex'
            :index="index"
            ></d7ss>
        </div>
    </div>
</template>

<script>
import d7ss from '@/pages/home/showMore/smallComponent/d7ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
// import d7data from '@/pages/home/showMore/bigComponent/json/d7-payway.json'
  export default {
    name:'d7s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        isActive:Boolean,
        titles:String,
        dateIndex:Number,
        timeDate:Object,
    },
    watch:{
        titles:function(val){
            var paramsObj = {
                area:this.titles,
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
        },
        dateIndex:function(){
            var paramsObj = {
                area:this.titles,
                type:["day","month","year"][this.dateIndex]
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
            propsToSmall:[],
            ageitems:[{
              year:'1000元以下',
              color:'#368df7'
            },
              {
                year:'1001元-3000元',
                color:'#75cf65',
              },
              {
                year:'3001元以上',
                color:'#fe6e40',
              },
            ],
        // reoponseData:d7datad

      }
    },
    components: {
        d7ss,
    },
    methods:{
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getSpendMoneyPowerDetailData',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    this.propsToSmall = r.data.data; 
                }
            })
        }
    },
    computed:{

    },
    created(){
      
   },
    mounted(){
        var paramsObj = {
                area:"全部",
                type:"day",
            }
       this.getResponse(paramsObj);
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

