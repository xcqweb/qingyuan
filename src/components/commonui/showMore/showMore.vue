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
        box-shadow:0px 0 30px rgba(39, 81, 197, 0.9) inset;
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
        .comentSlect{
            width:10%;
            height: 100%;
            float: left;
            margin-left: 3rem;
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
             transform: translate(3%,3%);
        }
  }
.vueDate{
    width:20%;
    float: left;
    margin-top:-2px;
    position: relative !important;
   margin-left: 4rem;
}
.row{
    width:28%;
    float: left;
    min-height: 1rem;
    margin-top:1rem;
    position: relative !important;
   margin-left: 1rem;
}
.starList,.dateChose{
    width:auto;
    float: left;
    min-height: 2rem;
    margin-top:.6rem;
    position: relative !important;
   margin-left: 3rem;
   background-color: rgba(0, 0, 0, 0);
   li{
        min-height: 1.8rem;
        min-width: 4rem;
        text-align: center;
        line-height:2rem;
       float: left;
       width: 19%;
       color:white;
       cursor: pointer;
       background-image:url('../../../assets/images/home/981513311442_.pic.jpg');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../assets/images/home/991513311442_.pic.jpg');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
   }
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
  .c8select{
     min-width: 6rem;
     max-width: 7rem;
     height: 1.8rem;
     position: relative;
     width:auto;
    float: left;
    margin-left: 3rem;
    margin-top:.7rem;
     .itemBox{
         width: 60% !important;
         
     }
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
                <div class="placeSlect" v-if="placeSlect">
                    <div class="qylable">区域：</div>
                    <sleckte 
                    :selectList="qyselectlist" 
                    v-on:listenAtparent="catchmsgSingle" 
                    class="oneSelection"
                    ></sleckte>
                </div>
                <div class="comentSlect" v-if="conmentPlatform.status">
                    <div class="qylable">发布平台：</div>
                    <sleckte 
                    :selectList="conmentPlatform.list" 
                    v-on:listenAtparent="conmentPlatformCatch" 
                    class="oneSelection"
                    ></sleckte>
                </div>
                <doubleSelection
                v-if="!placeSlect"
                v-on:listenDoubleSelection="catchmsg" 
                class="row"
                ></doubleSelection>
                <ul class="c8select" v-if="shengNeiStatus">
                    <li 
                    is="sleckte"
                    :selectList="shengnei" 
                    v-on:listenAtparent="catchForShengnei" 
                    class="itemBox"
                    ></li>
                    <!-- <li 
                    is="sleckte"
                    :selectList="shengneiObj.bili" 
                    v-on:listenAtparent="catchmsgSingle" 
                    class="itemBox"
                    ></li> -->
                </ul>
                <!-- 7-14单选组件 -->
                <!-- <div class="week" v-if="weekStatus">
                    <span class="oneweek " v-bind:class="{ chose: isActive }" @click='redom7'>7日</span>
                    <span class="twoweek" v-bind:class="{ chose: !isActive }" @click='redom14'>14日</span>
                </div> -->
                <ul class="dateChose"  v-if="dateChoseList">
                    <li 
                    v-for="(item,index) in dateChoseList" 
                    :class="item.class" 
                    @click="dateClick(index)"
                    >{{item.context}}</li>
                </ul>
                <!-- 五星评价 -->
                <!-- <ul class="starList"  v-if="!placeSlect">
                    <li 
                    v-for="(item,index) in starList" 
                    :class="item.class" 
                    @click="starClick(index)"
                    >{{item.context}}</li>
                </ul> -->
                <!-- 时间下拉框组件 -->
                <vDate class='vueDate'
                 v-if="vDateStatus"
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
                :updateTurist = 'updateData.turist' 
                :updatePlace ='updateData.place' 
                :updateSheng = 'updateData.sheng'
                :conmentPlatformProp = 'updateData.conmentPlatform'
                :starNub = 'starNub' 
                :dateIndex = 'dateIndex' 
                :titles = 'qyselectlist.title'
                :timeDate ='timeDate'
                @showDateFormatChose = 'showDateFormatChose'
                @hideWeeks = 'hideWeeks'
                @hideDoubleDate = 'hideDoubleDate'
                @showComment ='showComment' 
                @showCommentSlect = 'showCommentSlect'
                @hideVdate = 'hideVdate'
                @showShennei ='showShennei'
                @showDoubleSelect = 'showDoubleSelect'
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
            dateChose:false,
            //地区选择
            placeSlect:true,
            //时间控件
            vDateStatus:true,
            //省
            shengNeiStatus:false,
            conmentPlatform:{
                status:false,
                list:{},
            },
            starNub :5,
            dateIndex:0,
            dateChoseList:[
                {context:'日',class:''},
            ],
            
            starList:[
                {context:'五星',class:'chose'},
                {context:'四星',class:''},
                {context:'三星',class:''},
                {context:'二星',class:''},
                {context:'一星',class:''},
            ],
            //省内
            shengnei:{
                title:'省',
                width:'60%',
                left:'10%',
                selectStatus:false,
                place:[
                "省", "市"
                ]
            },
            qyselectlist:{
                title:'全部',
                width:'80%',
                left:'30%',
                selectStatus:false,
                place:[
                   "全部", "清城","清新","佛冈","英德","连州","连南","连山","阳山"
                ]
            },
            timeDate:{begin:[],end:[]},
            updateData:{
                place:'全部',
                sheng:'省',
                conmentPlatform:'全部',
                turist:['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
            },
            cityData:['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
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
        starClick(indexClick){
            this.starList.forEach((item,index)=>{
                if(index === indexClick){
                    item.class = 'chose';
                    this.starNub = 5 - index;
                }else{
                    item.class = '';
                }
            })
        },
        dateClick(indexClick){
            this.dateChoseList.forEach((item,index)=>{
                if(index === indexClick){
                    item.class = 'chose';
                    this.dateIndex = index;
                }else{
                    item.class = '';
                }
            })
        },
        //更改时间选项显示
        showDateFormatChose(dateChoseList){
            let len = dateChoseList.length;
            this.dateChoseList = dateChoseList ;
            if(len>1){
                this.dateChoseList[0].class = 'chose' ;   
            }
            
        },
        close(){
            this.visiable=false;
            this.weekStatus = true;
            this.isEndDate = true;
            this.vDateStatus=true;
            this.placeSlect = true;
            this.shengNeiStatus = false;
            this.qyselectlist.title ="全部";
            this.updateData.place ="全部";
            this.conmentPlatform = {status:false,list:{}} ;
            this.updateData.conmentPlatform ="全部"
            this.cityData = this.updateData.turist;
        },
        catchmsgSingle(data){
           this.updateData.place = data;
           this.updateData.conmentPlatform ="全部"
           this.cityData = this.switch(data);
        },
        catchForShengnei(data){
            this.updateData.sheng = data;
        },
        conmentPlatformCatch(data){
            this.updateData.conmentPlatform = data;
        },
        catchmsg(data){
            this.updateData  = data;
           
        },
        //获取时间
        getDate(value){
            this.timeDate ={
                end:value.end,
                begin:value.begin,
            }
        },
        redom7(){
            this.isActive = true;
        },
        redom14(){
            this.isActive = false;
        },
        //隐藏7，14天
        hideWeeks(obj){
            this.weekStatus = false;
        },
        //隐藏时间双选按钮
        hideDoubleDate(){
            this.isEndDate = false;
        },
        //隐藏时间单选选按钮
        hideVdate(){
            this.vDateStatus =false;
        },
        //显示双选框，五星评论
        showComment(){
            this.weekStatus = false;
            this.isEndDate = true;
            this.placeSlect = false;
        },
        //显示双选框
        showDoubleSelect(){
            this.placeSlect = false;
        },
        showShennei(){
            this.shengNeiStatus =true;
        },
        //显示平台下拉框
        showCommentSlect(data){
            this.conmentPlatform = {
                status:true,
                list:data,
            };
        },
        switch(val){
            const  cityData = {
                "全部":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
                "清城":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                "清新":["全部",'太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',],
                "佛冈":["全部",'观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居'],
                "英德":["全部",'峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
                "连州":["全部",'清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖'],
                "连南":["全部",'油岭瑶寨','瑶族舞曲实景演出','云海花谷'],
                "连山":["全部",'大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田'],
                "阳山":["全部",'北山古寺','鱼水旅游风景区','龙凤温泉'],

            }
           return cityData[val]
        },  
    },
    mounted(){
    },

  }
</script>

