<<<<<<< HEAD
<template>
    <div class="b2">
        <div id="pieB2"></div>
        <div class="circle">
            <img :src="imgacircle"/>
        </div>
        <span>87.3%</span>
        <div class="text"><font>预警客流</font><font>12000</font></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '../../../common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
  name: 'b2',
  data () {
    return {
        imgacircle:require('../../../assets/images/home/b/circle.png'),
        option:{
            backgroundColor: 'rgba(0,0,0,0)',
            series: [
                {
                    name: '消费情况',
                    type: 'pie',
                    radius:  ['53%', '59%'],
                    center: ['30%', '60%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        
                        {
                        value:335,
                        name:'',
                        itemStyle:{
                            normal:{
                                color:'#1da7fe',
                                

                            }
                        }
                    },
                        {
                        value:40, 
                        name:'',
                        itemStyle:{
                            normal:{
                                color:'rgba(0,0,0,0)',
                                // borderColor:'#1da7fe',
                                // borderWidth:1,
                            }
                        }
                    },
                    ]
                }
            ]
        }
    }
  },
  computed: { 
  },
  methods:{
      redom(id){
          this.chart = echarts.init(document.getElementById(id));
          this.chart.setOption(this.option);
      }
  },
  mounted() {
        this.$nextTick(echarts_resize('pieB2',this))
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.b2{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        top:61%;
        left:30%;
        color:#1da7fe;
        transform: translate(-50%,-50%);
        font-size:.8rem;
    }
    #pieB2{
        height:100%;
        width:100%;
        position:absolute;
    }
    .circle{
        height: auto;
        width:75/223*100%;
        text-align: center;
        position:absolute;
        top:61%;
        left:30%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:80%;
        position:absolute;
        right:5px;
        top:50%;
        text-align: right ;
        // transform: translateX(-50%);
        font{
            margin-left:10%;
            color:#1da7fe;
            font-size:1rem;
        }
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

=======
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
// import b2sjson from '@/pages/home/showMore/bigComponent/json/b2s.json'
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
            this.$axios.get(API_URL+'/qy/api/command/selectCommandScenicWarning',{params:paramsObj}).then(r => {
                
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

>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
</style>