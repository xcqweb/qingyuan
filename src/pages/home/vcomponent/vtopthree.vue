<template>
  <div class="vtopThree">
    <ul>
        <li v-for="item in items">
            <p>{{item.title}}</p>
            <div><p :style="{ 'color': item.color }">{{item.nub}}</p></div>
            <p :style="{ 'color': item.color }">{{item.font}}</p>
            <p :style="{ 'background-color': item.color }"></p>
        </li>
        
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'a3',
    props:{
        mainPageSelect:Object,
    },
    watch:{
        mainPageSelect:{
            handler: function (val, oldVal) {
                this.getResponse();
            },
            deep:true,
        },
    },
  data () {
    return {
        items:[
            {title:'',nub:'评论数',font:'',color:'#6dffeb'},
            {title:'',nub:'差评数',font:'',color:'#ffe86e'},
            {title:'',nub:'隐患数',font:'',color:'#ff719c'},
        ],
    }
  },
  computed: { 
  },
  methods: {
      getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/command/getCommandComments',{params:paramsObj}).then(r => {

                if(r.data.code ==="200"||r.data.code ===200){
                    this.items.forEach((item,index)=>{
                        if(index ===0){
                            item.font =r.data.data.totalNum+'';
                        }else if(index ===1){
                            item.font =r.data.data.badNum+'';
                        }else if(index ===2){
                            item.font =r.data.data.troubleNum+'';
                        }
                    })
                   
                }
            })
        }
  },
  created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
            }
       this.getResponse(paramsObj);
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.vtopThree{
    width:100%;
    height:100%;
}
ul{
    width:397/464*100%;
    height:174/216*100%;
    margin-top:8/216*100%;
    margin-left:33/464*100%;
    li{
        float:left;
        height:100%;
        width:132/464*100%;
        margin-left:4%;
        margin-top: 5%;

        p:nth-of-type(1){
            font-size: 1.1rem;
            color: white;
        }
        div{
            display:table;
            height:65%;
            width:100%;
            
            p{
                color: white;
                height:90%;
                width:100%;
                font-size: 1.2rem !important;
                display: table-cell;
                vertical-align:middle;
                text-align:center;
            }
        }
        p:nth-of-type(2){
            font-size: 1.4rem;
            margin-bottom:6px;
        }
        p:nth-of-type(3){
            height:5px;
            width:100%;
        }
    }
}
</style>