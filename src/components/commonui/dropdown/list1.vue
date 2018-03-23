<template>
	<div class='listdiv'  v-bind:style="{height: listDivHeight+'rem',maxHeight:maxHeight+'rem' }" v-bind:class="{ more: isMore }" v-if='isShow'>
        <div class="overlays" v-if='isShow' @click.self='hidelist'></div>
        <ul @mousewheel.passive='moreStatus' style='font-size:12px;'  v-if='isShow' @mouseleave="out" :class="{'centero':uniqueClasso,'centert':uniqueClasst,}"><li class="v-dropdown-menu_list" v-for = 'item in list' v-on:click = 'increment(item)'>{{item}}
    </li></ul>
	</div>
</template>

<script>
	export default{
		props:['list','status','uniqueClasso','uniqueClasst'],
        data(){
            return{
                 msg:'jfdksjfk',
                 showstatus:true,
                 isMore:true,
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
            	this.statu = !this.statu
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
        mounted(){
            if(this.list.length>4){
                this.isMore =  true
            }else{
                this.isMore = false
            }
            
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
    z-index:100001;
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
     .centero{
    	width: 160% !important;
    }
    .centert{
    	width: 140% !important;
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
        width: 150%;
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







</style>