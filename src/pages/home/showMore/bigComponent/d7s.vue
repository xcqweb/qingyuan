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
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <d7ss
            class="c211"
            :idName='idName[index]'
            :scenics='scenics[index]'
            :isActive ='isActive'
            :datas="datas"
            :index="index"
            ></d7ss>
        </div>
    </div>
</template>

<script>
import d7ss from '@/pages/home/showMore/smallComponent/d7ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import d7data from '@/pages/home/showMore/bigComponent/json/d7-payway.json'
  export default {
    name:'d7s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        isActive:Boolean,
        title:String,
        dateIndex:Number
    },
    data() {
      return {
          dateChose:[
                {context:'日',class:'chose'},
                {context:'月',class:''},
                {context:'年',class:''},
            ],
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
        reoponseData:d7data

      }
    },
    components: {
        d7ss,
    },
    methods:{

    },
    computed:{
      datas(){
          
          
        let data = this.reoponseData[this.title][this.dateChose[this.dateIndex].context];
        return data;
      }
    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

