<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.8rem;
    }
}
ul{
    margin-top:3%;
    height:80%;
    width:100%;
    
    li{
        height:33%;
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
    .header{
        height: 15%;
        background-color:#1f3f9d;
    }
}
.cell1{
    float:left;
    width:20%;
    text-align: left;
    margin-left: 6%;
}
.cell2{
    float:left;
    width:60%;
    text-align: center;
    .cell2_box{
        float: left;
        width: 33%;
        div:nth-of-type(1){
            float: left;
            width:80%;
        }
        div:nth-of-type(2){
            float: left;
            width:20%;
        }
    }
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
        width:20%;
    }
    .cell2{
        width:60%;
    }
    .cell3{
        width:20%;
    }
}
li:nth-of-type(2){
    box-shadow:3px 4px 20px #191970;
    &:hover{
                background-color:#3c69bd;
            }
}
li:nth-of-type(2n){
    box-shadow:3px 4px 20px #191970;
    &:hover{
                background-color:#3c69bd;
            }
}
li:nth-of-type(2n+3){
    box-shadow:3px 4px 20px #191970;
    &:hover{
                background-color:#3c69bd;
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
</style>
<template>
  <div class="c8">
    <ul>
        <li class="header">
            <div class="cell1">
                排名
            </div>
            <div class="cell2">
                路线
            </div>
            <div class="cell3">
                人气<font>(人)</font>
            </div>
        </li>
        <li v-for='(item,index) in rankItems'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell2">
                <div class="cell2_box" v-for = "(ite,i) in item.track " >
                    <div >{{ite}}</div>
                    <div v-if=" i+1 < item.track.length">→</div>
                </div>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.num}}</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// import d9sJson from '@/pages/home/showMore/bigComponent/json/d9s.json'
export default {
    name:'d9',
    props:{
        rankItems:Array,
    },
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
      }
    },
    components:{}
}
</script>