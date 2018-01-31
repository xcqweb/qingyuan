<style lang="less" scoped>
.car_washing{
        background-image: url(../../../../assets/images/life/xiche.png);
         background-size:100% 100%;
    }
    .dressing{
         background-size:100% 100%;
         background-image: url(../../../../assets/images/life/chuanyi.png);
    }
    .uv{
         background-image: url(../../../../assets/images/life/ziwaixianqiangdu.png);
          background-size:100% 100%;
    }
    .sport{
         background-image: url(../../../../assets/images/life/yundong.png);
          background-size:100% 100%;
    }
    .travel{
         background-image: url(../../../../assets/images/life/lvyou.png);
          background-size:100% 100%;
    }
    .flu{
         background-image: url(../../../../assets/images/life/ganmao.png);
          background-size:100% 100%;
    }
    .baoyu{
        background-image: url(../../../../assets/images/weather-blue/baoyu.png);
         background-size:100% 100%;

    }
    .bingbao{
        background-image: url(../../../../assets/images/weather-blue/bingbao.png);
        background-size:100% 100%;
    }
    .dafeng{
        background-image: url(../../../../assets/images/weather-blue/dafeng.png);
         background-size:100% 100%;
    }
    .daxue{
        background-image: url(../../../../assets/images/weather-blue/daxue.png);
         background-size:100% 100%;
    }
    .dayu{
        background-image: url(../../../../assets/images/weather-blue/dayu.png);
         background-size:100% 100%;
    }
    .leizhenyu{
        background-image: url(../../../../assets/images/weather-blue/leizhenyu.png);
         background-size:100% 100%;
    }
    .qing{
        background-image: url(../../../../assets/images/weather-blue/qing.png);
         background-size:100% 100%;
    }
    .redom{
        background-image: url(../../../../assets/images/weather-blue/redom.png);
         background-size:100% 100%;
    }
    .shachenbao{
        background-image: url(../../../../assets/images/weather-blue/shachenbao.png);
         background-size:100% 100%;
    }
    .taifeng{
         background-size:100% 100%;
        background-image: url(../../../../assets/images/weather-blue/taifeng.png);
    }
    .wait{
        background-image: url(../../../../assets/images/weather-blue/wait.png);
         background-size:100% 100%;
    }
    .weifeng{
        background-image: url(../../../../assets/images/weather-blue/weifeng.png);
         background-size:100% 100%;
    }
    .wu{
        background-image: url(../../../../assets/images/weather-blue/wu.png);
         background-size:100% 100%;
    }
    .wumai{
        background-image: url(../../../../assets/images/weather-blue/wumai.png);
         background-size:100% 100%;
    }
    .xiaoxue{
        background-image: url(../../../../assets/images/weather-blue/xiaoxue.png);
         background-size:100% 100%;
    }
    .xiaoyu{
        background-image: url(../../../../assets/images/weather-blue/xiaoyu.png);
         background-size:100% 100%;
    }
    .yejianqing{
        background-image: url(../../../../assets/images/weather-blue/yejianqing.png);
         background-size:100% 100%;
    }
    .yejianduoyun{
        background-image: url(../../../../assets/images/weather-blue/yejianduoyun.png);
         background-size:100% 100%;
    }
    .duoyun{
        background-image: url(../../../../assets/images/weather-blue/duoyun.png);
         background-size:100% 100%;
    }
    .yin{
        background-image: url(../../../../assets/images/weather-blue/yin.png);
         background-size:100% 100%;
    }
    .yujiaxue{
        background-image: url(../../../../assets/images/weather-blue/yujiaxue.png);
         background-size:100% 100%;
    }
    .zhongxue{
        background-image: url(../../../../assets/images/weather-blue/zhongxue.png);
         background-size:100% 100%;
    }
    .zhongyu{
        background-image: url(../../../../assets/images/weather-blue/zhongyu.png);
         background-size:100% 100%;
    }
