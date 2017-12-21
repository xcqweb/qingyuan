<style lang="less" scoped>
@borderColor:#49d9fe;
@borderLen: 18px;
img{                  
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
  .toast-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .7);
    z-index: 30;
    .close {
        position: absolute;
        top: 3rem;
        right: 5.5rem;
        width: 3rem;
        height: 3rem;
        background-image: url("../../../assets/images/back.png");
        -webkit-background-size: 100%;
        background-size: 100% 100%;
        background-position: center;
        z-index: 33;
        cursor: pointer;
    }
    .cutover{
        position:absolute;
        top:5%;
        left:5%;
        height:90%;
        width:90%;
        z-index:31;
        background-color:#153081;
        overflow: hidden;

    }
    .header{
        height: 6%;
        width: 100%;
        margin-top:20px;
        position: relative;
        .title{
            font-size: 1.5rem;
            margin-left:3rem;
            float: left;
            color:white;
            max-width:20%;
            min-width: 10%;
            transform: translate(0,50%)
        }
        
        .placeSlect{
            width:10%;
            height: 100%;
            float: left;
            margin-left: 1rem;
            position: relative;
            font-size: 1.3rem;
            color:white;
            .qylable{
                min-width: 10%;
                height:1.8rem;
                line-height: 1.8rem;
                position: absolute;
                top: 50%;
                transform: translate(0,-50%);
                font-size: 13px;
            }
            .oneSelection{
                left: 11%;
                width: 18%;
            }
        }
    }
    .morePlace{
            height: 88% !important;
            width:100%;
            overflow-y: auto;
             transform: translate(5%,3%);
        }
  }
.vueDate{
    width:20%;
    float: left;
    margin-top:-2px;
    position: relative !important;
   margin-left: 4rem;
}
.week{
    width:15%;
    height: 1.8rem;
    float: left;
    margin-left: 3rem;
    margin-top:.7rem;
    font-size:1em;
    text-align: center;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        line-height: 25px;
     }
    .oneweek{
      cursor: pointer;
       text-align: center;
      float: left;
      height: 1.8rem;
      line-height:1.8rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/981513311442_.pic.jpg');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/991513311442_.pic.jpg');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height:1.8rem;
      line-height:1.8rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../assets/images/home/981513311442_.pic.jpg');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/991513311442_.pic.jpg');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
      .chose{
          background-image:url('../../../assets/images/home/透明框—7日.png');
          background-size: 100% 100%;
      }
  .fade-enter-active, .fade-leave-active {
    transition: .4s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
<template>
  <transition name="fade">
    <div class="toast-box" v-if="visiable">
        <span class="close" @click='close'></span>
        <div class="cutover">
            <div class="header">
                <div class="title">{{title}}</div>
                <div class="placeSlect">
                    <div class="qylable">区域：</div>
                    <sleckte 
                    :selectList="qyselectlist" 
                    v-on:listenAtparent="catchmsg1" 
                    class="oneSelection"
                    ></sleckte>
                </div>
                <div class="week" v-if="weekStatus">
                    <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</span>
                    <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</span>
                </div>
                <vDate class='vueDate' 
                 @pageDate='getDate'
                 :isActive = 'isEndDate' 
                 ></vDate>
                <!-- <vue-datetime-picker></vue-datetime-picker> -->
                
            </div>
            <componet
                :is='mainContent' 
                class="morePlace" 
                :scenics = 'cityData' 
                :isActive ='isActive'
                @hideWeeks = 'hideWeeks'
                @hideDoubleDate = 'hideDoubleDate'
            ></componet>
        </div>
    </div>
  </transition>
</template>

<script>
import vDate from '@/components/commonui/vueDate/app.vue'
// import datepick from '@/common/js/mixin/datepick.js'
import Bus from '@/common/js/bus.js'
import sleckte from '@/components/commonui/dropdown/dropdown-menu.vue';
import componets from '@/pages/home/showMore/componets.js'
var _ = require('lodash');
  export default {
    // mixins:[datepick],
    data() {
      return {
            visiable: false,
            isEndDate:true,
            isActive:true,
            weekStatus:true,
            qyselectlist:{
                title:'英德 ',
                width:'80%',
                left:'30%',
                selectStatus:false,
                place:[
                    "清城","清新","佛冈","英德","连州","连南","连山","阳山"
                ]
            },
            updateData:{
                palce:'',
                turist:'',
            },
            cityData:['峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
      }
    },
    props: {
        mainContent: {
            type: String,
        },
        title:String,
    },
    components: {
        ...componets,vDate, 
    },
    methods:{
        close(){
            this.visiable=false;
            this.weekStatus = true;
            this.isEndDate = true;
        },
        catchmsg1(data){
           this.updateData.palce = data;
           return  this.cityData = this.switch(data)
        },
        getDate(value){
            console.log(value);
        },
        redom7(){
            this.isActive = true;
        },
        redom14(){
            this.isActive = false;
        },
        hideWeeks(obj){
            this.weekStatus = false;
        },
        hideDoubleDate(){
            this.isEndDate = false;
        },
        switch(val){
            const  cityData = {
                "清城":['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                "清新":['太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',],
                "佛冈":['观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居'],
                "英德":['峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
                "连州":['清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖'],
                "连南":['油岭瑶寨','瑶族舞曲实景演出','云海花谷'],
                "连山":['大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田'],
                "阳山":['北山古寺','鱼水旅游风景区','龙凤温泉'],

            }
           return cityData[val]
        },  
    },
    mounted(){
    },
    beforeDestroy(){
    }
  }
</script>

