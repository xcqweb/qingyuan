<template>
  <div class="vtopThree">
    <ul>
        <li v-for="(item,index) in items">
            <p>{{item.title}}</p>
            <div><p :style="{ 'color': item.color }" @click="commentType(index)" v-cloak>{{item.nub}}</p></div>
            <p :style="{ 'color': item.color }">{{item.font}}</p>
            <p :style="{ 'background-color': item.color }"></p>
        </li>
        
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import Bus from '@/common/js/bus'
export default {
    name: 'a3',
    mixins:[optionProps],
    props:{
        mainPageSelect:Object,
    },
    watch:{
        updatePlace:{
            handler: function (val, oldVal) {
            		//console.log(this.updatePlace)
            		var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                category:this.slectType+1,
           	 }
                this.getResponse(paramsObj);
            },
            deep:true,
        },
        slectType:function(val){
        	
        		var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                category:val+1,
           	 }
                this.getResponse(paramsObj);
        }
    },
  data () {
    return {
        items:[
            {title:'',nub:'好评数',font:'',color:'#6dffeb'},
            {title:'',nub:'中评数',font:'',color:'#ffe86e'},
            {title:'',nub:'差评数',font:'',color:'#ff719c'},
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
                            item.font =r.data.data.goodNum+'';
                        }else if(index ===1){
                            item.font =r.data.data.badNum+'';
                        }else if(index ===2){
                            item.font =r.data.data.troubleNum+'';
                        }
                    })
                   
                }
            })
        },
        //点击好评差评
        commentType(data){
        	Bus.$emit('comType',data+1)
        }
  },
  created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
                category:this.slectType+1,
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
        height:50%;
        width:132/464*100%;
        margin-left:4%;
        margin-top: 15%;

        p:nth-of-type(1){
            font-size: 36px;
            color: white;
        }
        div{
            display:table;
            height:65%;
            width:100%;
            p:hover{
            	font-weight: bold;
            	font-size: 38px !important;
            }
            p{
                color: white;
                height:90%;
                width:100%;
                font-size: 36px !important;
                display: table-cell;
                vertical-align:middle;
                text-align:center;
                letter-spacing: 8px;
                cursor: pointer;
            }
        }
        p:nth-of-type(2){
            font-size: 36px;
            margin-bottom:6px;
            letter-spacing: 6px;
        }
        p:nth-of-type(3){
            height:5px;
            width:70%;
            margin-left: 15%;
        }
    }
}
</style>