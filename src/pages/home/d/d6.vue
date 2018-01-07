<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size:2rem;
        font{
            margin-left: .3rem;
            display: inline-block;
            color:#ffd800;
            font-size: 1.2rem;
        }   
    }
    font{
        display:block;
        color:#43dbff;
        font-size:1.5rem;
        letter-spacing: .2rem;
    }
    .b6_top{
        position:absolute;
        top:20%;
        width:100%;
        height:40%;
    }
    .b6_bottom{
        position:absolute;
        bottom:0;
        width:100%;
        height:40%;
    }
}
</style>

<template>
    <div class="b6">
        <div class="b6_top">
            <span>{{dataMsg[0].num}}<font>人次</font></span>
            <font>当前客流总数</font>
        </div>
        <div class="b6_bottom" v-show="level_xs">
            <span>{{dataMsg[2].num}}<font>人次</font></span>
            <font>昨日客流总数</font>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'
import a1sJson from '@/pages/home/showMore/bigComponent/json/a1s.json'
export default {
    name:'d6',
    mixins: [adaptation],
     props:{
        mainPageSelect:Object,
    },
    watch:{
        mainPageSelect:{
            handler: function (val, oldVal) {
                let _self = this;
                this.dataMsg = a1sJson[val.place]["年"][0]["data"];      
            },
            deep:true,
        }
    },
    data () {
        return {
            dataMsg:a1sJson["全部"]["年"][0]["data"],
        }
    },
    components:{

    },
    computed: { 

    },
    methods: {
        addDot(nub){
                var n= nub;
                var m =n +'',
                len= m.length
                if (len>3) {
                var aa=len-3
                var bb=m.slice(aa,len)
                var cc=m.slice(0,aa)
                m=cc+','+bb
                }
                return m
            }
    },
    mounted(){
    },  
}
</script>

