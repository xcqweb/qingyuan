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
                    width:25%;
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
            ></vmap>
            <rank class="rank"></rank>
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
import vmap from '@/pages/home/showMore/smallComponent/guonei_map.vue'
  export default {
    name:'B16S',
    props:{
        scenics:Array,
        isActive:Boolean,
    },
    data() {
      return {
          items:[
              {title:'2017年累计接待游客(人)',context:'323,232,523',rise:''},
              {title:'2017年累计接待本地游客(人)',context:'323,232,523',rise:''},
              {title:'2017年累本地游客与总游客占比',context:'23%',rise:''},
              {title:'2017年累国内游客与总游客占比',context:'87%',rise:''},
              {title:'6月份持续接待人数(人)',context:'232,523',rise:''},
              {title:'6月份持续接待人数同比',context:'2,143',rise:''},
              {title:'6月份持续接待人数环比',context:'232',rise:'up'},
              {title:'6月份持续接待人数占比',context:'87.1%',rise:'up'},
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
        vmap,rank
    },
    methods:{

    },
    mounted(){
        
    }
  }
</script>

