<style lang="less" scoped>
.a5{
    width:100%;
    height:100%;
    .item{
        width:100%;
        height:100%;
        float: left;
        position: relative;
    }
}
</style>
<template>
    <div class="a5">
        <div  class="item">
            <a5ss 
            	class="c211" 
            ></a5ss>
        </div>
    </div>
</template>

<script>
import a5ss from '@/pages/home/showMore/smallComponent/a5ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'
import optionProps from '@/common/js/mixin/optionProps.js'
  export default {
    name:'a5',
    mixins: [optionProps],
    watch:{
        updatePlace:{
            handler: function (val, oldVal) {
                if(val.place ===oldVal.place){
                    var paramsObj = {
                        name:oldVal.turist,
                    }
                    this.getResponse(paramsObj)
                }else{
                    var paramsObj = {
                        name:oldVal.place,
                    }
                    this.getResponse(paramsObj)
                }
            },
            deep:true,
        }
    },
    data() {
      return {
          barNum:25400,
      }
    },

    components: {
        a5ss,
    },
    methods:{
        getResponse(){
            var paramsObj = {
                area:this.updatePlace.place,
            }
            this.$axios.get(API_URL+'/qy/api/command/getCommandPassengerData',{params:paramsObj}).then(r => {
                if(r.data.code ==="200"||r.data.code ===200){
                	//console.log(r)
                    this.barNum = r.data.data.num+Math.random();
                }
            })
        }
    },
    created(){
            var paramsObj = {
                area:"全部",
            }
        this.getResponse();
    },
    mounted(){

    }
  }
</script>

