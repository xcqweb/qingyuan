webpackJsonp([15],{1129:function(e,a,n){"use strict";var t=function(e,a,n,t){document.body.clientWidth<420?a.redom(e,12,n,t):a.redom(e,15,n,t);var l=null;window.addEventListener("resize",function(){l&&clearTimeout(l),l=window.setTimeout(function(){a.chart&&a.chart.dispose(),a.redom(e,12,n,t)},330)},!1)};a.a=t},1133:function(e,a,n){"use strict";var t={props:{},data:function(){return{changeModel:!0,hide:!1,full:!1,level_md:!0,level_sm:!0,level_xs:!0}},methods:{hideModel:function(){this.changeModel=!1},scaleModel:function(e){this.$el.style.transform="scale("+e+") "},zoom:function(e){this.$el.style.zoom=e}},mounted:function(){var e=this.$el,a=document.documentElement.clientHeight,n=e.parentNode.offsetHeight,t=n/a;t>.55?this.level_md=!1:t>.25?this.level_sm=!1:this.level_xs=!1}};a.a=t},1317:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(1653),l=n.n(t);a.default={name:"C2S",props:{scenics:Array},data:function(){return{idName:["c4s1","c4s2","c4s3","c4s4","c4s5","c4s6","c4s7","c4s8","c4s9"],ageitems:[{year:"0-17",color:"#FF8885"},{year:"18-24",color:"#57ABFE"},{year:"25-29",color:"#368DF7"},{year:"30-34",color:"#7E6AF6"},{year:"35-39",color:"#E39A50"},{year:"40-44",color:"#FFCD38"},{year:"45-49",color:"#4EBBFC"},{year:"50-54",color:"#75CF65"},{year:"55以上",color:"#B8E986"}],dataItems:[[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}],[{value:335,name:"0-17"},{value:231,name:"18-24"},{value:174,name:"25-29"},{value:135,name:"30-34"},{value:237,name:"35-39"},{value:432,name:"40-44"},{value:135,name:"45-49"},{value:93,name:"50-54"},{value:111,name:"55以上"}]]}},components:{nianling:l.a},methods:{},mounted:function(){}}},1328:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=(n(1129),n(417)),l=n.n(t);n(1133);a.default={name:"nianlingpie",props:{idName:String,pieData:Array,scenic:String},data:function(){return{option:{backgroundColor:"rgba(0, 0, 0, 0)",color:["#FF8885","#57ABFE","#368DF7","#7E6AF6","#E39A50","#FFCD38","#4EBBFC","#75CF65","#B8E986","#86E9E8","#58E5E1","#4BCEDD"],legend:{show:!1,orient:"vertical",top:"40%",left:"55%",width:"20%",height:"45%",itemGap:10,itemWidth:12,itemHeight:10,textStyle:{color:"white"},data:[{icon:"circle",name:"0-17"},{icon:"circle",name:"18-24"},{icon:"circle",name:"25-29"},{icon:"circle",name:"30-34"},{icon:"circle",name:"35-39"},{icon:"circle",name:"40-44"},{icon:"circle",name:"45-49"},{icon:"circle",name:"50-54"},{icon:"circle",name:"55以上"}]},series:[{name:"访问来源",type:"pie",radius:"60%",center:["50%","50%"],startAngle:90,labelLine:{normal:{show:!1}},animationType:"expansion",label:{normal:{show:!0,position:"inner",formatter:function(e){return 0===Math.round(e.percent)?"":Math.round(e.percent)+"%"}},emphasis:{show:!1}},data:this.pieData}]}}},methods:{redom:function(e){this.chart=l.a.init(document.getElementById(e));this.chart.getWidth(),this.chart.getDom();this.chart.setOption(this.option)}},mounted:function(){this.$nextTick($sheet.echartRL(this.idName,this))}}},1361:function(e,a,n){a=e.exports=n(1116)(),a.push([e.i,".c2s[data-v-13a6cb8a]{width:90%;height:80%;-webkit-transform:translate(5%,10%);transform:translate(5%,10%)}.c2s .c211[data-v-13a6cb8a]{width:22%;height:38%;float:left}.c2s ul[data-v-13a6cb8a]{width:80%;height:8%;-webkit-transform:translate(10%);transform:translate(10%);text-align:center}.c2s ul li[data-v-13a6cb8a]{margin-top:10px;color:#fff;width:10%;float:left}.c2s ul li .circle[data-v-13a6cb8a]{display:inline-block;height:8px;width:8px;margin-right:8px;border-radius:4px;background-color:red}",""])},1379:function(e,a,n){a=e.exports=n(1116)(),a.push([e.i,".content[data-v-353b2088]{width:100%;height:100%;position:relative}.content .c985[data-v-353b2088]{width:100%;height:90%}.content .scenic[data-v-353b2088]{text-align:center;color:#fff}",""])},1434:function(e,a,n){var t=n(1361);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(1117)("48f5de61",t,!0)},1452:function(e,a,n){var t=n(1379);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(1117)("51e24de8",t,!0)},1653:function(e,a,n){n(1452);var t=n(69)(n(1328),n(1678),"data-v-353b2088",null);e.exports=t.exports},1660:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"c2s"},[n("ul",{},e._l(e.ageitems,function(a){return n("li",[n("span",{staticClass:"circle",style:{backgroundColor:a.color}}),e._v(e._s(a.year))])})),e._v(" "),e._l(e.scenics,function(a,t){return n("nianling",{key:e.idName[t],staticClass:"c211",attrs:{idName:e.idName[t],pieData:e.dataItems[t],scenic:e.scenics[t]}})})],2)},staticRenderFns:[]}},1678:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[n("div",{staticClass:"c985",attrs:{id:e.idName}}),e._v(" "),n("div",{staticClass:"scenic"},[e._v(e._s(e.scenic))])])},staticRenderFns:[]}},456:function(e,a,n){n(1434);var t=n(69)(n(1317),n(1660),"data-v-13a6cb8a",null);e.exports=t.exports}});