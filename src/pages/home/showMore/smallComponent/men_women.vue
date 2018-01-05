<style lang="less" scoped>
.c4ss{
    position:absolute;
    height:90%;
    width:100%;
    top:16%;
     .scenic{
        position:absolute;
        bottom:20%;
        left: 50%;
        transform: translate(-50%,0);
        color: white;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        width:100%;
        height:50%;
        position:relative;
        li{
            float:left;
            height: auto;
            width: 16/300*100%;
            text-align: center;
            transform: translateY(10%);
            margin-right:3px;

        }
        li:nth-of-type(1){
            margin-left:10%;
            width: 21/300*100%;
            transform: translateY(-10%);
            margin-right:10px;
        }
        font{
            display:inline-block;
            position:absolute;

        }
    }
    ul:nth-of-type(1){
        height:40%;
        font{
            color:#49d9fe;
            right: 7%;
            top: 20%;
        }
    }
    ul:nth-of-type(2){
        font{
            color:#ff71bb;
            right: 7%;
            top: 13%;
        }
    }
}
</style>
<template>
    <div class="c4ss">
        <ul>
            <li v-for='item in mens'>
                <img :src="item.img">
            </li>

            <font>{{menPercent}}</font>
        </ul>
        <ul>
            <li v-for='item in womens'>
                <img :src="item.img">
            </li>
            <font>{{womenPercent}}</font>
        </ul>
        <div class="scenic">{{scenics}}</div>
    </div>
</template>

<script>
import Vue from 'vue'
let men = require('@/assets/images/home/men.png')
let menE= require('@/assets/images/home/menE.png')
let women= require('@/assets/images/home/women.png')
let womenE= require('@/assets/images/home/womenE.png')
export default {
  name: 'c4ss',
  props:{
      women:Array,
      men:Array,
      scenics:String,
      isActive:Boolean,
      index:Number,
      dateIndex:Number,
  },
  watch:{
        isActive:function(val){
            this.setWomen();
            this.setMen();
        },
        dateIndex:function(){

            this.setWomen();
            this.setMen();
        }

    },
  data () {
    return {
         mens:[
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:menE},
            {img:men},
            {img:men},
        ],
        womens:[
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:womenE},
            {img:women},
            {img:women},
            {img:women},
            {img:women},
        ]

    }
  },
  computed: {
      womenPercent:function(){
          return this.women[this.index].women*10+'%'
      },
      menPercent:function(){
        return this.men[this.index].men*10+'%'
      },
      womene:{
          set: function(value) {
                    var womene = [
                        {img:women},
                        {img:women},
                        {img:women},
                        {img:women},
                        {img:women},
                        {img:women},
                        {img:women},
                        {img:women},
                ];
                for(var i;i < Math.round(this.women[this.index].women);i++){
                    women.img = womenE
                }
                this.womens = womene;
            },
            get: function() {
                return this.foo
            }

      },
      mene:{
          set: function(value) {
                var mene = [
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                ];
                for(var i;i < Math.round(this.men[this.index].men);i++){
                    men[i].img = men
                }
                return mene
                this.menes = mene;
            },
            get: function() {
                return this.menes
            }

      }
  },
  methods: {
      setWomen(){
            var womene = [
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
            ];
            for(var i = 0;i < Math.round(this.women[this.index].women);i++){

                womene[i].img = womenE
                
            }
            
            this.womens = womene;
      },
      setMen(){
          var mene = [
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                        {img:men},
                ];
                for(var i=0;i < Math.round(this.men[this.index].men);i++){
                    mene[i].img = menE
                }
                this.mens = mene;
            },
      
  },
    mounted(){
        this.setWomen();
        this.setMen();
    },
  components:{
  }
}
</script>

