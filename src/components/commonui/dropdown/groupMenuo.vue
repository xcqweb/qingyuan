<template>
	<div id="box">
			<!--关键词-->
			
			<DataList
				class=datalist
				:listData='cityData'
				v-on:blur='catchmsg4'
	        	@getName='catchmsg4'
			></DataList>
			
			
			<div class="nameLabel">名 称</div>
	        <sleckt 
	        class='name'
	        :selectList="nameselectlist" 
	        v-on:listenAtparent="catchmsg2"
	        ></sleckt>
		
		<!--<div v-show="!scienceTypes">-->
	        <div class="jqlable">区 / 县</div>
	        <sleckt 
	        class='science'
	        :selectList="comQyselectlist" 
	        v-on:listenAtparent="catchmsg1"
	        :showScienceNum=true
	        ></sleckt>
	        
	        <div class="title">筛选条件</div>
	        <div class="qylable">类 型</div>
	        <sleckt 
	        class="area"
	        :selectList="typeselectlist" 
	        v-on:listenAtparent="catchmsg3"
	        ></sleckt>
        <!--</div>-->
        <div v-if='isDate'>
        	<!-- 时间下拉框组件 -->
        	<div class="time">时 间</div>
        	<ul class="dateChose"  v-if="dateChoseList">
                <li 
                v-for="(item,index) in dateChoseList" 
                :class="item.class" 
                @click="dateClick(index)"
                >{{item.context}}</li>
            </ul>
            <vDate 
             :isBorder=true
             class='vueDate'
             v-if="vDateStatus"
             :vDateStatus='vDateStatus'
             @pageDate='getDate'
             :isActive = 'isEndDate' 
             :showStatus=true
             :daySeven=false
             ></vDate>
        </div>
        <div class="scienceChose" v-show="isScience">
            <span class="btn" @click="scienceType(0)" :class="{'active':scienceTypes}">全部景区</span>
            <span class="btn" @click="scienceType(1)" :class="{'active':!scienceTypes,'active1':scienceTypes}">4A以上景区</span>
        </div>
	</div>
</template>

