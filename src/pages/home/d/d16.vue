<template>
	<div class="d16">
		<iframe src="http://zb.zjht100.com/LiveVideo/MapVideo/Index?id=qylyj" width="3724" height="1080" scrolling="no"></iframe>
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
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		iframe{
			position: absolute;
			top: 0;
			left: 0;
		}
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