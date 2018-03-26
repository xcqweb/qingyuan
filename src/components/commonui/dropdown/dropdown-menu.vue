
<template>
    <div class="v-dropdown-menu" 
        @click = 'showselect($event)' 
        v-bind:style="{ width:selectList.width ,left:selectList.left,right:selectList.right,top:selectList.top}" 
        >
        <p @click='triggle($event)' v-on:itemtodo2="sendMsgParent" @mouseleave="out($event)" class="dropdown-menu-p" :class="{unique1:uniqueClasso,unique2:uniqueClasst,unique3:uniqueClassth}">{{selectList.title}}</p>
        <span :class="upDown"></span>
        <transition name="dropdown-fade">
            <dropdownList 
            :list='selectList.place'  
            :status='menueshow' 
            :uniqueClasso='uniqueClasso'
            :uniqueClasst='uniqueClasst'
            v-on:itemtodo='outcrement'
            @hideSelects='hideSelects'
            v-if='selectList.selectStatus'>        
            </dropdownList>
        </transition>
        <div class="d"></div>
    </div>

</template>
<script >
import Vue from 'vue'
import Bus from '@/common/js/bus'
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
            'uniqueClasst',
            'uniqueClassth',
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
            	let re = e.target.offsetParent.className==='v-dropdown-menu area'
            	if(re){
            		//this.$emit('listenAtparent','全部')
            	}else{
            		//this.$emit('listenAtparent','全部')
            	}
            	this.menueshow = !this.menueshow
                this.selectList.selectStatus = true;
                if (this.upDown!='up') {
                    this.upDown='up';
                }
            },
            hidelist(){
            	alert(1212)
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
    Vue.component('dropdownList',{
          props:['list','status','uniqueClasso','uniqueClasst'], 
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
                 isMore:true,
                 statu:false
            }
        },
        template:`<div class='listdiv'  v-bind:style="{height: listDivHeight+'rem',maxHeight:maxHeight+'rem' }" v-bind:class="{ more: isMore }" v-if='isShow'>
        <div class="overlays" v-if='status' @click.self='hidelist'></div>
        <ul @mousewheel.passive='moreStatus' style='font-size:14px; width:"150%"'  v-if='isShow' @mouseleave="out" :class="{'centero':uniqueClasso,'centert':uniqueClasst,}"><li class="v-dropdown-menu_list" v-for = 'item in list' v-on:click = 'increment(item)'>{{item}}
    </li></ul></div>`,
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
            	return this.status
            }
        },
        methods:{
            chosen:function(){
            },
            showselect(){
            	this.selectList.selectStatus=true;
            },

            increment:function(item){
                this.showstatus= !this.showstatus;
                this.isMore = true;
                this.$emit('itemtodo',item === undefined ? this.list[0] : item);
            },
            test:function(){

            },
            out(){
              	this.statu = !this.statu
            	this.$emit('hideSelect',false)
            },
            moreStatus(event){
                this.isMore = false;
            },
            //点击浮框背景未选中元素时 隐藏下拉框并传默认值；
            hidelist(){
                this.isMore = true;
                this.$emit('itemtodo');
            },
                
        },
        watch:{
        	status:function(){
        		this.statu = !this.statu
        		this.$emit('hideSelects',false)
        	}
        },
        created(){
        	
        },
        mounted(){
            if(this.list.length>6){
                this.isMore =  true
            }else{
                this.isMore = false
            }
            
        }
    }
)
</script>
<style lang="less" scoped="scoped">
.overlays {
    position:  fixed;
    width: 400vw;
    height: 400vh;
    transform: translate(-50%,-50%);
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index:10000;
    /*display: none;*/
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
    .d{
    	width: 400vw;
    	height: 400vw;
    	position: fixed;
    	z-index: 200;
    }
}
.listdiv{
    position: fixed;
    left:0;
    top:100%;
    max-height: 10.8rem;
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    border: 1px solid #1b44ba;
    background-color: #193583;
    z-index: 1000;
     .centero{
    	width: 161% !important;
    }
    .centert{
    	width: 142% !important;
    }
    &.more{
            &:after{
                content: "";
                width:0;
                height: 0;
                position: absolute;
                bottom: 5px;
                left: 50%;
                z-index: 450;
                transform: translate(-50%,0);
                border-left: solid 10px transparent;
                border-top:solid 5px white;
                border-right: solid 10px transparent;
            }
            li:nth-of-type(6){
                margin-top: 1.8rem;
            }
        }
    ul{
        position: absolute;
        left:0;
        top:0;
        transform: translate(-15%,0);
        height: auto;
        width: 138%;
        margin-left: -1px;
        z-index:12000;
        max-height: 10.8rem;
        overflow-y: auto;
        li {
            list-style: none;
            color: white;
            background-color: #193583;
            height: 1.8rem;
            font-size: 16px;
            line-height: 1.8rem;
            white-space: nowrap;
            overflow: hidden;
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

.dropdown-menu-p{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 270px;
    color: white;
    cursor: pointer;
    text-align: center;
    z-index: 9;
    font-size: 16px;
    line-height: 36px;
    white-space: nowrap;
    overflow: hidden;
}

.unique1{
	width: 140px;
	line-height: 44px;
}
.unique2{
	width: 256px;
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