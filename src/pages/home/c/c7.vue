<<<<<<< HEAD
<template>
  <div class="c7">
    <ul>
        <li for='item in items'>
            <div class="cell1">
                景区
            </div>
            <div class="cell2">
                人数
            </div>
            <div class="cell3">
                同比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}、{{item.place}}
            </div>
            <div class="cell2">
                {{item.numb}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.percent}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import forEach from 'lodash/forEach';
export default {
    name:'c7',
    props:['placeAttractionsProps'],
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
      }
    },
    computed: { 
        items:function(){
            let arrb = [];
            forEach(this.placeAttractionsProps,function(value,key){
                if (key<4) {
                    arrb.push(value)
                }
                
            })
            return arrb
        }
    },
    components:{},
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.c7{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
}
ul{
    margin-top:15%;
    height:90%;
    width:100%;
    li{
        height:17%;
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
</style>
=======
<template>
  <div class="c7">
    <ul>
        <li for='item in items'>
            <div class="cell1">
                景区
            </div>
            <div class="cell2">
                人数
            </div>
            <div class="cell3">
                同比
            </div>
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}、{{item.place}}
            </div>
            <div class="cell2">
                {{item.numb}}<font>人</font>
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.percent}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import forEach from 'lodash/forEach';
export default {
    name:'c7',
    props:['placeAttractionsProps'],
    data(){
        return{
        msg:'Hello Vue 来自App.vue',
      }
    },
    computed: { 
        items:function(){
            let arrb = [];
            forEach(this.placeAttractionsProps,function(value,key){
                if (key<4) {
                    arrb.push(value)
                }
                
            })
            return arrb
        }
    },
    components:{},
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.c7{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
}
ul{
    margin-top:15%;
    height:90%;
    width:100%;
    li{
        height:17%;
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
</style>
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