<script>
	import sleckt from '@/components/commonui/dropdown/dropdown-menu2.vue'
	import DataList from '@/components/commonui/datalist/dataList.vue'
	import vDate from '@/components/commonui/vueDate/app.vue'
	import Bus from '@/common/js/bus'
	
	export default{
		data(){
			return{
				//时间控件
				seType:'全部',
				isEndDate:true,
           		vDateStatus:true,
           		type:"景区",
           		hotelData:{},
           		nameSelectData:{
	                width:'76.9%',
	                left:'10%',
	                title:'全部',
	                selectStatus:false,
	                key:'science',
	                place:[],
	            },
           		dateChoseList:[
	                {context:'日',class:''},
	                {context:'月',class:''},
	                {context:'年',class:'chose'},
	            ],
				qyselectlist:{
                    width:'76.9%',
                    left:'10%',
                    title:'全部',
                    key:'area',
                    selectStatus:false,
                    place:[
                        {name:'全部',num:60},{name:"清城",num:11},{name:"清新",num:9},{name:"英德",num:13},{name:"连州",num:6},{name:"佛冈",num:7},{name:"连山",num:5},{name:"连南",num:5},{name:"阳山",num:4}
                    ]
                },
                
                keyselectlist:{
                    width:'76.9%',
                    left:'10%',
                    title:'全部',
                    selectStatus:false,
                    place:[]
                },
                
                typeselectlist:{
                    width:'76.9%',
                    left:'10%',
                    title:'景区',
                    selectStatus:false,
                    place:[
                        '景区','酒店/民宿'
                    ]
                },
                
                updateData:{
                    place:'全部',
                    turist:'全部',
                },
               startData:["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田','飞来峡水利枢纽风景区',
                            '北山古寺','鱼水旅游风景区','龙凤温泉','连州地下河','湟川三峡','千年瑶寨','清新温矿泉旅游度假区','黄腾峡生态旅游区','玄真古洞生态旅游区','故乡里旅游度假区',
                            '聚龙湾天然温泉度假村','宝晶宫生态旅游度假区','广东第一峰旅游风景区','奇洞温泉度假区','森波拉温泉度假区','德盈新银盏温泉景区','狮子湖国际休闲旅游度假区',
                            '广东瑶族博物馆','古龙峡原生态旅游度假区','洞天仙境生态旅游度假区','清远市金子山旅游风景区','九州驿站英德天门沟景区','太和古洞旅游区'
                ],
                cityData:["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田','飞来峡水利枢纽风景区',
                            '北山古寺','鱼水旅游风景区','龙凤温泉','连州地下河','湟川三峡','千年瑶寨','清新温矿泉旅游度假区','黄腾峡生态旅游区','玄真古洞生态旅游区','故乡里旅游度假区',
                            '聚龙湾天然温泉度假村','宝晶宫生态旅游度假区','广东第一峰旅游风景区','奇洞温泉度假区','森波拉温泉度假区','德盈新银盏温泉景区','狮子湖国际休闲旅游度假区',
                            '广东瑶族博物馆','古龙峡原生态旅游度假区','洞天仙境生态旅游度假区','清远市金子山旅游风景区','九州驿站英德天门沟景区','太和古洞旅游区'
                ],
                tablist:this.tablistCom,
			}
		},
		props:['isDate','isScience'],
		methods:{
			//选择4a景区
			scienceType(data){
				this.$emit('scienceType',{type:data});
			},
			
			//获取时间
	        getDate(value){
	        	
	            this.timeDate ={
	                end:value.end,
	                begin:value.begin,
	            }
	            this.$emit('choseDate',this.timeDate);
	            this.dateChoseList=[
	                {context:'日',class:''},
	                {context:'月',class:''},
	                {context:'年',class:''},
	            ]
	        },
	         dateClick(indexClick){
	            this.dateChoseList.forEach((item,index)=>{
	                if(index === indexClick){
	                    item.class = 'chose';
	                    this.dateIndex = index;
	                }else{
	                    item.class = '';
	                }
	            })
	            this.$emit('choseDay',indexClick);
	        },
	        //区县
			catchmsg1(data){
				Bus.$emit('clearKey')
				this.seType = '全部';
                this.updateData ={
                    place:data,
                    turist:"全部"
                }
                this.$emit('doubleChose',this.updateData)
            	this.cityData = this.switch(data,this.type)
	        },
	       	// 名称
	        catchmsg2(data){
	        	
	        	if(this.type==='景区'){
	        		this.updateData ={
		                place:this.updateData.place,
		                turist:data,
		            }
	        		this.seType = '全部';
	           		this.$emit('doubleChose',this.updateData)
	        	}else{
	        		//酒店选择
	        		this.$emit('hotelChose',data)
	        	}
	        	Bus.$emit('clearKey')
	        },
	       //类型
	        catchmsg3(type){
				//alert(type) 
				Bus.$emit('clearKey')
				this.seType = '全部';
				this.type = type;
				this.searchVal = "";
				this.cityData = this.switch("全部",type)
				
				if(type==='景区'){
					this.$emit('selectType',0)
				}else{
					this.$emit('selectType',1)
					this.updateData ={
		                place:this.updateData.place,
		                turist:"全部",
		            }
				}
	        },
	        
	        //关键词
	        catchmsg4(val){
	        	if(val){
	        		this.seType = val
	        		if(this.type==='景区'){
		        		this.updateData ={
		                place:this.updateData.place,
		                turist:val,
		            }
		           		this.$emit('doubleChose',this.updateData)
		        	}else{
		        		//酒店选择
		        		this.$emit('hotelChose',val)
		        	}
	        	}
	        },
	        
	        switch(val,type){
            const  cityData = {
               "全部":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田','飞来峡水利枢纽风景区',
                            '北山古寺','鱼水旅游风景区','龙凤温泉','连州地下河','湟川三峡','千年瑶寨','清新温矿泉旅游度假区','黄腾峡生态旅游区','玄真古洞生态旅游区','故乡里旅游度假区',
                            '聚龙湾天然温泉度假村','宝晶宫生态旅游度假区','广东第一峰旅游风景区','奇洞温泉度假区','森波拉温泉度假区','德盈新银盏温泉景区','狮子湖国际休闲旅游度假区',
                            '广东瑶族博物馆','古龙峡原生态旅游度假区','洞天仙境生态旅游度假区','清远市金子山旅游风景区','九州驿站英德天门沟景区','太和古洞旅游区'
                ],
                "清城":['全部','飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区','德盈新银盏温泉景区','狮子湖国际休闲旅游度假区','飞来峡水利枢纽风景区',
                '黄腾峡生态旅游区','故乡里旅游度假区'],
                "清新":['全部','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村','清新温矿泉旅游度假区','玄真古洞生态旅游区','古龙峡原生态旅游度假区','太和古洞旅游区',],
                "佛冈":['全部','观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居','聚龙湾天然温泉度假村','森波拉温泉度假区'],
                "英德":['全部','峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠','宝晶宫生态旅游度假区','奇洞温泉度假区','洞天仙境生态旅游度假区','九州驿站英德天门沟景区'],
                "连州":['全部','清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖','连州地下河','湟川三峡'],
                "连南":['全部','油岭瑶寨','瑶族舞曲实景演出','云海花谷','千年瑶寨','广东瑶族博物馆'],
                "连山":['全部','大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田','清远市金子山旅游风景区'],
                "阳山":['全部','北山古寺','鱼水旅游风景区','龙凤温泉','广东第一峰旅游风景区'],

            }
            
            //酒店
            this.hotelData = {
            	"全部":['全部',
				"清远迎宾馆",
				"清远华冠大酒店",
				"清远市湖滨步步高酒店有限公司",
				"环城步步高酒店",
				"龙城大酒店",
				"正鑫大酒店",
				"鸿信宾馆",
				"清远丁香花园酒店",
				"侨丰宾馆",
				"清远市碧桂园假日半岛酒店有限公司",
				"飞来岛度假村",
 				"清远大酒店",
				"清远市好来登国际酒店有限公司",
				"清远格豪假日酒店有限公司",
				"东堤花园酒店",
				"清远市德盈新银盏温泉度假村",
				"银盏温泉旅游度假区",
				"江湾酒店",
				"清远市锦江之星旅馆",
				"清远市狮子湖酒店有限公司喜来登度假酒店",
				"清远市富宝大酒店",
				"清远国际酒店有限公司",
				"清远市美林湖温泉大酒店",
				"清远市建滔裕花园酒店",
				"佛冈白云温泉山庄有限公司",
				"佛冈县星光大酒店",
				"洪发大酒店",
				"佛冈县樵春山庄有限公司",
				"广东省机场管理集团有限公司佛冈培训中心",
				"广东森波拉度假山庄有限公司",
				"金鹏大酒店",
				"三泰商务酒店",
				"簧胜花园温泉酒店",
				"佛冈县石角镇双龙城商务酒店",
				"雄风大酒店",
				"天泉酒店",
				"阳山卓代花园酒店",
				"阳山县阳宾酒店",
				"阳山县雄风宾馆",
				"阳山县城南凤凰阁宾馆",
				"凯逸假日酒店",
				"连山壮族瑶族自治县名都大酒店",
				"连山民族宾馆",
				"连山县金都大酒店",
				"连山县连山宾馆",
				"连山民族度假村",
				"连山鹰扬酒店",
				"连南国际大酒店",
				"连南华泰宾馆",
				"凯逸大酒店",
				"新乐酒店",
				"清新丽晶酒店",
				"清新县田园牧歌生态旅游度假村有限公司",
				"清新县清新花园酒店有限公司",
				"清新温矿泉旅游渡假区(酒店)",
				"清新县玄真古洞生态旅游开发有限公司(酒店)",
				"清泉湾生态度假区酒店（广东世纪家园旅游开发有限公司）",
				"恒大世纪城（清远）酒店有限公司",
				"清新县爵士商务酒店",
				"英德市东方大酒店",
				"英德市粮香大酒店",
				"英德市英洲大酒店",
				"英德市通信宾馆",
				"金福宾馆",
				"英德市小岛宾馆",
				"英德市海螺国际大酒店",
				"英德溶洞温泉（住宿）",
				"英德市仁鑫大酒店",
				"连州国际大酒店",
				"连州大厦",
				"连州市红楼宾馆",
				"连州市新君悦酒店",
				"连州市皇朝大酒店",
				"清远市连州爱地旅游发展有限公司连州大酒店分司",
				"连州市燕喜大厦",
				"连州市顺达大酒店",
				"连州市腾龙宾馆",
				"清远嘉华大酒店有限公司",
				"阳山县福临门大酒店",
				"新城绿岛酒店",
                ],
                "清城":['全部',
						"清远迎宾馆",
						"清远华冠大酒店",
						"清远市湖滨步步高酒店有限公司",
						"环城步步高酒店",
						"龙城大酒店",
						"正鑫大酒店",
						"鸿信宾馆",
						"清远丁香花园酒店",
						"侨丰宾馆",
						"清远市碧桂园假日半岛酒店有限公司",
						"飞来岛度假村",
						"清远大酒店",
						"清远市好来登国际酒店有限公司",
						"清远格豪假日酒店有限公司",
						"东堤花园酒店",
						"清远市德盈新银盏温泉度假村",
						"银盏温泉旅游度假区",
						"江湾酒店",
						"清远市锦江之星旅馆",
						"清远市狮子湖酒店有限公司喜来登度假酒店",
						"清远市富宝大酒店",
						"清远国际酒店有限公司",
						"清远市美林湖温泉大酒店",
						"清远市建滔裕花园酒店",
						"清远嘉华大酒店有限公司",
						"新城绿岛酒店"],
                "清新":['全部',
						"凯逸大酒店",
						"新乐酒店",
						"清新丽晶酒店",
						"清新县田园牧歌生态旅游度假村有限公司",
						"清新县清新花园酒店有限公司",
						"清新温矿泉旅游渡假区(酒店)",
						"清新县玄真古洞生态旅游开发有限公司(酒店)",
						"清泉湾生态度假区酒店（广东世纪家园旅游开发有限公司）",
						"恒大世纪城（清远）酒店有限公司",
						"清新县爵士商务酒店"],
                "佛冈":['全部',"佛冈白云温泉山庄有限公司",
						"佛冈县星光大酒店",
						"洪发大酒店",
						"佛冈县樵春山庄有限公司",
						"广东省机场管理集团有限公司佛冈培训中心",
						"广东森波拉度假山庄有限公司",
						"金鹏大酒店",
						"三泰商务酒店",
						"簧胜花园温泉酒店",
						"佛冈县石角镇双龙城商务酒店"],
                "英德":['全部',"英德市东方大酒店",
						"英德市粮香大酒店",
						"英德市英洲大酒店",
						"英德市通信宾馆",
						"金福宾馆",
						"英德市迎宾馆",
						"英德市小岛宾馆",
						"英德市海螺国际大酒店",
						"英德溶洞温泉（住宿）",
						"英德市仁鑫大酒店"],
                "连州":['全部',"连州国际大酒店",
						"连州大厦",
						"连州市红楼宾馆",
						"连州市新君悦酒店",
						"连州市皇朝大酒店",
						"清远市连州爱地旅游发展有限公司连州大酒店分司",
						"连州市燕喜大厦",
						"连州市顺达大酒店",
						"连州市腾龙宾馆"
						],
                "连南":['全部',"连南国际大酒店",
						"连南华泰宾馆"],
                "连山":['全部',"连山壮族瑶族自治县名都大酒店",
						"连山民族宾馆",
						"连山县金都大酒店",
						"连山县连山宾馆",
						"连山民族度假村",
						"连山鹰扬酒店"],
                "阳山":['全部',"雄风大酒店",
						"天泉酒店",
						"阳山卓代花园酒店",
						"阳山县阳宾酒店",
						"阳山县雄风宾馆",
						"阳山县城南凤凰阁宾馆",
						"凯逸假日酒店",
						"阳山县福临门大酒店"],
            }
            if(type==='景区'){
            	return cityData[val]
            }else{
            	return this.hotelData[val]
            }
           
        },
        
        
        	//获取酒店列表
        	getHotelList(paramsObj){
        		this.$axios.get(API_URL+'/qy/api/v2/command/getHotels',{params:paramsObj}).then(r => {
            	let reData = r.data.data
            	reData.unshift('全部')
                if(r.status ===200){
                    //this.hotelData[paramsObj.area] = reData
                    //console.log(reData)
                }
           	 })
        	}
		},
		computed:{
			comQyselectlist(){
				if(this.type==='景区'){
					this.qyselectlist.place = [
                        {name:'全部',num:60},{name:"清城",num:11},{name:"清新",num:9},{name:"英德",num:13},{name:"连州",num:6},{name:"佛冈",num:7},{name:"连山",num:5},{name:"连南",num:5},{name:"阳山",num:4}
                    ]
					return this.qyselectlist
				}else{
					this.qyselectlist.place = [
                        {name:'全部',num:81},{name:"清城",num:26},{name:"清新",num:10},{name:"英德",num:10},{name:"连州",num:9},{name:"佛冈",num:10},{name:"连山",num:6},{name:"连南",num:2},{name:"阳山",num:8}
                    ]
					return this.qyselectlist
				}
			},
			
			 tablistCom:function(){
            let arrb = [];
            forEach(this.placeAttractions,function(value,key){
                let items = {
                    name:value.place,
                    status: key === 0 ? 'chose' : 'unchose'
                }
                arrb.push(items)
            })
            return arrb
           },
	        nameselectlist(){
	            if(!this.cityData){
	                this.cityData = this.startData;
	            }
	            this.nameSelectData.title = this.seType
	            this.nameSelectData.place = this.cityData
	            return this.nameSelectData
	        },
	        scienceTypes(){
	        	let val = this.$store.getters['hotMap/getState']
	        	if(val===1){
	        		return val 	
	        	}else{
	        		return '';
	        	}
	        	
	        }
		},
		beforeDestroy(){
			Bus.$off()
			this.$off()
		},
		components:{
			sleckt,
			vDate,
			DataList
		}
	}
