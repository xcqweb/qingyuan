<style lang="less" >
.d3s{
    width:90%;
    height:80%;
   
    .d3sItem{
        width:22%;
        height:42%;
        float: left;
        position: relative;
    }
    .d3sItems{
        width: 100%;
        height: 100%;
    }
}
.lineItem{
    width: 100%;
    margin-bottom: 2rem;
}
.linebox{
        position:relative;
        margin-left: 5%;
        width:25%;
        height:4rem;
        float: left;
        overflow: hidden;
        cursor: pointer;
        .title{
            position:absolute;
            top:0;
            left:0;
            color:white;
        }
        .imgleft{
            position:absolute;
            bottom:24px;
            height:auto;
            width:10%;
            right: 5%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:.8rem;
                
            }
        }
        .imgright{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:.8rem;
            }
        }
        .titleleft{
            position:absolute;
            left: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .titleright{
            position:absolute;
            right: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .line{
            position:absolute;
            bottom: 0;
            width: 100%;
            height: 10px;
            .lineleft{
                position:absolute;
                left: 0;
                width: 55%;
                height: 100%;
                border-radius: 5px 0 0 5px;
            }
            .lineright{
                position:absolute;
                right: 0;
                width: 55%;
                height: 100%;
                border-radius:  0 5px 5px 0;
            }
        }
    }
</style>
<template>
    <div class="d3s">
        <div class="lineItem">
             <vline v-for = "(item,index) in progressItems" 
              :key="index"
              :progressbar='item' 
              class='progress' 
              @changebad='changebad'
              ></vline>
              <div style="clear:both;height:0;overflow:hidden;"></div>
        </div>
        <div class="d3sItems">
            <div v-for="(item,index) in commentProp" :key="idName[index]" class="d3sItem">
                <d3ss 
                class="c211" 
                :isActive ='isActive' 
                :commentProp = 'item' 
                :starNub = 'starNub'
                ></d3ss>
        </div>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import d3ss from '@/pages/home/showMore/smallComponent/d3ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
  export default {
    name:'D3S',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        isActive:Boolean,
        updateTurist:String,
        starNub:Number,
    },
    watch:{
        updateTurist:function(val){
            this.progressItems.forEach(function(item,index){
                var nub = Math.round(Math.random()*10);
                switch(index){
                    case 0 :
                    item.leftProcess = 100-nub;
                    item.rightProcess = nub;
                     break;
                    case 1 :
                    item.leftProcess = nub;
                    item.rightProcess = 100- nub;
                    break;
                    case 2 :
                    item.leftProcess =nub ;
                    item.rightProcess = 100-nub;
                    break;
                }
            });
            this.commentProp = [];
            var nubb = Math.random()*10;
            for(let i = 0;i<Math.round( nubb < 1?3:nubb);i++){
                this.commentProp.push(this.commentProps[Math.round(Math.random()*5)])
            }
            console.log(this.commentProp)
        },
        starNub:function(){
            this.progressItems.forEach(function(item,index){
                var nub = Math.round(Math.random()*10);
                switch(index){
                    case 0 :
                    item.leftProcess = 100-nub;
                    item.rightProcess = nub;
                     break;
                    case 1 :
                    item.leftProcess = nub;
                    item.rightProcess = 100- nub;
                    break;
                    case 2 :
                    item.leftProcess =nub ;
                    item.rightProcess = 100-nub;
                    break;
                }
            });
            this.commentProp = [];
            var nubb = Math.random()*10;
            for(let i = 0;i<Math.round( nubb < 1?3:nubb);i++){
                this.commentProp.push(this.commentProps[Math.round(Math.random()*5)])
            }
        }
    },
    data() {
      return {
          commentProp:[
                {
                    imgavatar:require('@/assets/images/avatar/1.png'),
                    name:'常先生',
                    place:'徐州',
                    context:'连州地下河位于历史文化古城连州以北26公里处的东陂镇大洞村境内，是一处巧夺天工的亚热带喀斯特地貌的典型巨型天然石灰岩溶洞，因为洞口广阔，仿佛一个大嘴巴，所以当地居民称之为大口岩。',
                    imgone:require('@/assets/images/avatar/4.png'),
                    imgtwo:require('@/assets/images/avatar/5.png'),
                    imgthree:require('@/assets/images/avatar/6.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/2.png'),
                    name:'金先生',
                    place:'广州',
                    context:'非常棒！进到洞里后要走一个小时左右才坐船游地下河，一路走下来可以看到很多五光十色的石头，很漂亮！',
                    imgone:require('@/assets/images/avatar/7.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/9.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/3.png'),
                    name:'文先生',
                    place:'上海',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/4.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/6.png'),
                },
            ],
          progressItems:[
              {
                title:'满意度',
                leftimg:require('../../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:90,
                rightProcess:10,
                leftColor:'#6dffeb',
                rightColor:'#5697B5',
                leftTitle:'',
                rightTitle:'',
 
            },
            {
                title:'负面评论',
                leftimg:require('../../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:3,
                rightProcess:97,
                leftColor:'#ffdd6c',
                rightColor:'#8A887A',
                leftTitle:'',
                rightTitle:'',
 
            },
            {
                title:'投诉率',
                leftimg:require('../../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:1,
                rightProcess:99,
                leftColor:'#ff719c',
                rightColor:'#84568F',
                leftTitle:'',
                rightTitle:'',
 
            },
          ],
        //   imgItems:[require('@/assets/images/avatar/1.png'),require('@/assets/images/avatar/2.png'),require('@/assets/images/avatar/3.png'),require('@/assets/images/avatar/4.png'),require('@/assets/images/avatar/5.png'),require('@/assets/images/avatar/6.png'),require('@/assets/images/avatar/7.png'),require('@/assets/images/avatar/8.png'),require('@/assets/images/avatar/9.png'),require('@/assets/images/avatar/10.png'),require('@/assets/images/avatar/11.png'),require('@/assets/images/avatar/12.png'),require('@/assets/images/avatar/13.png'),require('@/assets/images/avatar/14.png'),require('@/assets/images/avatar/15.png'),require('@/assets/images/avatar/16.png'),require('@/assets/images/avatar/17.png'),require('@/assets/images/avatar/18.png')],
          commentProps:[
                 {
                    imgavatar:require('@/assets/images/avatar/1.png'),
                    name:'常先生',
                    place:'徐州',
                    context:'连州地下河位于历史文化古城连州以北26公里处的东陂镇大洞村境内，是一处巧夺天工的亚热带喀斯特地貌的典型巨型天然石灰岩溶洞，因为洞口广阔，仿佛一个大嘴巴，所以当地居民称之为大口岩。',
                    imgone:require('@/assets/images/avatar/4.png'),
                    imgtwo:require('@/assets/images/avatar/5.png'),
                    imgthree:require('@/assets/images/avatar/6.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/2.png'),
                    name:'金先生',
                    place:'广州',
                    context:'非常棒！进到洞里后要走一个小时左右才坐船游地下河，一路走下来可以看到很多五光十色的石头，很漂亮！',
                    imgone:require('@/assets/images/avatar/7.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/9.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/3.png'),
                    name:'文先生',
                    place:'上海',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/4.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/6.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/8.png'),
                    name:'邱先生',
                    place:'青山',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/1.png'),
                    imgtwo:require('@/assets/images/avatar/3.png'),
                    imgthree:require('@/assets/images/avatar/8.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/1.png'),
                    name:'胡先生',
                    place:'苏州',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/2.png'),
                    imgtwo:require('@/assets/images/avatar/5.png'),
                    imgthree:require('@/assets/images/avatar/7.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/8.png'),
                    name:'王先生',
                    place:'黄山',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/3.png'),
                    imgtwo:require('@/assets/images/avatar/1.png'),
                    imgthree:require('@/assets/images/avatar/5.png'),
                },
            ],
            // ['#FF8885','#57ABFE', '#368DF7', '#7E6AF6', '#E39A50','#FFCD38',  '#4EBBFC', '#75CF65','#B8E986', '#86E9E8', '#58E5E1','#4BCEDD']
            // scenics:['风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区','风林胜风景区',],
            // idName:['c4s1','c4s2','c4s3','c4s4','c4s5','c4s6','c4s7','c4s8','c4s9'],
      }
    },
    // props: {
    //     mainContent: {
    //         type: String,
    //         default: function () {
    //                 return 'D2S'
    //         }
    //     },
    // },
    components: {
        d3ss,
    },
    methods:{
       changebad:function(){
           this.starNub = 1;
            this.commentProp = [];
            var nubb = Math.random()*10;
            for(let i = 0;i<Math.round( nubb < 1?3:nubb);i++){
                this.commentProp.push(this.commentProps[Math.round(Math.random()*5)])
            }
           
        },
    },
    mounted(){
        this.$emit('showComment');
    }
  }

  Vue.component('vline',{
        props:['progressbar'],
        data(){
            return{
                 imgStar:require('../../../../assets/images/home/d/star.png'),
            }
        },
        template:`
        <div class='linebox' @click="changebad">
            <span class='title'>{{progressbar.title}}</span>
            <div class='imgleft'>
                <span :style="{color:progressbar.leftColor}">{{progressbar.leftProcess}}%</span>
                </div>
           
            <font class='titleleft' :style="{color:progressbar.leftColor}">{{progressbar.leftTitle}}</font>
            <font class='titleright' :style="{color:progressbar.rightColor}">{{progressbar.rightTitle}}</font>
            <div class='line'>
                <div class='lineleft' :style="{width:progressbar.leftProcess+'%',backgroundColor:progressbar.leftColor}"></div>
                <div class='lineright' :style="{width:progressbar.rightProcess+'%',backgroundColor:progressbar.rightColor}"></div>
            </div>
        </div>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
            changebad:function(){
                if(this.progressbar.title === '投诉率'){
                    this.$emit('changebad');
                }
                
            }
        },
    }
)
</script>

