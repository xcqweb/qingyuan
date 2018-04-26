
<template>
    <div class="map_content">
        <div id="fromEchart"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import echarts from 'echarts';

import 'echarts/lib/chart/map';
import 'echarts/map/js/china.js';
import optionProps from '@/common/js/mixin/optionProps.js'

let date = new Date()
let nowYear = date.getFullYear()
let mowMonth = date.getMonth()+1
var  planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
export default {
    name: 'a6',
    
    mixins:[optionProps],
    
    data () {
    return {
    	type:0,
    	num1:0,
    	num2:0,
    	isloading:true,
    	code:'',
    	range:1,
        yearNumb:0,
        mouthNumb:0,
        nowYear:nowYear,
        mowMonth:mowMonth,
        topCity:[],
        chart:null,
        isActive:false,
        color:['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb', '#4BCEDD', '#FF8885','#FFCD38',  '#E39A50', '#58E5E1',],
        option : {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                 formatter:function(params){
                	//console.log(params)
                	if(params.seriesType==="effectScatter"){
                		let val = params.name+' : '+params.value[2];
                		return val;
                	}
                }
            },
        },
        geoCoordLocal:{
            '浦江县': [120.105537,29.508488],
            '江山市': [118.639502,28.757867],
            '湖州市': [120.091557,30.904757],
            '嘉兴市': [120.763058,30.761869],
            '宁波市': [121.554142,29.89605],
            '绍兴市': [120.583685,30.048225],
            '金华市': [119.650022,29.095307],
            '丽水市':[119.930581,28.483471],
            '台州市': [121.425361,28.670242],
            '温州市': [120.698668,28.015083],
            '舟山市':[122.216445,29.992188],
            '杭州市': [119.5313, 29.8773],
            '衢州市':[118.906032, 28.945182]
        },
        allData:[],
        gz:[
        	[{name:'清远市'},{name:'福州市',value:200}],
		    [{name:'清远市'},{name:'太原市',value:200}],
		    [{name:'清远市'},{name:'长春市',value:200}],
		    [{name:'清远市'},{name:'重庆市',value:200}],
		    [{name:'清远市'},{name:'西安市',value:200}],
		    [{name:'清远市'},{name:'成都市',value:200}],
		    [{name:'清远市'},{name:'常州市',value:200}],
		    [{name:'清远市'},{name:'北京市',value:200}],
		    [{name:'清远市'},{name:'武汉市',value:200}],
		    [{name:'清远市'},{name:'海口市',value:200}]
        ],
        optionChina : {
            backgroundColor: {
            	color: '#f00',
            },
            tooltip: {
                trigger: 'item',
                formatter:function(params){
                	if(params.seriesType==="effectScatter"){
                		let val = params.name+' : '+params.value[2];
                		return val;
                	}
                }
            },
            geo: {
                map: 'china',
                left: 50, top: 100, right: 220, bottom: 100,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                        normal: {
                            areaColor: '#48abff',
                            borderColor:'white',
                            borderWidth:0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur:10,
                        },
                        emphasis: {
                            areaColor: '#6abccc'
                        }
                    }
            },
            series: []
        },
        geoCoordMap:{
            '上海市': [121.4648, 31.2891],
            '浦江县': [120.105537,29.508488],
            '江山市': [118.639502,28.757867],
            '湖州市': [120.091557,30.904757],
            '嘉兴市': [120.763058,30.761869],
            '宁波市': [121.554142,29.89605],
            '绍兴市': [120.583685,30.048225],
            '金华市': [119.650022,29.095307],
            '丽水市':[119.930581,28.483471],
            '台州市': [121.425361,28.670242],
            '温州市': [120.698668,28.015083],
            '舟山市':[122.216445,29.992188],
            '杭州市': [119.5313, 29.8773],
            '浙江省': [119.5313, 29.8773],
            '衢州市':[118.906032, 28.945182],
            '开封市':[114.334304, 34.78857],
            '中山市': [113.4229, 22.478],
            '乌鲁木齐市': [87.9236, 43.5883],
            '佛山市': [112.8955, 23.1097],
            '兰州市': [103.5901, 36.3043],
            '甘肃省': [103.5901, 36.3043],
            '包头市': [110.3467, 41.4899],
            '北京市': [116.4551, 40.2539],
            '南京市': [118.8062, 31.9208],
            '江苏省': [118.8062, 31.9208],
			'南昌市': [116.0046,28.6633],   
			'江西省': [116.0046,28.6633],
            '厦门市': [118.1689, 24.6478],
            '合肥市': [117.29, 32.0581],
            '安徽省': [117.29, 32.0581],
            '呼和浩特市': [111.4124, 40.4901],
            '内蒙古自治区': [111.4124, 40.4901],
            '内蒙': [111.4124, 40.4901],
            '哈尔滨市': [127.9688, 45.368],
            '黑龙江省': [127.9688, 45.368],
            '大连市': [122.2229, 39.4409],
            '天津市': [117.4219, 39.4189],
            '太原市': [112.3352, 37.9413],
            '山西省': [112.3352, 37.9413],
            '广州市': [113.5107, 23.2196],
            '广东省': [113.5107, 23.2196],
            '徐州市': [117.5208, 34.3268],
            '惠州市': [114.6204, 23.1647],
            '成都市': [103.9526, 30.7617],
            '四川省': [103.9526, 30.7617],
            '拉萨市': [91.1865, 30.1465],
            '西藏': [91.1865, 30.1465],
            '西藏藏族自治区': [91.1865, 30.1465],
            '新疆维吾尔族自治区': [91.1865, 30.1465],
            '新疆':[87.67027,43.905746],
             '香港':[114.137324,22.36086],
             '澳门':[113.473,22.194525],
            '无锡市': [120.3442, 31.5527],
            '杭州市': [119.5313, 29.8773],
            '武汉市': [114.3896, 30.6628],
            '湖北省': [114.3896, 30.6628],
            '汕头市': [117.1692, 23.3405],
            '江门市': [112.6318, 22.1484],
            '湛江市':[110.358655,21.271874],
            '济南市': [117.1582, 36.8701],
            '山东省': [117.1582, 36.8701],
            '上饶市': [117.949478, 28.460729],
            '宣城市':[118.765534, 30.946718],
            '商丘市':[115.662458, 34.420299],
            '安阳市':[114.3995, 36.105985],
            '阜阳市':[115.820427, 32.896107],
            '济宁市': [116.8286, 35.3375],
            '海口市': [110.3893, 19.8516],
            '海南省': [110.3893, 19.8516],
            '深圳市': [114.5435, 22.5439],
            '清远市': [112.9175, 24.3292],
            '渭南市': [109.7864, 35.0299],
            '滨州市': [117.8174, 37.4963],
            '玉溪市': [101.9312, 23.8898],
            '珠海市': [113.7305, 22.1155],
            '石家庄市': [114.4995, 38.1006],
            '河北省': [114.4995, 38.1006],
            '秦皇岛市': [119.2126, 40.0232],
            '肇庆市': [112.1265, 23.5822],
            '苏州市': [120.6519, 31.3989],
            '西安市': [109.1162, 34.2004],
            '陕西省': [109.1162, 34.2004],
            '连云港市': [119.1248, 34.552],
            '郑州市': [113.4668, 34.6234],
            '河南省': [113.4668, 34.6234],
            '鄂尔多斯市': [108.9734, 39.2487],
            '重庆市': [107.7539, 30.1904],
            '长春市': [125.8154, 44.2584],
            '辽宁省': [125.8154, 44.2584],
            '长沙市': [113.0823, 28.2568],
            '湖南省': [113.0823, 28.2568],
            '韶关市': [113.7964, 24.7028],
            '曲靖市':[103.807034, 25.479708],
            '鄂州市':[114.910806, 30.376634],
            '玉林市':[110.197652, 22.634215],
            '咸阳市':[108.711973, 34.333091],
            '芜湖市':[118.427358, 31.356563],
            '临沂市':[118.361808, 35.107364],
            '焦作市':[113.247973, 35.218604],
            '莱芜市':[117.681825, 36.217608],
            '潍坊市':[119.168953, 36.707097],
            '锦州市':[121.130871, 41.102671],
            '衡水市':[115.677131, 37.747474],
            '滁州市':[118.333082, 32.285694],
            '毕节市':[105.321355, 27.288686],
            '抚顺市':[123.96265, 41.88554],
            '南阳市':[112.527027, 32.995109],
            '安顺市':[105.886577, 26.217253],
            '扬州市':[119.369976, 32.395311],
            '淮安市':[119.032407, 33.615333],
            '桂林市':[110.20297, 25.240271],
            '通化市':[125.945456, 41.731663],
            '铁岭市':[123.73179, 42.227811],
            '鹰潭市':[117.069251, 28.263751],
            '盐城市':[120.164669, 33.354619],
            '郴州市':[112.98754, 25.738675],
            '泰州市':[119.911744, 32.510381],
            '衡阳市':[112.59167, 26.893905],
            '常州市':[119.976311, 31.814814],
            '昭通市':[103.725237, 27.336382],
            '定西市':[104.628396, 35.585894],
            '菏泽市':[115.472022, 35.237992],
            '新乡市':[113.913478, 35.301156],
            '东莞市':[113.762444, 23.025712],
            '漳州市':[117.656451, 24.514196],
            '宿州市':[116.975718, 33.652095],
            '贵阳市':[106.641751, 26.652808],
            '贵州省':[106.641751, 26.652808],
            '亳州市':[115.779289, 33.848724],
            '吕梁市':[111.141826, 37.522208],
            '襄阳市':[112.130262, 32.012348],
            '福州市':[119.302895, 26.077314],
            '福建省':[119.302895, 26.077314],
            '黔西南布依族苗族自治州':[104.947562, 25.145265],
            '永州市':[111.621755, 26.422758],
            '邵阳市':[111.475583, 27.241159],
            '贺州市':[111.594223, 24.415769],
            '梧州市':[111.282067, 23.477442],
            '梧州市':[111.282067, 23.477442],
            '梧州市':[111.282067, 23.477442],
            '梧州市':[111.282067, 23.477442],
            '南宁市': [108.479,23.1152],
            '广西': [108.479,23.1152],
            '广西壮族自治区': [108.479,23.1152],
            '台湾':[121.541365,25.062067],
            '台湾省':[121.541365,25.062067],
            '昆明市': [102.9199,25.4663],
            '云南省': [102.9199,25.4663],
            '银川市': [106.3586,38.1775],
            '宁夏': [106.3586,38.1775],
            '宁夏回族自治区': [106.3586,38.1775],
             '潮州市':[116.630616,23.663682],
             '梅州市':[116.128966,24.294967],
             '揭阳市':[116.382252,23.556271],
             '云浮市':[112.04605,22.929432],
             '茂名市':[110.929816,21.667452],
             '河源市':[114.708592,23.748627],
             '汕尾市':[115.401671,22.804456],
             '阳江市':[112.008034,21.867559]
        },
        BJData:[
            [{name: this.placeName}, {name: '北京', value: 100}],
//          [{name: this.placeName}, {name: this.placeName, value: 95}],
        ],
        GUANG:[
            [{name: this.placeName}, {name: '长春', value: 100}],

        ],
        SHData:[
            [{name: this.placeName}, {name: '深圳', value: 10}],

        ],
        SHENZHEN:[
            [{name: this.placeName}, {name: '成都', value: 10}],
        ],
        XIAN:[
            [{name: this.placeName}, {name: '上海', value: 95}],
        ],
        FENGD:[
            [{name: this.placeName}, {name: '重庆', value: 20}]
        ],
       
    }
    },
    computed: {
    },
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
             		this.type=val.type
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
    created(){
    	var paramsObj = {
                area:this.updatePlace.place,
	            name:this.updatePlace.turist,
	            type:'day'
            }
       this.getResponse(paramsObj);
    },
    methods: {
  	
  	getResponse(paramsObj){
			
			this.$axios.get(API_URL+'/qy/api/v2/view/getPersonSourceData',{params:paramsObj}).then(r => {
				//console.log(r)
				if(!r.data.data.inCountryCity.length){
					this.allData=[]
					this.redomData()
					return
				}
                if(r.data.code ==='200'||r.data.code ===200){
                    this.rankItems = r.data.data.inCountryCity.splice(0,10);
                    this.mapItems = r.data.data.topCity;
                    let scal = 5;
                    //console.log(this.rankItems)
                    for(let i=0; i<this.rankItems.length; ++i){
						//this.allData[i]=["清远市", [[{name: "清远市"}, {name: this.rankItems[i].city, value: this.rankItems[i].num/scal}]]]
						this.allData[i]=["清远市", [[{name: "清远市"}, {name: this.rankItems[i].city, value: this.rankItems[i].num}]]]
					}
                    this.redomData()
                }
            })
			
  	},
    redom7(){
        this.range = 2;
    },
    redom14(){
        this.range = 1;
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
            this.isActive = true;
            this.$nextTick(()=>{
                var dom = document.getElementById("fromEchart");
                this.chart = echarts.init(dom);
                if (this.optionChina && typeof this.optionChina === "object") {
                this.chart.setOption(this.optionChina, true);
                
                 this.chart.dispatchAction({
			        type: 'dataZoom',
			        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
			        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
			    });
                }
            }
            )
            
        
        },
    //国内游客来源
    redomData(){
    	this.range = 1;
    	this.isActive=true;
        let _self=this;
        const target = this.placeName;
        if(this.chart){
            this.chart.dispose();
        }
        var dom = document.getElementById("fromEchart");
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','#6792fb','#ff6700','#25c724','#f10090'];
        var series = [];
         
        this.allData.forEach(function (item, i) {
            series.push(
                {
                    name: item[0],
                    type: 'lines',
                    zlevel: 1,
                    symbol:'circle',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#0d1f6d',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[3],
                            width: 1,
                            //迁徙轨迹弧度
                            curveness: 0.2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: _self.convertData(item[1])
                },
                {
                    //name: item[0],
                    type: 'lines',
                    zlevel: 2,
                    largeThreshold:200,
                    large:true,
                    symbol: ['none', 'arrow'],
                    //箭头大小
                    symbolSize: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //小飞机
                          symbol: planePath,
                        //移动点大小
                        symbolSize: 20
                    },
                    lineStyle: {
                        normal: {
                            color: '#ffe76d',
                            width: 2,
                            opacity: 1,
                            curveness: 0.2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: _self.convertData(item[1])
                },
                {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
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
                          return 10;
                    },
                    itemStyle: {
                        normal: {
                            color: _self.color[3]
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: _self.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        this.optionChina.series = series;
        if (this.optionChina && typeof this.optionChina === "object") {
           this.chart.setOption(this.optionChina, true);
        }
    },
   }
}
</script>

<style lang="less" scoped>
.map_content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 5%;
  .topTitle{
            position: absolute;
            span{
                color: #43dbff;
                font-size: .8rem;
            }
            font{
                margin-top: 10px;
                display: block;
                color: #ffe200;
                font-size: 1.2rem;
                font-family: numberFont;
            }
        }
        
        .topTitle:nth-child(2){
        	right: 30%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
        
        .topTitle:nth-child(1){
        	left: 30%;
        	span{
                color: #43dbff;
                font-size: .8rem;
                
            }
        }
}
#fromEchart{
    width:100%;
    height:100%;
}

</style>