</script>

<style lang="less" scoped="scoped">
@borderColor:#345BFA;
#box{
	.title{
	   position: absolute;
	   top: 5%;
	   left: 10%;
	   font-size: 16px;  
	}
	.qylable{
	    height:1.5rem;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 1.8rem;
	    position: absolute;
	    top: 13%;
	    left: 10%;
	}
	.jqlable{
	    height:1.5rem;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 1.8rem;
	    position: absolute;
	    top: 24%;
	    left: 10%;
	}
	
	.nameLabel{
		height:1.5rem;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 1.8rem;
	    position: absolute;
	    top: 35%;
	    left: 10%;
	}
	
	.keyW{
		height: 36px;
		width: 76.9%;
	    position: absolute;
	    text-align: left;
	    top: 47%; 
	    left: 10%;
	    color: #fff;
	    font-size: 16px;
	    background-color: #163387;
	    border: #345BFA 1.5px solid;
	    padding-left: 10px;
	    box-sizing: border-box;
	}
	
	.datalist{
		height: 36px;
		width: 76.9%;
	    position: absolute;
	    text-align: left;
	    top: 48%; 
	    left: 10%;
	    color: #fff;
	    font-size: 16px;
	    padding-left: 10px;
	    box-sizing: border-box;
	}
	
	 .keyW::-webkit-input-placeholder{
            color:#CCC;
        }
        .keyW::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#CCC;
        }
        .keyW:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#CCC;
        }
        .keyW:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#CCC;
        }
	
	.name{
		height: 36px;
	    position: absolute;
	    top: 42%; 
	    left: 0%;
	}
	
	.time{
	    height: 36px;
	    font-size: 18px;
	    color: #F0EFFD;
	    line-height: 36px;
	    position: absolute;
	    top: 53%;
	    left: 10%;
	}
	.area{
		height: 36px;
	    position: absolute;
	    top: 20%; 
	    left: 0%;
	}
	.science{
		 height: 36px;
	     position: absolute;
	     top: 31.5%;
	     left: 0%;
	}
	.vueDate{
		position: absolute;
	    top: 64%;
	    left: 10%;
	}
	
	.scienceChose{
		position: absolute;
		top: 40%;
	    left: 10%;
	    .btn{
	    	display: inline-block;
            width: 124px;
            height: 44px;
            line-height: 44px;
            color: #fff;
            font-size: 18px;
            border: 3px solid #345BFA;
            background-color: #163387;
            border-radius: 10px;
            margin-right: 1rem;
	    }
	    .active{
        	color: #a1a8c3;
        	border-color: #233faf;
        }
        .active{
        	color: #a1a8c3;
        	border-color: none;
        }
	}
	
	.starList,.dateChose{
		width: 270px;
		position: absolute;
	    top: 58%;
	    left: 10%;
	   background-color: rgba(0, 0, 0, 0);
	   li{
	        height: 36px;
	        width: 88px;
	        text-align: center;
	        line-height: 36px;
	        font-size: 16px;
	        border: 1px solid #355BFA;
	        float: left;
	       color:white;
	       cursor: pointer;
	       background-image:url('../../../assets/images/home/981513311442_.pic.jpg');
	      background-size: 100% 100%;
	      &.chose{
	        background-image:url('../../../assets/images/home/991513311442_.pic.jpg');
	          background-size: 100% 100%;
	          color:#8c97b8;
	      }
	   }
	   li:nth-child(1),li:nth-child(2){
	   	border-right: none;
	   }
	}
}
</style>