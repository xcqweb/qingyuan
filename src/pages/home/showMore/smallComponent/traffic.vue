<style lang="less" scoped>
    @import '../../../../common/js/baidumap/TrafficControl_min.css';
.traffic{
    width: 100%;
    height: 100%;
    position:relative;
}
.XSDFXPage{
    width: 96%;
    height: 80%;
    overflow: hidden;
    top:18%;
    left: 2%;
    font-family: "微软雅黑";
    border-radius: 10px;
}
.scenics{
    position: absolute;
    bottom:0;
    width:100%;
    text-align: center;
    color: white;
    
}
.anchorBL{ 
display:none !important; 
}

</style>
<template>
    <div class="traffic">
        <div :id="idName" class="XSDFXPage"></div>
        <div class="scenics">{{scenics}}</div>
    </div>
    
</template>


<script>
require('@/common/js/baidumap/TrafficControl_min.js')
import traffic_points from '@/pages/home/showMore/bigComponent/json/traffic_points.json'
import optionProps from '@/common/js/mixin/optionProps.js'
    export default {
        name:'traffic',
        mixins: [optionProps],
        props:{
            lenLat:null,
        },
        data () {
            return {
				idName:'traffic',
				scenics:'',
				place:'',
				turist:''
            }
        },
        watch:{
           updatePlace:function(val){
        		this.place = val.place;
        		this.turist = val.turist;
        	},
            place:function(val){
                  this.addScript(val,false)
            },
            turist:function(val){
                  this.addScript(val,true)
            }
        },
        methods:{
            mapMoveSelf(map){
                setTimeout(function(){
                    map.panTo(new BMap.Point(119.906441,29.457793));
                }, 1000);
                setTimeout(function(){
                    map.setZoom(14);
                },4000);
            },
            addIcon(map){
                var points = traffic_points;
                // 向地图添加标注
                for( var i = 0;i < points.length; i++){
                    //定义新图标
                    var myIcon = new BMap.Icon(require("../../../../assets/images/lable.jpg"), new BMap.Size(44, 44), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });

                    var point = new BMap.Point(points[i].point[0],points[i].point[1]);
                    // 创建标注对象并添加到地图 
                    //自定义图标
                    // var marker = new BMap.Marker(point,{icon: myIcon});
                    var marker = new BMap.Marker(point);
                    var label = new BMap.Label(points[i].label,{offset:new BMap.Size(20,-20)});
                    label.setStyle({
                        color : "#153081",
                        border:"1px solid #153081",
                        fontSize : "12px",
                        height : "20px",
                        lineHeight : "20px",
                        fontFamily:"微软雅黑",
                        borderRadius:"4px",
                    });
	                marker.setLabel(label);
                    map.addOverlay(marker);
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                };
                //添加新图标的监听事件
                marker.addEventListener('click',function(){
                    var p = marker1.getPosition();//获取位置
                    // alert("点击的位置是：" + p.lng + ',' + p.lat);
                })
            },
            addMenu(map){
                var menu = new BMap.ContextMenu();

                var txtMenuItem = [
                    {
                        text:'放大',
                        callback:function(){map.zoomIn()}
                    },
                    {
                        text:'缩小',
                        callback:function(){map.zoomOut()}
                    }
                ];
                for(var i=0; i < txtMenuItem.length; i++){
                    menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
                }
                map.addContextMenu(menu);
            },
            addLocaPosition(map){
                //添加定位组件
                var geolocationControl = new BMap.GeolocationControl();
                geolocationControl.addEventListener("locationSuccess", function(e){
                // 定位成功事件
                var address = '';
                address += e.addressComponent.province;
                address += e.addressComponent.city;
                address += e.addressComponent.district;
                address += e.addressComponent.street;
                address += e.addressComponent.streetNumber;
                alert("当前定位地址为：" + address);
                });
                geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                alert(e.message);
                });
                map.addControl(geolocationControl)
            },
            addControl(map){
                //添加工具条、比例尺控件
                map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
                map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT,type: BMAP_NAVIGATION_CONTROL_LARGE,enableGeolocation: true}));
            },
            addControlCityList(map){
                //创建城市下拉列表控件；
                map.addControl(new BMap.CityListControl({
                    anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
                    offset:new BMap.Size(130,23),
                    //切换城市之间事件
                    onChangeBefore: function(){
                       alert('before');
                    },
                    //切换城市之后事件
                    onChangeAfter:function(){
                      alert('after');
                    }
                }));
            },
            addLine(map){
                //添加曲线
                var beijingPosition=new BMap.Point(116.432045,39.910683),
                hangzhouPosition=new BMap.Point(120.129721,30.314429),
                taiwanPosition=new BMap.Point(121.491121,25.127053);
                var point = [beijingPosition,hangzhouPosition,taiwanPosition];

                var curve = new BMapLib.CurveLine(point, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});//创建弧线
                map.addOverlay(curve);//添加到地图上
                curve.enableEditing();//开启编辑功能
            },
            addCustControl(map){
                //创建自定义放大缩小悬浮控件
                function ZoomControl() {
                //默认停靠位置和偏移量
                this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
                this.defaultOffset = new BMap.Size(50,23);
                }
                //通过JavaScript的prototype属性继承于BMap.Control
                ZoomControl.prototype = new BMap.Control();
                //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
                //在本方法中创建div容器，并将其添加到地图容器中
                ZoomControl.prototype.initialize = function(map) {
                    //创建一个DOM元素
                    var div = document.createElement('div');
                    //添加文字说明
                    div.appendChild(document.createTextNode('放大两级'));
                    //添加样式
                    div.style.color = '#40C5CC'; 
                    div.style.cursor = 'pointer';
                    div.style.border = '3px solid gray';
                    div.style.backgroundColor = '#eee';
                    //绑定事件，点击触发
                    div.onclick = function(e) {
                        map.setZoom(map.getZoom() + 2);
                    }
                    //添加DOM元素到地图上
                    map.getContainer().appendChild(div);
                    //将DOM元素返回
                    return div;
                }
                //创建控件
                var myZoomCtrl = new ZoomControl();
                map.addControl(myZoomCtrl)
            },
            addLoad(map){
                //实时路况
                 
                var _self = this;
                
                var ctrl = new BMapLib.TrafficControl({
                    
                    showPanel: true //是否显示路况提示面板
                });   
                map.addControl(ctrl);
                ctrl.show();
                ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);  
            },
            moveTo(map,lng,lat,zoom){
                    if(lng){
                         //map.panTo(new BMap.Point(lng,lat));
                         map.setZoom(zoom);
                         map.centerAndZoom(new BMap.Point(lng,lat), zoom);
                    }
                   
            },
            addScript(val,isTurist){
                let _self = this;
                var oS=document.createElement('script');
                oS.src='http://lbsyun.baidu.com/custom/stylelist.js?'+Math.random();
                this.$el.appendChild(oS)
                oS.onload=function(){
                    //map.setMapStyle({style:'light'})
                	_self.init(val,isTurist)
                }
                this.$el.removeChild(oS);
            },
            
            init(val,isTurist){
                // 百度地图API功能
                // 创建Map实例
                const _self= this;
                let lenObj ={}
                
                
                if(!isTurist){
                	lenObj = {
	                    "全部":{lng:113.06689,lat:23.699107,zoom:11},
	                    "清远市":{lng:113.0323,lat:23.699107,zoom:13},
	                    "清城":{lng:113.06689,lat:23.704022,zoom:14},
	                    "清新":{lng:112.991271,lat:23.75427,zoom:14},
	                    "佛冈":{lng:113.539303,lat:23.886532,zoom:13},
	                    "英德":{lng:113.418281,lat:24.192466,zoom:13},
	                    "连州":{lng:112.38616,lat:24.786467,zoom:13},
	                    "连南":{lng:112.290355,lat:24.732074,zoom:13},
	                    "连山":{lng:112.102727,lat:24.582118,zoom:13},
	                    "阳山":{lng:112.646658,lat:24.47147,zoom:13},
                	}; 
                }else{
                	lenObj = {
	                    "全部":{lng:113.06689,lat:23.699107,zoom:11},
	                    "飞霞风景名胜区":{lng:113.188758,lat:23.724641,zoom:14},
	                    "牛鱼嘴原始生态风景区":{lng:113.153471,lat:23.774872,zoom:14},
	                    "天子山瀑布风景区":{lng:113.146295,lat:23.849325,zoom:14},
	                    "白庙渔村":{lng:113.146036,lat:23.711442,zoom:13},
	                    "飞来寺":{lng:113.172823,lat:23.708263,zoom:13},
	                    "美林湖及大家元摩天轮片区":{lng:113.043339,lat:23.50327,zoom:13},
	                    "太和古洞旅游区":{lng:112.999031,lat:23.747737,zoom:13},
	                    "笔架山度假区":{lng:113.042358,lat:23.776528,zoom:13},
	                    "安庆村":{lng:112.823456,lat:23.616738,zoom:13},
	                    "清泉湾生态旅游度假区":{lng:112.928301,lat:23.764869,zoom:13},
	                    "金龙洞":{lng:112.884256,lat:24.083820,zoom:13},
	                    "九牛洞村":{lng:112.778425,lat:23.622568,zoom:13},
	                    "观音山王山寺":{lng:113.492142,lat:23.94476,zoom:13},
	                    "田野绿世界":{lng:113.420187,lat:23.891213,zoom:13},
	                    "熹乐谷":{lng:113.497596,lat:23.780602,zoom:13},
	                    "金龟泉生态度假村":{lng:113.526753,lat:23.781643,zoom:13},
	                    "上岳古民居":{lng:113.355146,lat:23.811075,zoom:13},
	                    "峰林胜境景区":{lng:112.94251,lat:24.227131,zoom:13},
	                    "英德老虎谷暗河漂流":{lng:112.855041,lat:24.257544,zoom:13},
	                    "九龙小镇":{lng:112.930222,lat:24.127433,zoom:14},
	                    "铁溪小镇":{lng:113.314992,lat:23.925412,zoom:14},
	                    "仙湖温泉旅游度假区":{lng:113.331145,lat:24.344247,zoom:13},
	                    "浈阳坊旅游小镇":{lng:113.316922,lat:24.039576,zoom:13},
	                    "大樟沙滩度假村":{lng:113.286205,lat:24.003529,zoom:13},
	                    "云水谣":{lng:113.399516,lat:24.390361,zoom:13},
	                    "彭家祠":{lng:112.907855,lat:24.19271,zoom:13},
	                    "清远市连州福山景区":{lng:112.399579,lat:24.931353,zoom:13},
	                    "大东山温泉度假区":{lng:112.632779,lat:24.857549,zoom:13},
	                    "李屋村":{lng:112.558599,lat:24.833107,zoom:13},
	                    "潭岭天湖":{lng:112.661577,lat:24.97412,zoom:13},
	                    "油岭瑶寨":{lng:112.27381,lat:24.617349,zoom:13},
	                    "瑶族舞曲实景演出":{lng:112.304038,lat:24.65698,zoom:13},///
	                    "云海花谷":{lng:112.304638,lat:24.65198,zoom:13},
	                    "大旭山瀑布群旅游景区":{lng:112.043239,lat:24.533676,zoom:13},
	                    "皇后山":{lng:112.086609,lat:24.732186,zoom:13},
	                    "鹰扬关景区":{lng:111.946833,lat:24.69164,zoom:13},
	                    "雾山梯田":{lng:112.191833,lat:24.743344,zoom:13},
	                    "北山古寺":{lng:112.655269,lat:24.490658,zoom:13},
	                    "鱼水旅游风景区":{lng:112.690161,lat:24.369281,zoom:13},
	                    "龙凤温泉":{lng:112.690761,lat:24.369881,zoom:13},//
                	}
                }
                var map = new BMap.Map(this.idName,{enableMapClick:true});
                // 初始化地图,设置中心点坐标和地图级别
                map.centerAndZoom(new BMap.Point(113.046945,23.692731), 12);
                // _self.addScript(map);
                // 添加地图类型控件
                // map.addControl(new BMap.MapTypeControl());  
                // 设置地图显示的城市 此项是必须设置的
                map.setCurrentCity("清远");    
                // 开启鼠标滚轮缩放      
                map.enableScrollWheelZoom(true);
                // debugger
                
                if(!lenObj[val]){return}
                _self.moveTo(map,lenObj[val  ===  undefined ?"全部": val].lng,lenObj[val  ===  undefined ?"全部": val].lat,lenObj[val  ===  undefined ?"全部": val].zoom);
                // 设置定时器，对地图进行自动移动
                // this.mapMoveSelf
                /************************************************
                添加折线
                *************************************************/
                // var pointGZ = new BMap.Point(119.923671,29.514494);
                // var pointHK = new BMap.Point(110.35,20.02);
                // setTimeout(function(){
                //     var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"blue",strokeWeight:5,strokeOpacity:0.5});
                //     map.addOverlay(polyline);
                // },6000);
                _self.addIcon(map);
                _self.addLoad(map);
                // _self.addControl(map);
                // _self.addLocaPosition(map);
                /************************************************
                添加自定义控件类，放大ZoomControl
                *************************************************/

                /************************************************
                添加添加城市列表控件
                *************************************************/
                // _self.addControlCityList(map);
                /************************************************
                添加新图标
                *************************************************/
                // _self.addIcon(map);
                /************************************************
                添加曲线
                *************************************************/
            
                /************************************************
                给地图添加右键菜单
                *************************************************/
                _self.addMenu(map);
                
            }
        },
        mounted() {
        	if(timer){clearTimeout(timer)}
        	let timer = setTimeout( () => {
        		this.$nextTick(this.addScript("全部",true))
        	},2000)
              
        } ,
    }
</script>
