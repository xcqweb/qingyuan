<template>
    <div class="b6">
        <div class="img">
            <img :src="weatherImg"/>
        </div>
        <div class="weather">阴天</div>
        <div class="temperature">26℃</div>
        <font class="scenic">{{scenics}}</font>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'b6ss',
  props:{
        idName:String,
        scenics:String,
    },
  data () {
    return {
        weatherImg:require('../../../../assets/images/weather-blue/yin.png'),
    }
  },
  computed: { 
  },
  methods: {
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.b6{
    
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    color:#1da7fe;
    position: relative;
    div{
        position: absolute;
        transform: translate(0,-50%);
        top: 60%;
        width: 30%;
    }
    .scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
    }
    .img{
        width:20%;
        text-align: center;
        height: auto;   
        left: 20%;
    }
    .weather{
        left: 50%;
    }
    .temperature{
        right: -5%;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>