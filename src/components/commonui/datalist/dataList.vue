<template>
	<div class="datalist">
		<input type="text" @focus="showList" @blur="hideList" v-model="txt" placeholder="名称关键词搜索" :title="txt"/>
		<span class="search" @click.self="clear($event)" v-show="showStatus">x</span>
		<List
			:list='chooseListData'
			:status='showStatus'
			@chooseName='getChooseName'
		></List>
	</div>
</template>

<script>
	import List from '@/components/commonui/datalist/list.vue'
	import Bus from '@/common/js/bus'
	export default{
		data(){
			return{
				showStatus:false,
				txt:''
			}
		},
		watch:{
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
			clear(e){
				this.txt = ''
				this.showStatus = false
				e.stopPropagation()
				e.preventDefault()
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
		mounted(){
			Bus.$on('clearKey',() => {
				this.txt = ''
			})
		},
		components:{
			List
		}
	}
</script>

<style lang="less" scoped="scoped">
	.datalist{
		height: auto;
		input{
			position: absolute;
			left: 0;
			width: 101%;
			box-sizing: border-box;
			height: 100%;
			padding: 0;
			margin: 0;
			font-size: 16px;
			background-color: #163387;
		    border: #345BFA 1.5px solid;
		    color: #fff;
		    padding: 0 30px 0 15px;
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
			color: #ccc;
			cursor: pointer;
			z-index: 12;
		}
		
		.search:hover{
			color: #fff;
		}
	}
</style>