<style lang="less">
.d3{
    width:100%;
    height:100%;
    position:relative;
    h1{
        position:absolute;
        width:10rem;
        top:1.3rem;
        left:5%;
        text-align:left;
        font-size: 1rem;
        color:white;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        li{
            display:inline-block;
            float:left;
            width:12%;
            height:auto;
            margin-left:1%;
            text-align: center;

        }
    }
    .title-star{
         position:absolute;
         top:3rem;
         left:5%;
    }

    .linebox{
        position:relative;
        margin-top:5%;
        margin-left: 5%;
        width:90%;
        height:8%;
        .title{
            position:absolute;
            top:0;
            left:0;
            color:white;
        }
        .imgleft{
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
    .progress{
        margin-top:25%;
    }
    .msg{
        position:relative;
        margin-top:5%;
        margin-left: 5%;
        width:90%;
        height: 856/1048*100%;
        color:white;
        .title{
            display:block;
            margin-left:0;
            text-align:left;
        }
        .msgBox{
            width: 100%;
            height: 88%;
            .msgItem{
                // height: 32%;
                width: 100%;
                
                position: relative;
                &:nth-of-type(1){
                    margin-top: 10px;
                }
                img{                  
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                
            }
                .avatar{
                    position: absolute;
                    top: 0;
                    left: 0;
                    text-align: center;
                    
                    overflow: hidden;
                    img{
                        border-radius: 50%;
                        max-width: 40px;
                        max-height: 40px;
                    }
                    p{
                        text-align: center;
                        font-size: 12px;
                    }
                }
                .comment{
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 70%;
                    .title-star{
                        top:0;
                        left:0;
                    }
                    .context{
                        height: 52%;
                        position: absolute;
                        font-size: 13px;
                        top: 1.5rem;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .itemImg{
                        position: absolute;
                        bottom: 0;
                        img{
                            max-width: 44px;
                            max-height: 44px;
                        }
                    }
                }
            }
        }
        
    }
}
</style>

<template>
    <div class="d3">
        <h1>{{place}}</h1>
        <vstar 
        class='title-star'
        :star='topStar.numb' 
        :style="{width:topStar.width}">
        </vstar>
        
        <vline :progressbar='oneprogressbar' class='progress'></vline>
        <div class="msg" v-show="this.level_xs">
            <h3 class="title">评论</h3>
            <div class="msgBox">
                <div class="msgItem" v-for='item in conmmentsAdaptation' v-bind:style="{height:styleObject}">>
                    <div class="avatar">
                        <img :src="item.imgavatar"/>
                        <p>{{item.name}}</p>
                        <p>来自:{{item.place}}</p>
                    </div>
                    <div class="comment">
                        <vstar 
                        class='title-star'
                        :star='topStar.numb' 
                        :style="{width:topStar.width}">
                        </vstar>
                        <div class="context">{{item.context}}</div>
                        <div class="itemImg">
                            <img :src="item.imgone"/>
                            <img :src="item.imgtwo"/>
                            <img :src="item.imgthree"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'
export default {
    name: 'd31',
    props:['commentProp', 'place'],
    mixins: [adaptation],
    data () {
        return {
            imgStation:require('@/assets/images/wifi.png'),
            topStar:{
                numb:5,
                width:'50%',
            },
            
            comment:{
                place:'常州',
                text:''
            },
            oneprogressbar:{
                title:'满意度',
                leftimg:require('../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:90,
                rightProcess:10,
                leftColor:'#6dffeb',
                rightColor:'#4299b9',
                leftTitle:'',
                rightTitle:'',
 
            },
            conmments:[
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
                    name:'常先生',
                    place:'常州',
                    context:'非常棒！进到洞里后要走一个小时左右才坐船游地下河，一路走下来可以看到很多五光十色的石头，很漂亮！',
                    imgone:require('@/assets/images/avatar/7.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/9.png'),
                },
                {
                    imgavatar:require('@/assets/images/avatar/3.png'),
                    name:'常先生',
                    place:'上海',
                    context:'这是我最满意的一次旅行了。不管是景色，还是服务，都不愧为5A级。景区很震撼，很大。钟乳石形态万千，巧夺天工。',
                    imgone:require('@/assets/images/avatar/4.png'),
                    imgtwo:require('@/assets/images/avatar/8.png'),
                    imgthree:require('@/assets/images/avatar/6.png'),
                },
            ],
            twoprogressbar:{
                title:'男女比例',
                leftimg:require('../../../assets/images/home/d/men.png'),
                rightimg:require('../../../assets/images/home/d/women.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#7798ff',
                rightColor:'#ff77dd',
                leftTitle:'男',
                rightTitle:'女',
            },
            threeprogressbar:{
                title:'出行方式',
                leftimg:require('../../../assets/images/home/d/driver.png'),
                rightimg:require('../../../assets/images/home/d/team.png'),
                leftProcess:55,
                rightProcess:45,
                leftColor:'#ffdd6c',
                rightColor:'#ff719c',
                leftTitle:'自驾游',
                rightTitle:'团队游',
            },
            
            
            
        }
    },
    components:{
    },
    computed: { 
        conmmentsAdaptation:function(){
            if(this.level_sm){
                return this.conmments
            }else{
                return [this.conmments[0]]
            }
        },
        styleObject:function(){
             if(this.level_sm){
                return '32%'
            }else{
                return '55%'
            }
        }
    },
    methods: {

    },
    mounted(){
    },
}
Vue.component('vstar',{
        props:['star'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`<ul><li v-for='item in arr'><img :src="imgStar"/></li></ul>`,
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
                
        },
    }
)
Vue.component('vline',{
        props:['progressbar'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`
        <div class='linebox'>
            <span class='title'>{{progressbar.title}}</span>
            <div class='imgleft' 
                :style="{left:progressbar.leftProcess-20+'%'}">
                <span>{{progressbar.leftProcess}}%</span>
                <img :src="progressbar.leftimg"/></div>
            <div class='imgright' 
                :style="{right:progressbar.rightProcess-20+'%'}">
                <span v-show='progressbar.rightimg'>{{progressbar.rightProcess}}%</span>
                <img :src="progressbar.rightimg"/></div>
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
                
        },
    }
)
</script>

