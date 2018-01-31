<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:2%;
        display:block;
        color:#ffd800;
        font-size:1.5rem;
        font{
            margin-left: .3rem;
            display: inline-block;
            color:#ffd800;
            font-size: 1.1rem;
        }   
    }
    font{
        display:block;
        color:#43dbff;
        font-size:1.2rem;
        letter-spacing: .2rem;
    }
    .b6_top{
        text-align: center;
        position:absolute;
        top:35%;
        width:100%;
        height:40%;
    }
    .b6_bottom{
        position:absolute;
        text-align: center;
        bottom:0;
        width:100%;
        height:40%;
    }
    .scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:10%;
        position: absolute;
        
    }
}
</style>

<template>
    <div class="b6">
        <div class="b6_top">
<<<<<<< HEAD
            <span>68，288<font>人次</font></span>
            <font>当前客流总数</font>
        </div>
        <div class="b6_bottom" >
            <span>86，188<font>人次</font></span>
=======
            <span>{{addDot(dataItem.currentNum)}}<font>人次</font></span>
            <font>当前客流总数</font>
        </div>
        <div class="b6_bottom" >
            <span>{{addDot(dataItem.yesterdayNum)}}<font>人次</font></span>
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
            <font>昨日客流总数</font>
        </div>
        <div class="scenic">{{scenics}}</div>
    </div>
</template>

<script>
import Vue from 'vue'
// import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name:'d6ss',
    props:{
        idName:String,
        scenics:String,
<<<<<<< HEAD
=======
        dataItem:Object,
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    },
    // mixins: [adaptation],
    data () {
        return {

        }
    },
    components:{

    },
    computed: { 

    },
    methods: {
<<<<<<< HEAD

=======
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
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    },
    mounted(){
    
    },
}
</script>

