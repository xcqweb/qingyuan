<template>
	<div id="config">
		<ul class="title">
			<li>序号</li>
			<li>景区名称</li>
			<li>游客承载量</li>
			<li>预警人数</li>
			<li></li>
		</ul>
		<ul class="content" v-for="(data,i) in dataConfigList" :class="{'bc1':i%2===0,'bc2':i%2===1}" :ref="i">
			<template >
				<li>{{i+1}}</li>
				<li>{{data.name}}</li>
				<li v-if="i!==editIndex">{{data.setNum}}</li>
				<li v-if="i===editIndex"><input type="number" class="load" v-model="loadNum" /><span class="tip" v-show="tipShow">输入有误!</span></li>
				<li v-if="i!==editIndex">{{data.warnNum}}</li>
				<li v-if="i===editIndex"><input type="number" class="config" v-model="configNum" /></li>
				
				<li v-if="i!==editIndex"><span class="edit" @click="edit(data,i)">修改</span></li>
				<li v-if="i===editIndex">
					<input type="button" id="confirmBtn" @click="confirm(i)" value="保 存" />
					<input type="button" id="cancelBtn" @click="cancel(i)" value="取 消" />
				</li>
			</template> 
		</ul>
	</div>
</template>

<script>
//	import {editTime} from '@/common/js/gtime.js'
//	import Rw from '@/common/js/until/index.js'
	import optionProps from '@/common/js/mixin/optionProps.js'
	
	import { mapMutations,mapActions} from 'vuex'
	import api from '@/api/index.js'
	import axios from 'axios'
	export default {
		mixins: [optionProps],
		data(){
			return {
				
			}
		},
		props:[''],
		watch:{
			
		},
		created(){
		},
		computed:{
		},
		methods:{
		}
	}
</script>

<style scoped="scoped" lang="less">
	#config{
		width: 100%;
		height: 90%;
		background: linear-gradient(#2d449d 50%,#264095 50%);
		background-size:  20%;
		overflow-y: scroll;
		.title,.content{
			color: #fff;
			width: 100%;
			height: 10%;
			display:flex;
			background-color: #1E3382;
			align-items:center;
			li{
				
				position: relative;
				font-size: 0.9rem;
				.edit{
					font-size: 0.8rem;
					padding: 0.2rem 0.8rem;
					border-radius: 1rem;
					background-color: #5E90D7;
				}
			}
			
			li:nth-child(1){
				flex: 2;
			}
			li:nth-child(2){
				flex: 2;
			}
			li:nth-child(3){
				flex: 3;
			}
			li:nth-child(4){
				flex: 3;
			}
			li:nth-child(5){
				flex: 2;
			}
		}
		.bc1{
			background-color: #264095;
		}
		.bc2{
			background-color: #1E3382 ;
		}
		li{
			input[type=number]{
				width: 60%;
				line-height: 1.2rem;
				height: 1.2rem;
				text-align: left;
			}
			input[type=button]{
				width: 40%;
				line-height: 1.2rem;
				border: none;
				background-color: #ff6700;
				color: #fff;
				padding: 0.2rem 0.6rem;
				font-size: 0.8rem;
				border-radius: 1rem;
			}
			.tip{
				color: #f00;
				font-size: 0.8rem;
				//background-color: #f00;
				font-weight: bold;
				padding: 0.3rem;
				position: absolute;
				width: 38%;
				right: -20%;
				top: 0%;
			}
		}
	}
	
			#config::-webkit-scrollbar{
			    width: 0.45rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			#config::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			#config::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
			
			#config::scrollbar{
			    width: 0.45rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			#config::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			#config{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			#config::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>