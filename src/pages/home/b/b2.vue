<template>
    <div class="b2" >
        <div v-bind:class="{ active: isActive }" style="height:100%;width:100%;">
            <b2ss 
            class="c211" 
            :idName='"b2bb"' 
            :scenics='""' 
            :dataItem = 'dataItem'
        ></b2ss>
        <ul class="text" style="color:white;font-size:12px;">
            <li v-for="item in warningTeam">{{item.name}}</li>
        </ul>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
import b2ss from '@/pages/home/showMore/smallComponent/b2ss.vue'
import b2sjson from '@/pages/home/showMore/bigComponent/json/b2s.json'
export default {
    name: 'b2',
    props:{
        mainPageSelect:Object,
    },
    watch:{
        mainPageSelect:{
            handler: function (val, oldVal) {
                this.warningTeam=[] ;
                this.isActive= false ;
                this.getResponse();
            },
            deep:true,
        }
    },
  data () {
    return {
        isActive:false,
        dataItem:{
            percent:32,
            warningNub:null,
            noTitle:true,
           
        },
        warningTeam:[

        ],
    }
  },
  computed: { 
  },
  methods:{
      checkWaringStatus(val,arrItems){
          //如果是全部则筛选，如果不是，则精确查询
          if(val.turist ==="全部"){
                 var warningArr = arrItems;
                 warningArr.forEach(item => {
                    if(item.percent>90){
                        this.warningTeam.push(item);
                        this.isActive = true;
                     }else{
                         this.dataItem.percent =item.percent;
                     }
                 });
                 if(this.warningTeam[0]){
                     this.dataItem.percent = this.warningTeam[0].percent;
                 }else{
                     this.dataItem.percent = 0;
                 }   
               
             }else{
                 //二级为详细景区时精确定位
                 var warningArr = arrItems;
                 warningArr.forEach(item => {
                     
                     if(item.name === val.turist ){
                        
                         if(item.percent>90){
                            this.warningTeam.push(item);
                            this.isActive = true;
                            this.dataItem.percent = this.warningTeam[0].percent;
                         }else{
                            //如果没有大于90的元素，则直接推当前元素进入列表，并且
                            this.dataItem.percent =item.percent;
                            this.warningTeam = [item]
                         }
                    }else{
                        this.dataItem.percent = 0;
                    }
                     
                 });
                 
             }
      },
      getResponse(){
            let _self = this;
            var paramsObj = {
                area:this.mainPageSelect.place,
                name:this.mainPageSelect.turist
            }
            this.$axios.get('http://120.55.190.57/qy/api/command/selectCommandScenicWarning',{params:paramsObj}).then(r => {
                
                if(r.status ===200){
                    this.checkWaringStatus(this.mainPageSelect,r.data.data)
                }
            })
        }
  },
  mounted() {
    this.getResponse();
    // this.checkWaringStatus(this.mainPageSelect)
    
  },
  components:{
      b2ss
  }
}
</script>

<style lang="less" scoped>
.b2{
    height:100%;
    width:100%;
    position:relative;
    .active{
        background-color: #600000;
    }
    .c211{
        position: absolute;
        transform: translate(-20%,10%) scale(.8);
    }
    .text{
        width:48%;
        position:absolute;
        right:5px;
        top:50%;
        text-align: right ;
        li{
            text-align: left;
            margin-top: 1px;
        }
        // transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
        }
    }
}

</style>