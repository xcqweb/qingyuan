<template>
	<transition name="dropdown-fade">
		<div class='listdiv'  v-bind:style="{height: listDivHeight+'rem',maxHeight:maxHeight+'rem' }" v-show='status' @mouseleave="leave">
	        <!--<div class="overlays" v-if='isShow' @click.self='hidelist'></div>-->
	        <ul @mousewheel.passive='moreStatus' class="con" style='font-size:12px;' :class="{'centero':uniqueClasso}">
	        	<li class="v-dropdown-menu_list" :title="item" v-for = 'item in list' v-on:click = 'increment(item)'>{{item}}</li>
	        </ul>
		</div>
	</transition>
</template>

<script>
	export default{
		props:['list','status','uniqueClasso'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
                 statu:false
            }
        },
           computed:{
            maxHeight:function(){
                if(this.list.length>5){
                    return 10.8
                }else{
                    return (this.list.length+1)*1.8
                }
            },
            listDivHeight:function(){
                return (this.list.length)*1.8
            },
            isShow(){
            	return this.statu
            }
        },
        methods:{
        	leave(){
        		//this.$emit('hideSelects',false)   
        	},

            increment:function(item){
                this.showstatus= !this.showstatus;
                this.isMore = true;
                this.$emit('itemtodo',item === undefined ? this.list[0] : item);
            },
            //点击浮框背景未选中元素时 隐藏下拉框并传默认值；
            hidelist(){
            	this.statu = !this.statu
                this.$emit('itemtodo');
            },
                
        },
        watch:{
        	status:function(){
        		this.statu = !this.statu
        		this.$emit('hideSelects',false)
        	}
        },
        mounted(){
        	console.log(this.list)
        }
	}
</script>

<style lang="less" scoped="scoped">
.overlays {
    position: fixed;
    width: 400vw;
    height: 400vh;
    transform: translate(-50%,-50%);
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index:10000;
    display: none;
}

.listdiv{
    position: absolute;
    left:0;
    top:100%;
    max-height: 10.8rem;
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    border: 1px solid #1b44ba;
    background-color: #193583;
    ul{
        position: absolute;
        left:0;
        top:0;
        height: auto;
        width: 100%;
        margin-left: -1px;
        z-index:12000;
        max-height: 10.8rem;
        overflow-y: auto;
        li {
            list-style: none;
            color: white;
            background-color: #193583;
            height: 1.8rem;
            font-size: 0.8rem;
            line-height: 1.8rem;
            white-space: nowrap;
            text-overflow: ellipsis;
			overflow: hidden;  
            white-space: nowrap; 
            width: 100%;  
            &:hover{
                background-color:#3c69bd;
            }
        }
    }
}

	.v-dropdown-menu_list {
	    cursor: pointer;
	    height: 20px;
	    width:100%;
	    text-align: center;
	    color: white;
	    font-size: 18px;
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

		.dropdown-fade-enter-active {
			  animation: slided 0.6s ease;
			}
			.dropdown-fade-leave-active {
			  animation: slideu 0.45s ease;
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
</style>