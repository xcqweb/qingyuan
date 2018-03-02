<template>
  <div class="c7">
  	<div class="btn">
  		<div :class="{'active':active===1}" @click="toggle(1)">省内(市)</div>
  		<div :class="{'active':active===2}" @click="toggle(2)">全国(市)</div>
  		<div :class="{'active':active===3}" @click="toggle(3)">全国(省)</div>
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
        	{place:'广东',numb:1212,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'福建',numb:2334,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'湖南',numb:32354,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'湖北',numb:55646,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'陕西',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'江西',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'河南',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        	{place:'甘肃',numb:46335,percent1:'12.4%',percent2:'14.5%',percent3:'16.1%'},
        ]
      }
    },
    methods:{
    	toggle(data){
    		this.active=data
    	}
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
    		background-color: #3782cb;
    		border: none;
    		color: #fff;
    		&:active{
    			border: none;
    		}
    	}
    	.active{
    		background-color: #fe3448;
    		border: none;
    	}
    }
}
ul{
    height:90%;
    width:100%;
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
    font-size: 20px;
}
li:nth-of-type(2n){
    background-color:#163387;
}
li:nth-of-type(2n+1){
    background-color:#1f3f9d;
}
</style>
