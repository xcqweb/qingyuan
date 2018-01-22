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
    <div class="c4s" v-if="isActive">
        <div v-for="(item , index) in responseData" class="item" :key="idName[index]">
            <!--<menWomen-->
            <!--class="c211"-->
            <!--:idName='idName[index]'-->
            <!--:scenics='item'-->
            <!--:women ='items[index].women'-->
            <!--:men = 'items[index].men'-->
            <!--:isActive ='isActive'-->
            <!--&gt;</menWomen>-->
          <menWomen
            class="c211"
            :idName='idName[index]'
            :index="index"
            :scenics='item.name'
            :women ='item.femaleNum'
            :men = 'item.maleNum'
            :isActive ='isActive' 
            :dateIndex ='dateIndex'
          ></menWomen>
        </div>
    </div>
</template>

<script>
import menWomen from '@/pages/home/showMore/smallComponent/men_women.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'C4S',
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
          //idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
        //模拟数据
        dateChose:[
          {context:'日',class:'chose'},
          {context:'月',class:''},
          {context:'年',class:''},
          ],
        responseData:[],
      }
    },
    components: {
        menWomen,
    },
    methods:{
		getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getDaySexDetailData',{params:paramsObj}).then(r => {
                    
                if(r.data.code ==="200"||r.data.code ===200){
                    this.responseData = r.data.data; 
                }
            })
        }
    },
    computed:{
//      women:{
//        get:function(){
//          return this.responseData[this.title][this.dateIndex];
//        },
//        set:function(val){
//          this.responseData[this.title][this.dateIndex] = val;
//        }
//      },
//      men:{
//        get:function(){
//          return this.responseData[this.title][this.dateIndex];
//        },
//        set:function(val){
//          this.responseData[this.title][this.dateIndex] = val;
//        }
//      }
      women(){

        return this.responseData[this.titles][this.dateIndex];
      },
      men(){
        return this.responseData[this.titles][this.dateIndex];
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

