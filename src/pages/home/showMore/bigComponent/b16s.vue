<style lang="less" scoped>
   .b16s{
        height: 91%;
        width:100%;
        overflow: hidden;
        .midContent{
            height: 60%;
            width:100%;
            .vMap{
                width:49%;
                height: 100%;
                display:inline-block;
            }
            .rank{
                width:40%;
                height: 100%;
                display:inline-block;
                transform: translate(0,-12%)
            }
        }
        .buttom{
            height: 40%;
            width:100%;
            margin-top:3rem;
            ul{
                width:90%;
                height:100%;
                transform: translate(5%,0);
                li{
                    width:20%;
                    height: 45%;
                    float: left;
                    .title{
                        width: 100%;
                        height: 40%;
                        text-align: center;
                        transform: translate(0,-50%);
                        font-size: 16px;
                        color: #43dbff;
                    }
                    .context{
                        width: 100%;
                        height: 50%;
                        text-align: center;
                        transform: translate(0,-50%);
                        color:#ffe200;
                        font-size: 20px;
                        .footerRise{
                            display: inline-block;
                            transform: translateY(10%);
                        }
                        .up{
                            background-image: url('../../../../assets/images/up.png');
                            background-size: 100% 100%;
                            width: 8px;
                            height: 12.8px;
                        }
                        .down{
                            background-image: url('../../../../assets/images/down.png');
                            background-size: 100% 100%;
                            width: 8px;
                            height: 12.8px;
                        }
                    }
                }
            }
        }
        
   }
</style>
<template>
    <div class="b16s">
        <div class="midContent">
            <vmap  
            class="vMap"
            :isActive ='isActive' 
            :rankItems ='mapItems' 
            :dateIndex = 'dateIndex'
            :updatePlace = 'updatePlace'
            :idName = 'idName'
            ></vmap>
            <rank class="rank"
            :rankItems ='rankItems' 
            :updateSheng ='"市"'
            :scenics="''"
            
            ></rank>
        </div>
        <div class="buttom">
            <ul >
                
                <li >
                    <div class="title">{{year}}年累计接待游客(万人)</div>
                    <div class="context">{{addPoint(setWan(yearSum))}}
                        
                    </div>
                </li>
                <li >
                    <div class="title">{{year}}年累计接待市内游客(万人)</div>
                    <div class="context">{{addPoint(setWan(yearInCitySum))}}
                        
                    </div>
                </li>
                <li >
                    <div class="title">{{year}}年累计接待市内游客占比</div>
                    <div class="context">{{yearInCityZhanRate}}
                        <span class='footerRise' :class="yearInCityZhanRate>0? 'up':'down'"></span>
                    </div>
                </li>
                <li >
                    <div class="title">{{year}}年累计接待市外游客(万人)</div>
                    <div class="context">
                        {{addPoint(setWan(yearOutCitySum))}}
                    </div>
                </li>
                <li >
                    <div class="title">{{year}}年累计接待市外游客占比</div>
                    <div class="context">{{yearOutCityZhanRate}}
                        <span class='footerRise' :class="yearOutCityZhanRate>0? 'up':'down'"></span>
                    </div>
                </li>
                <li >
                    <div class="title">{{month}}月接待游客(万人)</div>
                    <div class="context">{{addPoint(setWan(monthSum))}}
                        
                    </div>
                </li>
                <li >
                    <div class="title">{{month}}月接待市内游客(万人)</div>
                    <div class="context">
                        {{addPoint(setWan(monthInCitySum))}}
                    </div>
                </li>
                <li >
                    <div class="title">{{month}}月接待市内游客占比</div>
                    <div class="context">{{monthInCityZhanRate}}
                        <span class='footerRise' :class="monthInCityZhanRate>0? 'up':'down'"></span>
                    </div>
                </li>
                <li >
                    <div class="title">{{month}}月接待市外游客(万人)</div>
                    <div class="context">{{addPoint(setWan(monthOutCitySum))}}
                     
                    </div>
                </li>
                <li >
                    <div class="title">{{month}}月接待市外游客占比</div>
                    <div class="context">{{monthOutCityZhanRate}}
                        <span class='footerRise' :class="monthOutCityZhanRate>0? 'up':'down'" ></span>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import rank from '@/pages/home/showMore/smallComponent/c8ss.vue'
