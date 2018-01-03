<style lang="less" scoped>
   .b16s{
        height: 91%;
        width:100%;
        overflow: hidden;
        .midContent{
            height: 60%;
            width:100%;
            .vMap{
                width:49%;
                height: 100%;
                display:inline-block;
            }
            .rank{
                width:40%;
                height: 100%;
                display:inline-block;
                transform: translate(0,-12%)
            }
        }
        .buttom{
            height: 40%;
            width:100%;
            margin-top:3rem;
            ul{
                width:90%;
                height:100%;
                transform: translate(5%,0);
                li{
                    width:20%;
                    height: 45%;
                    float: left;
                    .title{
                        width: 100%;
                        height: 40%;
                        text-align: center;
                        transform: translate(0,-50%);
                        font-size: 16px;
                        color: #43dbff;
                    }
                    .context{
                        width: 100%;
                        height: 50%;
                        text-align: center;
                        transform: translate(0,-50%);
                        color:#ffe200;
                        font-size: 20px;
                        .footerRise{
                            display: inline-block;
                            transform: translateY(10%);
                        }
                        .up{
                            background-image: url('../../../../assets/images/up.png');
                            background-size: 100% 100%;
                            width: 8px;
                            height: 12.8px;
                        }
                        .down{
                            background-image: url('../../../../assets/images/down.png');
                            background-size: 100% 100%;
                            width: 8px;
                            height: 12.8px;
                        }
                    }
                }
            }
        }
        
   }
</style>
<template>
    <div class="b16s">
        <div class="midContent">
            <vmap  
            class="vMap"
            :isActive ='isActive' 
            :rankItems ='rankItems' 
            :updatePlace = 'updatePlace'
            ></vmap>
            <rank class="rank"
            :rankItems ='rankItems' 
            ></rank>
        </div>
        <div class="buttom">
            <ul >
                <li v-for='(item,index) in items'>
                    <div class="title">{{item.title}}</div>
                    <div class="context">{{item.context}}
                        <span class='footerRise' :class='item.rise'></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import rank from '@/pages/home/c/c8.vue'
import b16sJson from '@/pages/home/showMore/bigComponent/json/b16s.json'
import vmap from '@/pages/home/showMore/smallComponent/guonei_map.vue'
  export default {
    name:'B16S',
    props:{
        scenics:Array,
        isActive:Boolean,
        dateIndex:Number,
        updatePlace:String,
    },
    watch:{
        isActive:function(val){
            this.items=[
              {title:'2017年累计接待游客(万人)',context:'23.32',rise:''},
              {title:'2017年累计接待本地游客(万人)',context:'323.23',rise:''},
              {title:'2017年累本地游客与总游客占比',context:'23%',rise:''},
              {title:'2017年累国内游客与总游客占比',context:'87%',rise:''},
              {title:'12月份持续接待人数(万人)',context:'232.5',rise:''},
              {title:'12月份持续接待人数同比',context:'12.3%',rise:''},
              {title:'12月份持续接待人数环比',context:'23.2%',rise:'up'},
              {title:'12月份持续接待人数占比',context:'87.1%',rise:'up'},
          ]
        },
        updatePlace:function(val){
            this.rankItems = b16sJson[val]
        }
    },
    data() {
        
      return {
          rankItems:[
              {"place":"深圳市","numb":"415,686","rise":"up","percent":"37.85%"},
        {"place":"北京市","numb":"343,146","rise":"down","percent":"31.25%"},
        {"place":"武汉市","numb":"285.127","rise":"up","percent":"25.96%"},
        {"place":"上海市","numb":"181,456","rise":"up","percent":"25.96%"},
        {"place":"成都市","numb":"52,036","rise":"up","percent":"16.52%"},
        {"place":"长春市","numb":"37,292","rise":"down","percent":"4.2%"}
          ],
          dateChose:[
                    {context:'日',class:'chose'},
                    {context:'月',class:''},
                    {context:'年',class:''},
                    ],
          items:[
              
              {title:'2018年累计接待游客(万人)',context:'237.34',rise:''},
              {title:'2018年累计接待市内游客(万人)',context:'84.75',rise:''},
              {title:'2018年累计接待市内游客占比',context:'35.71%',rise:'pu'},
              {title:'2018年累计接待市外游客(万人)',context:'152.59',rise:''},
              {title:'2018年累计接待市外游客占比',context:'64.29%',rise:'up'},
              
              {title:'1月接待游客(万人)',context:'237.34',rise:''},
              {title:'1月接待市内游客(万人)',context:'84.75',rise:''},
              {title:'1月接待市内游客占比',context:'35.71%',rise:'up'},
              {title:'1月接待市外游客(万人)',context:'152.59',rise:''},
              {title:'1月接待市外游客占比',context:'64.29%',rise:'up'},
          ]
      }
    },
    computed:{
        toChirldItems:function () {
            return 
        }
    },
    components: {
        vmap,rank
    },
    methods:{

    },
    mounted(){
        
        this.$emit('hideWeeks')
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

