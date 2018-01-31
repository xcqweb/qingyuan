<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
}
ul{
    margin-top:12%;
    height:80%;
    width:100%;
    box-shadow:3px 4px 20px #191970;
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
    width:35%;
    text-align: left;
    margin-left: 6%;
}
.cell2{
    float:left;
    width:31%;
    text-align: center;
}
.cell3{
    float:left;
    width:33%;
    text-align: center;
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
    }
}
.up{
  background-image: url('../../../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../../../assets/images/down.png');
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}
li:nth-of-type(1){
    text-align: center !important;
    .cell1{
        width:31%;
        margin-left:12%;
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
.scenic{
    text-align: center;
    color: white;
    width:100%;
    height: 1.2rem;
    bottom:0;
    position: absolute;
}
</style>
<template>
  <div class="c8">
    <ul>
        <li for='item in items'>
            <div class="cell1">
                来源地(省)
            </div>
            <div class="cell2">
                人数
            </div>
            <div class="cell3">
                占比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}、{{item.province}}
            </div>
            <div class="cell2">
                {{item.num}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.rate}}%</span>
                <!-- <span class='footerRise' :class='item.rise'></span> -->
            </div>
        </li>
         <div class="scenic">{{scenics}}</div>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
    name:'c8ss',
    props:{
        idName:String,
        scenics:String,
    },
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
        items:[
                // {
                // num:'32,001',province:'广东省 ',rise:'up',rate:'4.2%',
                // },
                // {
                // num:'26,102',province:'浙江省 ',rise:'down',rate:'3.3%',
                // },
                // {
                // num:'13,003',province:'湖南省 ',rise:'up',rate:'23.1%',
                // },
                // {
                // num:'10,304',province:'湖北省',rise:'up',rate:'13.7%',
                // },
                // {
                // num:'8,405',province:'陕西省',rise:'up',rate:'19.2%',
                // },
                // {
                // num:'6,326',province:'江西省 ',rise:'up',rate:'13.2%',
                // }
            ],
      }
    },
    components:{},
    methods:{
        getResponse(){
            let _self = this ;
            this.$axios.get(API_URL+'/qy/api/view/getTouristSourceData').then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                    _self.items= r.data.data;
                      r.data.data.forEach( (item,index) =>{
                         _self.items[index].num =_self.$Rw.string_until.addPoint(item.num)
                    } )
                }
            })
        },
        addDot(num){
            this.$Rw.string_until.addPoint(num)
        }
    },
    created(){
        this.getResponse()
    },
}
</script>


