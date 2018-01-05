<style lang="less" scoped>
.map_content {
  width: 100%;
  height: 100%;
  position: relative;
}
#fromEcharts{
    width:100%;
    height:100%;
}
.week{
    height: 1.5rem !important;
    width: 7rem !important;
    position: absolute;
    bottom: 5%;
    right: 35%;
    font-size:.8rem;
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
      float: left;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../../assets/images/home/透明框—国内.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../../assets/images/home/透明框—省内.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
    .twoweek{
      cursor: pointer;
      float: right;
      height: 1.5rem;
      line-height:1.5rem;
      width: 47%;
      color: #abb5d3;
      background-image:url('../../../../assets/images/home/透明框—国内.png');
      background-size: 100% 100%;
      &.chose{
        background-image:url('../../../../assets/images/home/透明框—省内.png');
          background-size: 100% 100%;
          color:#d3ddf9;
      }
    }
  }
</style>
<template>
    <div class="map_content">
        <div v-if="isActive" id="fromEcharts"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts';
import 'echarts/lib/chart/map';
// import 'echarts/map/js/china.js';
// import b16sJson from '@/pages/home/showMore/bigComponent/json/b16s.json'
import guangdong from 'echarts/map/json/province/guangdong.json'
// require("echarts/map/js/province/guangdong.js")
export default {
name: '',
props:{
    isActive:Boolean,
    rankItems:Array,
    updatePlace:String,
    dateIndex:Number,
},
watch:{
    isActive:function(val){
         
    },
     dateIndex:function(val){
        this.redom();
    },
    updatePlace:function(val){
        this.redom();
    }
},
  data () {
    return {
        chart:null,
        // isActive:false,
        // b16sJson:b16sJson,
        zhejiang:{
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
        BJData:[
            [{name: '清远市'}, {name: '江山', value: 95}],
            
        ],
        GUANG:[
            [{name: '清远市'}, {name: '湖州', value: 40}],
            
        ],
        SHData:[
            [{name: '清远市'}, {name: '嘉兴', value: 10}],
            
        ],
        SHENZHEN:[
            [{name: '清远市'}, {name: '宁波', value: 10}],
        ],
        XIAN:[
            [{name: '清远市'}, {name: '台州', value: 95}],
        ],
        FENGD:[
            [{name: '清远市'}, {name: '丹山', value: 20}]
        ],
        WENZ:[
            [{name: '清远市'}, {name: '温州', value: 20}]
        ],
        },
        geoCoordMap:{
            '上海市': [121.4648, 31.2891],
            '东莞市': [113.8953, 22.901],
            '东营市': [118.7073, 37.5513],
            '中山市': [113.4229, 22.478],
            '临汾市': [111.4783, 36.1615],
            '临沂市': [118.3118, 35.2936],
            '丹东市': [124.541, 40.4242],
            '丽水市': [119.5642, 28.1854],
            '乌鲁木齐市': [87.9236, 43.5883],
            '佛山市': [112.8955, 23.1097],
            '保定市': [115.0488, 39.0948],
            '兰州市': [103.5901, 36.3043],
            '包头市': [110.3467, 41.4899],
            '北京市': [116.4551, 40.2539],
            '北海市': [109.314, 21.6211],
            '南京市': [118.8062, 31.9208],
            '南宁市': [108.479, 23.1152],
            '南昌市': [116.0046, 28.6633],
            '南通市': [121.1023, 32.1625],
            '厦门市': [118.1689, 24.6478],
            '台州市': [121.1353, 28.6688],
            '合肥市': [117.29, 32.0581],
            '呼和浩特市': [111.4124, 40.4901],
            '咸阳市': [108.4131, 34.8706],
            '哈尔滨市': [127.9688, 45.368],
            '唐山市': [118.4766, 39.6826],
            '嘉兴市': [120.9155, 30.6354],
            '大同市': [113.7854, 39.8035],
            '大连市': [122.2229, 39.4409],
            '天津市': [117.4219, 39.4189],
            '太原市': [112.3352, 37.9413],
            '威海市': [121.9482, 37.1393],
            '宁波市': [121.5967, 29.6466],
            '宝鸡市': [107.1826, 34.3433],
            '宿迁市': [118.5535, 33.7775],
            '常州市': [119.4543, 31.5582],
            '广州市': [113.5107, 23.2196],
            '廊坊市': [116.521, 39.0509],
            '延安市': [109.1052, 36.4252],
            '张家口市': [115.1477, 40.8527],
            '徐州市': [117.5208, 34.3268],
            '德州市': [116.6858, 37.2107],
            '惠州市': [114.6204, 23.1647],
            '成都市': [103.9526, 30.7617],
            '扬州市': [119.4653, 32.8162],
            '承德市': [117.5757, 41.4075],
            '拉萨市': [91.1865, 30.1465],
            '无锡市': [120.3442, 31.5527],
            '日照市': [119.2786, 35.5023],
            '昆明市': [102.9199, 25.4663],
            '杭州市': [119.5313, 29.8773],
            '枣庄市': [117.323, 34.8926],
            '柳州市': [109.3799, 24.9774],
            '株洲市': [113.5327, 27.0319],
            '武汉市': [114.3896, 30.6628],
            '汕头市': [117.1692, 23.3405],
            '江门市': [112.6318, 22.1484],
            '沈阳市': [123.1238, 42.1216],
            '沧州市': [116.8286, 38.2104],
            '河源市': [114.917, 23.9722],
            '泉州市': [118.3228, 25.1147],
            '泰安市': [117.0264, 36.0516],
            '泰州市': [120.0586, 32.5525],
            '济南市': [117.1582, 36.8701],
            '济宁市': [116.8286, 35.3375],
            '海口市': [110.3893, 19.8516],
            '淄博市': [118.0371, 36.6064],
            '淮安市': [118.927, 33.4039],
            '深圳市': [114.5435, 22.5439],
            '清远市': [112.9175, 24.3292],
            '温州市': [120.498, 27.8119],
            '渭南市': [109.7864, 35.0299],
            '湖州市': [119.8608, 30.7782],
            '湘潭市': [112.5439, 27.7075],
            '滨州市': [117.8174, 37.4963],
            '潍坊市': [119.0918, 36.524],
            '烟台市': [120.7397, 37.5128],
            '玉溪市': [101.9312, 23.8898],
            '珠海市': [113.7305, 22.1155],
            '盐城市': [120.2234, 33.5577],
            '盘锦市': [121.9482, 41.0449],
            '石家庄市': [114.4995, 38.1006],
            '福州市': [119.4543, 25.9222],
            '秦皇岛市': [119.2126, 40.0232],
            '绍兴市': [120.564, 29.7565],
            '聊城市': [115.9167, 36.4032],
            '肇庆市': [112.1265, 23.5822],
            '舟山市': [122.2559, 30.2234],
            '苏州市': [120.6519, 31.3989],
            '莱芜市': [117.6526, 36.2714],
            '菏泽市': [115.6201, 35.2057],
            '营口市': [122.4316, 40.4297],
            '葫芦岛市': [120.1575, 40.578],
            '衡水市': [115.8838, 37.7161],
            '衢州市': [118.6853, 28.8666],
            '西宁市': [101.4038, 36.8207],
            '西安市': [109.1162, 34.2004],
            '贵阳市': [106.6992, 26.7682],
            '连云港市': [119.1248, 34.552],
            '邢台市': [114.8071, 37.2821],
            '邯郸市': [114.4775, 36.535],
            '郑州市': [113.4668, 34.6234],
            '鄂尔多斯市': [108.9734, 39.2487],
            '重庆市': [107.7539, 30.1904],
            '金华市': [120.0037, 29.1028],
            '浦江县': [119.898496, 29.456035],
            '铜川市': [109.0393, 35.1947],
            '银川市': [106.3586, 38.1775],
            '镇江市': [119.4763, 31.9702],
            '长春市': [125.8154, 44.2584],
            '长沙市': [113.0823, 28.2568],
            '长治市': [112.8625, 36.4746],
            '阳泉市': [113.4778, 38.0951],
            '青岛市': [120.4651, 36.3373],
            '韶关市': [113.7964, 24.7028]
        },
        
        planePath:'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',

    }
  },
  computed: { 
  },
  methods: {
    redom7(){
        // this.isActive=true;
    },
    redom14(){
        // this.isActive=false;
    },
    convertData(data){
        var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = this.zhejiang.geoCoordMap[dataItem[1].name];
                var toCoord = this.zhejiang.geoCoordMap[dataItem[0].name];
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
    addDot(nub){
        var n= nub;
        var m =n +'',
        len= m.length
        if (len>3) {
        var aa=len-3
        var bb=m.slice(aa,len)
        var cc=m.slice(0,aa)
        m=cc+','+bb
        }
        return m
    },
    redomaa(){
        let _self=this
        if(this.chart){
            this.chart.dispose();
        }
        var dom = document.getElementById("fromEcharts");
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb'];
        var series = [];
        var rankItemsMap = _self.rankItems
    
        rankItemsMap.forEach((item)=>{item.numb = Number(item.numb.replace(/,/g,""))})
        var BJData =[
            [{name: '清远市'}, {name:rankItemsMap[0].place , value: rankItemsMap[0].numb/1000}],
            
        ];
        var GUANG = [
            [{name: '清远市'}, {name:rankItemsMap[1].place , value: rankItemsMap[1].numb/1000}],
            
        ];
        var SHData = [
             [{name: '清远市'}, {name:rankItemsMap[2].place , value: rankItemsMap[2].numb/1000}],
            
        ];
        var SHENZHEN = [
             [{name: '清远市'}, {name:rankItemsMap[3].place , value: rankItemsMap[3].numb/1000}],
        ];
        var XIAN = [
             [{name: '清远市'}, {name:rankItemsMap[4].place , value: rankItemsMap[4].numb/1000}],
        ];
        var FENGD = [
            [{name: '清远市'}, {name:rankItemsMap[5].place , value: rankItemsMap[5].numb/1000}],
        ];
       
        
        
        [['清远市', BJData], ['清远市', GUANG],['清远市', SHData],['清远市', SHENZHEN],['清远市', XIAN],['清远市', FENGD]].forEach(function (item, i) {
            
            series.push(
                // {
                //     name: item[0],
                //     type: 'lines',
                //     zlevel: 1,
                //     symbol:'circle',
                //     effect: {
                //         show: true,
                //         period: 6,
                //         trailLength: 0.7,
                //         color: '#0d1f6d',
                //         symbolSize: 3
                //     },
                //     lineStyle: {
                //         normal: {
                //             color: color[i],
                //             width: 0,
                //             //迁徙轨迹弧度
                //             curveness: 0.2
                //         }
                //     },
                //     data: _self.convertData(item[1])
                // },
                // {
                //     //name: item[0],
                //     type: 'lines',
                //     zlevel: 2,
                //     symbol: ['none', 'arrow'],
                //     //箭头大小
                //     symbolSize: 2,
                //     effect: {
                //         show: true,
                //         period: 6,
                //         trailLength: 0,
                //         //小飞机
                //         //symbol: planePath,
                //         //移动点大小
                //         symbolSize: 1
                //     },
                //     lineStyle: {
                //         normal: {
                //             color: color[i],
                //             width: 2,
                //             opacity: 0.6,
                //             curveness: 0.2
                //         }
                //     },
                //     data: _self.convertData(item[1])
                // },
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
                                fontSize: 12
                            }
                        },
                        emphasis: {
                           show:false,
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    tooltip:{
                        formatter:function(params){
                            return _self.addDot(params.value[2]*1000)+'人'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
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
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                        normal: {
                            color:'#163387',
                            areaColor: '#163387',
                            borderColor:'white',
                            borderWidth:0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur:10,
                            opacity:0.3,
                        },
                        emphasis: {
                            areaColor: 'white'
                        }
                    }
            },
            series: series
        };
        if (option && typeof option === "object") {
           this.chart.setOption(option, true);
        }
    },
    redom(){
        if(this.chart){
            this.chart.dispose();
        }
        
        let _self=this
         echarts.registerMap('guangdong', guangdong);
        var dom = document.getElementById('fromEcharts');
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','#6792fb','#43dbff'];
        var series = [];
        var rankItemsMap = _self.rankItems;
        rankItemsMap.forEach((item)=>{item.numb = Number((item.numb+"").replace(/,/g,""))})
        var BJData =[
            [{name: '清远市'}, {name:rankItemsMap[0].place , value: rankItemsMap[0].numb/1000}],
            
        ];
        var GUANG = [
            [{name: '清远市'}, {name:rankItemsMap[1].place , value: rankItemsMap[1].numb/1000}],
            
        ];
        var SHData = [
             [{name: '清远市'}, {name:rankItemsMap[2].place , value: rankItemsMap[2].numb/1000}],
            
        ];
        var SHENZHEN = [
             [{name: '清远市'}, {name:rankItemsMap[3].place , value: rankItemsMap[3].numb/1000}],
        ];
        var XIAN = [
             [{name: '清远市'}, {name:rankItemsMap[4].place , value: rankItemsMap[4].numb/1000}],
        ];
        var FENGD = [
            [{name: '清远市'}, {name:rankItemsMap[5].place , value: rankItemsMap[5].numb/1000}],
        ];
        [['清远市', BJData], ['清远市', GUANG],['清远市', SHData],['清远市', SHENZHEN],['清远市', XIAN],['清远市', FENGD]].forEach(function (item, i) {
            series.push(
                // {
                //     name: item[0],
                //     type: 'lines',
                //     zlevel: 1,
                //     symbol:'circle',
                //     effect: {
                //         show: true,
                //         period: 6,
                //         trailLength: 0.7,
                //         color: '#0d1f6d',
                //         symbolSize: 3
                //     },
                //     lineStyle: {
                //         normal: {
                //             color: color[i],
                //             width: 0,
                //             //迁徙轨迹弧度
                //             curveness: 0.2
                //         }
                //     },
                //     progressiveThreshold: 500,
                //     progressive: 200,
                //     data: _self.convertData(item[1])
                // },
                // {
                //     //name: item[0],
                //     type: 'lines',
                //     zlevel: 2,
                //     symbol: ['none', 'arrow'],
                //     //箭头大小
                //     symbolSize: 2,
                //     effect: {
                //         show: true,
                //         period: 6,
                //         trailLength: 0,
                //         //小飞机
                //         //symbol: planePath,
                //         //移动点大小
                //         symbolSize: 1
                //     },
                //     lineStyle: {
                //         normal: {
                //             color: color[i],
                //             width: 2,
                //             opacity: 0.6,
                //             curveness: 0.2
                //         }
                //     },
                //     data: _self.convertData(item[1])
                // },
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
                                fontSize: 12
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    tooltip:{
                        formatter:function(params){
                            return _self.addDot(params.value[2]*1000)+'人'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    data:item[1].map(function (dataItem) {
                      
                        return {
                            name: dataItem[1].name,
                            value: _self.zhejiang.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });
        var option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item'
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
                            color:'#163387',
                            areaColor: '#163387',
                            borderColor:'white',
                            borderWidth:0.5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur:10,
                            opacity:0.3,
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
            },
            series: series
        };
        if (option && typeof option === "object") {
           this.chart.setOption(option, true);
        }
    
    }
  },
  mounted(){
    this.$nextTick(echarts_resize('fromEcharts',this)) ;
    
  },
  components:{
  }
}
</script>

