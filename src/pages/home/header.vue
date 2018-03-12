<template>
  <div class="headertext">
    <ul>
        <li v-for='(item, index) in items' :class='item.status' @click='toggle(item,index)'>
            <router-link v-bind:to={path:item.link}>
                <span :class='item.status'></span>
                <font>{{item.name}}</font>
            </router-link>          
        </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
//import {setCookie,getCookie} from '@/common/js/cookie/cookie.js'
//import api from '@/api/index.js'
export default {
  name: '',
  data () {
    return {
      items:[
        {name:'大数据',link:'/',status:'unchose'},
        {name:'应急指挥',link:'/command',status:'chose'},
        {name:'游客画像',link:'/Portrait',status:'chose'},
        {name:'舆情分析',link:'/option',status:'chose'},
        {name:'视频监控',link:'/video',status:'chose'},
      ],
      hash:'',
      wid:window.innerWidth
    }
  },
  watch:{
      hash:function (val) {
              this.changelink()
          },
  },
  computed: { 
    ...mapGetters({
        title: 'version/title',
      }),
      
      //手机屏幕时去掉标题
      showTitle(){
      	let wid = this.wid;
      	if(wid<768){
      		return false;
      	}else{
      		return true;
      	}
      }
  },
  methods: {
    toggle(item,index){
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].status='chose'
        }
        item.status='unchose'
    },
    logout(){
    	api.loginOut(api.params).then( (re) => {
    		//console.log(re.data)
    		if(re.data.code===200){
    			//setCookie('token','',-1);
        	this.$router.push({ path: '/login' });
        	alert('退出成功!')
    		}
    	}).catch( (e) => {
    		alert('退出失败!请重试!')
    	})
    		
        
    },
    changelink(){
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].status='chose'
        }
        switch(location.hash){
            case '#/' :
            this.items[0].status = 'unchose'
            break; 
            case '#/login' :
            this.items[0].status = 'unchose'
            break; 
            case '#/command' :
            this.items[1].status = 'unchose'
            break;
            case '#/portrait' :
            this.items[2].status = 'unchose'
            break;
            case '#/option' :
            this.items[3].status = 'unchose'
            break;
            case '#/video' :
            this.items[4].status = 'unchose'
            break;
        }

    },
    keepStatus(){
        for (var i = 0; i < this.items.length; i++) {
            if (this.hash = this.items[i].link) {
                this.items[i].status='unchose'
            }else{
                this.items[index].status = 'chose'
            }
        }
    },
  },
  components:{
  },
  mounted(){
  	//console.log(location.hash)
    let _self= this
    window.addEventListener('hashchange', function(e) {
        _self.hash=location.hash;
    }, false);
    this.keepStatus()
  }
}
</script>

<style lang="less" scoped>
a:link { text-decoration: none;}
a:active { text-decoration:none}
a:hover { text-decoration:none;} 
a:visited { text-decoration: none;}
.headertext{
    width:100%;
    height:100%;
    position:relative;
    background-color: #133596;
    p{  
        position: absolute;
        top: 32%;
        left: 2%;
        font-size: 1.8rem;
        color:#85e6ff;

    }
    ul{
        position: absolute;
        width:100%;
        height: 80px;
        li{
            margin-top: 1.8rem;
            cursor: pointer;
            a{
                display:inline-block;
                width:100%;
                height:100%
            }
            span{
                display:inline-block;
                width: 41px;
                height: 41px;
            }
            font{
                display: block;
                font-size: 12px;
                margin-top: 12px;
            }
            &.chose{
                a{
                    color: #368df7 !important;
                    
                }
                
            }   
            &.unchose{
                a{
                    color: #6dffeb !important; 
                    border-left: 2px solid rgb(21, 213, 249);
                    box-sizing: border-box;
                    background-color: rgba(4, 16, 54,0.6);
                    padding: 10px 0px 10px 0px;   
                }
                
            }
        }
        
      
        
        li:nth-of-type(1){
            .unchose{
                background-image:url('../../assets/images/home/总览.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/总览2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(2){
            .unchose{
                background-image:url('../../assets/images/home/产品监测平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/产品监测平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(3){
            .unchose{
                background-image:url('../../assets/images/home/精准营销平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/精准营销平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(4){
            .unchose{
                background-image:url('../../assets/images/home/资源展示平台.png');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/资源展示平台2.png');
                background-size: 100% 100%;
            }
        }
        li:nth-of-type(5){
            .unchose{
                background-image:url('../../assets/images/home/2171516605538.jpg');
                background-size: 100% 100%;
            }
            .chose{
                background-image:url('../../assets/images/home/2161516605424.jpg');
                background-size: 100% 100%;
            }
        }
        
    }
}

  
        	
</style>