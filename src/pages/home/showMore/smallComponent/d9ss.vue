<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: #fff;
    overflow: hidden;
    font{
        font-size: 12px;
    }
}
ul{
    height:68%;
    width:100%;
    overflow-y: scroll;
    cursor: all-scroll;
    li{
    	font-size: 16px;
    	min-height: 60px;
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

.header{
	margin-top:98px;
	height: 12%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    background-color:#1f3f9d;
    text-align: center !important;
    .cell1{
        flex: 1.8;
    }
    .cell2{
         flex: 5;
    }
    .cell3{
        flex: 2;
    }
}

.cell1{
    flex: 2;
    text-align: center;
}
.cell2{
    flex: 6;
    text-align: center;
    padding: 10px 0;
    line-height: 200%;
    box-sizing: border-box;
    .cell2_box{
        float: left;
        width: 33.3%;
        div:nth-of-type(1){
            float: left;
            width:80%;
        }
        div:nth-of-type(2){
            float: left;
            width:20%;
        }
    }
    
    .cell2_box1{
        float: left;
        width: 30%;
        div:nth-of-type(1){
            float: left;
            width:80%;
        }
        div:nth-of-type(2){
            float: left;
            width:20%;
        }
    }
}
.cell3{
    flex: 2;
    text-align: center;
    font{
    	margin-left: 6px;
    }
    .footerRise{
        display: inline-block;
         transform: translateY(10%);
    }
}
.up{
  background-image: url('../../../../assets/images/up.png');
  background-size: 100% 100%;
  width: 8px;
  height: 12.8px;
}
.down{
background-image: url('../../../../assets/images/down.png');
background-size: 100% 100%;
width: 8px;
  height: 12.8px;
}

li:nth-of-type(2n){
    background-color: #1F3F9D;
    &:hover{
                background-color:#3c69bd;
            }
}
li:nth-of-type(2n+1){
    &:hover{
                background-color:#3c69bd;
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

</style>
<template>
  <div class="c8">
    
        <div class="header">
            <div class="cell1">
                排名
            </div>
            <div class="cell2">
                路线
            </div>
            <div class="cell3">
                人气<font>(人)</font>
            </div>
        </div>
    <ul>
        <li v-for='(item,index) in rankItems'  v-if='item.num'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell2">
                {{item.track}}
            </div>
            <div class="cell3">
                <span class='footerCotext'>{{item.num}}</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import optionProps from '@/common/js/mixin/optionProps.js'
	
export default {
    name:'d9',
    mixins:[optionProps],
    props:{
//      rankItems:Array,
    },
    data(){
        return{
        rankItems:[],
        isThree:false,
        msg:'Hello Vue 来自App.vue',
      }
    },
    watch:{
        updatePlace:{
            handler: function (val, oldVal) {
                var paramsObj = {
                    area:val.place,
                    name:val.turist,
                    type: ["day","month","year"][this.upday]
                    }
                this.rankItems = [];
                this.getResponse(paramsObj);
            },
            deep:true,
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
                 this.rankItems = [];
                 this.getResponse(paramsObj);
             },
             deep:true,
        },
        upday:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                type: ["day","month","year"][val]
            }
            this.rankItems = [];
             this.getResponse(paramsObj);
        }
    },
    methods:{
        getResponse(paramsObj){
            this.$axios.get(API_URL+'/qy/api/v2/view/getScenicTrack',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                	//console.log(r.data.data)
                	
                    this.rankItems = r.data.data;
                    this.rankItems.forEach((item,index)=>{
                        this.rankItems[index].track = item.track.replace(/\=\=\>/img,'→');
                    })
                }
            })
        }
    },
    created () {
        var paramsObj = {
                area:this.updatePlace.place,
                name:this.updatePlace.turist,
                type:"day"
            }
        this.getResponse(paramsObj);
    },
    mounted(){
    },
    components:{}
}
</script>