.b6s{
    width:93% !important;
    height:80%;
    position: relative;
    .box{
        width: 90%;
        height: 70%;
        margin-top: 5%;
        margin-left: 5%;
        text-shadow: black 1px 2px 2px;
        .box_left{
            float: left;
            width: 60%;
            height: 100%;
            .top,.bottom{
                height: 50%;
                width:100%;
            }
            .top{
                .left{
                    float: left;
                    width: 50%;
                    height: 100%;
                    .weather{
                        width:10rem;
                        height:10rem;
                        margin-left:2rem;

                    }
                }
                .right{
                    float: left;
                    width: 50%;
                    height: 100%;
                    color: #43dbff;
                    transform: translate(-20%,10%);
                    .nowContext{
                        height: 50%;
                        div{
                            width: 50%;
                            height: 100%;
                            float: left;
                            font-size: 1.4rem;
                        }
                    }
                }
                
            }
            .bottom{
                .item{
                    float: left;
                    width: 50%;
                    height: 32%;
                    font-size: 1.8rem;
                    color: #43dbff;
                    font{
                        color: #ffd800;
                        text-align: center;
                    }
                }
            }
        }
        .box_right{
            float: left;
            width: 38%;
            height: 100%;
            color: #43dbff;
            border-left: 3px solid #43dbff;
            .weather{
                width:6rem;
                height:6rem;
                margin-left:1rem;
                margin-top: 1rem;
                display:inline-block;
            }
            .top,.bottom{
                height: 50%;
                width:100%;
            }
            .top{
                 border-bottom: 3px solid #43dbff;
            }
        }
    }
}
</style>
<template>
    <div class="b6s">
        <!-- <div v-for="(item,index) in scenics" :key="idName[index]" class="item">
            <b6ss 
            class="c211" 
            :idName='idName[index]' 
            :scenics='scenics[index]' 
            ></b6ss>
        </div> -->
        <div class="box" v-if="showStatus">
            <div class="box_left">
                <div class="top">
                    <div class="left"><div v-bind:class='weatherImg' class="weather"></div></div>
                    <div class="right">
                        <div class="nowContext">
                            <div style="font-size:6.8rem;color:#ffd800;text-align:center;">{{nowRes.temperature}}</div>
                            <div style="font-size:2.4rem;transform: translate(-20%,10%);">℃<br>{{nowRes.text}}(实时)</div>
                        </div>
                        <div style="font-size:2rem;text-align:center;height:50%">{{dailyRes[0].low}}  ~  {{dailyRes[0].high}} ℃</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="item" v-for="(item,index) in lifegroup">{{item.text}}：<font>{{lifeRes[item.part].brief}}</font></div>
                </div>
            </div>
            <div class="box_right">
                <div class="top">
                    <div style="font-size:2rem;margin-top:2rem;margin-left:3rem;">{{twoDayText}}</div>
                    <div style="width:100%;margin-left:3rem;">
                        <div v-bind:class='twoImg' class="weather"></div>
                        <div style="font-size:2rem;display:inline-block;transform: translate(40%,-120%)">{{dailyRes[2].low}}  ~  {{dailyRes[2].high}} ℃</div>
                    </div>
                    <div style="font-size:1.2rem;margin-left:6rem;margin-top:1rem;">{{dailyRes[1].text_day}}</div>
                </div>
                <div class="bottom">
                    <div style="font-size:2rem;margin-top:2rem;margin-left:3rem;">{{threeDayText}}</div>
                    <div style="width:100%;margin-left:3rem;">
                        <div v-bind:class='threeImg' class="weather"></div>
                        <div style="font-size:2rem;display:inline-block;transform: translate(40%,-120%)">{{dailyRes[2].low}}  ~  {{dailyRes[2].high}} ℃</div>
                    </div>
                    <div style="font-size:1.2rem;margin-left:6rem;margin-top:1rem;">{{dailyRes[2].text_day}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import b6ss from '@/pages/home/showMore/smallComponent/b6ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import vAjax from '@/common/js/v-ajax.js'
Vue.use(vAjax);
  export default {
    name:'B6S',
    mixins: [showMoreData],
    props:['updateTurist','updatePlace'],
    watch:{
        updatePlace:function(val){
            let _self = this
            _self.showStatus =false;
            setTimeout(function(){
                _self.showStatus =true;
                _self.sendRequest()
            },500)
            
        }
    },
    data() {
      return {
            currentIndex: 0,
            showStatus:true,
            timer:[],
            weekday:['周日','周一','周二','周三','周四','周五','周六'],
            lifegroup:[
                {part:'car_washing',text:'洗车'},
                {part:'dressing',text:'穿衣'},
                {part:'flu',text:'感冒'},
                {part:'sport',text:'运动'},
                {part:'travel',text:'旅游'},
                {part:'uv',text:'紫外线强度'}
            ],
            apiData:{
                nowurl:"http://api.seniverse.com/v3/weather/now.json",
                lifeurl:"https://api.seniverse.com/v3/life/suggestion.json",
                dailyurl:"https://api.seniverse.com/v3/weather/daily.json",
                uid:"U780C8ABAA",
                key:"s2iqikevs0vffmvy",
                location:"qingyuan",
                curPage:1
            },
            nowRes:{
                    code:"13",
                    temperature:"..",
                    text:"..",
            },
            lifeRes:{
                car_washing:{brief:"loading"},
                dressing:{brief:"loading"},
                flu:{brief:"loading"},
                sport:{brief:"loading"},
                travel:{brief:"loading"},
                uv:{brief:"loading"}
            },
            dailyRes:[{"date":"2018-01-06","text_day":"loading","code_day":"13","text_night":"loading","code_night":"15","high":"14","low":"11","precip":"","wind_direction":"无持续风向","wind_direction_degree":"","wind_speed":"10","wind_scale":"2"},{"date":"2018-01-07","text_day":"中雨","code_day":"14","text_night":"大雨","code_night":"15","high":"16","low":"6","precip":"","wind_direction":"无持续风向","wind_direction_degree":"","wind_speed":"10","wind_scale":"2"},{"date":"2018-01-08","text_day":"中雨","code_day":"14","text_night":"小雨","code_night":"13","high":"15","low":"5","precip":"","wind_direction":"北","wind_direction_degree":"0","wind_speed":"15","wind_scale":"3"}]
      }
    },
    computed:{
            weatherImg:function(){
                return  this.switchWea(this.nowRes.code);
            },
            twoImg:function(){
                return  this.switchWea(this.dailyRes[1].code_day);
            },
            twoDayText:function(){
                return this.weekday[new Date(this.dailyRes[1].date).getDay()]+'  '+(new Date(this.dailyRes[1].date).getMonth()+1)+'月 '+(new Date(this.dailyRes[1].date).getDate())+'日'
            },
            threeDayText:function(){
                return this.weekday[new Date(this.dailyRes[2].date).getDay()]+'  '+(new Date(this.dailyRes[2].date).getMonth()+1)+'月  '+(new Date(this.dailyRes[2].date).getDate())+'日'
            },
            threeImg:function(){
                return  this.switchWea(this.dailyRes[2].code_day);
            }
        },
    components: {

    },
    methods:{
        switchWea(s){
            if(s==='-1'){
                    return 'redom'
                }else if(s==='0'||s==='2'){
                    return 'yejianqing'
                }else if(s==='1'||s==='3'){
                    return 'yejianqing'
                }else if(s==='4'){
                    return 'duoyun'
                }else if(s==='5'||s==='8'||s==='9'){
                    return 'yin'
                }else if(s=== '5'||s==='7'){
                    return 'yejianduoyun'
                }else if(s==='10'||s==='11'||s==='12'){
                    return 'leizhenyu'
                }else if(s==='13'||s==='14'){
                    return 'xiaoyu'
                }else if(s==='15'||s==='16'){
                    return 'zhongyu'
                }else if(s==='17'||s==='18'){
                    return 'dayu'
                }else if(s==='19'||s==='20'){
                    return 'yujiaxue'
                }else if(s==='21'||s==='22'){
                    return 'xiaoxue'
                }else if(s==='23'||s==='24'){
                    return 'zhongxue'
                }else if(s==='25'||s==='14'){
                    return 'daxue'
                }else if(s==='26'||s==='27'||s==='28'||s==='29'){
                    return 'shachenbao'
                }else if(s==='30'){
                    return 'wu'
                }else if(s==='31'){
                    return 'wumai'
                }
                else if(s==='32'){
                    return 'weifeng'
                }else if(s==='33'||s==='34'){
                    return 'dafeng'
                }else if(s==='35'||s==='36'){
                    return 'taifeng'
                }
        },
    getLife(){
            var _self= this
            this.$ajax({
                type:'GET',
                url:this.apiData.lifeurl,
                dataType:'jsonp',
                jsonp:'jsonpcallback',
                data:{
                    uid : this.apiData.uid,
                    sig : this.apiData.key,
                    location : this.apiData.location,
                },
                success:function(res){
                    _self.$nextTick(function () {
                    _self.lifeRes = res.results[0].suggestion;
                    });
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        getNow(){
            var _self= this
            this.$ajax({
                type:'GET',
                url:this.apiData.nowurl,
                dataType:'jsonp',
                jsonp:'jsonpcallback',
                data:{
                    uid : this.apiData.uid,
                    sig : this.apiData.key,
                    location : this.apiData.location,
                },
                success:function(res){
                    _self.$nextTick(function () {
                    _self.nowRes = res.results[0].now;
                    });
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        getDaily(){
            var _self= this
            this.$ajax({
                type:'GET',
                url:this.apiData.dailyurl,
                dataType:'jsonp',
                jsonp:'jsonpcallback',
                data:{
                    uid : this.apiData.uid,
                    sig : this.apiData.key,
                    location : this.apiData.location,
                },
                success:function(res){
                    _self.$nextTick(function () {
                    _self.dailyRes = res.results[0].daily;
                    });
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        sendRequest(){
            this.getDaily();
            this.getNow();
            this.getLife();
        },
    },
    mounted(){
        this.sendRequest();
        this.$emit('hideWeeks');
        this.$emit('hideVdate')
        // this.$emit('showDoubleSelect');
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

