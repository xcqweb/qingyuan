<template>
	<div id="box">
        <div class="jqlable">景 区</div>
        <slecktet 
        class='sciencelist'
        :uniqueClasso=true
        :selectList="jqselectlist" 
        v-on:listenAtparent="catchmsg2"
        ></slecktet>
        
        <div class="qylable">区/县</div>
        <slecktet 
        class="arealist"
        :uniqueClasso=true
        :selectList="qyselectlist" 
        v-on:listenAtparent="catchmsg1"
        :showScienceNum=true
        :isAllCity=true
        ></slecktet>
        
        	<!-- 时间下拉框组件 -->
        	<div v-show="!vDateStatus">
        		<div class="time">时 间</div>
	            <vDate 
	             class='vueDate1'
	             :isBorder='isborder'
	             @pageDate='getDate'
	             :isActive = 'isEndDate'
	             @hideDate = 'hideDate'
	             :vDateStatus='vDateStatus'
	             :showStatus=false
	             :daySeven=true
	             ></vDate>
        	</div>
        	
             <div v-show="vDateStatus">
             	<div class="time">时 间</div>
             	 <slecktet
	             	 class='vueDate'
	             	 :selectList='dateList'
	             	 :uniqueClasso=true
	             	 v-if="vDateStatus"
	             	 @listenAtparent='listenAtparent'
	             ></slecktet>
             </div>
            
             
	</div>
</template>

