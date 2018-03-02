<template>
	<div class="box">
		<iframe class="ifrBox" src="http://qyyj.gdtadbs.com/Emergency/Chart/EnterpriseDanger" scrolling="no"></iframe>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped="scoped">
.box{
	width: 100%;
	height: 88%;
	position: absolute;
	left: 0;
	background-color: #163387;
	.ifrBox{
		width: 100%;
		height: 106%;
		top: -30px;
		border-radius: 10px;
		position: absolute;	
		left: 0;
		overflow-x: hidden;
	}
}
	
</style>