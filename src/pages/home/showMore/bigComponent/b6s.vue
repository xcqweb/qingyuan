<style lang="less" scoped>
.car_washing{
        background-image: url(../../../../assets/images/life/xiche.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .dressing{
         background-size:60% 60%;
         background-repeat:no-repeat;
         background-image: url(../../../../assets/images/life/chuanyi.png);
    }
    .uv{
         background-image: url(../../../../assets/images/life/ziwaixianqiangdu.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .sport{
         background-image: url(../../../../assets/images/life/yundong.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .travel{
         background-image: url(../../../../assets/images/life/lvyou.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .flu{
         background-image: url(../../../../assets/images/life/ganmao.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .baoyu{
        background-image: url(../../../../assets/images/weather-blue/baoyu.png);
        background-size:60% 60%;
        background-repeat:no-repeat;

    }
    .bingbao{
        background-image: url(../../../../assets/images/weather-blue/bingbao.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .dafeng{
        background-image: url(../../../../assets/images/weather-blue/dafeng.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .daxue{
        background-image: url(../../../../assets/images/weather-blue/daxue.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .dayu{
        background-image: url(../../../../assets/images/weather-blue/dayu.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .leizhenyu{
        background-image: url(../../../../assets/images/weather-blue/leizhenyu.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .qing{
        background-image: url(../../../../assets/images/weather-blue/qing.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .redom{
        background-image: url(../../../../assets/images/weather-blue/redom.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .shachenbao{
        background-image: url(../../../../assets/images/weather-blue/shachenbao.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .taifeng{
         background-size:100% 100%;
        background-image: url(../../../../assets/images/weather-blue/taifeng.png);
    }
    .wait{
        background-image: url(../../../../assets/images/weather-blue/wait.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .weifeng{
        background-image: url(../../../../assets/images/weather-blue/weifeng.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .wu{
        background-image: url(../../../../assets/images/weather-blue/wu.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .wumai{
        background-image: url(../../../../assets/images/weather-blue/wumai.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .xiaoxue{
        background-image: url(../../../../assets/images/weather-blue/xiaoxue.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .xiaoyu{
        background-image: url(../../../../assets/images/weather-blue/xiaoyu.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .yejianqing{
        background-image: url(../../../../assets/images/weather-blue/yejianqing.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .yejianduoyun{
        background-image: url(../../../../assets/images/weather-blue/duoyun.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .duoyun{
        background-image: url(../../../../assets/images/weather-blue/duoyun.png);
       background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .yin{
        background-image: url(../../../../assets/images/weather-blue/yin.png);
         background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .yujiaxue{
        background-image: url(../../../../assets/images/weather-blue/yujiaxue.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .zhongxue{
        background-image: url(../../../../assets/images/weather-blue/zhongxue.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    .zhongyu{
        background-image: url(../../../../assets/images/weather-blue/zhongyu.png);
        background-size:60% 60%;
        background-repeat:no-repeat;
    }
    
    
    /*天气背景*/
   .qingBg{
   		background: url(../../../../assets/images/weatherBg/qingBg.png)
   }
   .yuBg{
   		background: url(../../../../assets/images/weatherBg/yuBg.png)
   }
   .yinBg{
   		background: url(../../../../assets/images/weatherBg/yinBg.png)
   }
    
    
.b6s{
    width:100% !important;
    height:80%;
    position: relative;
    .bg{
    	position: absolute;
    	top: 0;
    	width: 100%;
    	height: 100%;
    	border-radius: 10px;
    	box-shadow: 10px 10px 70px 20px rgba(19,38,105,0.3) inset;
    }
    .weatherInfo{
    	position: absolute;
    	width: 594px;
    	height: 274px;
    	top: 129px;
    	left: 113px;
    	color: #fff;
    	.leftItem{
    		position: absolute;
    		left: 0;
    		width: 234px;
    		height: 100%;
    		.wImg{
    			position: absolute;
    			width: 100px;
    			height: 100px;
    			left: 30px;
    			background-size: 100%;
    		}
    		.temp{
    			position: absolute;
    			width: 150px;
    			height: 70px;
    			top: 100px;
    			left: 20px;
    			p:nth-child(1){
    				float: left;
    				width: 102px;
    				height: 100%;
    				line-height: 70px;
    				font-size: 70px;
    			}
    			p:nth-child(2){
    				float: left;
    				width: 48px;
    				height: 100%;
    				line-height: 70px;
    				font-size: 70px;
    				font{
    					position: absolute;
    					font-size: 20px;
    				}
    				font:nth-child(1){
    					width: 30px;
    					height: 26px;
    					font-size: 30px;
    					top: -20px;
    					right: 20px;
    				}
    				font:nth-child(2){
    					width: 100px;
    					height: 20px;
    					font-size: 20px;
    					bottom: 26px;
    					right: -30px;
    				}
    			}
    			.clearfix{
    				clear: both;
    			}
    			p:nth-child(4){
    				font-size: 22px;
    				height: 22px;
    				margin-top: 30px;
    			}
    			p:nth-child(5){
    				font-size: 22px;
    				height: 20px;
    				margin-top: 20px;
    			}
    		}
    	}
    	.middleLine{
    		position: absolute;
    		left: 234px;
    		top: 40px;
    		width: 2px;
    		height: 220px;
    		background-color: rgba(255,255,255,0.46);
    	}
    	.rightItem{
    		position: absolute;
    		right: 0;
    		width: 358px;
    		height: 100%;
    		.oneDay{
    			width: 110px;
    			height: 262px;
    			position: absolute;
    			top: 10px;
    			left: 76px;
    			p:nth-child(1){
    				width: 100%;
    				font-size: 26px;
    				position: absolute;
    				top: 10px;
    				text-align: center;
    			}
    			p:nth-child(2){
    				width: 100%;
    				font-size: 20px;
    				position: absolute;
    				top: 52px;
    				text-align: center;
    			}
    			.wImg{
    				position: absolute;
	    			width: 100px;
	    			height: 100px;
	    			left: 0;
	    			top: 90px;
	    			background-size: 100%;
    			}
    			p:nth-child(4){
    				position: absolute;
    				width: 100%;
    				font-size: 22px;
    				height: 22px;
    				bottom: 50px;
    			}
    			p:nth-child(5){
    				position: absolute;
    				width: 100%;
    				font-size: 22px;
    				height: 20px;
    				bottom: 10px;
    			}
    		}
    		
    			.twoDay{
    			width: 110px;
    			height: 262px;
    			position: absolute;
    			top: 10px;
    			right: 0;
    			p:nth-child(1){
    				width: 100%;
    				font-size: 26px;
    				position: absolute;
    				top: 10px;
    				text-align: center;
    			}
    			p:nth-child(2){
    				width: 100%;
    				font-size: 20px;
    				position: absolute;
    				top: 52px;
    				text-align: center;
    			}
    			.wImg{
    				position: absolute;
	    			width: 100px;
	    			height: 100px;
	    			left: 0;
	    			top: 90px;
	    			background-size: 100%;
    			}
    			p:nth-child(4){
    				position: absolute;
    				width: 100%;
    				font-size: 22px;
    				height: 22px;
    				bottom: 50px;
    			}
    			p:nth-child(5){
    				position: absolute;
    				width: 100%;
    				font-size: 22px;
    				height: 20px;
    				bottom: 10px;
    			}
    		}
    	}
    }
}
</style>
<template>
    <div class="b6s" v-show="showStatus">
    	<!--天气背景-->
    	<div class="bg" :class="weatherImgBg"></div>
       <div class="weatherInfo">
       		<div class="leftItem">
       			<!--天气图片-->
       			<div class="wImg" :class="weatherImg"></div>
       			<div class="temp">
       				<p>{{nowRes.tmp}}</p>
       				<p>
       					<font>℃</font>
       					<font>{{nowRes.cond_txt}}</font>
       				</p>
       				<p class="clearfix"></p>
       				<p>{{dailyRes[0].tmp_max}} ~ {{dailyRes[0].tmp_min}}℃</p>
       				<p>{{area}}</p>
       			</div>
       		</div>
       		<div class="middleLine"></div>
       		<div class="rightItem">
       			<div class="oneDay">
       				<p>{{weekText1}}</p>
       				<p>{{twoDayText}}</p>
       				<p class="wImg" :class="weatherImg"></p>
       				<p>{{dailyRes[1].tmp_max}} ~ {{dailyRes[1].tmp_min}}℃</p>
       				<p>{{hour<=20?dailyRes[1].cond_txt_d:dailyRes[1].cond_txt_d}}</p>
       			</div>
       			<div class="twoDay">
       				<p>{{weekText2}}</p>
       				<p>{{threeDayText}}</p>
       				<p class="wImg" :class="threeImg"></p>
       				<p>{{dailyRes[2].tmp_max}} ~ {{dailyRes[2].tmp_min}}℃</p>
       				<p>{{hour<=20?dailyRes[2].cond_txt_d:dailyRes[2].cond_txt_d}}</p>
       			</div>
       		</div>
       </div>
    </div>
</template>

<script>
import Vue from 'vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import vAjax from '@/common/js/v-ajax.js'
import optionProps from '@/common/js/mixin/optionProps.js'
Vue.use(vAjax);


let weekCode = new Date().getDay()
  export default {
    name:'B6S',
    mixins: [showMoreData,optionProps],
    props:['updateTurist'],
    watch:{
        updatePlace:{
        	handler:function(val,oldVal){
	        	if(oldVal&&val.place===oldVal.place && val.place!=='全部'){
	        		return
	        	}
	        	if(val.place==='全部'&&val.turist!=='全部'){
	        		this.showStatus =false;
	        		this.sendRequest(this.switchArea(this.updatePlace.turist))
		            setTimeout( () => {
		                this.showStatus =true;
		            },0)
	        		
	        		return
	        	}
	            this.showStatus =false;
	            this.sendRequest(val.place)
	            setTimeout( () => {
	                this.showStatus =true;
	            },0)
	        },
	        immediate:true
        }
    },
    data() {
      return {
      		hour:new Date().getHours(),
            currentIndex: 0,
            showStatus:true,
            timer:[],
            area:'',
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
                dailyurl:"https://api.seniverse.com/v3/weather/daily.json",
                key:"sgqbslepggqd6dgg",
                location:"清远",
                curPage:1
            },
            nowRes:{
            	tmp:0,
            	cond_txt:''
            },
            dailyRes:[
            	{tmp_max:0,tmp_min:0,cond_txt_d:'',cond_code_d:0,date:'2018-6-16'},
            	{tmp_max:0,tmp_min:0,cond_txt_d:'',cond_code_d:0,date:'2018-6-16'},
            	{tmp_max:0,tmp_min:0,cond_txt_d:'',cond_code_d:0,date:'2018-6-16'},
            ]
      }
    },
    computed:{
            weatherImg:function(){
                return  this.switchWea(this.nowRes.cond_code);
            },
            weatherImgBg:function(){
                return  this.switchWeaBg(this.nowRes.cond_code);
            },
            twoImg:function(){
                return  this.switchWea(this.dailyRes[2].cond_code_d);
            },
            oneDayText:function(){
                return (new Date(this.dailyRes[1].date).getMonth()+1)+'月 '+(new Date(this.dailyRes[1].date).getDate()-1)+'日'
            },
            twoDayText:function(){
                return (new Date(this.dailyRes[1].date).getMonth()+1)+'月 '+(new Date(this.dailyRes[1].date).getDate())+'日'
            },
            threeDayText:function(){
                return (new Date(this.dailyRes[2].date).getMonth()+1)+'月  '+(new Date(this.dailyRes[2].date).getDate())+'日'
            },
            threeImg:function(){
                return  this.switchWea(this.dailyRes[2].cond_code_d);
            },
            weekText1(){
            	if(weekCode===6){
            		return this.weekday[0]
            	}else{
            		return this.weekday[weekCode+1]
            	}
            	
            },
            weekText2(){
            	if(weekCode===5){
            		return this.weekday[0]
            	}else if(weekCode===6){
            		return this.weekday[1]
            	}else{
            		return this.weekday[weekCode+2]
            	}
            	
            }
        },
    components: {

    },
    methods:{
        switchWea(s){
            if(s==='-1'){
                    return 'redom'
                }else if(s==='100'){
                    return 'qing'
                }else if(s==='100'){
                    return 'yejianqing'
                }else if(s==='101'||s==='102'||s==='103'){
                    return 'duoyun'
                }else if(s==='104'){
                    return 'yin'
                }else if(s==='101'||s==='102'||s==='103'){
                    return 'yejianduoyun'
                }else if(s==='300'||s==='302'||s==='301'||s==='303'||s==='304'){
                    return 'leizhenyu'
                }else if(s==='305'||s==='300'||s==='314'){
                    return 'xiaoyu'
                }else if(s==='306'||s==='309'||s==='315'||s==='316'||s==='319'){
                    return 'zhongyu'
                }else if(s==='307'||s==='308'||s==='310'||s==='311'||s==='312'||s==='316'||s==='317'||s==='318'){
                    return 'dayu'
                }else if(s==='404'||s==='313'||s==='406'){
                    return 'yujiaxue'
                }else if(s==='400'||s==='408'||s==='499'){
                    return 'xiaoxue'
                }else if(s==='401'||s==='409'||s==='405'){
                    return 'zhongxue'
                }else if(s==='402'||s==='410'){
                    return 'daxue'
                }else if(s==='507'||s==='508'||s==='503'||s==='504'){
                    return 'shachenbao'
                }else if(s==='501'||s==='500'||s==='509'||s==='510'||s==='514'||s==='515'){
                    return 'wu'
                }else if(s==='502'||s==='511'||s==='512'||s==='513'){
                    return 'wumai'
                }
                else if(s==='200'||s==='201'||s==='202'||s==='203'||s==='204'){
                    return 'weifeng'
                }else if(s==='205'||s==='206'||s==='207'||s==='208'){
                    return 'dafeng'
                }else if(s==='209'||s==='210'||s==='211'||s==='212'||s==='213'){
                    return 'taifeng'
                }else{
                	return ''
                }
        },
        
        //天气背景
        switchWeaBg(s){
            if(s==='-1'){
                    return 'redomBg'
                }else if(s==='100'){
                    return 'yqingBg'
                }else if(s==='100'){
                    return 'qingBg'
                }else if(s==='104'){
                    return 'yinBg'
                }else if(s==='101'||s==='102'||s==='103'){
                    return 'yinBg'
                }else if(s==='300'||s==='302'||s==='301'||s==='303'||s==='304'){
                    return 'yuBg'
                }else if(s==='101'||s==='102'||s==='103'){
                    return 'yuBg'
                }else if(s==='404'||s==='313'||s==='406'){
                    return 'yuBg'
                }else if(s==='400'||s==='408'||s==='499'){
                    return 'yuBg'
                }else if(s==='401'||s==='409'||s==='405'){
                    return 'yuBg'
                }else if(s==='507'||s==='508'||s==='503'||s==='504'){
                    return 'yuBg'
                }else if(s==='507'||s==='508'||s==='503'||s==='504'){
                    return 'yinBg'
                }else if(s==='501'||s==='500'||s==='509'||s==='510'||s==='514'||s==='515'){
                    return 'yinBg'
                }else if(s==='502'||s==='511'||s==='512'||s==='513'){
                    return 'yinBg'
                }
                else if(s==='200'||s==='201'||s==='202'||s==='203'||s==='204'||s==='205'){
                    return 'yinBg'
                }else if(s==='205'||s==='206'||s==='207'||s==='208'){
                    return 'yinBg'
                }else if(s==='209'||s==='210'||s==='211'||s==='212'||s==='213'){
                    return 'yinBg'
                }else{
                	return 'yinBg'
                }
        },
        getNow(area){
            var _self= this
            this.$ajax({
                type:'GET',
                url:'https://free-api.heweather.com/s6/weather/now',
                data:{
                       key : '24ff5bba60b442d9aa9bc39c3e096172',
                       location : area==='全部'?'清远':area,
                },
                success:function(res){
                    _self.$nextTick(function () {
                    _self.nowRes = res.HeWeather6[0].now;
                    _self.area = res.HeWeather6[0].basic.location
                    //console.log(res)
                    });
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        getDaily(area){
            var _self= this
            this.$ajax({
                type:'GET',
                url:'https://free-api.heweather.com/s6/weather/forecast',
                data:{
                   key : '24ff5bba60b442d9aa9bc39c3e096172',
                   location : area==='全部'?'清远':area,
                },
                success:function(res){
                    _self.$nextTick(function () {
                    _self.dailyRes = res.HeWeather6[0].daily_forecast;
                    // console.log(res)
                    });
                },
                error:function(err){
                    console.log(err);
                }
            })
        },
        sendRequest(area){
            this.getDaily(area);
            this.getNow(area);
        },
        
        switchArea(name){
        	let curName = ''
        	const arr=[{name:"清城",science:['飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区','德盈新银盏温泉景区','狮子湖国际休闲旅游度假区','飞来峡水利枢纽风景区',
                '黄腾峡生态旅游区','故乡里旅游度假区']},
                {name:"清新",science:['笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村','清新温矿泉旅游度假区','玄真古洞生态旅游区','古龙峡原生态旅游度假区','太和古洞旅游区',]},
                {name:"佛冈",science:['观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居','聚龙湾天然温泉度假村','森波拉温泉度假区']},
                {name:"英德",science:['峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠','宝晶宫生态旅游度假区','奇洞温泉度假区','洞天仙境生态旅游度假区','九州驿站英德天门沟景区']},
                {name:"连州",science:['清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖','连州地下河','湟川三峡']},
                {name:"连南",science:['油岭瑶寨','瑶族舞曲实景演出','云海花谷','千年瑶寨','广东瑶族博物馆']},
                {name: "连山",science:['大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田','清远市金子山旅游风景区']},
                {name: "阳山",science:['北山古寺','鱼水旅游风景区','龙凤温泉','广东第一峰旅游风景区']},]
        	
        		for(let item of arr){
        			
        			if(item.science.toString().indexOf(name)>-1){
        				curName = item.name
        			}
        		}
        		return curName
        }
    },
    mounted(){
        this.$emit('hideWeeks');
        this.$emit('hideVdate')
        this.$emit('showDateFormatChose',[])
    }
  }
</script>

