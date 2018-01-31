<style lang="less" scoped>
.b16{
    position:relative;
    height:100%;
    width:100%;
    .text{
        position: absolute;
        top: 10%;
        width: 100%;
        height: 10%;
        div{
            width: 49%;
            height: 100%;
            span{
                display: block;
                color: #43dbff;
                font-size: .8rem;
            }
            font{
                margin-top: 10px;
                display: block;
                color: #ffe200;
                font-size: 1.2rem;
            }
        }
        div:nth-of-type(1){
            float:left;
        }
        div:nth-of-type(2){
            float:right;
        }
    }
    .map{
        position: absolute;
        bottom: 0;
        width: 100% !important;
        height: 80% !important;
    }
}
</style>

<template>
    <div class="b16">
    <div class="text"
     :style="{}"
     v-show = 'changeModel' 
    >
        <div>
            <span>2018年累计接待游客(人)</span>
            <font>{{yearSum}}</font>
        </div>
        <div>
            <span>1月份持续接待游客(人)</span>
            <font>{{montSum}}</font>
        </div>
    </div>
    <vmap class='map' 
    :rankItems ='rankItems' 
    :idName= 'idName'
    ></vmap>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import vmap from '@/pages/home/showMore/smallComponent/guonei_map.vue'
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name: 'b16',
    mixins: [adaptation],
    props:['placeName',],
    data () {
        return {
            rankItems: [
                {
                "num": 4323,
                "city": "深圳市"
                },
                {
                "num": 2323,
                "city": "广州市"
                },
                {
                "num": 1323,
                "city": "清远市"
                },
                {
                "num": 823,
                "city": "珠海市"
                },
                {
                "num": 623,
                "city": "东莞市"
                },
                {
                "num": 423,
                "city": "中山市"
                }
            ],
            yearSum:'3,373,403',
            montSum:'2,373,403',
            idName:"b16Echarts",
        }
    },
    components:{
        vmap
    },
    computed: { 

    },
    methods: {
    getResponse(){
            this.$axios.get(API_URL+'/qy/api/view/getInProvinceData').then(r => {
                
                if(r.data.code ==="200"||r.data.code ===200){
                    this.montSum =this.$Rw.string_until.addPoint(r.data.data.monthSum);
                    this.yearSum =this.$Rw.string_until.addPoint(r.data.data.yearSum);
                    this.rankItems = r.data.data.topSixCity;
                }
            })
        }
    },
    created(){
       this.getResponse();
   },
    mounted(){
    
    },
}
</script>