<script>
	import slecktet from '@/components/commonui/dropdown/dropdown-menu2.vue'
	import dateGroup from '@/components/commonui/dropdown/dateGroup.vue'
	import vDate from '@/components/commonui/vueDate/app.vue'
	import Bus from '@/common/js/bus'
	function ck(val){
		if(val<10){
			return '0'+val
		}else{
			return val
		}
	}
	var date = new Date()
	var year = ck(date.getFullYear())
	var month = ck(date.getMonth()+1)
	var day = ck(date.getDate()-1)
	var days
	if(month == 2){
        days= year % 4 == 0 ? 29 : 28;
         
    }
    else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
        days= 31;
    }
    else{
        //其他月份，天数为：30.
        days= 30;
         
    }
     
	export default{
		data(){
			return{
				//时间控件
				isborder:false,
				isEndDate:true,
           		vDateStatus:true,
           		doubleclick:true,
           		dataType:'日',
           		timeDate:{end:[],begin:[]},
				qyselectlist:{
                    width:'70%',
                    left:'6%',
                    title:'全部景区',
                    selectStatus:false,
                    place:[
                        {name:'全市',nameSS:'全市',num:0},{name:'全部景区',nameSS:'全部',num:60},{name:"清城",num:11},{name:"清新",num:9},{name:"英德",num:13},{name:"连州",num:6},{name:"佛冈",num:7},{name:"连山",num:5},{name:"连南",num:5},{name:"阳山",num:4}
                    ]
                },
                
                dateList:{
                    width:'70%',
                    right:'6%',
                    top:'52%',
                    title:'日',
                    selectStatus:false,
                    place:[
                        '日',"月","年","自定义"
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
		props:['isDate'],
		methods:{
			hideDate(data){
				//console.log(this.dataType,this.timeDate)
				if(this.doubleclick&&this.timeDate.begin.length){
					this.vDateStatus = data
					this.dateList = {
	                    width:'70%',
	                    right:'6%',
	                    top:'52%',
	                    title:this.timeDate.begin[0]+"/"+this.timeDate.begin[1]+"/"+this.timeDate.begin[2]+" ~ "+this.timeDate.end[0]+"/"+this.timeDate.end[1]+"/"+this.timeDate.end[2],
	                    selectStatus:false,
	                    place:[
	                        '日',"月","年","自定义"
	                    ]
	                }	
				}
				
				if(this.doubleclick&&!this.timeDate.begin.length){
					this.vDateStatus = data
					this.dateList = {
	                    width:'70%',
	                    right:'6%',
	                    top:'52%',
	                    title:this.dataType,
	                    selectStatus:false,
	                    place:[
	                        '日',"月","年","自定义"
	                    ]
	                }	
				}
			},
			//获取时间
	        getDate(value){
	        	this.doubleclick = false
	            this.timeDate ={
	                end:value.end,
	                begin:value.begin,
	            }
	            //将选择的时间传递给父组件
	            this.$emit('choseDate',this.timeDate);
	            this.vDateStatus = true
	            //选择完成自定义日期时 初始化
	            this.dateList = {
                    width:'70%',
                    right:'6%',
                    top:'52%',
                    title: value.begin[0]+"/"+value.begin[1]+"/"+value.begin[2]+" ~ "+value.end[0]+"/"+value.end[1]+"/"+value.end[2],
                    selectStatus:false,
                    place:[
                        '日',"月","年","自定义"
                    ]
                }
	            this.dataType = '自定义'
	            window.setTimeout( () => {
	            	this.doubleclick = true
	            },1000)
	        },
	        //获取区域数据并传递给父组件
			catchmsg1(data){
				if(data==='全市'){
					this.updateData ={
	                    place:data,
	                }
				}else{
					this.updateData ={
	                    place:data,
	                    turist:"全部"
	                }
				}
                
                this.$emit('doubleChose',this.updateData)
            	this.cityData = this.switch(data)
            
	        },
	        catchmsg2(data){
	           this.updateData ={
	                place:this.updateData.place,
	                turist:data,
	            }
	           this.$emit('doubleChose',this.updateData)
	        },
	        listenAtparent(val){
	        	if(val==='自定义'){
	        		this.vDateStatus = false
	        		Bus.$emit('definded',val)
	        		this.dataType = val
	        	}else{
	        		Bus.$emit('resetDate')
	        		this.timeDate={begin:[],end:[]}
	        		this.dataType = val
	        		this.vDateStatus = true
	        		let re=0 
	        		switch(val){
	        			case '日':
	        			re = 0;
	        			break;
	        			case '月':
	        			re = 1;
	        			break;
	        			case '年':
	        			re = 2;
	        			break;
	        		}
	        		this.$emit('choseDay',re);
	        	}
	        },
	        switch(val){
            const  cityData = {
            	'全市':['全部'],
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
           return cityData[val]
        },
		},
		computed:{
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
	        jqselectlist:function(){
	            if(!this.cityData){
	                this.cityData = this.startData;
	            }
	            return {
	                width:'88%',
	                left:'6%',
	                title:this.cityData[0],
	                selectStatus:false,
	                place:this.cityData,
	            }
	        }
		},
		beforeDestroy(){
			Bus.$off('definded')
		},
		components:{
			vDate,
			dateGroup,
			slecktet
		}
	}
</script>

<style lang="less" scoped>
@borderColor:#345BFA;
#box{
	.qylable{
		width: 100px !important;
	    height: 44px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 44px;
	    position: absolute;
	    top: -3px; 
	    left: 0;
	    border: 3px solid @borderColor;
	    border-radius: 10px 0 0 10px;
	    z-index: 8;
	}
	.jqlable{
		width: 138/990*100% !important;
	    height: 44px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 44px;
	    position: absolute;
	    top: -3px; 
	    left: 279px !important;
	    border-radius: 10px 0 0 10px;
	    border: 3px solid @borderColor;
	    z-index: 8;
	}
	
	.time{
		width: 110px !important;
	    height: 44px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 44px;
	    position: absolute;
	    top: -2px; 
	    right: 280px !important;
	    border: 3px solid @borderColor;
	    border-right: none;
	    border-radius: 10px 0 0 10px;
	    z-index: 100;
	}
	.arealist{
		width: 136px !important;
		height: 45px;
	    position: absolute;
	    left: 106px !important;
	    border: 3px solid @borderColor;
	    border-left: none;
	    border-radius: 0 10px 10px 0;
	    .dropdown-menu-p{
	    	width: 50px;
	    }
	}
	.sciencelist{
		 width: 276px !important;
		 height: 45px;
	     position: absolute;
	     left: (259+122)/990*100% !important;
	     border: 3px solid @borderColor;
	     border-left: none;
	     border-radius: 0 10px 10px 0;
	}
	.vueDate1{
		height: 44px;
		position: absolute;
		width: 280px !important;
	    top: -2px; 
	    right: -6px !important;
	    z-index: 100;
	    border: 3px solid @borderColor;
	    border-radius: 0 10px 10px 0;
	}
	.vueDate{
		height: 44px;
		position: absolute;
		width: 280px !important;
	    top: -2px; 
	    right: -6px !important;
	    z-index: 100;
	    border: 3px solid @borderColor;
	    border-radius: 0 10px 10px 0;
	    
	    .dropdown-menu-p{
	    	background-color: #FF0000;
	    }
	}
}
</style>