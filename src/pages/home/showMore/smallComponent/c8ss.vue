<template>
  <div class="c8">
    <ul>
        <li for='item in items'>
            <div class="cell1">
               来源地( {{updateSheng}})
            </div>
            <div class="cell2">
                人数
            </div>
            <div class="cell3">
                同比
            </div>
            <div class="cell3">
                占比
            </div>
            <div class="cell3">
                环比
            </div>
        </li>
        <li v-for='(item,index) in rankItems'>
            <div class="cell1">
                {{index+1}}、{{item.place}}
            </div>
            <div class="cell2">
                {{addDot(item.numb)}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.tongRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.zhanRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.huanRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
    </ul>
    <div class="scenic">{{scenics}}</div>
  </div>
</template>

<script type="text/javascript">
export default {
    name:'c8',
    props:{
        rankItems:Array,
        updateSheng:String,
        scenics:String,
    },
    computed:{
        addDotItems:function () {
            
        }
    },
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
        // items:[
        //         {
        //         numb:'32,001',place:' 深圳市',rise:'up',percent:'4.2%',
        //         },
        //         {
        //         numb:'26,102',place:'上海市 ',rise:'down',percent:'3.3%',
        //         },
        //         {
        //         numb:'13,003',place:'广州市 ',rise:'up',percent:'23.1%',
        //         },
        //         {
        //         numb:'10,304',place:'北京市',rise:'up',percent:'13.7%',
        //         },
        //         {
        //         numb:'8,405',place:'武汉市',rise:'up',percent:'19.2%',
        //         },
        //         {
        //         numb:'6,326',place:'重庆市 ',rise:'up',percent:'13.2%',
        //         }
        //     ],
      }
    },
    methods:{
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
    components:{},
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
}
.scenic{
    text-align: center;
    color: white;
    width:100%;
    height: 1.2rem;
    bottom:0;
    position: absolute;
}
ul{
    margin-top:2%;
    height:90%;
    width:100%;
    li{
        height:14%;
        display:flex;
        align-items:center;
        justify-content:center;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
    }
}
.cell1{
    float:left;
    width:20%;
    text-align: left;
    margin-left: 3rem
}
.cell2{
    float:left;
    width:20%;
    text-align: center;
}
.cell3{
    float:left;
    width:20%;
    text-align: center;
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
    }
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
li:nth-of-type(1){
    text-align: center !important;
    .cell1{
        width:31%;
        margin-left:8%;
        margin-right:5%;
    }
    .cell2{
        width:22%;
    }
    .cell3{
        width:33%;
    }
}
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
