<style lang="less" scoped>
    @import '../../../common/js/baidumap/TrafficControl_min.css';
.d1{
    position:relative;
    width: 100%;
    height: 100%;
    h1{
        position:absolute;
        top:1.3rem;
        left:2rem;
        font-size: 1.1rem;
        color:white;
    }
    .toast-video{
        position:absolute;
        top:8%;
        right:2.5%;
        width:40%;
        height:50%;
        overflow: hidden;
        background-color:#363eaa;
        box-shadow: 0 2px 42px rgba(6,19,80,14);
        h2{
            padding-left: 1rem;
            padding-top: .2rem;
            padding-bottom: .2rem;
            width:100%;
            height: 8%;
            font-size:1.1rem;
            color: white;
            line-height: 1.5rem;
            text-align: left;
            letter-spacing:.2rem;
            background-color:#363eaa;
            box-shadow: 0 1px 10px rgba(25,24,47,0.4);
        }
        video{
            height: 92%;
            width: 100%;
            z-index: 200;
        }
    }
    .lineVideo{
        position:absolute;
        width: 95%;
        height: 85%;
        overflow: hidden;
        top:12%;
        left:2.5%; 
        pointer-events:none;
    }
}
.XSDFXPaged{
    position:absolute;
    width: 95%;
    height: 80%;
    overflow: hidden;
    top:15%;
    left:2.5%;
    font-family: "微软雅黑";
}
.anchorBL{ 
display:none !important; 
}

</style>
<template>
    <div class="d1">
        <div id="XSDFXPaged" class="XSDFXPaged"></div>
    </div>
</template>


