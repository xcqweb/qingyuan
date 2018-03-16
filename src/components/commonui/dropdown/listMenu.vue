<template>
	<div id="box">
        <div class="jqlable">景 区</div>
        <sleckte 
        class='science'
        :uniqueClasst=true
        :selectList="jqselectlist" 
        v-on:listenAtparent="catchmsg2"
        ></sleckte>
        
        <div class="qylable">区/县</div>
        <sleckte 
        class="area"
        :uniqueClasso=true
        :selectList="qyselectlist" 
        v-on:listenAtparent="catchmsg1"
        ></sleckte>
        
        <!--<div v-if='isDate'>-->
        	<!-- 时间下拉框组件 -->
        	<div v-show="!vDateStatus">
        		<div class="time">时 间</div>
	            <vDate 
	             class='vueDate'
	             :isBorder='isborder'
	             @pageDate='getDate'
	             :isActive = 'isEndDate'
	             @hideDate = 'hideDate'
	             :vDateStatus='vDateStatus'
	             ></vDate>
        	</div>
        	
             <div v-show="vDateStatus">
             	<div class="time">时 间</div>
             	 <dateGroup
	             	 class='vueDate'
	             	 :selectList='dateList'
	             	 v-if="vDateStatus"
	             	 @listenAtparent='listenAtparent'
	             ></dateGroup>
             </div>
            
             
        <!--</div>-->
	</div>
</template>

<script>
	import sleckte from '@/components/commonui/dropdown/dropdown-menu2.vue'
	import dateGroup from '@/components/commonui/dropdown/dateGroup.vue'
	import vDate from '@/components/commonui/vueDate/app.vue'
	export default{
		data(){
			return{
				//时间控件
				isborder:false,
				isEndDate:true,
           		vDateStatus:true,
				qyselectlist:{
                    width:'70%',
                    left:'6%',
                    title:'全部',
                    selectStatus:false,
                    place:[
                        '全部',"清城","清新","佛冈","英德","连州","连南","连山","阳山"
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
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],                
                cityData:["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
                tablist:this.tablistCom,
			}
		},
		props:['isDate'],
		methods:{
			
			hideDate(data){
				this.vDateStatus = data
				this.dateList = {
                    width:'70%',
                    right:'6%',
                    top:'52%',
                    title:'日',
                    selectStatus:false,
                    place:[
                        '日',"月","年","自定义"
                    ]
                }	
			},
			//获取时间
	        getDate(value){
	        	
	            this.timeDate ={
	                end:value.end,
	                begin:value.begin,
	            }
	            //将选择的时间传递给父组件
	            this.$emit('choseDate',this.timeDate);
	            this.vDateStatus = true
	            //选择完成自定义日期时 初始化
	            console.log(value)
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
	        },
	        //获取区域数据并传递给父组件
			catchmsg1(data){
                this.updateData ={
                    place:data,
                    turist:"全部"
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
	        	}else{
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
                "全部":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
                "清城":['全部','飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                "清新":['全部','太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',],
                "佛冈":['全部','观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居'],
                "英德":['全部','峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
                "连州":['全部','清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖'],
                "连南":['全部','油岭瑶寨','瑶族舞曲实景演出','云海花谷'],
                "连山":['全部','大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田'],
                "阳山":['全部','北山古寺','鱼水旅游风景区','龙凤温泉'],

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
		components:{
			sleckte,
			vDate,
			dateGroup
		}
	}
</script>

<style lang="less" scoped>
@borderColor:#345BFA;
#box{
	.qylable{
		width: 100px !important;
	    height: 44px;
	    font-size: 0.9rem;
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
	    font-size: 0.9rem;
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
	    font-size: 0.9rem;
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
	.area{
		width: 136px !important;
		height: 44px;
	    position: absolute;
	    left: 106px !important;
	    border: 3px solid @borderColor;
	    border-left: none;
	    border-radius: 0 10px 10px 0;
	    .dropdown-menu-p{
	    	width: 50px;
	    }
	}
	.science{
		 width: 276px !important;
		 height: 44px;
	     position: absolute;
	     left: (259+122)/990*100% !important;
	     border: 3px solid @borderColor;
	     border-left: none;
	     border-radius: 0 10px 10px 0;
	}
	.vueDate{
		height: 44px;
		position: absolute;
		width: 280px !important;
	    top: -2px; 
	    right: -6px;
	    z-index: 100;
	    border: 3px solid @borderColor;
	    border-radius: 0 10px 10px 0;
	    
	    .dropdown-menu-p{
	    	background-color: #FF0000;
	    }
	}
}
</style>