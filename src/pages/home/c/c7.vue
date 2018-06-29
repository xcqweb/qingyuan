<template>
  <div class="c7">
  	<div class="btn">
  		<div class="tabs" :class="{'active':active===1}" @click="toggle(1,'inCountryCity')" >全国(市)</div>
  		<div class="tabs" :class="{'active':active===2}" @click="toggle(2,'inProvinceCity')">省内(市)</div>
  		<div class="tabs" :class="{'active':active===3}" @click="toggle(3,'inCountryProvince')">全国(省)</div>
  		<div class="dateRange">
    		<span class="rangeTitle">时间范围</span>
    		<date-select class='start' :isStart=true></date-select>
    		<span class="txt">至</span>
    		<date-select class='end' :isStart=false></date-select>
   	 </div>
  	</div>
        <div class="title">
            <div class="cell1">
                	排序	
            </div>
            <div class="cell1">
              	 地区
            </div>
            <div class="cell1">
                	人数    ( 人次  )
            </div>
            <div class="cell1">
              	  占比
            </div>
            <div class="cell1">
              	 同比
            </div>
            <div class="cell1">
             	  环比
            </div>
        </div>
      <ul v-show="status">
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell1">
                {{item.city || item.province}}
            </div>
            <div class="cell1">
                {{item.num}}
            </div>
            
            <div class="cell1">
                <span class='footerCotext'>{{item.zhanRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'>{{item.tongRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'>{{item.huanRate}}%</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
        <ul class="totals">
        	<li>
        		<div class="cell1">
                	总计
            </div>
            <div class="cell1">
                               
            </div>
            <div class="cell1">
                {{totalNum}}
            </div>
            
            <div class="cell1">
                <span class='footerCotext'></span>
                <span class='footerRise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'></span>
                <span class='footerRise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'></span>
                <span class='footerRise'></span>
            </div>
        	</li>
        </ul>
    </ul>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import dateSelect from '@/components/commonui/dateSelect/dateSelect'
import Bus from '@/common/js/bus'
export default {
    name:'c7',
    props:['updatePlace','update','upday'],
    data(){
        return{
        status:true,
        active:1,
        type:0,
        cityTypes:'inCountryCity',
        msg:'Hello Vue 来自App.vue',
        allData:[],
        items:[],
        begin:[],
        end:[],
        beginStr:'',
        endStr:'',
        totalType:'inCountryCityTotalMan'
      }
    },
     watch:{
    	updatePlace:function(val){
    		let paramsObj = {}
    		if(this.endStr||this.beginStr){
    			paramsObj = {
                area:val.place,
                name:val.turist,
                beginTime:this.beginStr,
	              endTime:this.endStr
            }
    		}else{
    			paramsObj = {
                area:val.place,
                name:val.turist,
                type:["day","month","year"][this.type],
            }
    		}
            this.getResponse(paramsObj);
        },
      	cityTypes:function(val){
      		if(val==='inProvinceCity'){
      			this.totalType = 'inProvinceCityTotalMan' 
      		}else if(val==='inCountryProvince'){
      			this.totalType = 'inCountryProvinceTotalMan' 
      		}else{
      			this.totalType = 'inCountryCityTotalMan'
      		}
      	},
         update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type = val.type;
             		this.endStr = '';
	              this.beginStr = '';
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            };
             	}else{
             		   this.endStr = val.end.join("-");
	                 this.beginStr = val.begin.join("-");
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:this.beginStr,
	                    endTime:this.endStr
									};
             	}
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    created(){
    	var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                type:["day","month","year"][this.type]
            }
       this.getResponse(paramsObj);
    },
    methods:{
    	toggle(data,cityType){
    		this.items=[]
    		this.active=data;
    		this.cityTypes = cityType;
    		this.items = this.allData[cityType]
    		
    		
    		if(data===3){
					this.add()
    		}
    		if(data===2){
    			this.$emit('toggleProvince',1)
    		}else if(data===1){
    			this.$emit('toggleProvince',0)
    		}else{
    			this.$emit('toggleProvince',2)
    		}
    		
//  		if(this.beginStr||this.endStr){
//  			Bus.$emit('yearMonth',{begin:this.beginStr,end:this.endStr})
//  		}
    	},
    	add(){
    		let str = JSON.stringify(this.items)
					//console.log(str.indexOf('香港'))
					if(str.indexOf('香港')===-1){
							this.items.push({
							"num":0,
							"tongRate":0,
							"huanRate":0,
							"zhanRate":0,
							"province":"香港"
						})
					}	
						if(str.indexOf('澳门')===-1){
								this.items.push({
								"num":0,
								"tongRate":0,
								"huanRate":0,
								"zhanRate":0,
								"province":"澳门"
							})
						}
						if(str.indexOf('台湾')===-1){
							this.items.push({
							"num":0,
							"tongRate":0,
							"huanRate":0,
							"zhanRate":0,
							"province":"台湾省"
						})
					}
    	},
    	//获取数据
    	getResponse(paramsObj){
				 this.$axios.get(API_URL+'/qy/api/v2/view/getPersonSourceData',{params:paramsObj}).then(r => {
				        	//console.log(r)
				        	if(!r){
				        		return
				        	}
	                if(r.data.code ===200||r.data.code ==="200"){
	                	this.status =false
	                	window.setTimeout( () => {
	                		this.status = true
	                	},100)
	                	let reData = r.data.data;
	                	if(!reData.inCountryCity){
	                		//alert('很抱歉!您选择的时间区间无数据!')
	                	}
	                	this.allData = reData;
	                	this.items = reData[this.cityTypes];
	                	if(this.cityTypes==='inCountryProvince'){
	                		this.add()
	                	}
	                	
	                }
	            })
	  	},
    },
    computed: { 
    	totalNum(){
    		if(this.allData){
    			return this.allData[this.totalType]
    		}else{
    			return 0
    		}
    		
    	}
    },
    components:{
    	dateSelect
    },
    beforeDetroy(){
    	Bus.$off('swap')
//  	Bus.$off('yearMonth')
    },
    mounted(){
    	Bus.$on('turistDate',(val) => {
    		let _self = this
    		if(val.begin){
    			_self.begin=val.begin
    		}else{
    			_self.end=val.end
    		}
    		
    		//如果开始时间大于结束时间则颠倒过来
    		if(_self.begin.length && _self.end.length){
    			
    			if(_self.begin[0]>_self.end[0]){
    				  let tem = _self.begin;
    				  _self.begin = _self.end;
    				  _self.end = tem
    			}
    			if(_self.begin[0]===_self.end[0]){//年相同
    				if(_self.begin[1]>_self.end[1]){
    					let m = Number(_self.begin[1])
    					if(m===2){
    						if((_self.begin[0]%4 === 0 && _self.begin[0] % 100 !== 0)  || _self.begin[0] % 400 === 0){
    							_self.begin[2]=29
    						}else{
    							_self.begin[2]=28
    						}
    					}else if(m===4||m===6||m===9||m===11){
								_self.begin[2] = 30
							}else{
								_self.begin[2] = 31
							}
    					_self.end[2] = '01'
    					
    					let tem = _self.begin;
    				  _self.begin = _self.end;
    				  _self.end = tem
    				}
    			}
    			
    			if(_self.begin[0]===_self.end[0] && _self.begin[1]===_self.end[1]){
    				if(_self.begin[2]>_self.end[2]){
    					let tem = _self.begin;
    				  _self.begin = _self.end;
    				  _self.end = tem
    				}
    			}
    			
    			Bus.$emit('swap',{begin:_self.begin,end:_self.end})
    			
    			let ends = _self.end.join("-");
	        let begins = _self.begin.join("-");
	        _self.endStr = _self.end.join("-");
	        _self.beginStr = _self.begin.join("-");
//	        Bus.$emit('yearMonth',{begin:_self.beginStr,end:_self.endStr})
      	 	var paramsObj = {
      	 		 area:_self.updatePlace.place,
             name:_self.updatePlace.turist,
             beginTime:begins,
             endTime:ends
      	 	}
        	 	//初始化数据
        	  _self.begin=[];
      			_self.end=[];
    			  _self.getResponse(paramsObj);
    		}
    	})
    }
}
</script>