<script>

    export default {
        name:'d1',
        data () {
            return {
            }
        },
        props:[
            'place','mainPageSelect'
        ],
        watch:{
            mainPageSelect:{
                handler: function (val, oldVal) {
                     this.getResponse(val.place)
                },
                deep:true,
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
                let _self = this
                let lenY = 29.518155 - 29.510533;
                let lenX = 119.913692 - 119.932808;
                var points = [
                        [119.923671,29.513494],
                        [119.919621,29.516494],
                        [119.930621,29.518494],
                        [119.925621,29.512494],
                        [119.931621,29.511494],
                        [119.924621,29.514494],
                        [119.912621,29.515494],
                    ];
                // 向地图添加标注
                for( let i = 0;i < points.length; i++){
                    //定义新图标
                    var myIcon = new BMap.Icon(require("../../../assets/images/watch31.png"), new BMap.Size(30, 30), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });
                    
                    (function() {
                        var point = new BMap.Point(points[i][0],points[i][1]);
                        // 创建标注对象并添加到地图 
                        var marker = new BMap.Marker(point,{icon: myIcon});
                        map.addOverlay(marker);
                        
                        //添加新图标的监听事件
                        marker.addEventListener("click",
                            function(event) {
                            var p = marker.getPosition();       //获取marker的位置
                            map.centerAndZoom(new BMap.Point(p.lng+lenY*0.25,p.lat+lenY*0.25), 16);
                            _self.videoToast=true;
                            
                            window.event?window.event.cancelBubble=true:event.stopPropagation();
                        },false);
                    })(i);
                };
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
                var beijingPosition=new BMap.Point(119.932045,29.4510683),
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
                var ctrl = new BMapLib.TrafficControl({
                    showPanel: true //是否显示路况提示面板
                });      
                map.addControl(ctrl);
                ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);  
            },
            addHot(map,arrHotPoint){
                    var points =arrHotPoint;
                    let makeMap = function(){
                        let minX = 112.739365;
                        let minY = 23.554996;
                        let lenX = 113.362574 - 112.739365;
                        let lenY = 23.847771 - 23.554996;
                        for (var i = 0; i < 80; i++) {
                            let lng = Math.abs(Math.random()-0.7)*Math.abs(lenX)+minX
                            let lat = Math.abs(Math.random()-0.7)*Math.abs(lenY)+minY
                            let count = Math.random()*150
                            let point = {"lng":lng,"lat":lat,"count":count}
                            points.push(point)
                        }
                    }
                    makeMap();
                    map.enableScrollWheelZoom(); // 允许滚轮缩放
                   
                    if(!isSupportCanvas()){
                        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
                    }
                    //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
                    //参数说明如下:
                    /* visible 热力图是否显示,默认为true
                     * opacity 热力的透明度,1-100
                     * radius 势力图的每个点的半径大小   
                     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
                     *  {
                            .2:'rgb(0, 255, 255)',
                            .5:'rgb(0, 110, 255)',
                            .8:'rgb(100, 0, 255)'
                        }
                        其中 key 表示插值的位置, 0~1. 
                            value 为颜色值. 
                     */
                    let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
                    
                    map.addOverlay(heatmapOverlay);
                    heatmapOverlay.setDataSet({data:points,max:100});
                    //是否显示热力图
                     heatmapOverlay.show();
                    function closeHeatmap(){
                        heatmapOverlay.hide();
                    }
                   
                    function setGradient(){
                        /*格式如下所示:
                        {
                            0:'rgb(102, 255, 0)',
                            .5:'rgb(255, 170, 0)',
                            1:'rgb(255, 0, 0)'
                        }*/
                        var gradient = {};
                        var colors = document.querySelectorAll("input[type='color']");
                        colors = [].slice.call(colors,0);
                        colors.forEach(function(ele){
                            gradient[ele.getAttribute("data-key")] = ele.value; 
                        });
                        heatmapOverlay.setOptions({"gradient":gradient});
                    }
                    //判断浏览区是否支持canvas
                    function isSupportCanvas(){
                        var elem = document.createElement('canvas');
                        return !!(elem.getContext && elem.getContext('2d'));
                    }
            },
            addScript(val,arrHotPoint){
                let _self = this;
                var oS=document.createElement('script');
                oS.src='http://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js?'+Math.random();
                this.$el.appendChild(oS)
                oS.onload=function(){
                    _self.rodomMap(val,arrHotPoint);
                }
                this.$el.removeChild(oS);
            },
             addScriptForStyle(map){
                let _self = this;
                var oS=document.createElement('script');
                oS.src='http://lbsyun.baidu.com/custom/stylelist.js?'+Math.random();
                this.$el.appendChild(oS)
                oS.onload=function(){
                    map.setMapStyle({style:'light'})
                
                }
                this.$el.removeChild(oS);
            },
            moveTo(map,lon,lat,zoom){
                    if(lon){
                         map.panTo(new BMap.Point(lon,lat));
                         map.setZoom(zoom);
                    }
                   
            },
            rodomMap(val,arrHotPoint){
                const _self= this;
                const lenObj ={
                    "全部":{lon:113.06689,lat:23.699107,zoom:11},
                    "清远市":{lon:113.0323,lat:23.699107,zoom:13},
                    "清城":{lon:113.06689,lat:23.704022,zoom:13},
                    "清新":{lon:112.991271,lat:23.75427,zoom:13},
                    "佛冈":{lon:113.539303,lat:23.886532,zoom:13},
                    "英德":{lon:113.418281,lat:24.192466,zoom:13},
                    "连州":{lon:112.38616,lat:24.786467,zoom:13},
                    "连南":{lon:112.290355,lat:24.732074,zoom:13},
                    "连山":{lon:112.102727,lat:24.582118,zoom:13},
                    "阳山":{lon:112.646658,lat:24.47147,zoom:13},
                }; 
                //绘制牵引线
                _self.addLineVideo();
                var map = new BMap.Map("XSDFXPaged",{enableMapClick:true});
                map.addEventListener("mousedown",function(e){
                    _self.videoToast=false;
                },false)
                // 初始化地图,设置中心点坐标和地图级别
                map.centerAndZoom(new BMap.Point(113.046945,23.692731), 12);
                // 添加地图类型控件
                // map.addControl(new BMap.MapTypeControl());  
                // 设置地图显示的城市 此项是必须设置的
                map.setCurrentCity("浦江");    
                _self.addScriptForStyle(map); 
                // 开启鼠标滚轮缩放      
                map.enableScrollWheelZoom(true);
                // 设置定时器，对地图进行自动移动
                // this.mapMoveSelf
                /************************************************
                添加折线
                *************************************************/
                _self.moveTo(map,lenObj[val  ===  undefined ?"全部": val].lon,lenObj[val  ===  undefined ?"全部": val].lat,lenObj[val  ===  undefined ?"全部": val].zoom);
                var pointGZ = new BMap.Point(119.923671,29.514494);
                var pointHK = new BMap.Point(110.35,20.02);
                // setTimeout(function(){
                //     var polyline = new BMap.Polyline([pointGZ,pointHK],{strokeColor:"blue",strokeWeight:5,strokeOpacity:0.5});
                //     map.addOverlay(polyline);
                // },6000);
                
                _self.addHot(map,arrHotPoint);
                // _self.addControl(map);
                _self.addLocaPosition(map);
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
                _self.addIcon(map);
                /************************************************
                添加曲线
                *************************************************/
            
                /************************************************
                给地图添加右键菜单
                *************************************************/
                _self.addMenu(map);
            },
            getResponse(val){
            let _self = this;
            var paramsObj = {
                area:this.mainPageSelect.place,
                name:this.mainPageSelect.turist
            }
            this.$axios.get(API_URL+'/qy/api/command/getCommandScenicHot',{params:paramsObj}).then(r => {

                if(r.status ===200){
                    var arrHotPoint = r.data.data
                  
                   this.addScript(val,arrHotPoint);
                }
            })
        }
        },
        created(){
            this.getResponse("全部");
        },
    }
</script>
