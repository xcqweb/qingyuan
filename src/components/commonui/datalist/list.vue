<template>
	<transition name='slide-fade'>
		<div class="lists" v-show="status">
			<ul class="con">
				<li v-for="item in list" @click.self="choose(item)" :title='item'>{{item}}</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	export default{
		data(){
			return {
			}
		},
		beforeDestroy(){
			this.$off()
		},
		methods:{
			choose(val){
				this.$emit('chooseName',val)
			}
		},
		props:['list','status'],
	}
</script>

<style lang="less" scoped="scoped">
	.lists{
		width: 101%;
		max-height: 300px;
		position: absolute;
		top: 93%;
		left: 0;
		background-color: #193583;
		z-index: 10;
		.con{
			border-right: 1px solid #355BFA;
			border-left: 1px solid #355BFA;
			border-bottom: 1px solid #355BFA;
			max-height: 200px;
			overflow-y:scroll;
			li{
				text-align: center;
				list-style: none;
	            color: white;
	            background-color: #193583;
	            height: 1.8rem;
	            font-size: 0.8rem;
	            line-height: 1.8rem;
	            white-space: nowrap;
	            overflow: hidden;
	            text-overflow: ellipsis;
	            cursor: pointer; 
	            padding: 0 10px;
	            width: 92.5%;
	            &:hover{
	                background-color:#3c69bd;
	            }
			}
		}
	}
	
	
	.slide-fade-enter-active {
	  animation: slided 0.4s ease;
	}
	.slide-fade-leave-active {
	  animation: slideu 0.3s ease-out;
	}
	
	
	
	@keyframes slided{
		0%{
			transform: translateY(-100%);
			opacity: 0;
		}
		5%{
			opacity: 0;
			transform: translateY(-26%);
		}
		100%{
			transform: translateY(0);
			opacity: 1;
		}
	}
	
	@keyframes slideu{
		0%{
			transform: translateY(0);
			opacity: 1;
		}
		95%{
			opacity: 0;
			transform: translateY(-26%);
		}
		100%{
			transform: translateY(-100%);
			opacity: 0;
		}
	}
	
			.con::-webkit-scrollbar{
			    width: 2px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.con::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.con::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 3rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: #0F2059;
			}
			
			.con::scrollbar{
			    width: 10px;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.con::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			.con{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			.con::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>    