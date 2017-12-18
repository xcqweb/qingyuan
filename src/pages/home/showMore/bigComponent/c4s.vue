<style lang="less" scoped>
.c4s{
    width:90%;
    height:80%;
    transform: translate(5%,10%);
    .item{
        width:22%;
        height:42%;
        float: left;
        position: relative;
    }
}
</style>
<template>
    <div class="c4s">
        <div v-for="(item,index) in scenics" class="item" :key="idName[index]">
            <menWomen 
            class="c211" 
            :idName='idName[index]' 
            :scenics='item' 
            :women ='items[index].women' 
            :men = 'items[index].men'
            ></menWomen>
        </div>
    </div>
</template>

<script>
import menWomen from '@/pages/home/showMore/smallComponent/men_women.vue'
  export default {
    name:'C4S',
    props:{
        scenics:Array,
    },
    data() {
      return {
          idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            items:[
                {idName:'c4s1',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s2',women:5.2,men:4.8,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.3,men:4.7,scenics:'风林胜风景区'},
                {idName:'c4s4',women:4.9,men:5.1,scenics:'风林胜风景区'},
                {idName:'c4s1',women:4.6,men:5.4,scenics:'风林胜风景区'},
                {idName:'c4s2',women:4,men:6,scenics:'风林胜风景区'},
                {idName:'c4s3',women:5.5,men:4.5,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
                {idName:'c4s4',women:5.4,men:4.6,scenics:'风林胜风景区'},
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
        menWomen,
    },
    methods:{

    },
    mounted(){
        
    }
  }
</script>

