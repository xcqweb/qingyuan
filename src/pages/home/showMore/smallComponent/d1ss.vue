<style lang="less" scoped>
    @import '../../../../common/js/baidumap/TrafficControl_min.css';
.d1{
    position:relative;
    width: 100%;
    height: 97%;
    margin-top: 32px;
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
    width: 98%;
    border-radius: 10px;
    height: 92%;
    overflow: hidden;
    top: 7%;
    left: 1%;
    font-family: "微软雅黑";
    
}

.control{
	position: absolute;
	right: 22px;
	top: 92px;
}

.ledgen{
	position: absolute;
	width: 364px;
	height: 76px;
	background: url(../../../../assets/images/hot/d1.png) no-repeat;
	left: 210px;
	top: 64px;
}
.anchorBL{ 
display:none !important; 
}
 .scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
        
    }
    .hidden{
    	display: none;
    	li:nth-child(1){
    		background: url(../../../../assets/images/hot/hot1.png);
    	}
    	li:nth-child(2){
    		background: url(../../../../assets/images/hot/hot2.png);
    	}
    	li:nth-child(3){
    		background: url(../../../../assets/images/hot/hot3.png);
    	}
    }

</style>
<template>
    <div class="d1">
        <div :id="idName" class="XSDFXPaged"></div>
        <div class="scenic">{{scenics}}</div>
        <div class="control" style='width:660px;height:150px;background:rgba(21,51,135,0.56); border-radius:0 10px 0 20px; margin:-28px -6px 0 0'>
		<ul style='display:flex; justify-content:center; align-items:center; color:#fff; font-size:20px; width:566px; margin:0px 0 0 38px; padding-top:30px; font-weight: bold;'>
			
			<li style='flex:1; height:80px; position:relative; cursor: pointer;' @click="jumpPage('http://qyyj.gdtadbs.com/Account/LoginNotPwd/d89d5b4a-6ca0-4020-8853-3a201323e177?t=2')">
				<p style='text-align:center;'>
				<span  style='width:56px;height:48px; display:inline-block; background: url("./static/img/hot3.png") no-repeat'></span>
				</p>
				<p style='margin-top:14px; text-align:center;'>
					<span  style='color:#fff; text-decoration:none; font-size:20px;'>高风险旅游项目</span></p>
			</li>
			<!---->
			<li style='flex:1; height:80px; position:relative; cursor: pointer;' @click="jumpPage('http://qyyj.gdtadbs.com/Account/LoginNotPwd/d89d5b4a-6ca0-4020-8853-3a201323e177?t=1')">
				<p style='text-align:center;'>
				<span  style='width:56px;height:48px; display:inline-block; background: url("./static/img/hot1.png") no-repeat;'></span>
				</p>
				<p style='margin-top:14px; text-align:center;'>
					<span  style='color:#fff; text-decoration:none; font-size:20px;'>景区安全隐患</span></p>
			</li>
			<!---->
			<li style='flex:1; height:80px; position:relative; cursor: pointer;' @click="jumpPage('http://qyyj.gdtadbs.com/Account/LoginNotPwd/d89d5b4a-6ca0-4020-8853-3a201323e177?t=3')">
				<p style='text-align:center;'>
				<span style='width:56px;height:48px; display:inline-block; background: url("./static/img/hot2.png") no-repeat;'></span>
				</p>
				<p style='margin-top:14px; text-align:center;'>
					<span style='color:#fff; text-decoration:none; font-size:20px;'>应急交通反馈</span></p>
			</li>
		</ul>
		</div>
		<div class="ledgen">
			
		</div>
		<ul class="hidden">
			<li></li>
			<li></li>
			<li></li>
		</ul>
    </div>
    
</template>


