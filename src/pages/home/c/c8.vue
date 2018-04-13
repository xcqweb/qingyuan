<template>
  <div class="c7">
  	<div class="btn">
  		景区排行
  	</div>
    
        <div class="title">
            <div class="cell1">
                	排序	
            </div>
            <div class="cell1 uniquew">
              	 景区名称
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
        <li v-for='(item,index) in items' v-show='item.sum'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell1 uniquew">
                {{item.name}}
            </div>
            <div class="cell1">
                {{item.sum}}
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
        type:0,
        msg:'Hello Vue 来自App.vue',
        items:[]
      }
    },
    watch:{
    	updatePlace:function(val){
            var paramsObj = {
                area:val.place,
                name:val.turist,
                type:["day","month","year"][this.type],
            }
            this.getResponse(paramsObj);
        },
       
          update:{
             handler:function(val, oldVal){
             	var paramsObj={}
             	if(val.type===0 || val.type===1 || val.type===2){
             		this.type = val.type
             	    paramsObj = {
		                area:this.updatePlace.place,
		                name:this.updatePlace.turist,
		                type:["day","month","year"][val.type],
		            }
             	}else{
             		let end = val.end.join("-")
	                 let begin = val.begin.join("-")
	                paramsObj = {
	                    area:this.updatePlace.place,
	                    name:this.updatePlace.turist,
	                    beginTime:begin,
	                    endTime:end
					}
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
    	//获取数据
    	getResponse(paramsObj){
				 axios.get(API_URL+'/qy/api/v2/view/getScenicPersonSumSort',{params:paramsObj}).then(r => {
	                if(r.status ===200||r.data.code ===200){
	                	let reData = r.data.data;
	                	this.items = reData
	                }
	            })
				
	  	},
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
    .uniquew{
    	flex: 2;
    }
    font{
        font-size: 0.6rem;
    }
    .btn{
    	width: 100%;
    	font-size: 30px;
    	font-weight: bold;
    	padding: 28px 0px;
    	text-align: center;
    }
    
    .title{
    	height:80px;
      display:flex;
      align-items:center;
      justify-content:center;
      background-color: #1f3f9d;
    }
}
ul{
    height:79.2%;
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
    flex: 1;
}
.cell2{
    float:left;
    width:31%;
    text-align: center;
}
.cell3{
    float:left;
    width:33%;
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
    }
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
    .cell2{
        width:22%;
    }
    .cell3{
        width:33%;
    }
}
li:nth-of-type(2n){
    background-color:#1f3f9d;
}
li:nth-of-type(2n+1){
    background-color:#163387;
}
</style>
