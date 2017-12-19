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
            ></d7ss>
        </div>
    </div>
</template>

<script>
import d7ss from '@/pages/home/showMore/smallComponent/d7ss.vue'
  export default {
    name:'d7s',
    props:{
        scenics:Array,
        isActive:Boolean,
    },
    data() {
      return {
            ageitems:[{
                year:'支付宝',
                color:'#368df7',
            },
            {
                year:'微信',
                color:'#75cf65',
            },
            {
                year:'现金',
                color:'#fe6e40',
            },
            ],
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
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
        d7ss,
    },
    methods:{

    },
    mounted(){
        
    }
  }
</script>

