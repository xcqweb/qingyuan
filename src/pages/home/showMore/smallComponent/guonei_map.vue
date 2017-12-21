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
import 'echarts/map/js/china.js';
import zhejiangJson from 'echarts/map/json/province/zhejiang.json'
export default {
name: '',
props:{
    isActive:Boolean,
},
watch:{
    isActive:function(val){
         
    }
},
  data () {
    return {
        chart:null,
        // isActive:false,
        zhejiang:{
            geoCoordMap:{
            '浦江县': [120.105537,29.508488],
            '江山': [118.639502,28.757867],
            '湖州': [120.091557,30.904757],
            '嘉兴': [120.763058,30.761869],
            '宁波': [121.554142,29.89605],
            '绍兴': [120.583685,30.048225],
            '金华': [119.650022,29.095307],
            '丽水':[119.930581,28.483471],
            '台州': [121.425361,28.670242],
            '温州': [120.698668,28.015083],
            '丹山':[122.216445,29.992188],

            '象山县': [121.880694,29.482393],
            '巴厘岛': [119.892769, 29.469171],
            '松月楼农家乐': [119.901907, 29.524226],
            '韩悦温泉酒店':[119.880367,29.465532],
            '国际开元大酒店': [119.896891, 29.457441],
            '湖上民宿': [119.830011, 29.45022],
            "A121": [119.856286, 29.47606],
            "A122": [119.854744, 29.573336],
            "A123": [119.880196, 29.519615],
            "A124": [119.880918, 29.480216],
            "A125": [119.994344, 29.487643],
            "A126": [119.939702, 29.596214],
            "A127": [119.068183, 29.482913],
            "A128": [119.902491, 29.423014],
            "A129": [119.954948, 29.569795],
            "A130": [119.907716, 29.452952],
            "A131": [119.90769, 29.556498],
            "A132": [119.85966, 29.592726],
            "A133": [119.79563, 29.521539],
            "A134": [119.833465, 29.430714],
            "A135": [119.913783, 29.540966],
            "A136": [119.921972, 29.45195],
            "A137": [119.793131, 29.550955],
            "A138": [119.021794, 29.452713],
            "A139": [119.909616, 29.613302],
            "A140": [119.870065, 29.50086],
            "A141": [119.914977, 29.438854],
            "A142": [119.082901, 29.439093],
            "A143": [119.860351, 29.497494],
            "A144": [119.870637, 29.550895],
            "A145": [119.9413, 29.525508],
            "A146": [119.852727, 29.572282],
            "A147": [119.945691, 29.583597],
            "A148": [119.947588, 29.622033],
            "A149": [119.971023, 29.477063],
            "A150": [119.835079, 29.570531],
            "A151": [119.903241, 29.557063],
            "A152": [119.868432, 29.518683],
            "A153": [119.877126, 29.614547],
            "A154": [119.99524, 29.461843],
            "A155": [119.893757, 29.503221],
            "A156": [119.944954, 29.424112],
            "A157": [119.772361, 29.557335],
            "A158": [119.965446, 29.577481],
            "A159": [119.081259, 29.60218],
            "A160": [119.982137, 29.456119],
            "A161": [119.909187, 29.444866],
            "A162": [119.835602, 29.540352],
            "A163": [119.033389, 29.559731],
            "A164": [119.764623, 29.572187],
            "A165": [119.052894, 29.455398],
            "A166": [119.087435, 29.435309],
            "A167": [119.963021, 29.521348],
            "A168": [119.839189, 29.570821],
            "A169": [119.88367, 29.607187],
            "A170": [119.075154, 29.603191],
            "A171": [119.993919, 29.445218],
            "A172": [119.914436, 29.463531],
            "A173": [119.99347, 29.523485],
            "A174": [119.989213, 29.572963],
            "A175": [119.845416, 29.570275],
            "A176": [119.957807, 29.583932],
            "A177": [119.920324, 29.426347],
            "A178": [119.839418, 29.446026],
            "A179": [119.099302, 29.534829],
            "A180": [119.944972, 29.585953],
            "A181": [119.831981, 29.578383],
            "A182": [119.977561, 29.516778],
            "A183": [119.993623, 29.433389],
            "A184": [119.080565, 29.568242],
            "A185": [119.842857, 29.504842],
            "A186": [119.002218, 29.619641],
            "A187": [119.069511, 29.51],
            "A188": [119.899688, 29.586303],
            "A189": [119.944514, 29.52984],
            "A190": [119.76529, 29.518601],
            "A191": [119.92825, 29.600346],
            "A192": [119.954466, 29.575428],
            "A193": [119.802779, 29.468806],
            "A194": [119.994277, 29.437357],
            "A195": [119.938016, 29.570169],
            "A196": [119.001832, 29.539286],
            "A197": [119.933232, 29.55706],
            "A198": [119.961361, 29.496038],
            "A199": [119.831335, 29.556318],
            "A200": [119.972513, 29.499406]
        },
        BJData:[
            [{name: '浦江县'}, {name: '江山', value: 95}],
            
        ],
        GUANG:[
            [{name: '浦江县'}, {name: '湖州', value: 40}],
            
        ],
        SHData:[
            [{name: '浦江县'}, {name: '嘉兴', value: 10}],
            
        ],
        SHENZHEN:[
            [{name: '浦江县'}, {name: '宁波', value: 10}],
        ],
        XIAN:[
            [{name: '浦江县'}, {name: '台州', value: 95}],
        ],
        FENGD:[
            [{name: '浦江县'}, {name: '丹山', value: 20}]
        ],
        WENZ:[
            [{name: '浦江县'}, {name: '温州', value: 20}]
        ],
        },
        geoCoordMap:{
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '浦江县': [119.898496, 29.456035],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        },
        BJData:[
            [{name: '清远'}, {name: '北京', value: 95}],
            
        ],
        GUANG:[
            [{name: '清远'}, {name: '长春', value: 40}],
            
        ],
        SHData:[
            [{name: '清远'}, {name: '深圳', value: 10}],
            
        ],
        SHENZHEN:[
            [{name: '清远'}, {name: '成都', value: 10}],
        ],
        XIAN:[
            [{name: '清远'}, {name: '上海', value: 95}],
        ],
        FENGD:[
            [{name: '清远'}, {name: '重庆', value: 20}]
        ],
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
        let _self=this
        if(this.chart){
            this.chart.dispose();
        }
        var dom = document.getElementById("fromEcharts");
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','6792fb'];
        var series = [];
        [['清远', _self.BJData], ['清远', _self.GUANG],['清远', _self.SHData],['清远', _self.SHENZHEN],['清远', _self.XIAN],['清远', _self.FENGD]].forEach(function (item, i) {
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
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
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
                            areaColor: '#2a333d'
                        }
                    }
            },
            series: series
        };
        if (option && typeof option === "object") {
           this.chart.setOption(option, true);
        }
    },
    redomaa(){
        if(this.chart){
            this.chart.dispose();
        }
        let _self=this
        this.isActive=false;
         echarts.registerMap('zhejiang', zhejiangJson);
        var dom = document.getElementById('fromEchart');
        this.chart = echarts.init(dom);
        var color =['#5aa7fd', '#5aa7fd', '#5aa7fd','#5aa7fd','#5aa7fd','5aa7fd','5aa7fd'];
        var series = [];
        [['浦江县', _self.zhejiang.BJData], ['浦江县', _self.zhejiang.GUANG],['浦江县', _self.zhejiang.SHData],['浦江县', _self.zhejiang.SHENZHEN],['浦江县', _self.zhejiang.XIAN],['浦江县', _self.zhejiang.FENGD],['浦江县',_self.zhejiang.WENZ]].forEach(function (item, i) {
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
                            color: color[i],
                            width: 0,
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
                    symbol: ['none', 'arrow'],
                    //箭头大小
                    symbolSize: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //小飞机
                        //symbol: planePath,
                        //移动点大小
                        symbolSize: 1
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 2,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
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
                                fontSize: 12
                            }
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
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
                map: 'zhejiang',
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
    this.$nextTick(echarts_resize('fromEcharts',this)) 
  },
  components:{
  }
}
</script>

