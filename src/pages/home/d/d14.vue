<style lang="less" scoped>
.b6{
    position: relative;
    height: 100%;
    width: 100%;
    span{
        margin-bottom:5%;
        display:block;
        color:#ffd800;
        font-size: 48px;
        margin-top: 20px;
    }
    font{
        display:block;
        color:#43dbff;
        font-size: 20px;
        letter-spacing: .2rem;
    }
    .b6_top{
        position:absolute;
        top:20%;
        width:100%;
        height:40%;
    }
    .b6_bottom{
        position:absolute;
        bottom:0;
        width:100%;
        height:40%;
    }
}
</style>

<template>
    <div class="b6">
        <div class="b6_top">
            <font>2018年累计接待游客(人)</font>
            <span>{{dataMsg.num}}</span>
        </div>
        <div class="b6_bottom">
        	<font>1月份累计接待游客(人)</font>
            <span>{{dataMsg.yesterdayNum}}</span>
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'

export default {
    name:'d6',
    mixins: [adaptation],
     props:{
        mainPageSelect:Object,
    },
    watch:{
        mainPageSelect:{
            handler: function (val, oldVal) {
                let _self = this;
               this.getResponse();
            },
            deep:true,
        }
    },
    data () {
        return {
        	level_xs:true,
            dataMsg:{
                yesterdayNum:'15642',
                num:'653254'
            }
        }
    },
    components:{

    },
    computed: { 

    },
    methods: {
    addDot(nub){
            var n= nub;
            var m =n +'',
            len= m.length
            if (len>3) {
            var aa=len-3
            var bb=m.slice(aa,len)
            var cc=m.slice(0,aa)
            m=cc+','+bb
            }
            return m
        },
        getResponse(){
            let _self = this;
            var paramsObj = {
                area:this.mainPageSelect.place,
                name:this.mainPageSelect.turist
            }
        
            this.$axios.get(API_URL+'/qy/api/command/getCommandCurrentPerson',{params:paramsObj}).then(r => {
                if(r.status ===200){
                    this.dataMsg.num =_self.$Rw.string_until.addPoint(r.data.data.num);
                    this.dataMsg.yesterdayNum =_self.$Rw.string_until.addPoint(r.data.data.yesterdayNum)
                }
            })
        }
    },
    mounted(){
        this.getResponse();
    },  
}
</script>

