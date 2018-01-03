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
        v-if="c2sShow"
        v-for="(item,index) in nianItems" 
        :key="idName[index]"
        :idName='idName[index]' 
        :pieData='item["data"]' 
        :scenic = 'item["name"]'
        :isActive ='isActive'
        ></nianling>
    </div>
</template>

<script>
import nianling from '@/pages/home/showMore/smallComponent/nialing_pie.vue'
import c2sJson from '@/pages/home/showMore/bigComponent/json/c2s.json'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'C2S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
         isActive:Boolean,
         dateIndex:Number,
         updatePlace:String,
    },
    watch:{
        dateIndex:function(val){
            let _self = this;
            this.nianItems = c2sJson[this.updatePlace][this.dateChose[val].context];
            this.c2sShow = false;
            setTimeout(() =>{_self.c2sShow = true},0)
        },
        updatePlace:function(val){
            let _self = this;
            this.nianItems = c2sJson[val][this.dateChose[this.dateIndex].context];
            this.c2sShow = false;
            setTimeout(() =>{_self.c2sShow = true},0)
        }
    },
    data() {
      return {
        //   idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
            responseDataObj:c2sJson,
            c2sShow:true,
            nianItems:[
            {"name":"飞霞风景名胜区",
                    "data":[
                    {"value":15, "name":"0-19"},
                    {"value":17, "name":"19-25"},
                    {"value":22, "name":"26-35"},
                    {"value":22, "name":"36-45"},
                    {"value":19, "name":"46-55"},
                    {"value":5, "name":"55以上"}
                ]
            },
            {"name":"牛鱼嘴原始生态风景区","data":[
                {"value":12, "name":"0-19"},
                {"value":11, "name":"19-25"},
                {"value":24, "name":"26-35"},
                {"value":18, "name":"36-45"},
                {"value":27, "name":"46-55"},
                {"value":8, "name":"55以上"}
            ]},
            {"name":"天子山瀑布风景区","data":[
                {"value":8, "name":"0-19"},
                {"value":12, "name":"19-25"},
                {"value":19, "name":"26-35"},
                {"value":24, "name":"36-45"},
                {"value":25, "name":"46-55"},
                {"value":12, "name":"55以上"}
            ]},
            {"name":"白庙渔村","data":[
                {"value":10, "name":"0-19"},
                {"value":15, "name":"19-25"},
                {"value":20, "name":"26-35"},
                {"value":27, "name":"36-45"},
                {"value":19, "name":"46-55"},
                {"value":9, "name":"55以上"}
            ]},
            {"name":"飞来寺","data":[
                {"value":9, "name":"0-19"},
                {"value":13, "name":"19-25"},
                {"value":23, "name":"26-35"},
                {"value":26, "name":"36-45"},
                {"value":18, "name":"46-55"},
                {"value":11, "name":"55以上"}
            ]},
            {"name":"美林湖及大家元摩天轮片区","data":[
                {"value":13, "name":"0-19"},
                {"value":8, "name":"19-25"},
                {"value":26, "name":"26-35"},
                {"value":22, "name":"36-45"},
                {"value":22, "name":"46-55"},
                {"value":9, "name":"55以上"}
            ]}
        ],
             dateChose:[
                {context:'日',class:'chose'},
                {context:'月',class:''},
                {context:'年',class:''},
            ],
            ageitems:[{
                year:'0-19',
                color:'#FF8885',
            },

            {
                year:'19-25',
                color:'#57ABFE',
            },
            {
                year:'26-35',
                color:'#368DF7',
            },
            {
                year:'36-45',
                color:'#7E6AF6',
            },
            {
                year:'46-55',
                color:'#E39A50',
            },
            {
                year:'55以上',
                color:'#FFCD38',
            },
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
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

