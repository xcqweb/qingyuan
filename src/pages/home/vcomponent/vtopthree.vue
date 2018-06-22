
<template>
  <div class="vtopThree" v-show="active">
    <ul>
        <li v-for="(item,index) in items">
            <p>{{item.title}}</p>
            <div><p :style="{ 'color': item.color }" @click="commentType(index)">{{item.nub}}</p></div>
            <p :style="{ 'color': item.color }">{{item.font}}</p>
            <p :style="{ 'background-color': item.color }"></p>
        </li>
        
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
import Bus from '@/common/js/bus'
import _ from 'lodash'
export default {
    name: 'a3',
    mixins:[optionProps],
    props:{
        mainPageSelect:Object,
    },
    watch:{
       	updatePlace:function(val){
       		this.hotel = ''
        		var paramsObj = {}
        		if(this.endStr||this.beginStr){
	        			paramsObj = {
	                area:val.place,
	                name:val.turist,
	                beginTime:this.beginStr,
	                endTime:this.endStr,
	                category:this.slectType+1,
	            }
        		}else{
        				paramsObj = {
	                area:val.place,
	                name:val.turist,
	                type:["day","month","year"][this.type],
	                category:this.slectType+1,
	            }
        		}
        		  
            this.getResponse(paramsObj);
        	},
        	hotelChose:function(val){
        		this.hotel=val
        		var paramsObj = {}
        		if(this.endStr||this.beginStr){
	        			paramsObj = {
	                area:this.updatePlace.place,
	                name:val,
	                beginTime:this.beginStr,
	                endTime:this.endStr,
	                category:this.slectType+1,
	            }
        		}else{
        				paramsObj = {
	                area:this.updatePlace.place,
	                name:val,
	                type:["day","month","year"][this.type],
	                category:this.slectType+1,
	            }
        		}
        		  
            this.getResponse(paramsObj);
        	},
        	 update:{
	             handler:function(val, oldVal){
	             	var paramsObj={}
	             	if(val.type===0 || val.type===1 || val.type===2){
	             		this.type=val.type;
	             		this.endStr = '';
	                this.beginStr = '';
	             	    paramsObj = {
			                area:this.updatePlace.place,
			                name:this.hotel||this.updatePlace.turist,
			                type:["day","month","year"][val.type],
			                category:this.slectType+1,
			            }
	             	}else{
	             			  this.endStr = val.end.join("-");
	                    this.beginStr = val.begin.join("-");
			                paramsObj = {
		                    area:this.updatePlace.place,
		                    name:this.hotel||this.updatePlace.turist,
		                    beginTime:this.beginStr,
		                    endTime:this.endStr,
		                    category:this.slectType+1,
										}
	             	}
	                 
	                 this.getResponse(paramsObj);
	             },
	             deep:true,
	        },
        slectType:function(val){
        	if(val===1){this.hotel='全部'}
        		this.active =false
	        	setTimeout( () => {
	        		this.active =true
	        	},100)
	        	var paramsObj = {}
	        	if(this.endStr||this.beginStr){
	        		 paramsObj = {
                area:this.updatePlace.place,
                name:val===0?this.updatePlace.turist:this.hotel,
                category:val+1,
                beginTime:this.beginStr,
	              endTime:this.endStr,
           	 }
	        	}else{
	        		 paramsObj = {
                area:this.updatePlace.place,
                name:val===0?this.updatePlace.turist:this.hotel,
                category:val+1,
                type:["day","month","year"][this.type],
           	 }
	        	}
        		
                this.getResponse(paramsObj);
        }
    },
  data () {
    return {
        items:[
            {title:'',nub:'好评数',font:'',color:'#6dffeb'},
            {title:'',nub:'中评数',font:'',color:'#ffe86e'},
            {title:'',nub:'差评数',font:'',color:'#ff719c'},
        ],
        active:true,
        beginStr:'',
	      endStr:'',
	    	type:2,
	    	hotel:'全部'
    }
  },
  computed: { 
  },
  methods: {
      getResponse:_.debounce(function(paramsObj){
            this.$axios.get(API_URL+'/qy/api/command/getCommandComments',{params:paramsObj}).then(r => {

                if(r.data.code ==="200"||r.data.code ===200){
                    this.items.forEach((item,index)=>{
                        if(index ===0){
                            item.font =r.data.data.goodNum+'';
                        }else if(index ===1){
                            item.font =r.data.data.badNum+'';
                        }else if(index ===2){
                            item.font =r.data.data.troubleNum+'';
                        }
                    })
                   
                }
            })
        },300),
        //点击好评差评
        commentType(data){
        	Bus.$emit('comType',data+1)
        }
  },
  created () {
        var paramsObj = {
                area:"全部",
                name:"全部",
                category:this.slectType+1,
                type:'year'
            }
       this.getResponse(paramsObj);
    },
    beforeDestroy(){
    	Bus.$off('comType')
    },
  components:{
  }
}
</script>

<style lang="less" scoped>
.vtopThree{
    width:100%;
    height:100%;
}
ul{
    width:397/464*100%;
    height:174/216*100%;
    margin-top:8/216*100%;
    margin-left:33/464*100%;
    li{
        float:left;
        height:50%;
        width:132/464*100%;
        margin-left:4%;
        margin-top: 15%;

        p:nth-of-type(1){
            font-size: 36px;
            color: white;
        }
        div{
            display:table;
            height:65%;
            width:100%;
            p:hover{
            	font-weight: bold;
            	font-size: 38px !important;
            }
            p{
                color: white;
                height:90%;
                width:100%;
                font-size: 36px !important;
                display: table-cell;
                vertical-align:middle;
                text-align:center;
                letter-spacing: 8px;
                cursor: pointer;
            }
        }
        p:nth-of-type(2){
            font-size: 36px;
            margin-bottom:6px;
            letter-spacing: 6px;
        }
        p:nth-of-type(3){
            height:5px;
            width:70%;
            margin-left: 15%;
        }
    }
}
</style>