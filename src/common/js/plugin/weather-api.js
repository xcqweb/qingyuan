import CryptoJS from "crypto-js"
import { debug } from "util";
function json2url(json){
    // json.t=Math.random();
    var arr=[];
    for(var name in json){
        // if (Object.prototype.toString.call(json[name]).slice(8, -1) === "Array") {
        //     for (var i = 0; i < json[name].length; i++) {
        //         arr.push(name+'='+json[name][i]);
        //     }
        // }else{
        //     arr.push(name+'='+json[name]);
        // }
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
};
let Weather = function(location){
    this.uid = "U780C8ABAA";
    this.key = "s2iqikevs0vffmvy";
    this.location = location;
    this.now ={
        url:"http://api.seniverse.com/v3/weather/now.json",
       
    }
    this.daily = {
        url:"https://api.seniverse.com/v3/weather/daily.json",
        days:3,
    }
    this.life = {
        url:"https://api.seniverse.com/v3/life/suggestion.json",
    }
    this.responseData ={
        nowRes:{},
        dailyRes:{},
        lifeRes:{}
    }
}
Weather.prototype.getNow = function(location){
    var _self = this;
    this.$ajax({
        type:'GET',
        url:_self.now.url,
        dataType:'jsonp',
        jsonp:'jsonpcallback',
        data:{
            uid : _self.uid,
            sig : _self.key,
            location :location,
        },
        success:function(res){
            //Todo---
            _self.responseData.nowRes = res.results[0].now
        },
        error:function(err){
          console.log(err);
        }
    })
}

Weather.prototype.getDaily = function(location){
    var _self = this;
    this.$ajax({
        type:'GET',
        url:_self.daily.url,
        dataType:'jsonp',
        jsonp:'jsonpcallback',
        data:{
            uid : _self.uid,
            sig : _self.key,
            location :location,
            days :_self.daily.days,
        },
        success:function(res){
            _self.responseData.dailyRes = res.results[0].daily;            
            //Todo---
        },
        error:function(err){
          console.log(err);
        }
    })
}
Weather.prototype.getLife = function(location){
    var _self = this;
    this.$ajax({
        type:'GET',
        url:_self.life.url,
        dataType:'jsonp',
        jsonp:'jsonpcallback',
        data:{
            uid : _self.uid,
            sig : _self.key,
            location :location,
        },
        success:function(res){
            //Todo---

            _self.responseData.lifeRes =res.results[0].suggestion;
            
                },
        error:function(err){
          console.log(err);
        }
    })
}
Weather.prototype.$ajax = function(json){
            json=json || {};
            if(!json.url){
                console.log('url Not Null');
                return;
            };
            json.data=json.data || {};
            json.type=json.type || 'get';
            if(json.data.sig){
                 // 获取当前时间戳
                var ts = Math.floor((new Date()).getTime() / 1000);
                // 构造验证参数字符串
                var str = "ts=" + ts + "&uid=" + json.data.uid;
                // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
                // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
                var sig = CryptoJS.HmacSHA1(str, json.data.sig).toString(CryptoJS.enc.Base64);
                sig = encodeURIComponent(sig);
                json.data.sig = sig;
                json.data['ts']= ts;
            }
            //jsonp
                if(json.dataType==='jsonp'){

                    json.jsonp = json.jsonp || 'callback';
                    var fnName='jsonp'+Math.random();
                    fnName=fnName.replace('.','');
                    //url回调函数形式必须是callback = fnName,否则返回的就不是回调函数，而是一个对象。
                    json.data['callback']=fnName;
                    //创建<script>标签
                    var oS=document.createElement('script');
                    oS.src=json.url+'?'+json2url(json.data);
                    var oHead=document.getElementsByTagName('head')[0];
                    oHead.appendChild(oS);

                    window[fnName]=function(data){
                        json.success && json.success(data);
                        oHead.removeChild(oS);
                    };
                    return;
                }
        }
Weather.init =function(location){
    var instance = new Weather(location);
    // instance.getNow(location)
    // instance.getDaily(location)
    // instance.getLife(location)
    return instance
}

export default Weather