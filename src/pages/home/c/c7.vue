<template>
  <div class="c7">
  	<div class="btn">
  		<div :class="{'active':active===1}" @click="toggle(1,'inCountryCity')" >全国(市)</div>
  		<div :class="{'active':active===2}" @click="toggle(2,'inProvinceCity')">省内(市)</div>
  		<div :class="{'active':active===3}" @click="toggle(3,'inCountryProvince')">全国(省)</div>
  	</div>
    
        <div class="title">
            <div class="cell1">
                	排序	
            </div>
            <div class="cell1">
              	 地区
            </div>
            <div class="cell1">
                	人数    ( 人 )
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
      <ul>
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
    </ul>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import axios from 'axios'
export default {
    name:'c7',
    props:['updatePlace','update','upday'],
    data(){
        return{
        active:1,
        cityTypes:'inCountryCity',
        msg:'Hello Vue 来自App.vue',
        allData:[],
        items:[],
      }
    },
     watch:{
    	updatePlace:function(val){
            var paramsObj = {
                area:val.place,
                name:val.turist,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        upday:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        update:{
             handler:function(val, oldVal){
                 let end = val.end.join("-")
                 let begin = val.begin.join("-")
                 var paramsObj = {
                    area:this.updatePlace.place,
                    name:this.updatePlace.turist,
                    beginTime:begin,
                    endTime:end
								}
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    created(){
    	var paramsObj = {
                area:"全部",
                name:"全部",
                type:"day",
            }
       this.getResponse(paramsObj);
    },
    methods:{
    	toggle(data,cityType){
    		this.active=data;
    		this.cityTypes = cityType;
    		this.items = this.allData[cityType]
    		if(data===2){
    			this.$emit('toggleProvince',1)
    		}else if(data===1){
    			this.$emit('toggleProvince',0)
    		}else{
    			this.$emit('toggleProvince',2)
    		}
    	},
    	
    	
    	//获取数据
    	getResponse(paramsObj){
				 axios.get(API_URL+'/qy/api/v2/view/getPersonSourceData',{params:paramsObj}).then(r => {
	                if(r.status ===200||r.data.code ===200){
	                	let reData = r.data.data;
	                	this.allData = reData;
	                	this.items = reData[this.cityTypes];
	                }
	            })
	  	},
    },
    computed: { 
    },
    components:{},
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.c7{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 0.6rem;
    }
    .btn{
    	width: 619/990*100%;
    	margin:auto ;
    	display: flex;
    	justify-content: space-between;
    	padding: 22px 0px;
    	div{
    		flex-basis: 120/620*100%;
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
    height:90%;
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
}

		ul::-webkit-scrollbar{
			    width: 0.45rem;
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
    width: 16.6%;
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
