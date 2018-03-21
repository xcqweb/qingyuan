<template>
	<div class="datalist">
		<input type="text" @focus="showList" @blur="hideList" v-model="txt" placeholder="名称关键词搜索"/>
		<span class="search" @click.self="clear">x</span>
		<List
			:list='chooseListData'
			:status='showStatus'
			@chooseName='getChooseName'
		></List>
	</div>
</template>

<script>
	import List from '@/components/commonui/datalist/list.vue'
	export default{
		data(){
			return{
				showStatus:false,
				txt:''
			}
		},
		props:['listData'],
		methods:{
			showList(){
				this.showStatus = true
			},
			hideList(){
				if(!this.txt){
					setTimeout( () => {
						this.showStatus = false
					},300)
					
				}
				
			},
			getChooseName(val){
				this.$emit('getName',val)
				this.txt = val
				this.showStatus = false
				
			},
			//清除输入
			clear(){
				this.txt = ''
				this.showStatus = false
			}
			
		},
		computed:{
			//筛选数据
			chooseListData(){
				return this.listData.filter( (item,index) => {
					return new RegExp(this.txt,'i').test(item)
					//return item.indexOf(this.txt)>-1
				})
			}
		},
		created(){
		},
		components:{
			List
		}
	}
</script>

<style lang="less" scoped="scoped">
	.datalist{
		max-height: 200px;
		input{
			position: absolute;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 0;
			margin: 0;
			font-size: 16px;
			background-color: #163387;
		    border: #345BFA 1.5px solid;
		    color: #fff;
		    text-align: center;
		    z-index: 11;
		}
		
		::-webkit-input-placeholder{
			color: #ccc;
			font-size: 14px;
			position: absolute;
			left: -100%;
		}    /* 使用webkit内核的浏览器 */
		:-moz-placeholder{
			
		}                  /* Firefox版本4-18 */
		::-moz-placeholder{
			
		}                  /* Firefox版本19+ */
		:-ms-input-placeholder{
			
		}  
		
		.search{
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
			z-index: 12;
		}
	}
</style>