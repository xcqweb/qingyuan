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
        switch(window.location.hash){
            case '#/' :
            this.items[0].status = 'unchose'
            break; 
            case '#/login' :
            this.items[0].status = 'unchose'
            break; 
            case '#/command' :
            this.items[1].status = 'unchose'
            break;
            case '#/Portrait' :
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
  mounted(){
    let _self= this
    window.addEventListener('hashchange', function(e) {
        _self.hash=window.location.hash;
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
                font-size: 13px;
                margin-top: 10px;
                font-weight: bold;
                letter-spacing: 1px;
            }
            &.chose{
            		background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
                a{
                    color: #3e7bdc  !important;
                }
                
            }   
            &.unchose{
            		background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
                a{
                    color: #16d5f8 !important; 
                    border-left: 5px solid #16d5f8;
                    box-sizing: border-box;
                    background-color: #051036;
                    padding: 10px 0px 10px 0px;   
                }
                
            }
        }
        
      
        
        li:nth-of-type(1){
            .unchose{
                background-image:url('../../assets/images/home/大数据2.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
            .chose{
                background-image:url('../../assets/images/home/大数据1.png');
               	background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
        }
        li:nth-of-type(2){
            .unchose{
                background-image:url('../../assets/images/home/应急指挥2.png');
               	background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
            .chose{
                background-image:url('../../assets/images/home/应急指挥1.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
        }
        li:nth-of-type(3){
            .unchose{
                background-image:url('../../assets/images/home/游客画像2.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
            .chose{
                background-image:url('../../assets/images/home/游客画像1.png');
               background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
        }
        li:nth-of-type(4){
            .unchose{
                background-image:url('../../assets/images/home/舆情分析2.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
            .chose{
                background-image:url('../../assets/images/home/舆情分析1.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
        }
        li:nth-of-type(5){
            .unchose{
                background-image:url('../../assets/images/home/视频监控2.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
            .chose{
                background-image:url('../../assets/images/home/视频监控1.png');
                background-repeat: no-repeat;
                background-position: 2px 4px;
                background-size: 90% 90%;
            }
        }
        
    }
}

  
        	
</style>