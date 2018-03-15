<template>
	<div class="box">
		<iframe class="ifrBox" :src="chainVal" scrolling="no"></iframe>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				chains:'http://qyyj.gdtadbs.com/Account/LoginNotPwd/d89d5b4a-6ca0-4020-8853-3a201323e177',
				chain:this.$store.getters['hotMap/getChain']
			}
		},
		computed:{
			chainVal(){
				let val = this.$store.getters['hotMap/getState']
				if(val===1){
					return this.chains;
				}else{
					return this.$store.getters['hotMap/getChain'];
				}
				
			}
		},
		mounted(){
			//alert(this.$store.getters['hotMap/getChain'])
			console.log(this.$store.getters['hotMap/getChain'])
		}
		
	}
</script>

<style lang="less" scoped="scoped">
.box{
	width: 99%;
	height: 99%;
	position: absolute;
	left: 10px !important;
	top: 0px;
	background-color: #163387;
	.ifrBox{
		width: 100%;
		height: 928px;
		top: 10px;
		border-radius: 10px;
		position: absolute;	
		left: 0;
		overflow-x: hidden;
	}
}
	
</style>