<template>
    <div class="map_content">
        <div id="fromEchart"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts';
import guangdong from 'echarts/map/json/province/guangdong.json'
export default {
  name: '',
  data () {
    return {
        chart:null,
        isActive:false,
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
        },
    }
  },
  methods: {
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
    redom(){
        if(this.chart){
            this.chart.dispose();
        }
        
        let _self=this
         echarts.registerMap('guangdong', guangdong);
        var dom = document.getElementById('fromEchart');
        this.chart = echarts.init(dom);
        var color =['#f18790', '#75c774', '#5aa7fd','#f1c54b','#c184ff','#6792fb','#43dbff'];
        var series = [];
        var rankItemsMap = [
	        {"place":"深圳市","numb":"415,686","rise":"up","percent":"37.85%"},
	        {"place":"广州市","numb":"343,146","rise":"down","percent":"31.25%"},
	        {"place":"中山市","numb":"285,127","rise":"up","percent":"25.96%"},
	        {"place":"清远市","numb":"181,456","rise":"up","percent":"25.96%"},
	        {"place":"珠海市","numb":"52,036","rise":"up","percent":"16.52%"},
	        {"place":"东莞市","numb":"37,292","rise":"down","percent":"4.21%"}
    ];
        rankItemsMap.forEach((item)=>{item.numb = Number((item.numb+"").replace(/,/g,"")).toFixed(1)})
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
    },
    
  },

  mounted(){
    this.$nextTick(echarts_resize('fromEchart',this)) 
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.map_content {
  width: 100%;
  height: 100%;
  position: relative;
}
#fromEchart{
    width:100%;
    height:100%;
}
</style>