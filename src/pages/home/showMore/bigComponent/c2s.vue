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
        v-for="(item,index) in scenics" 
        :key="idName[index]"
        :idName='idName[index]' 
        :pieData='dataItems[index]' 
        :scenic = 'scenics[index]'
        :isActive ='isActive'
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
    },
    data() {
      return {
        //   idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            ageitems:[{
                year:'0-17',
                color:'#FF8885',
            },
            {
                year:'18-24',
                color:'#57ABFE',
            },
            {
                year:'25-29',
                color:'#368DF7',
            },
            {
                year:'30-34',
                color:'#7E6AF6',
            },
            {
                year:'35-39',
                color:'#E39A50',
            },
            {
                year:'40-44',
                color:'#FFCD38',
            },
            {
                year:'45-49',
                color:'#4EBBFC',
            },
            {
                year:'50-54',
                color:'#75CF65',
            },
            {
                year:'55以上',
                color:'#B8E986',
            }
            ],
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            dataItems:[
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                 [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
                [
                    {value:335, name:'0-17'},
                    {value:231, name:'18-24'},
                    {value:174, name:'25-29'},
                    {value:135, name:'30-34'},
                    {value:237, name:'35-39'},
                    {value:432, name:'40-44'},
                    {value:135, name:'45-49'},
                    {value:93, name:'50-54'},
                    {value:111, name:'55以上'},
                ],
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

    },
    mounted(){

    }
  }
</script>

