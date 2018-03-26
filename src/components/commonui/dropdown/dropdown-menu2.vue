
<template>
    <div class="v-dropdown-menu" 
        @click = 'showselect($event)' 
        v-bind:style="{ width:selectList.width ,left:selectList.left,right:selectList.right,top:selectList.top}" 
        >
        <p @click='triggle($event)' v-on:itemtodo2="sendMsgParent" @mouseleave="out($event)" class="dropdown-menu-p" :class="{unique1:uniqueClasso}" :title="selectList.title">{{selectList.title}}</p>
        <span :class="upDown"></span>
            <list 
            :list='selectList.place'  
            :status='menueshow' 
            :uniqueClasso='uniqueClasso'
            v-on:itemtodo='outcrement'
            @hideSelects='hideSelects'
            v-if='selectList.selectStatus'>        
            </list>
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
                upDown:'down',
                hideSelect:false,
            }
        },
        props: [
            'selectList',
            'uniqueClasso',
        ],
        computed:{  
        },
        watch:{
            menueshow:function (val){
                if (val) {
                    this.upDown='up'
                }else{
                    this.upDown='down'
                }
            },
        },
        components:{
        	list,
        },
        methods:{
        	hideSelects(data){
        		this.hideSelect = data
        	},
        	out(e){
        		
        	},
            sendMsgParent:function(){
                this.$emit('listenAtparent',selectList.title)
            },
            outcrement:function(message){
                
                if (message) {
                    this.upDown='down'
                    this.selectList.title=message;
                    this.selectList.selectStatus=false;
                    this.menueshow=false;
                    this.selectList.selectStatus = true;
                    this.$emit('listenAtparent',message)
                }else{
                    this.upDown='down'
                    this.menueshow=false;
                    this.selectList.selectStatus = true;
                    //this.$emit('listenAtparent',this.selectList.title)
                }
                 
            },
            triggle:function(e){
            	
            	this.menueshow = !this.menueshow
            	
                this.selectList.selectStatus = true;
                if (this.upDown!='up') {
                    this.upDown='up';
                }
            },
            hidelist(){
                this.selectList.selectStatus=false;
                if (this.upDown!='down') {
                    this.upDown='down';
                }
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

.dropdown-fade-enter-active {
  transition: all .1s linear;
}
.dropdown-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.dropdown-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(0);

}

</style>