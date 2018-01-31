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
<<<<<<< HEAD
        <div v-for="(item , index) in scenics" class="item" :key="idName[index]">
=======
        <div v-for="(item , index) in responseData" class="item" :key="idName[index]">
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
<<<<<<< HEAD
            :scenics='item'
            :women ='women'
            :men = 'men'
            :isActive ='isActive'
=======
            :scenics='item.name'
            :women ='item.femaleNum'
            :men = 'item.maleNum'
            :isActive ='isActive' 
            :dateIndex ='dateIndex'
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
          ></menWomen>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
  //下面两个需按顺序引入
=======
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
import menWomen from '@/pages/home/showMore/smallComponent/men_women.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'C4S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        isActive:Boolean,
        dateIndex:Number,
<<<<<<< HEAD
        title:String
=======
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
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    },
    data() {
      return {
          //idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
<<<<<<< HEAD
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
//            items:[
//                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
//                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
//                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
//                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
//                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
//                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
//                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
//                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
//                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
//          ],
        //模拟数据
        responseData:{
          "全部":{
              "2":[
                {idName:'c4s1',women:5,men:5,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.7,men:4.3,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.8,men:5.2,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:3.2,men:6.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:6.4,men:3.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'}
              ],
              "1":[
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:6.6,men:3.4,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.6,men:4.4,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.1,men:5.9,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'}
              ],
              "0":[
                {idName:'c4s1',women:7,men:3,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5,men:5,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.7,men:4.3,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.6,men:4.4,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:3.5,men:6.5,scenics:'风林胜风景区'},
                {idName:'c4s3',women:7.5,men:2.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5,men:5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.6,men:4.4,scenics:'风林胜风景区'}
              ]
            },
          "清城":{
            "2":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.4,men:4.6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.8,men:5.2,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.7,men:5.3,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'}
            ]
          },
          "清新":{
            "2":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4.8,men:5.2,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:5,men:5,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.3,men:5.7,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'}
            ]
          },
          "佛冈":{
            "2":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:3,men:7,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5,men:5,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:6.1,men:3.9,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4.5,men:5.5,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'}
            ]
          },
          "英德":{
            "2":[
              {idName:'c4s1',women:4.5,men:5.5,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:7,men:3,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.3,men:5.7,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
              {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'}
            ]
          },
          "连州":{
            "2":[
              {idName:'c4s1',women:4.2,men:5.8,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:5.8,men:4.2,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:7,men:3,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ]
          },
          "连南":{
            "2":[
              {idName:'c4s1',women:5.5,men:4.5,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.1,men:4.9,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:6.9,men:3.1,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:4.5,men:5.5,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'}
            ]
          },
          "连山":{
            "2":[
              {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ],
            "1":[
              {idName:'c4s1',women:5.7,men:4.3,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ],
            "0":[
              {idName:'c4s1',women:4.9,men:5.1,scenics:'风林胜风景区'},
              {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
              {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
              {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'}
            ]
          },
          "阳山":{
          "2":[
            {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
            {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
            {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'}
          ],
          "1":[
            {idName:'c4s1',women:6,men:4,scenics:'风林胜风景区'},
            {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
            {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'}
          ],
          "0":[
            {idName:'c4s1',women:5.3,men:4.7,scenics:'风林胜风景区'},
            {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
            {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'}
          ]
        }
        }
=======
        //模拟数据
        dateChose:[
          {context:'日',class:'chose'},
          {context:'月',class:''},
          {context:'年',class:''},
          ],
        responseData:[],
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
      }
    },
    components: {
        menWomen,
    },
    methods:{
<<<<<<< HEAD
    },
    watch:{
      dateIndex:function(val){
      }
    },
    mounted(){
      console.log(this.responseData[this.title])
    },
    computed:{
      women(){
        return this.responseData[this.title][this.dateIndex];
      },
      men(){
        return this.responseData[this.title][this.dateIndex];
      }
=======
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
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    }
  }
</script>

