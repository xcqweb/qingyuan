<template>
  <div class="c7">
  	<div class="btn">
  		景区排行
  	</div>
    <ul>
        <li for='item in items'>
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
        </li>
        <li v-for='(item,index) in items'>
            <div class="cell1">
                {{index+1}}
            </div>
            <div class="cell1">
                {{item.place}}
            </div>
            <div class="cell1">
                {{item.numb}}
            </div>
            
            <div class="cell1">
                <span class='footerCotext'>{{item.percent1}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'>{{item.percent2}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
            <div class="cell1">
                <span class='footerCotext'>{{item.percent3}}</span>
                <span class='footerRise' :class='item.rise'></span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import forEach from 'lodash/forEach';
export default {
    name:'c7',
    props:['placeAttractionsProps'],
    data(){
        return{
        active:1,
        msg:'Hello Vue 来自App.vue',
        items:[
        	{place:'飞霞风景名胜区',numb:1212,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'白庙渔村',numb:2334,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞来寺',numb:32354,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'白庙渔村',numb:55646,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞来寺',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'白庙渔村',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞来寺',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞霞风景名胜区',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞霞风景名胜区',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞霞风景名胜区',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞霞风景名胜区',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'飞霞风景名胜区',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        ]
      }
    },
    methods:{
    	
    },
    computed: { 
//      items:function(){
//          let arrb = [];
//          forEach(this.placeAttractionsProps,function(value,key){
//              if (key<4) {
//                  arrb.push(value)
//              }
//              
//          })
//          return arrb
//      }
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
    	width: 100%;
    	font-size: 30px;
    	font-weight: bold;
    	padding: 28px 0px;
    	text-align: center;
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
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