<script>
import traffic_points from '@/pages/home/showMore/bigComponent/json/traffic_points.json'
import boundarys from '@/pages/home/showMore/smallComponent/boundary.json'
import coords from '@/pages/home/showMore/smallComponent/reli.json'
import optionProps from '@/common/js/mixin/optionProps.js'
import _ from 'lodash'
    export default {
        name:'D1SS',
        mixins: [optionProps],
        
        data () {
            return {
            	idName:'d1ss',
            	scenics:'',
                reData:[],
                points:[],
                place:'全部',
                turist:'全部',
                isUpdate:true,
                radis:36,
                maxv:30,
                cords:[]
            }
        },
        watch:{
        	updatePlace:function(val){
        		this.place = val.place;
        		this.turist = val.turist;
          		this.radis = 36
        	},
            place:function(val){
            	this.turist = '全部'
                this.addScript(val,false)
            },
            turist:function(val,oldVal){
            	if(val==='全部'&&oldVal==="全部"){return}
                  this.addScript(val,true)
            }
        },
        methods:{
        	//点击右上角图标跳转
        	jumpPage(data){
        		this.$store.commit('hotMap/TRANSFORMA',{type:1,chain:data})
        	},
            addIcon(map){
            	let _self = this;
                var points = traffic_points;
                //console.log(points)
                // 向地图添加标注
                for( var i = 0;i < points.length; i++){
                    //定义新图标
                    var myIcon1 = new BMap.Icon(require("../../../../assets/images/lable.png"), new BMap.Size(44, 44), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });
                    
                    var myIcon2 = new BMap.Icon(require("../../../../assets/images/labler2.png"), new BMap.Size(44, 44), {
                    // 指定定位位置
                    offset: new BMap.Size(10, 25),
                    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置 
                    //imageOffset: new BMap.Size(0, 0 - i * 25)  设置图片偏移 
                    });

                    var point = new BMap.Point(points[i].point[0],points[i].point[1]);
                    // 创建标注对象并添加到地图 
                    //自定义图标
                    if(points[i].isHigher && points[i].isHigher===true){//4A级以上景区
                    	var marker = new BMap.Marker(point,{icon: myIcon1}); 
                    	
                    	map.addOverlay(marker);
                    	
	                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	                     //添加新图标的监听事件
		                marker.addEventListener('click',function(){
		                    //点击5A级景区跳转
		                    _self.$store.commit('hotMap/TRANSFORMA',{type:1})
		                })
                    }else{//4A级以下景区
                    	 var marker = new BMap.Marker(point,{icon: myIcon2});
                    	 map.addOverlay(marker);
	                     marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	                     //添加新图标的监听事件
		                marker.addEventListener('click',function(e){
		                    var p = e.target.getPosition();//获取位置
		                    _self.moveTo(map,p.lng,p.lat,14)
		                    
		                })
                    }
                    
                   
                    var label = new BMap.Label(points[i].label,{offset:new BMap.Size(20,-50)});
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
                //添加第三控件
//              var cr = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_TOP_RIGHT});   //设置版权控件位置
//				map.addControl(cr); //添加版权控件
//			
//				var bs = map.getBounds();   //返回地图可视区域
//				cr.addCopyright({
//					id: 1,
//					content: `<div>内容</div>`,
//					bounds: bs
//				});
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
            //填充指定区域
            addBoundary(map,rs){
	          
				//map.clearOverlays();        //清除地图覆盖物       
				var count = rs.boundaries.length; //行政区域的点有多少个
				
	          	var pointArray = [];
				for (var i = 0; i < count; i++) {
					var ply = new BMap.Polygon(//建立多边形覆盖物
						rs.boundaries[i], 
						{
							strokeWeight: 6, //线条宽度
							strokeColor: "green", //填线条颜色
							strokeOpacity:0.3,//线条透明度
							fillColor:'none', //填充颜色
							fillOpacity:1,//填充颜色透明度
						}); 
					map.addOverlay(ply);  //添加覆盖物
					pointArray = pointArray.concat(ply.getPath());
				}    
				//map.setViewport(pointArray);    //调整视野  
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
                    div.style.backgroundColor = '#f00';
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
            getResponseHot:_.debounce(function(map){
            	let _self = this
            	let paramsObj = {
            		area:"全部",
            		name:"全部"
            	}
            		if(!_self.reData.length){
            			 _self.$axios.get(API_URL+'/qy/api/v2/command/selectCommandScenicWarning',{params:paramsObj}).then(r => {
		                if(r.data.code ==="200"||r.data.code ===200){
		                   _self.reData = r.data.data
		                    _self.transformData(map)
		                  }
		                }) 
            		}else{
            			_self.transformData(map)
            		}
            },300),
            
            switchCount(n,num){
            	switch(n.count){
            		case 1:
            		n.count = 1+num;
            		break;
            		case 2:
            		n.count = 2+num;
            		break;
            		case 3:
            		n.count = 3+num;
            		break;
            		case 4:
            		n.count = 4+num;
            		break;
            		case 5:
            		n.count = 5+num;
            		break;
            	}
            	
            },
            
            transformData(map){
            	//根据景区当前客流来模拟热力图效果
            				this.cords = coords 
            				let _self = this
							for(let v of this.reData){
								if(v.percent===0){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				n.lat = 0
		                    				n.lng = 0
		                    			}
		                    		}
								}else if(v.percent>0&&v.percent<=1){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				if(n.count>1){
		                    					n.lat = 0
		                    					n.lng = 0
		                    				}
		                    			}
		                    		}
								}else if(v.percent>1&&v.percent<=30){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				let n1 = (v.percent)*0.1-0.5
		                    				_self.switchCount(n,n1)
		                    			}
		                    		}
								}else if(v.percent>30&&v.percent<=50){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				let n1 = (v.percent)*0.1
		                    				_self.switchCount(n,n1)
		                    			}
		                    		}
								}else if(v.percent>50&&v.percent<70){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				let n1 = (v.percent)*0.1+1
		                    				_self.switchCount(n,n1)
		                    			}
		                    		}
								}else if(v.percent>=70&&v.percent<80){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				let n1 = (v.percent)*0.1+5
		                    				_self.switchCount(n,n1)
		                    			}
		                    		}
								}else if(v.percent>=80){
									for(let n of _self.cords){
		                    			if(v.name===n.name){
		                    				let n1 = (v.percent)*0.1+14
		                    				_self.switchCount(n,n1)
		                    			}
		                    		}
								}
		                   }
							
							_self.points = _self.cords
		                    _self.addHot(map)
            },
            
            
            addHot(map){//热力图
            		 let _self = this
                       var points = this.points;
                    	
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
                    let heatmapOverlay = new BMapLib.HeatmapOverlay({ 
                    		"radius":this.radis,
//	                    	"gradient":{
//	                    		.5:'rgba(0, 0 , 255 ,0.001)',
//	                            .66:'rgba(163, 253, 42 ,1)',
//	                            .88:'rgba(254, 92, 3 ,1)'
//	                    	}
                    	});
                    
                    map.addOverlay(heatmapOverlay);
                      heatmapOverlay.setDataSet({data:points,max:this.maxv});
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
            moveTo(map,lon,lat,zoom,val,lenObj){
            	//console.log(lenObj,val)
                    if(lon){
                         map.setZoom(zoom);
                         map.centerAndZoom(new BMap.Point(lon,lat), zoom);
                         
                         if(boundarys[val]){
                         	 //this.addBoundary(map,boundarys[val]);	//绘制区域范围
                         }
                         
                    }
                   
            },
            initBoundary(map){
            	let arr = Object.keys(boundarys)
	        	arr.forEach( (v,i) => {
	        		//this.addBoundary(map,boundarys[v]);
	        	})
            },
            addScript(val,isTurist){
            	
                let _self = this;
                var oS=document.createElement('script');
                oS.src='https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js?'+Math.random();
                this.$el.appendChild(oS)
                oS.onload=function(){
                    _self.rodomMap(val,isTurist);
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
            rodomMap(val,isTurist){
                const _self= this;
                 let lenObj ={}
                if(!isTurist){
                	lenObj = {
	                    "全部":{lng:113.042358,lat:23.776528,zoom:13},
	                    "清远市":{lng:113.0323,lat:23.699107,zoom:13},
	                    "清城":{lng:113.06689,lat:23.704022,zoom:13},
	                    "清新":{lng:112.991271,lat:23.75427,zoom:13},
	                    "佛冈":{lng:113.539303,lat:23.886532,zoom:13},
	                    "英德":{lng:113.418281,lat:24.192466,zoom:13},
	                    "连州":{lng:112.38616,lat:24.786467,zoom:13},
	                    "连南":{lng:112.290355,lat:24.732074,zoom:13},
	                    "连山":{lng:112.102727,lat:24.582118,zoom:13},
	                    "阳山":{lng:112.646658,lat:24.47147,zoom:13},
                	}; 
                }else{
                	lenObj = {
	                    "全部":{lng:113.042358,lat:23.776528,zoom:13},
	                    "飞霞风景名胜区":{lng:113.188758,lat:23.724641,zoom:13},
	                    "牛鱼嘴原始生态风景区":{lng:113.153471,lat:23.774872,zoom:13},
	                    "天子山瀑布风景区":{lng:113.146295,lat:23.849325,zoom:13},
	                    "白庙渔村":{lng:113.146036,lat:23.711442,zoom:13},
	                    "飞来寺":{lng:113.172823,lat:23.708263,zoom:13},
	                    "美林湖及大家元摩天轮片区":{lng:113.043339,lat:23.50327,zoom:13},
	                    "太和古洞旅游区":{lng:112.999783,lat:23.745745,zoom:13},
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
	                    "九龙小镇":{lng:112.930222,lat:24.127433,zoom:13},
	                    "铁溪小镇":{lng:113.314992,lat:23.925412,zoom:13},
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
	                    "瑶族舞曲实景演出":{lng:112.28646,lat:24.72866,zoom:13},
	                    "云海花谷":{lng:112.304638,lat:24.65198,zoom:13},
	                    "大旭山瀑布群旅游景区":{lng:112.043239,lat:24.533676,zoom:13},
	                    "皇后山":{lng:112.086609,lat:24.732186,zoom:13},
	                    "鹰扬关景区":{lng:111.946833,lat:24.69164,zoom:13},
	                    "雾山梯田":{lng:112.191833,lat:24.743344,zoom:13},
	                    "北山古寺":{lng:112.655269,lat:24.490658,zoom:13},
	                    "鱼水旅游风景区":{lng:112.690161,lat:24.369281,zoom:13},
	                    "龙凤温泉":{lng:112.537964,lat:24.596431,zoom:13},
	                    
	                    "湟川三峡":{lng:112.459065,lat:24.7076,zoom:13},
	                    "古龙峡原生态旅游度假区":{lng:112.968498,lat:23.777931,zoom:13},
	                    "玄真古洞生态旅游区":{lng:113.02273,lat:23.751823,zoom:13},
	                    "清新温矿泉旅游度假区":{lng:112.801821,lat:23.612527,zoom:13},
	                    "黄腾峡生态旅游区":{lng:113.099852,lat:23.770316,zoom:13},
	                    "故乡里旅游度假区":{lng:113.070196,lat:23.490003,zoom:13},
	                    "飞来峡水利枢纽风景区":{lng:113.264348,lat:23.812998,zoom:13},
	                    "德盈新银盏温泉景区":{lng:113.137559,lat:23.557859,zoom:13},
	                    "狮子湖国际休闲旅游度假区":{lng:113.024277,lat:23.633192,zoom:13},
	                    "聚龙湾天然温泉度假村":{lng:113.491484,lat:23.751476,zoom:13},
	                    "森波拉温泉度假区":{lng:113.58838,lat:23.866364,zoom:13},
	                    "连州地下河":{lng:112.33077,lat:25.008827,zoom:13},
	                    "千年瑶寨":{lng:112.307675,lat:24.587119,zoom:13},
	                    "奇洞温泉度假区":{lng:113.495949,lat:24.288,zoom:13},
	                    "洞天仙境生态旅游度假区":{lng:112.906583,lat:24.158095,zoom:13},
	                    "宝晶宫生态旅游度假区":{lng:112.604885,lat:24.129556,zoom:13},
	                    "广东第一峰旅游风景区":{lng:112.915844,lat:24.804923,zoom:13},
	                    "广东瑶族博物馆":{lng:112.305657,lat:24.722881,zoom:13},
	                    "九州驿站英德天门沟景区":{lng:113.116071,lat:24.416634,zoom:13},
	                    "清远市金子山旅游风景区":{lng:112.05877,lat:24.72495,zoom:13},
                	}
                }
                
                //绘制牵引线
                //_self.addLineVideo();
                var map = new BMap.Map(_self.idName,{enableMapClick:true});
				map.addEventListener('zoomend',function(){
					let zoom = map.getZoom()
					switch(zoom){
						case 14:
						_self.maxv = 20;
						_self.radis = 32;
						break;
						case 13:
						_self.maxv = 26;
						_self.radis = 26;
						break;
					}
					if(zoom<=13){
						map.setZoom(13);
					}
					if(zoom>=14){
						map.setZoom(14);
					}
					
					map.clearOverlays();
					_self.addIcon(map);
					_self.getResponseHot(map);
//					_self.initBoundary(map);
				})
                // 初始化地图,设置中心点坐标和地图级别
                map.centerAndZoom(new BMap.Point(113.062468,23.695613),12);
                
                this.initBoundary(map)
                
                // 添加地图类型控件
                map.addControl(new BMap.MapTypeControl());  
                // 设置地图显示的城市 此项是必须设置的
                map.setCurrentCity("清远");   
                 _self.addScriptForStyle(map); 
                // 开启鼠标滚轮缩放      
                map.enableScrollWheelZoom(true);
                // 设置定时器，对地图进行自动移动
                // this.mapMoveSelf
                /************************************************
                
                
                添加折线
                *************************************************/
               
               if(!lenObj[val]){
               	return
               }
                _self.moveTo(map,lenObj[val  ===  undefined ?"全部": val].lng,lenObj[val  ===  undefined ?"全部": val].lat,lenObj[val  ===  undefined ?"全部": val].zoom,val,lenObj);
                var pointGZ = new BMap.Point(119.923671,29.514494);
                var pointHK = new BMap.Point(110.35,20.02);
                
                //_self.addHot(map);
                _self.getResponseHot(map);
                _self.addControl(map);
                 _self.addIcon(map);
                _self.addLocaPosition(map);
                _self.addMenu(map);
            },
            getResponse(val){
//          let _self = this;
//          var paramsObj = {
//              area:"全部",
//          }
//          this.$axios.get(API_URL+'/qy/api/v2/command/getCommandScenicHot',{params:paramsObj}).then(r => {
//              if(r.data.code ===200 || r.data.code === "200"){
//              	console.log(r.data.data)
//                  this.arrHotPoint = r.data.data
                    this.addScript("全部",true);
//              }
//          })
        }
        },
        mounted() {
        	this.$nextTick( () => {
        		this.place = this.updatePlace.place;
        		this.turist = this.updatePlace.turist;
            	this.getResponse("全部");
        	})
        }
    }
</script>
