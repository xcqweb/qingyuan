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
            <span>28,288<font>人次</font></span>
            <font>当前客流总数</font>
        </div>
        <div class="b6_bottom" v-show="level_xs">
            <span>86,188<font>人次</font></span>
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
                
            },
            deep:true,
        }
    },
    data () {
        return {
            dataMsg:a1sJson["全部"]["年"]
        }
    },
    components:{

    },
    computed: { 

    },
    methods: {

    },
    mounted(){
    
    },
}
</script>

