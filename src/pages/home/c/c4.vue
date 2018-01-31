<<<<<<< HEAD
<template>
    <div class="c4">
        <ul>
            <li v-for='item in men'>
                <img :src="item.img">
            </li>
            <font>{{menPercent}}</font>
        </ul>
        <ul>
            <li v-for='item in women'>
                <img :src="item.img">
            </li>
            <font>{{womenPercent}}</font>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
let men = require('../../../assets/images/home/men.png')
let menE= require('../../../assets/images/home/menE.png')
let women= require('../../../assets/images/home/women.png')
let womenE= require('../../../assets/images/home/womenE.png')
export default {
  name: 'c4',
  data () {
    
    return {
        womenPercent:'40%',
        menPercent:'60%',
        men:[
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
        women:[
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
  },
  methods: {
  },
    mounted(){
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.c4{
    position:absolute;
    height:90%;
    width:100%;
    top:26%;
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
=======
<template>
    <div class="c4">
        <ul>
            <li v-for='item in mens'>
                <img :src="item.img">
            </li>
            <font>{{menPercent}}%</font>
        </ul>
        <ul>
            <li v-for='item in womens'>
                <img :src="item.img">
            </li>
            <font>{{womenPercent}}%</font>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
let men = require('../../../assets/images/home/men.png')
let menE= require('../../../assets/images/home/menE.png')
let women= require('../../../assets/images/home/women.png')
let womenE= require('../../../assets/images/home/womenE.png')
export default {
    name: 'c4',
    data () {
        
        return {
            womenPercent:50,
            menPercent:50,
            mens:[
                {img:men},
                {img:men},
                {img:men},
                {img:men},
                {img:men},
                {img:men},
                {img:men},
                {img:men},
                {img:men},
            ],
            womens:[
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
                {img:women},
            ]
        }
    },
    computed: { 
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
                {img:women},
                {img:women},
            ];
            for(var i = 0;i < Math.round((this.womenPercent+10)/10);i++){

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
                        {img:men},
                        {img:men},
                ];
                for(var i=0;i < Math.round((this.menPercent+10)/10);i++){
                    mene[i].img = menE
                }
               
                this.mens = mene;
            },
        getResponse(){
            this.$axios.get(API_URL+'/qy/api/view/getDaySexData').then(r => {
               
                if(r.data.code ==="200"||r.data.code ===200){
                    this.menPercent =r.data.data.maleNum;
                    this.womenPercent =r.data.data.femaleNum;
                    this.setMen();
                    this.setWomen();
                }
            })
        }
      
    },
    created(){
        this.getResponse();
    },
    mounted(){
        
       
    },
}
</script>

<style lang="less" scoped>
.c4{
    position:absolute;
    height:90%;
    width:100%;
    top:26%;
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
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
</style>