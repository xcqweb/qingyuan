<template>
	<div class="c11">
		<div class="chose">
			<listMenu
				
			></listMenu>
		</div>
		<div class="con">
			<componet :is='currentModule'></componet> 
		</div>
		<!--切换-->
        <div class="toggle">
        	<p><input type="button" class="btn" :class="{'active':active}" value="游客来源" @click="toggle('C8')"/></p>
        	<p><input type="button" class="btn" :class="{'active':!active}" value="景区排行" @click="toggle('C7')"/></p>
        </div>
	</div>
</template>

<script>
import componetstatus from '@/pages/home/componentstatus.js'
import listMenu from '@/components/commonui/dropdown/listMenu.vue'	
	export default{
		data(){
			return{
				currentModule:'C7',
				active: true
			}
		},
		methods:{
			toggle(data){
				this.currentModule = data;
				this.active = !this.active;
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
		}
		.toggle{
            position: absolute;
            height: 114px;
            right: 1226/1192*100%;;
            bottom: 61px;
            p:nth-child(2){
                margin-top: 26px;
            }
            .btn{
                width: 124px;
                height: 44px;
                color: #fff;
                font-size: 18px;
                border: 3px solid @borderColor;
                background-color: #163387;
                border-radius: 10px;
            }
            .active{
            	color: #a1a8c3
            }
            
        }
	}
</style>