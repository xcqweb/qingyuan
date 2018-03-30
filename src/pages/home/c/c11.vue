<template>
	<div class="c11">
		<div class="con">
			<keep-alive>
				<componet
				  :is='currentModule'
				  :updatePlace='updatePlace'
				  :update='update'
				  :upday='upday'
				  @toggleProvince='toggleProvince'
				></componet> 
			</keep-alive>
		</div>
		<!--切换-->
		<div class="toast">
			 <div class="toggle">
        	<p><span class="btn" :class="{'active':!active}" @click="toggle('C7',true)">游客来源</span></p>
        	<p><span class="btn" :class="{'active':active}" @click="toggle('C8',false)">景区排行</span></p>
        </div>
		</div>
	</div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
import optionProps from '@/common/js/mixin/optionProps.js'
	export default{
		mixins:[optionProps],
		data(){
			return{
				currentModule:'C7',
				active: true,
			}
		},
		methods:{
			toggle(data, bol){
				this.currentModule = data;
				this.active = bol;
			},
			toggleProvince(data){
				this.$emit('toggleProvince',data)
			}
		},
		components:{
			...componetstatus
		}
	}
</script>

<style lang="less" scoped="scoped">
@borderColor:#345BFA;
	.c11{
		width: 100%;
		height: 100%;
		position: relative;
		.con{
			position: absolute;
			top: 107/948*100%;
			width: 986/1024*100%;
			height: 798/948*100%;
			border: 3px solid @borderColor;
			border-radius: 10px;
			overflow: hidden;
		}
		.toast{
			width: 160px;
			height: 100%;
			right: 1192/1192*100%;
			position: absolute;
			z-index: 100;
			background-color: #163387;
				.toggle{
            position: absolute;
            z-index: 101;
            height: 114px;
            bottom: 61px;
            p:nth-child(2){
                margin-top: 26px;
            }
            .btn{
            	display: inline-block;
                width: 124px;
                height: 44px;
                line-height: 44px;
                color: #fff;
                font-size: 18px;
                border: 3px solid @borderColor;
                background-color: #163387;
                border-radius: 10px;
            }
            .active{
            	color: #a1a8c3;
            	border-color: #233faf;
            	box-shadow: none;
            }
            
        }
		}
	}
	
</style>