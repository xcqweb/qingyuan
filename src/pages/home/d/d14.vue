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
        font-family: numberFont;
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
            <font>{{nowYear}}年累计接待游客(人)</font>
            <span>{{dataMsg.num}}</span>
        </div>
        <div class="b6_bottom">
        	<font>{{mowMonth}}月份累计接待游客(人)</font>
            <span>{{dataMsg.yesterdayNum}}</span>
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import adaptation from '@/common/js/mixin/adaptation.js'
import optionProps from '@/common/js/mixin/optionProps.js'
let date = new Date()
let nowYear = date.getFullYear()
let mowMonth = date.getMonth()+1
export default {
    name:'d6',
    mixins: [adaptation,optionProps],
     
    watch:{
        updatePlace:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        upday:function(val){
            var paramsObj = {
                area:this.updatePlace.place,
                type:["day","month","year"][this.upday],
            }
            this.getResponse(paramsObj);
        },
        update:{
             handler:function(val, oldVal){
                 let end = val.end.join("-")
                 let begin = val.begin.join("-")
                 var paramsObj = {
                    area:this.updatePlace.place,
                    beginTime:begin,
                    endTime:end
				}
                 this.getResponse(paramsObj);
             },
             deep:true,
        }
    },
    data () {
        return {
        	level_xs:true,
        	nowYear:nowYear,
            mowMonth:mowMonth,
            dataMsg:{
                yesterdayNum:'15642',
                num:'653254',
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
        getResponse(paramsObj){
        	let _self = this
            this.$axios.get(API_URL+'/qy/api/view/getInProvinceDetailData',{params:paramsObj}).then(r => {
                if(r.status ===200){
                    this.dataMsg.num =_self.$Rw.string_until.addPoint(r.data.data.yearSum);
                    this.dataMsg.yesterdayNum =_self.$Rw.string_until.addPoint(r.data.data.monthSum)
                }
            })
        }
    },
    mounted(){
        var paramsObj = {
                area:"全部",
                type:"day",
                city:1
            }
       this.getResponse(paramsObj);
    },  
}
</script>

