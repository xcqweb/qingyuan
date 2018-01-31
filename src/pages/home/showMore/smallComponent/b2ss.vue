<template>
    <div class="b2">
        <div :id="idName" class="pieB2"></div>
        <div class="circle">
            <img :src="imgacircle"/>
        </div>
<<<<<<< HEAD
        <span>{{dataItem}}%</span>
        <div class="text"><font>预警客流</font><font>12000</font></div>
=======
        <span v-bind:class="{fontRed:fontRedData}">{{dataItem.percent}}%</span>
        <div class="text"><font >{{dataItem.warnNum}}</font></div>
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
        <div class="scenic">{{scenics}}</div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts_resize from '@/common/js/echarts_resize.js'
import echarts from 'echarts'
export default {
  name: 'b2',
    props:{
        idName:String,
        scenics:String,
<<<<<<< HEAD
        dataItem:Number,
=======
        dataItem:Object,
    },
    watch:{
        dataItem: {
            handler: function (val, oldVal) {

                this.$nextTick(echarts_resize(this.idName,this))
            },
            deep:true,
        }
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    },
  data () {
    return {
        imgacircle:require('../../../../assets/images/home/b/circle.png'),
<<<<<<< HEAD
        option:{
=======
        
    }
  },
  computed: { 
      warningText:function(){
          return this.dataItem.noTitle === false ? '客流预警'+this.dataItem.warningNub : '';
      },
      fontRedData:function(){
         return this.dataItem.percent<90 ? false : true;
      }
  },
  methods:{
      redom(id){
           if(this.chart){
                this.chart.dispose();
            }
          this.chart = echarts.init(document.getElementById(id));
          let option={
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
            backgroundColor: 'rgba(0,0,0,0)',
            series: [
                {
                    name: '消费情况',
                    type: 'pie',
<<<<<<< HEAD
                    radius:  ['43%', '49%'],
=======
                    radius: this.dataItem.noTitle ===undefined ?['42%','49%']: ['69%', '75%'],
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
                    center: ['50%', '50%'],
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
<<<<<<< HEAD
                        value:this.dataItem,
                        name:'',
                        itemStyle:{
                            normal:{
                                color:this.dataItem<90?'#1da7fe':'#fe6e40',
=======
                        value:this.dataItem.percent,
                        name:'',
                        itemStyle:{
                            normal:{
                                color:this.dataItem.percent < 90 ? '#1da7fe' : '#FF0000',
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
                                

                            }
                        }
                    },
                        {
<<<<<<< HEAD
                        value:100-this.dataItem, 
=======
                        value:100-this.dataItem.percent, 
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
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
<<<<<<< HEAD
    }
  },
  computed: { 
  },
  methods:{
      redom(id){
          this.chart = echarts.init(document.getElementById(id));
          this.chart.setOption(this.option);
=======
          this.chart.setOption(option);
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
      }
  },
  mounted() {
        this.$nextTick(echarts_resize(this.idName,this))
  },
  components:{
  }
}
</script>

<style lang="less" scoped>
.scenic{
        text-align: center;
        color: white;
        width:100%;
        height: 1.2rem;
        bottom:0;
        position: absolute;
    }
.b2{
    height:100%;
    width:100%;
    position:relative;
    span{
        position:absolute;
        top:50%;
        left:50%;
        color:#1da7fe;
        transform: translate(-50%,-50%);
        font-size:.8rem;
<<<<<<< HEAD
=======
        &.fontRed{
                color:red;
            }
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
    }
    .pieB2{
        height:100%;
        width:100%;
        position:absolute;
    }
    .circle{
        height: auto;
        width:100/223*100%;
        text-align: center;
        position:absolute;
        top:50.8%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .text{
        width:100%;
        position:absolute;
        right:5px;
        top:80%;
        text-align: right ;
        text-align: center;
        // transform: translateX(-50%);
        font{
            margin-left:.6rem;
            color:#1da7fe;
            font-size:1rem;
<<<<<<< HEAD
=======
            
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
        }
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    } 
}

</style>