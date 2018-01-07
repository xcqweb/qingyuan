<!--纬度正负面分析-->
<style lang="less" scoped>
  .d10s{
    width:90%;
    height:80%;
    .item{
      width:20%;
      height:44%;
      float: left;
      margin-left:2%;
      position: relative;
      margin-bottom: 30px;
    }
    .legend{
      margin: 15px 0px;
      span{
        line-height: 12px;
        color: #fff;
      }
      .front{
        display: inline-block;
        width: 30px;
        height: 12px;
        background-color: #76DBF7;
        border-radius: 4px;
        margin-right: 10px;
      }
      .reverse{
        display: inline-block;
        width: 30px;
        height: 12px;
        background-color: #BAE710;
        border-radius: 4px;
        margin: 0 10px;
      }
    }
  }
</style>
<template>
  <div class="d10s">
    <ul class="">
      <!--<li v-for='item in ageitems'><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>-->
    </ul>
    <p class="legend">
      <span class="front"></span><span>纬度正面</span>
      <span class="reverse"></span><span>纬度负面</span></p>
    <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
      <d10ss
        class="c211"
        :idName='idName[index]'
        :scenics='scenics[index]'
        :isActive ='isActive'
        :index="index"
      ></d10ss>
    </div>
  </div>
</template>


<script>
  import echarts from 'echarts';
  import showMoreData from '@/common/js/mixin/showMoreData.js'
  import d10ss from '@/pages/home/showMore/smallComponent/d10ss.vue'
  import data from '@/pages/home/showMore/d7-payway.json'
    export default {
        name:'d10s',
        mixins: [showMoreData],
        data () {
            return {
            }
        },
        components: {
          d10ss,
        },
        props: {
          scenics: Array,
          isActive: Boolean,
          title: String,
          dateIndex: Number
        },
        methods:{

        },
      computed:{
        datas(){
          //let data = this.reoponseData[this.title][this.dateIndex];
          //return data;
        }
      },
        mounted() {
         console.log(data[this.title][this.dateIndex]);
          //console.log(typeof this.title,this.dateIndex)
        }
    }
</script>
