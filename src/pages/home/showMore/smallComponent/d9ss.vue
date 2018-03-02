<style lang="less" scoped>
.c8{
    height:100%;
    width:100%;
    color: white;
    font{
        font-size: 12px;
    }
}
ul{
    margin-top:8%;
    height:80%;
    width:100%;
    overflow-y: scroll;
    
    li{
    	font-size: 16px;
    	height: 60px;
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
    .header{
        height: 15%;
        background-color:#1f3f9d;
    }
}
.cell1{
    flex: 1;
    text-align: center;
}
.cell2{
    flex: 3;
    text-align: center;
    .cell2_box{
        float: left;
        width: 33%;
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
        width: 50%;
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
    flex: 1;
    text-align: center;
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
li:nth-of-type(1){
    text-align: center !important;
    .cell1{
        width:15%;
    }
    .cell2{
        width:100%;
    }
    .cell3{
        width:15%;
    }
}
li:nth-of-type(2){
    box-shadow:3px 4px 20px #191970;
    &:hover{
                background-color:#3c69bd;
            }
}
li:nth-of-type(2n){
    box-shadow:3px 4px 20px #191970;
    &:hover{
                background-color:#3c69bd;
            }
}
li:nth-of-type(2n+3){
    box-shadow:3px 4px 20px #191970;
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
    <ul>
        <li class="header">
            <div class="cell1">
                排名
            </div>
            <div class="cell2">
                路线
            </div>
            <div class="cell3">
                人气<font>(人)</font>
            </div>
        </li>
        <li v-for='(item,index) in rankItems'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell2">
                <div class="cell2_box" :class="{'cell2_box1':i+1 < item.track.length}" v-for = "(ite,i) in item.track " >
                    <div >{{ite}}</div>
                    <div v-if=" i+1 < item.track.length">→</div>
                </div>
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
                    type: ["day","month","year"][this.dateIndex]
                    }
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
                    beginTime:begin,
                    endTime:end
                }
                 this.getResponse(paramsObj);
             },
             deep:true,
        },
        upday:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                type: ["day","month","year"][val]
            }
             this.getResponse(paramsObj);
        }
    },
    methods:{
        getResponse(paramsObj){
            
            this.$axios.get(API_URL+'/qy/api/command/getCommandScenicTrackDetail',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                	console.log(r.data.data)
                    this.rankItems = r.data.data;
                    this.rankItems.forEach((item,index)=>{
                        this.rankItems[index].track = item.track.split("==>").slice(0,3) ;
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