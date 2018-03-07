<template>
	<div class="d16">
		<div class="one">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
		<div class="two">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
		<div class="three">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
		<div class="four">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
		<div class="five">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
		<div class="six">
			<iframe src="" width="1210" height="462"></iframe>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
@borderColor:#345BFA;
	.d16{
		width: 100%;
		height: 100%;
		position: relative;
		div{
			position: absolute;
			background-color: #163387;
		}
		.one{
			height: 466/948*100%; 
           	width: 1217/3676*100%;
           	left: 0;
          	top: 0;
          	border: 2px solid @borderColor;
          	background: url(../../../assets/images/video/video1.png);
		}
		.two{
           height: 466/948*100%; 
           width: 1217/3676*100%;
           left: 0;
           top: 482/948*100%;
           border: 2px solid @borderColor;
           background: url(../../../assets/images/video/video2.png);
        }
        .three{
           height: 466/948*100%; 
           width: 1217/3676*100%;
           left: 1233/3676*100%;
           border: 2px solid @borderColor;
           background: url(../../../assets/images/video/video2.png);
        }
        .four{
           height: 466/948*100%; 
           width: 1217/3676*100%;
           left: 1233/3676*100%;
           top: 482/948*100%;
           border: 2px solid @borderColor;
           background: url(../../../assets/images/video/video1.png);
        }
        .five{
           height: 466/948*100%; 
           width: 1217/3676*100%;
           left: 2466/3676*100%;
           border: 2px solid @borderColor;
           background: url(../../../assets/images/video/video1.png);
        }
        .six{
           height: 466/948*100%; 
           width: 1217/3676*100%;
           left: 2466/3676*100%;
           top: 482/948*100%;
           border: 2px solid @borderColor;
           background: url(../../../assets/images/video/video2.png);
        }
	}
</style>