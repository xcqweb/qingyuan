<template>
  <div id="apphome" onselectstart="return false;" style="-moz-user-select:none;">
  	<div class="chose">
			<listMenu
						@doubleChose='doubleChoseVal'
        		@choseDate='choseDateVal'
        		@choseDay='choseDayVal'
			></listMenu>
		</div>
			
    <div class="leftScope">
    	<h1>游客来源及景区排行<tips :type='tipType'></tips></h1>
        <div v-for='topItem in leftComponent' 
        :class='topItem.id' 
        class="item">
            <div v-if='topItem.show'>
            	<!--动态组件-->
                <componet 
                :is='topItem.name'  
                :key="topItem.id" 
                :updatePlace='updatePlace'
                :update='update'
                @toggleProvince='toggleProvince'
                ></componet>    
            </div>
        </div>
    </div>
    <div class="rightScopetop">
        <div v-for='topItem in rightTop' 
        :class='topItem.id' 
        class="item">
            <h1>{{topItem.title}}<tips :type='topItem.type'></tips></h1>
            <div v-if='topItem.show'>
                <componet
                :is='topItem.name' 
                :key="topItem.id" 
                :updatePlace='updatePlace'
                :update='update'
                ></componet>
            </div>
        </div>
    </div>
    
     <div class="rightScopebtm">
        <div v-for='topItem in rightBottom' 
        :class='topItem.id' 
        class="item">
            <h1>{{topItem.title}}<tips :type='topItem.type'></tips></h1>
            <div v-if='topItem.show'>
                <componet
                :is='topItem.name' 
                :key="topItem.id" 
                :updatePlace='updatePlace'
                :update='update'
                ></componet>
            </div>
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import componetstatus from '@/pages/home/componentstatus.js'
import headerBody from '@/pages/home/header.vue'
import Bus from '@/common/js/bus'
export default {
        data() {
            return {
            tipType:'a1',
        		updatePlace:{place:"全部",turist:"全部"},
        		update:{type:0},
        		isprovince:0,
                //全国市
                leftComponents:[ //动态组件数据
                     {name:'D14',id:'one',index:1,time:1200,show:true,title:``},
                     {name:'B15',id:'two',index:2,time:1200,show:true,title:``,},
                     {name:'C11',id:'three',index:3,time:1200,show:true,title:``,},
                ],
                //省内市
                leftComponentspro:[
                     {name:'D14',id:'one',index:1,time:1200,show:true,title:``,},
                     {name:'B17',id:'two',index:2,time:1200,show:true,title:``,},
                     {name:'C11',id:'three',index:3,time:1200,show:true,title:``,},
                ],
                //全国省
                leftComponentscty:[
                     {name:'D14',id:'one',index:1,time:1200,show:true,title:``,},
                     {name:'B18',id:'two',index:2,time:1200,show:true,title:``,},
                     {name:'C11',id:'three',index:3,time:1200,show:true,title:``,},
                ],
                rightTop:[
                     {name:'A5SS',id:'one',index:1,time:1200,show:true,title:'实时客流',type:'a2'},
                ],
                rightBottom:[
                		{name:'A2SS',id:'one',index:1,show:true,title:'停留天数',type:'a3'},
                ],
            }
        },
        
        components: {
                headerBody,
                ...componetstatus, //ES6展开运算,注册组件
        },
        computed:{
        	leftComponent(){ 
        		if(this.isprovince===0){
        			return this.leftComponents
        		}else if(this.isprovince===1){
        			return this.leftComponentspro
        		}else{
        			return this.leftComponentscty
        		}
        	}
        },
				beforeDestroy(){
					Bus.$off('reset') //解除Bus Bus不会自动解除
				},
        methods: {
	        	//获取选择的景区
		        doubleChoseVal(val){
		        	this.updatePlace = val
		        	//console.log(this.updatePlace)
		        },
		        //获取选择时间
		        choseDateVal(val){
		        	Bus.$emit('reset');
		        	this.update = val
		        },
		        //获取选择年,月,日
		        choseDayVal(val){
		        	Bus.$emit('reset');
		        	this.update = {type:val}
		        },
            //游客来源联动地图
            toggleProvince(data){//选择 全国,省内,全国省时 获取选择的值 type:Number
            	this.isprovince = data
            }
        },
    }
</script>

<style lang="less" type="text/less" scoped >
    @import '../../../assets/style/home.less';
</style>