<style lang="less" scoped>
.c7{
    height:100%;
    width:100%;
    color: #fff;
    font{
        font-size: 0.6rem;
    }
    
    .btn{
    	width: 990/990*100%;
    	display: flex;
    	justify-content: space-around;
    	padding: 22px 0px;
    	.dateRange{
	    	flex-basis: 450/990*100%;
	    	position: relative;
	    	.rangeTitle,.start,.txt,.end,.reset{
	    		position: absolute;
	    	}
	    	.rangeTitle{
	    		left:40px;
	    		font-size: 16px;
	    		height: 36px;
	    		line-height: 36px;
	    	}
	    	.txt{
	    		left:286px;
	    		font-size: 1rem;
	    		height: 36px;
	    		line-height: 36px;
	    	}
	    	.start{
	    		left: 140px;
	    	}
	    	.end{
	    		right: 80px;
	    	}
	    	.reset{
	    		display: block;
	    		width: 37px;
	    		height: 36px;
	    		left: 40px;
	    		transform: scale(0.8);
	    		background-image: url(../../../assets/images/shuaxin.png);
	    		background-repeat: no-repeat;
	    		background-size: 80%;
	    		background-position: 4px 5px;
	    		cursor: pointer;
	    		border-radius: 8px;
			    border: solid 2px #345bfa;
	    	}
	    }
    	.tabs{
    		flex-basis: 120/990*100%;
    		font-size: 24px;
    		height: 40px;
    		line-height: 40px;
    		border-radius: 20px;
    		background: #3782cb;
    		border: none;
    		color: #fff;
    		position: relative; 
    		overflow: hidden; 
    		&:active{
    			border: none;
    		}
    	}
    	.active{
    			border: none;
					background: linear-gradient(45deg ,#fe3448 10%,#ff9900);
    			
    	}
    }
    
    .title{
    	background-color:#1f3f9d;
    	height:80px;
    	display:flex;
    	font-weight: bold;
    	font-size: 20px;
      	align-items:center;
      	justify-content:center;
    }
}


ul{
    height:72%;
    width:100%;
    overflow-y: scroll;
    cursor: all-scroll;
    
    li{
        height:89/798*100%;
        display:flex;
        align-items:center;
        justify-content:center;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
    }
    .totals{
    	height:60/798*100%;
    	position: absolute;
    	bottom: 0;
    	li{
    		height: 100%;
    		font-weight: bolder;
    	}
    }
}

		ul::-webkit-scrollbar{
			    width: 0rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			ul::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			ul::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
			
			ul::scrollbar{
			    width: 0.45rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			ul::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			ul{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			ul::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}


.cell1{
    float:left;
    width: 100/6%;
    text-align: center;
}

.up{
  background-image: url('../../../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../../../assets/images/down.png');
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}
li:nth-of-type(1){
    text-align: center !important;
}
li:nth-of-type(2n){
    background-color:#1f3f9d;
}
li:nth-of-type(2n+1){
    background-color:#163387;
}
</style>
