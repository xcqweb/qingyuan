<style lang="less" scoped>
.c8s{
    width:90%;
    height:80%;
    .item{
        width:20%;
        height:44%;
        float: left;
        margin-left:2%;
        position: relative;
    }
}
ul{
    width:80%;
    margin-left: 10%;
    li{
        float: left;
        width: 20%;
        margin-top: 3rem;
        
    }
}
</style>
<template>
    <div class="c8s">
         <ul>
            <li v-for='item in items' :style="{color:item.color}"><span class="circle" :style="{backgroundColor: item.color}"></span>{{item.year}}</li>
        </ul>
        <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <c10ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            ></c10ss>
        </div>
    </div>
</template>

<script>
import c10ss from '@/pages/home/showMore/smallComponent/c10ss.vue'
  export default {
    name:'c10s',
    props:{
        scenics:Array,
    },
    data() {
      return {
          items:[{
                year:'微信',
                color:'#368df7',
            },
            {
                year:'公众号',
                color:'#fe6e40',
            },
            {
                year:'微博',
                color:'#75cf65',
            },
            {
                year:'朋友介绍',
                color:'#ffd800',
            },
            {
                year:'其他',
                color:'#c184ff',
            }
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
        c10ss,
    },
    methods:{

    },
    mounted(){
        
    }
  }
</script>

