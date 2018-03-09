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
        height:8rem;
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
.cell1,.cell2,.cell3,.cell4,.cell5{
        width:20%;
        float: left;
        text-align: center;
}
.cell4{
    height: 90%;
    overflow-y: scroll;
    text-align: left;
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
    .cell1,.cell2,.cell3,.cell4,.cell5{
        width:20%;
    }
    .cell4{
        height: 90%;
        overflow-x: hidden;
        text-align: center;
    }
}
li:nth-of-type(2){
    box-shadow:3px 4px 20px #191970;
}
li:nth-of-type(2n){
    box-shadow:3px 4px 20px #191970;

}
li:nth-of-type(2n+3){
    box-shadow:3px 4px 20px #191970;

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
                景区
            </div>
            <div class="cell2">
                发布平台
            </div>
            <div class="cell3">
                用户昵称
            </div>
            <div class="cell4">
               评论内容
            </div>
            <div class="cell5">
                发布时间
            </div>
        </li>
        <li v-for='(item,index) in rankItems'>
            <div class="cell1">
               {{item.name}}
            </div>
            <div class="cell2">
                 {{item.source}}
            </div>
            <div class="cell3">
                {{item.uid}}
            </div>
            <div class="cell4">
                {{item.con}}
            </div>
            <div class="cell5">
                 {{item.date}}
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
    name:'d9',
    props:{
        rankItems:Array,
    },
    data(){
        return{
        
      }
    },
    components:{}
}
</script>