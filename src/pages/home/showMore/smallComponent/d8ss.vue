<template>
    <div class="ta_c">
        <div class='rotImg'>
            <div class="Rotation1 img ">
                <img :src="item.circle"/>
            </div>
            <div class="Rotation2 img ">
                <img :src="item.cut"/>
            </div>
            <div class="Rotation3 img ">
                <img :src="item.half"/>
            </div>
            <div class=" line">
                <img :src="item.line"/>
            </div>
            <font>{{overcrow}}</font>
        </div>
        <div class="scenic">{{scenics}}</div>  
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: '',
   props:{
        idName:String,
        scenics:String,
        overcrow:Number,
    },
    watch:{
        isActive:function(val){

        }
    },
  data () {
    return {
        items:[
            {
                circle:require('../../../../assets/images/circle/violet/item-circle.png'),
                cut:require('../../../../assets/images/circle/violet/cut.png'),
                half:require('../../../../assets/images/circle/violet/half.png'),
                line:require('../../../../assets/images/circle/violet/line.png'),
            },
            {
                circle:require('../../../../assets/images/circle/red/item-circle.png'),
                cut:require('../../../../assets/images/circle/red/cut.png'),
                half:require('../../../../assets/images/circle/red/half.png'),
                line:require('../../../../assets/images/circle/red/line.png'),
            },
        ],
        percent:'80%',
        text:'较为拥堵',
    }
  },
  computed: {
      item:function(){
          if(this.overcrow>5){
              return this.items[1];
          }else{
              return this.items[0];
          }
      }
  },
  methods: {
    getwidth(){
        
    }
  },
  mounted(){
    
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
    }
.ta_c{
    height: 100%;
    width: 100%;
    position: relative;
    .rotImg{
        height: 100%;
        width: 100%;
        top:25%;
        left: 0;
        position: relative;
    }
}
img{                  
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}
@keyframes rotation2{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(-360deg);}
}
.Rotation1{
-webkit-transform: rotate(360deg);
animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}
.Rotation2{
-webkit-transform: rotate(360deg);
animation: rotation2 3s linear infinite;
-moz-animation: rotation2 3s linear infinite;
-webkit-animation: rotation2 3s linear infinite;
-o-animation: rotation2 3s linear infinite;
}
.Rotation3{
-webkit-transform: rotate(360deg);
animation: rotation 3s linear infinite;
-moz-animation: rotation 3s linear infinite;
-webkit-animation: rotation 3s linear infinite;
-o-animation: rotation 3s linear infinite;
}

.img{
    height: auto;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
}

.line{
    height: auto;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}
font{
    color: white;
    position: absolute;
    display: inline-block;
    top: 30%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    height: 20px;
    width: 40px;
    font-size:1.3rem;
}
</style>