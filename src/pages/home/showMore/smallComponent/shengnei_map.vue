<style lang="less" scoped>
.map_content2 {
  width: 100%;
  height: 100%;
  position: relative;
}
.fromEcharts{
    width:100%;
    height:100%;
}
img{                  
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}
.oneStation{
    height: auto;
    width: 100%;
    text-align: center;
}
</style>
<template>
    <div class="map_content2">
        <div :id="idName" class="fromEcharts"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import 'echarts/lib/chart/map';
import guangdong from 'echarts/map/json/province/guangdong.json'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
	name: 'shengnei',
	mixins:[optionProps],
	   watch:{
	    	updatePlace:function(val){
	            var paramsObj = {
	                area:this.updatePlace.place,
	                name:this.updatePlace.turist,
	                type:["day","month","year"][this.type],
	            }
	            this.getResponse(paramsObj);
	        },
	        
	          update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type = val.type
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            }
             	}else{
             		let end = val.end.join("-")
	                 let begin = val.begin.join("-")
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:begin,
	                    endTime:end
					}
             	}
                 
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
	    },
	  data () {
	    return {
	    	rankItems:[
		    	{"num":100,"city":'广州市'},
		    	{"num":80,"city":'深圳市'},
		    	{"num":30,"city":'汕头市'},
		    	{"num":40,"city":'佛山市'},
		    	{"num":20,"city":'湛江市'},
		    	{"num":50,"city":'云浮市'},
		    	{"num":60,"city":'汕头市'},
	    	],
	    		idName:'province',
	    		type:0,
	        chart:null,
	        isActive:false,
	        planePath:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
	        option : {
	            backgroundColor: 'rgba(0,0,0,0)',
	            tooltip: {
	                trigger: 'item',
	                formatter:function(params){
	                }
	            },
	            geo: {
	                map: 'guangdong',
	                label: {
	                    emphasis: {
	                        show: false
	                    }
	                },
	                roam: true,
	                itemStyle: {
                        normal: {
                            //areaColor: '#48abff',
                            areaColor: {
												    type: 'radial',
												    x: 0.5,
												    y: 0.5,
												    r: 1,
												    colorStops: [{
												        offset: 0, color: 'rgba(72,171,255,1)' // 0% 处的颜色
												    }, {
												        offset: 1, color: 'rgba(72,171,255,0.8)' // 100% 处的颜色
												    }],
												    globalCoord: false // 缺省为 false
												},
					                            borderColor:'white',
					                            borderWidth:0.5,
					                            shadowColor: 'rgba(0, 0, 0, 0.3)',
					                            shadowBlur:20,
					                        },
					                        emphasis: {
					                            //areaColor: '#6abccc'
					                            areaColor: {
												    type: 'radial',
												    x: 0.5,
												    y: 0.5,
												    r: 1,
												    colorStops: [{
												        offset: 0, color: 'rgba(106,188,204,1)' // 0% 处的颜色
												    }, {
												        offset: 1, color: 'rgba(106,188,204,0.2)' // 100% 处的颜色
												    }],
												    globalCoord: false // 缺省为 false
												}
                        }
                    }
	            },
	        },
	        color:['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','#0055fb','#f18790', '#25c774', '#50a7fd','#a5c00b','#c184ff'],
	        geoCoordMap:{
	            "广州市": [113.269994,23.137],
	            "深圳市": [114.064624,22.549058],
	            "珠海市": [113.581549,22.276966],
	            "汕头市": [116.685942,23.359888],
	            "佛山市": [113.122475,23.029089],
	            "韶关市": [113.601515,24.816668],
	            "湛江市": [110.360092,21.27807],
	            "肇庆市": [112.457404,23.082415],
	            "江门市": [113.085969,22.584337],
	            "茂名市": [110.930681,21.669333],
	            "惠州市": [114.420971,23.117689],
	            "梅州市": [114.420971,23.117689],
	            "汕尾市": [115.433583,22.820314],
	            "河源市": [114.704284,23.749949],
	            "阳江市": [111.984177,21.865145],
	            "清远市": [113.06448,23.688495],
	            "东莞市": [113.756408,23.029171],
	            "中山市": [113.396835,22.523116],
	            "潮州市": [116.628033,23.663417],
	            "揭阳市": [116.377075,23.556535],
	            "云浮市": [112.050651,22.921178],
	        },
	        
	    }
	  },
	  computed: { 
	  },
	   created(){
    	//console.log(this.update)
    	var paramsObj = {
                area:this.updatePlace.place,
	              name:this.updatePlace.turist,
	              type:'day'
            }
       this.getResponse(paramsObj);
    },
	  methods: {
	    redomData(){
	            let _self = this;
	            var series = [];
	            var rankItemsMap = _self.rankItems;
	            if(rankItemsMap.length===0){
	            	return
	            }
	            let scal =rankItemsMap[0].num /200 ;
	            
	            rankItemsMap.forEach((item)=>{item.num = Number((item.num+"").replace(/,/g,""))});
	            
	            var BJData =[
	                [{name: '清远市'}, {name:rankItemsMap[0].city , value: rankItemsMap[0].num/scal}],
	                
	            ];
	            var GUANG = [
	                [{name: '清远市'}, {name:rankItemsMap[1].city , value: rankItemsMap[1].num/scal}],
	                
	            ];
	            var SHData = [
	                [{name: '清远市'}, {name:rankItemsMap[2].city , value: rankItemsMap[2].num/scal}],
	                
	            ];
	            var SHENZHEN = [
	                [{name: '清远市'}, {name:rankItemsMap[3].city , value: rankItemsMap[3].num/scal}],
	            ];
	            var XIAN = [
	                [{name: '清远市'}, {name:rankItemsMap[4].city , value: rankItemsMap[4].num/scal}],
	            ];
	            var FENGD = [
	                [{name: '清远市'}, {name:rankItemsMap[5].city , value: rankItemsMap[5].num/scal}],
	            ];
	            
	            var FENGD2 = [
	                [{name: '清远市'}, {name:rankItemsMap[6].city , value: rankItemsMap[6].num/scal}],
	            ];
	            
	            var FENGD3 = [
	                [{name: '清远市'}, {name:rankItemsMap[7].city , value: rankItemsMap[7].num/scal}],
	            ];
	            
	            var FENGD4 = [
	                [{name: '清远市'}, {name:rankItemsMap[8].city , value: rankItemsMap[8].num/scal}],
	            ];
	            
	            var FENGD5 = [
	                [{name: '清远市'}, {name:rankItemsMap[9].city , value: rankItemsMap[9].num/scal}],
	            ];
	            [['清远市', BJData], ['清远市', GUANG],['清远市', SHData],['清远市', SHENZHEN],['清远市', XIAN],['清远市', FENGD],['清远市', FENGD2],['清远市', FENGD3],['清远市', FENGD4],['清远市', FENGD5]].forEach(function (item, i) {
	                series.push(
	                   
	                    {
	                        name: item[0],
	                        type: 'lines',
	                        zlevel: 1,
	                        symbol: ['arrow', 'none'],
	                        //箭头大小
	                        symbolSize: 0,
	                        effect: {
	                            show: true,
	                            period: 6,
	                            trailLength: 0,
	                            //小飞机
	                            symbol: _self.planePath,
	                            //移动点大小
	                            symbolSize: 20
	                        },
	                        lineStyle: {
	                            normal: {
	                                color: _self.color[3],
	                                width: 2,
	                                opacity: 1,
	                                curveness: 0.2
	                            }
	                        },
	                        data: _self.convertData(item[1])
	                    },
	                    {
	                        name: item[0],
	                        type: 'effectScatter',
	                        coordinateSystem: 'geo',
	                        zlevel: 1,
	                        rippleEffect: {
	                            brushType: 'stroke'
	                        },
	                        label: {
	                            normal: {
	                                show: true ,
	                                position: 'right',
	                                formatter: '{b}',
	                                textStyle: {
	                                    fontSize: 12,
	                                    fontWeight:'bold',
	                                    color:'#eee',
	                                    textShadowColor:"#333",
	                                    textShadowBlur: 2
	                                }
	                            }
	                        },
	                        z:100,
	                        symbolSize: function (val) {
	                            return 12;
	                        },
	                        tooltip:{
	                            formatter:function(params){
	                                return _self.$Rw.string_until.addPoint((params.value[2]*scal).toFixed(0))+'人'
	                            }
	                        },
	                        itemStyle: {
	                            normal: {
	                                color: _self.color[3],
	                                fontSize:20
	                            }
	                        },
	                        progressiveThreshold: 500,
	                        progressive: 200,
	                        data:item[1].map(function (dataItem) {
	                            
	                            return {
	                                name: dataItem[1].name,
	                                value: _self.geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
	                                fontSize:20
	                            };
	                        })
	                    });
	            });
	            this.option.series = series;
	            if (this.option && typeof this.option === "object") {
	            this.chart.setOption(this.option, true);
	            }
	        },
	    convertData(data){
	            var res = [];
	            for (var i = 0; i < data.length; i++) {
	                var dataItem = data[i];
	                var fromCoord = this.geoCoordMap[dataItem[1].name];
	                var toCoord = this.geoCoordMap[dataItem[0].name];
	                if (fromCoord && toCoord) {
	                    res.push({
	                        fromName: dataItem[1].name,
	                        toName: dataItem[0].name,
	                        coords: [fromCoord, toCoord]
	                    });
	                }
	            }
	            return res;
	        },
	   
	    redom(){
	            if(this.chart){
	                this.chart.dispose();
	            }
	            let _self=this
	            echarts.registerMap('guangdong', guangdong);
	            this.isActive = true;
	            this.$nextTick(()=>{
	                var dom = document.getElementById(this.idName);
	                this.chart = echarts.init(dom);
	                if (this.option && typeof this.option === "object") {
	                this.chart.setOption(this.option, true);
	                }
	            }
	            )
	        },
	        
	        getResponse(paramsObj){
	            this.$axios.get(API_URL+'/qy/api/v2/view/getPersonSourceData',{params:paramsObj}).then(r => {
	                if(!r){
	                	return
	                }
	                if(r.data.code ==="200"||r.data.code ===200){
	                    //console.log(r.data.data)
	                    this.rankItems = r.data.data.inProvinceCity;
	                    this.redomData()
	                }
	            })
        }
	    },
	   
	    mounted(){
	        echarts_resize(this.idName,this)
	        setTimeout(()=>{
	            this.redomData()
	        },1500)
	    },
	    beforeDestroy () {
	        this.chart.clear()
	    },
	}
</script>

