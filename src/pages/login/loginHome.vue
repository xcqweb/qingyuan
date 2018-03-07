<template>
	<div class="loginBox">
		<div class="leftImg"></div>
		<div class="rightLogin">
			<div class="title"></div>
			<div class="con">
				<p class="username"><label for="user">用户名</label><input type="text" id="user" v-model.trim="loginForm.username" /></p>
				<p class="password"><label for="psw">密码</label><input type="password" id="psw" v-model.trim="loginForm.password" @keyup.enter="login" /></p>
				<p class="btn"><input type="checkbox" v-model="isSave" @click="chooseSave" /><font>记住密码</font><span @click="login">{{logintext}}</span></p>
			</div>
			<div class="bottomImg"></div>
		</div>
	</div>
</template>

<script>
	import BM from '@/common/js/until/index'
	import { mapGetters } from 'vuex'
	import store from '../../vuex/index' 
	import { mapActions } from 'vuex'
	import Vue from 'vue'
	import axios from 'axios'
	import {timestamp} from '../../common/js/sign.md5.js'
	import {API_HZ} from '../../api/env.js'
	import getConfig from '../../common/js/sign/param_to_sign.js'
	import To_md5 from '../../common/js/md5.js'
	import {askUrl,paramToSign} from '../../common/js/sign/param_to_sign.js'
	import Bus from '@/common/js/bus.js'
	export default{
		data(){
			return{
				isSave:true,
				logintext:'登录',
				loginForm:{
					username:'admin',
					password:'123456'
				}
				
			}
		},
		created(){
			if(BM.bom_until.getLocalStorage('loginForm')){
				this.loginForm.username = BM.bom_until.getLocalStorage('loginForm').username
				this.loginForm.password = BM.bom_until.getLocalStorage('loginForm').password
			}
		},
		methods:{
			//保存密码
			chooseSave(){
				if(this.isSave){
					BM.bom_until.setLocalStorage('loginForm',this.loginForm)	
				}else{
					BM.bom_until.removeLocalStorage('loginForm')
				}
				console.log(this.isSave)
			},
			//登录
			login(){
				
				this.chooseSave();
				
				
	            let paramsObj = new FormData();
				paramsObj.append('username',this.loginForm.username)
				paramsObj.append('password',this.loginForm.password)
				paramsObj.append('timestamp',timestamp)
				
				
	            this.$axios.post(API_URL+'/login',{params:paramsObj}).then(r => {
                console.log(r)
                if(r.data.code =="200"||r.data.code ===200){
                    this.$router.push({ path: API_URL });
                }else{
                    alert("登录失败")
                    this.$router.push({ path: '/login' })
                }
            })
	            
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.loginBox{
		width: 100%;
		height: 1080px;
		background-color: #101e4f;
		position: relative;
		.leftImg{
			position: absolute;
			width: 1000/3840*100%;
			height: 900/1080*100%;
			left: 1000/3840*100%;
			top: 90/1080*100%;
			background: url(../../assets/images/login/login/loginMain.jpg);
		}
		.rightLogin{
			position: absolute;
			width: 1050/3840*100%;
			height: 900/1080*100%;
			left: 2000/3840*100%;
			top: 90/1080*100%;
			background-color: #fff;
			.title{
				position: absolute;
				width: 540/1050*100%;
				height: 124/900*100%;
				top: 108/900*100%;
				right: 260/1050*100%;
				background: url(../../assets/images/login/login/loginTitle.png) no-repeat;
			}
			.con{
				position: absolute;
				width: 520/1050*100%;
				height: 370/900*100%;
				top: 245/900*100%;
				right: 260/1050*100%;
				.username{
					margin-top: 92/900*100%;
					height: 40px;
					border-bottom: 2px solid #d6d6d6;
					position: relative;
					input{
						position: absolute;
						width: 80%;
						height: 38px;
						right: 0;	
						border: none;
						font-size: 20px;
					}
					label{
						position: absolute;
						left: 0;
						line-height: 40px;
						font-size: 26px;
						color: #b4b3b4;
						padding-left: 6px;
					}
				}
				.password{
					margin-top: 212/900*100%;
					height: 40px;
					border-bottom: 2px solid #d6d6d6;
					position: relative;
					input{
						width: 80%;
						height: 38px;	
						border: none;
						position: absolute;
						right: 0;	
						font-size: 20px;
					}
					label{
						position: absolute;
						left: 0;
						line-height: 40px;
						font-size: 26px;
						color: #b4b3b4;
						padding-left: 6px;
					}
				}
				.btn{
					margin-top: 76/900*100%;
					height: 50px;
					position: relative;
					input{
						transform: scale(2);
						position: absolute;
						left: 12px;
						cursor: pointer;
					}
					font{
						position: absolute;
						left: 36px;
						top: -6px;
						color: #5e8cf1;
					}
					span{
						display: block;
						width: 136px;
						height: 50px;
						line-height: 50px;
						position: absolute;
						right: 36px;
						top: -25px;
						border-radius: 50px;
						font-size: 24px;
						color: #fff;
						background: linear-gradient(#4983fa,#106af0);
						cursor: pointer;
					}
				}
			}
			
			.bottomImg{
				position: absolute;
				right: 20px;
				bottom: 20px;
				width: 108px;
				height: 86px;
				background: url(../../assets/images/login/login/titlebom.png);
			}
		}
	}
</style>