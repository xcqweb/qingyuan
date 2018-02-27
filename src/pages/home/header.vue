<style lang="less" scoped>
a:link { text-decoration: none;}
a:active { text-decoration:none}
a:hover { text-decoration:none;} 
a:visited { text-decoration: none;}
.headertext{
    width:100%;
    height:100%;
    position:relative;
    box-shadow: 0 2px 25px black;
    p{  
        position: absolute;
        top: 30%;
        left: 2%;
        font-size: 1.8rem;
        color:#85e6ff;

    }
    ul{
        position: absolute;
        top: 0;
        right: 40px;
        li{
            float: left;
            margin-left: 30px;
            min-width: 80px;
            cursor: pointer;
            a{
                display:inline-block;
                width:100%;
                height:100%
            }
            span{
                display:inline-block;
                width: 36px;
                height: 34px;
                margin-top:15%;
            }
            font{
                display: block;
                font-size: 11px;
                margin-top:7px;
                color: #368df7;
            }
            &.chose{
                .afont{
                    color: #368df7 !important;  
                }
                
            }   
            &.unchose{
                .afont{
                    color: #6dffeb !important;  
                }
                
            }
        }
        li:nth-of-type(1){
            &.unchose .aimg{
                background-image:url('../../assets/images/home/dashuju2.png');
                background-size: 100% 100%;
            }
            &.chose .aimg{
                background-image:url('../../assets/images/home/dashuju1.png');
                background-size: 100% 100%;
            }
        }
        // li:nth-of-type(2){
        //     .unchose{
        //         background-image:url('../../assets/images/home/产品监测平台.png');
        //         background-size: 100% 100%;
        //     }
        //     .chose{
        //         background-image:url('../../assets/images/home/产品监测平台2.png');
        //         background-size: 100% 100%;
        //     }
        // }
        li:nth-of-type(2){
            position: relative;
            .down_item{
                position: absolute;
                width: 100%;
                height: 225%;
                z-index: 499;
	            box-shadow: 0px 1px 10px 0px 
	        	rgba(1, 1, 13, 0.2);
	            border-radius: 0px 0px 6px 6px;
                background-color: #002a5c;
            }
            &.unchose{
                background-color: #002a5c;
                
                .item:nth-of-type(1){
                    margin-top: 7px;
                    border-top: 3px solid #133596;
                    z-index: 100;
                    &.unchose font{
                        color:#6dffeb;
                    }
                    &.unchose .downimg{
                        background-image:url('../../assets/images/home/总览.png');
                        background-size: 100% 100%;
                    }
                    &.chose .downimg{
                        background-image:url('../../assets/images/home/总览2.png');
                        background-size: 100% 100%;
                    }
                }
                .item:nth-of-type(2){
                     &.unchose font{
                        color:#6dffeb;
                    }
                    &.unchose .downimg{
                        background-image:url('../../assets/images/home/精准营销平台.png');
                        background-size: 100% 100%;
                    }
                    &.chose .downimg{
                        background-image:url('../../assets/images/home/精准营销平台2.png');
                        background-size: 100% 100%;
                    }
                }
            }
            &.unchose .aimg{
                background-image:url('../../assets/images/home/shipin1.png');
                background-size: 100% 100%;
                
                
            }
            &.chose .aimg{
                background-image:url('../../assets/images/home/shipin1.png');
                background-size: 100% 100%;
            }
            
        }
        li:nth-of-type(3){
            span{
                background-image:url('../../assets/images/home/退出登录.png');
                background-size: 100% 100%;
            }
            font{
                color:#ff719c !important;
            }
        }

    }
}
</style>
<template>
  <div class="headertext">
    <p>{{title}}</p>
    <ul>
        <router-link :to="{path: '/precision'}" tag="li"   @click="toggle('choseAbove')" :class='choseAbove'>
                <span class="aimg"  @click="toggle('choseAbove')"></span>
                <font class="afont"  @click="toggle('choseAbove')">视频监控</font>
        </router-link>
        <li :class='choseDown' v-on:mouseenter="headerEnter" v-on:mouseleave="headerLeave">
                <span class="aimg"></span>
                <font class="">大数据</font>
                <div class="down_item" v-show="down_show">
                    <router-link :to="{path: '/'}" tag="div" class="item " @click="toggledown('zonglan')" :class='zonglan'>
                        <span class="downimg" @click="toggledown('zonglan')"></span>
                        <font @click="toggledown('zonglan')">总览</font>
                    </router-link>
                    <router-link :to="{path: '/command'}" tag="div" class="item" @click="toggledown('yingji')" :class='yingji'>
                        <span class="downimg" @click="toggledown('yingji')"></span>
                        <font @click="toggledown('yingji')">应急指挥平台</font>
                    </router-link>
                </div>
        </li>
        <li>
            <a v-bind:href="return_url">
            <span></span>
            <font>返回后台管理</font>
            </a>
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
            {name:'总览',link:'/',status:'unchose'},
            {name:'应急指挥平台',link:'',status:'chose'},
        ],
        down_show:false,
        choseAbove:'unchose',
        choseDown:'chose',
        zonglan:'chose',
        yingji:'chose',
        return_url:API_LOGIN,
        aboverItem:[
            {name:'总览',link:'/',status:'unchose'},
        // {name:'产业监测平台',link:'/prodcut',status:'chose'},
        // {name:'精准营销平台',link:'/precision',status:'chose'},
            {name:'应急指挥平台',link:'/souceShow',status:'chose'},
        ],
        hash:'',
    }
  },
  watch:{
      hash:function (val) {
            console.log(val)
            this.changelink()
          },
  },
  computed: { 
    ...mapGetters({
        title: 'version/title',
      }),
  },
  methods: {
    toggle(index){
        this.choseAbove='chose';
        this.choseDown='chose';
        if(index==='choseDown'){
            this.down_show=true;
            }else{
                this.down_show=false;
                this.zonglan='chose';
                this.yingji='chose';
            }
        this[index]='unchose';
    },
    toggledown(index){
        this.zonglan='chose';
        this.yingji='chose';
        this.choseAbove='chose';
        this[index]='unchose';
    },
    headerEnter(){
        this.down_show=true;
        this.choseDown='unchose';
    },
    headerLeave(){
        this.down_show=false;
        this.choseDown='chose';
    },
    logout(){
        this.$router.push({ path: '/login' })
    },
    changelink(){
        this.choseAbove='chose';
        this.zonglan='chose';
        this.yingji='chose';
       switch(location.hash){
            case '#/' :
           this.zonglan='unchose';
            break;
            case '#/command' :
            this.yingji='unchose';
            break;
            case '#/precision' :
            this.choseAbove='unchose';
            break;
        }

    },
    keepStatus(){
            this.choseAbove='chose';
            this.zonglan='chose';
            this.yingji='chose';
            switch(this.hash){
            case '#/' :
            this.zonglan='unchose';
            break;
            case '#/command' :
            this.yingji='unchose';
            break;
            case '#/precision' :
            this.choseAbove='unchose';
            break;
        }
    },
  },
  components:{
  },
  mounted(){
    let _self= this
    _self.hash=location.hash;
    window.addEventListener('hashchange', function(e) {
        _self.hash=location.hash;
    }, false);
    this.keepStatus()
  }
}
</script>

