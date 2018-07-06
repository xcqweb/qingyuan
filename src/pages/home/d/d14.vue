<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size: 42px;
        margin-top: 20px;
        font-family: numberFont;
    }
    font{
        display:block;
        color:#43dbff;
        font-size: 16px;
        letter-spacing: 1px;
    }
    .b6_top{
        position:absolute;
        top:20%;
        width:100%;
        height:40%;
    }
    .b6_bottom{
        position:absolute;
        bottom:0;
        width:100%;
        height:40%;
    }
}
</style>

<template>
    <div class="b6">
        <div class="b6_top">
            <font v-if='mowMonth!==1'>{{nowYear}}年1-{{mowMonth}}月份累计清远市{{currentArea}}游客量(人次)</font>
            <font v-else>{{nowYear}}年{{mowMonth}}月份累计接待游客(人次)</font>
            <span>{{yearNum.toLocaleString()}}</span>
        </div>
        <div class="b6_bottom">
        	<font v-if='nowDay!==1'>{{mowMonth}}月1日-{{nowDay}}日累计清远市{{currentArea}}游客量(人次)</font>
        	<font v-else>{{mowMonth}}月{{nowDay}}日累计接待游客(人次)</font>
            <span>{{monthNum.toLocaleString()}}</span>
        </div>
    </div>
</template>

<script>
import optionProps from '@/common/js/mixin/optionProps.js'
let date = new Date()
let nowYear = date.getFullYear()
let mowMonth = date.getMonth()+1
let nowDay = date.getDate()
export default {
    name:'d6',
    mixins: [optionProps],
     
    watch:{
        updatePlace:{
        	handler:function(val,oldVal){
	            var paramsObj = {
	                area:val.place,
	            }
	              this.getResponse(paramsObj);
	        },
	        immediate:true
        }
    },
    data () {
        return {
        	nowYear:nowYear,
            mowMonth:mowMonth,
            nowDay:nowDay,
            yearNum:0,
            monthNum:0
        }
    },
    computed: { 
		currentArea(){
			return this.updatePlace.place==='全部'?'':this.updatePlace.place
		},
    },
    methods: {
        getResponse(paramsObj){
        	let _self = this 
            //this.$axios.get(API_URL+'/qy/api/v2/view/getAccumulativeData',{params:paramsObj}).then(r => {
            this.$axios.get(API_URL+'/qy/api/v2/view/getAccumulativeDataAll',{params:paramsObj}).then(r => {
            	if(!r){
            		this.yearNum=0,
            		this.monthNum=0
            		return
            	}
                if(r.data.code ===200 ||　r.data.code ==='200'){
                	this.yearNum = 0
                	this.monthNum = 0
                	let reData = r.data.data
                	if(this.updatePlace.place==='全部'){
                		let arr = Object.values(reData)
                		for(let item of arr){
                			this.yearNum+=this.transformData(item[0].yearSum)
                			this.monthNum+=this.transformData(item[0].monthSum)
                		}
                	}else{
                		this.yearNum = this.transformData(reData[this.updatePlace.place][0].yearSum)
                		this.monthNum = this.transformData(reData[this.updatePlace.place][0].monthSum)
                	}
                }
            })
        },
        transformData(n){
        	let num = n.toString().substr(-2)/100
			return Number((n*(num+2)).toFixed(0))
        }
    }
}
</script>

