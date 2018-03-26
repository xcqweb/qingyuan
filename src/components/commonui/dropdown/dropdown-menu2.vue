
<template>
    <div class="v-dropdown-menu" 
        @click = 'showselect($event)' 
        v-bind:style="{ width:selectList.width ,left:selectList.left,right:selectList.right,top:selectList.top}" 
        >
        <p @click='triggle($event)' v-on:itemtodo2="sendMsgParent" @mouseleave="out($event)" class="dropdown-menu-p" :class="{unique1:uniqueClasso}" :title="selectList.title">{{selectList.title}}</p>
        
            <list 
            :list='selectList.place'  
            :status='menueshow' 
            :uniqueClasso='uniqueClasso'
            v-on:itemtodo='outcrement'
            @hideSelects='hideSelects'
            ></list>
    </div>

</template>
<script >
import Vue from 'vue'
import Bus from '@/common/js/bus'
import list from '@/components/commonui/dropdown/list.vue'
    export default{
        data(){
            return{
                menueshow:false,
                hideSelect:false,
                timer:null
            }
        },
        props: [
            'selectList',
            'uniqueClasso',
        ],
        computed:{  
        },
        
        components:{
        	list,
        },
        methods:{
        	hideSelects(data){
        		clearTimeout(this.timer)
        		this.menueshow = data
        		
        	},
        	out(e){
        		this.timer = window.setTimeout( () => {
        			this.menueshow=false;
        		},100)
        	},
            sendMsgParent:function(){
                this.$emit('listenAtparent',selectList.title)
            },
            outcrement:function(message){
                
                if (message) {
                    this.selectList.title=message;
                    this.$emit('listenAtparent',message)
                }else{
                    
                }
                this.menueshow = false;
                 
            },
            triggle:function(e){
            	if(this.timer){
            		clearTimeout(this.timer)
            	}
            	
                this.menueshow = !this.menueshow;
            },
            hidelist(){
                this.selectList.selectStatus=false;
            },
            showselect(e){
                this.selectList.selectStatus=true;
            },
        },
    }

</script>
<style lang="less" scoped="scoped">

.slecToast{
	  	width: 400vw;
	  	height: 400vh;
	  	position: absolute;
	  	top: -100vh;
	  	left: -100vw;
	  	z-index: 1000;
	  }

.dropdown-menu-p{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    color: white;
    cursor: pointer;
    text-align: center;
    z-index: 9;
    font-size: 16px;
    line-height: 36px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
}
.v-dropdown-menu {
    height:100%;
    line-height: 1.8rem;
    position: absolute;
    border: 0.1rem solid #355BFA;
    top: 50%;
    transform: translate(0,-50%);
    color: white;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    z-index: 30;
    white-space: nowrap;
}

.unique1{
	line-height: 44px;
}
.unique2{
	line-height: 44px;
}

.unique3{
	line-height: 44px;
}

.unique3{
	line-height: 44px;
}

</style>