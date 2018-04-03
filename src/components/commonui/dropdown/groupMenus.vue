<template>
	<div id="box">
	        
	        <div class="jqlable">景 区</div>
	        <sleckte 
	        class='science'
	        :selectList="jqselectlist" 
	        v-on:listenAtparent="catchmsg2"
	        ></sleckte>
	        
	         <div class="title">筛选条件</div>
	        <div class="qylable">区 / 县</div>
	        <sleckte 
	        class="area"
	        :selectList="qyselectlist" 
	        v-on:listenAtparent="catchmsg1"
	        ></sleckte>
	        
	        
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
             ></vDate>
        </div>
        <div class="scienceChose" v-show="isScience">
            <span class="btn" @click="scienceType(0)" :class="{'active':scienceTypes}">全部景区</span>
            <span class="btn" @click="scienceType(1)" :class="{'active':!scienceTypes,'active1':scienceTypes}">4A以上景区</span>
        </div>
	</div>
</template>

<script>
	import sleckte from '@/components/commonui/dropdown/dropdown-menu2.vue'
	import vDate from '@/components/commonui/vueDate/app.vue'
	export default{
		data(){
			return{
				//时间控件
				isEndDate:true,
           		vDateStatus:true,
           		dateChoseList:[
	                {context:'日',class:''},
	                {context:'月',class:''},
	                {context:'年',class:''},
	            ],
				qyselectlist:{
                    width:'76.9%',
                    left:'10%',
                    title:'全部',
                    key:'area',
                    selectStatus:false,
                    place:[
                        '全部',"清城","清新","英德","连州","佛冈","连山","连南","阳山"
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
		props:['isDate','isScience','isshow4A'],
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
	                width:'76.9%',
	                left:'10%',
	                title:this.cityData[0],
	                selectStatus:false,
	                key:'science',
	                place:this.cityData,
	            }
	        },
	        scienceTypes(){
	        	let val = this.$store.getters['hotMap/getState']
	        	if(val===1){
	        		return val 	
	        	}else{
	        		return "";
	        	}
	        }
		},
		created(){
		},
		components:{
			sleckte,
			vDate,
		}
	}
</script>

<style lang="less" scoped>
#box{
	.title{
	   position: absolute;
	   top: 5%;
	   left: 10%;
	   font-size: 16px;  
	}
	.qylable{
	    height: 36px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 36px;
	    position: absolute;
	    top: 12.5%;
	    left: 10%;
	}
	.jqlable{
	    height: 36px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 36px;
	    position: absolute;
	    top: 24%;
	    left: 10%;
	}
	.time{
	     height:36px;
	    font-size: 16px;
	    color: #F0EFFD;
	    line-height: 36px;
	    position: absolute;
	    top: 35%;
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
	    top: 46%;
	    left: 10%;
	}
	
	.scienceChose{
		position: absolute;
		top: 40%;
	    left: 10%;
	    .btn{
	    	display: inline-block;
            width: 116px;
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
		width: 268px;
		position: absolute;
	    top: 40%;
	    left: 10%;
	   background-color: rgba(0, 0, 0, 0);
	   li{
	        height: 36px;
	        width: 88px;
	        text-align: center;
	        line-height:36px;
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