import vmap from '@/pages/home/showMore/smallComponent/guonei_map.vue'
  export default {
    name:'B16S',
    props:{
        scenics:Array,
        isActive:Boolean,
        dateIndex:Number,
        updatePlace:String,
        timeDate:Object,
    },
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:this.updatePlace,
                type:["day","month","year"][this.dateIndex],
            }
            this.getResponse(paramsObj);
        },
        dateIndex:function(val){
            var paramsObj = {
                area:this.updatePlace,
                type:["day","month","year"][this.dateIndex],
            }
            this.getResponse(paramsObj);
        },
        timeDate:{
             handler:function(val, oldVal){
                 let end = val.end.join("-")
                 let begin = val.begin.join("-")
                 var paramsObj = {
                    area:this.updatePlace,
                    beginTime:begin,
                    endTime:end
				}
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data() {
        
        return {
            idName:"16bsEchart",
            year:2018,
            mapItems:[],
            rankItems:[],
            month:0,
            yearInCitySum:74956,
            yearInCityZhanRate:15.48,
            yearOutCitySum:409244,
            yearOutCityZhanRate:84.52,
            yearSum:484200,

            monthInCitySum:74956,
            monthInCityZhanRate:15.48,
            monthOutCitySum:409244,
            monthOutCityZhanRate:84.52,
            monthSum:484200,
            dateChose:[
                {context:'日',class:'chose'},
                {context:'月',class:''},
                {context:'年',class:''},
            ],
            items:[
              
              {title:'2018年累计接待游客(万人)',context:'237.34',rise:''},
              {title:'2018年累计接待市内游客(万人)',context:'84.75',rise:''},
              {title:'2018年累计接待市内游客占比',context:'35.71%',rise:''},
              {title:'2018年累计接待市外游客(万人)',context:'152.59',rise:''},
              {title:'2018年累计接待市外游客占比',context:'64.29%',rise:''},
              
              {title:'1月接待游客(万人)',context:'237.34',rise:''},
              {title:'1月接待市内游客(万人)',context:'84.75',rise:''},
              {title:'1月接待市内游客占比',context:'35.71%',rise:''},
              {title:'1月接待市外游客(万人)',context:'152.59',rise:''},
              {title:'1月接待市外游客占比',context:'64.29%',rise:''},
          ]
      }
    },
    computed:{
        toChirldItems:function () {
            return 
        }
    },
    components: {
        vmap,rank
    },
    methods:{
        addPoint:function(num){
            if(num)
                {
                    //将num中的$,去掉，将num变成一个纯粹的数据格式字符串
                    num = num.toString().replace(/\$|\,/g,'');
                    //如果num不是数字，则将num置0，并返回
                    if(''==num || isNaN(num)){return 'Not a Number ! ';}
                    //如果num是负数，则获取她的符号
                    var sign = num.indexOf("-")> 0 ? '-' : '';
                    //如果存在小数点，则获取数字的小数部分
                    var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
                    cents = cents.length>1 ? cents : '' ;//注意：这里如果是使用change方法不断的调用，小数是输入不了的
                    //获取数字的整数数部分
                    num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
                    //如果没有小数点，整数部分不能以0开头
                    if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
                    //如果有小数点，且整数的部分的长度大于1，则整数部分不能以0开头
                    else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
                    //针对整数部分进行格式化处理，这是此方法的核心，也是稍难理解的一个地方，逆向的来思考或者采用简单的事例来实现就容易多了
                    /*
                    也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
                    字符串长度为0/1/2/3时都不用添加
                    字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
                    */
                    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                    {
                        num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
                    }
                    //将数据（符号、整数部分、小数部分）整体组合返回
                    return (sign + num + cents);    
                }
        },
        setWan(num){
            return (num/10000).toFixed(2)
        },
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/view/getInProvinceDetailData',{params:paramsObj}).then(r => {
                    
                if(r.data.code ==="200"||r.data.code ===200){
                    this.nianItems = r.data.data; 
                    this.year = new Date(this.nianItems.currentDate).getFullYear()
                    this.month = new Date(this.nianItems.currentDate).getMonth()+1;
                    this.rankItems = r.data.data.topCity;
                    this.mapItems = r.data.data.topCity;
                }
            })
        }
    },
    created () {
        var paramsObj = {
                area:"全部",
                type:"day",
                city:1
            }
       this.getResponse(paramsObj);
    },
    mounted(){
        
        this.$emit('hideWeeks')
        this.$emit('showDateFormatChose',this.dateChose)
    }
  }
</script>

