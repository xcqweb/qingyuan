<style lang="less" scoped>
    .qylable{
        min-width: 10%;
        height:1.8rem;
        line-height: 1.8rem;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        font-size: 13px;
    }
    .jqlable{
        min-width: 10%;
        height:1.8rem;
        line-height: 1.8rem;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        left: 38.5%;
        font-size: 13px;
    }
    .tabList{
        position: relative;
        font-size: 1.3rem;
        color:white;
    }
    .row{
        .oneSelection{
            left: 10%;
            width: 18%;
        }
        .twoSelection{
            width:59%;
            right: 0;
        }
    }
</style>
<template>
        <div class="tabList">
                <div class="qylable">区域：</div>
                <sleckte 
                :selectList="qyselectlist" 
                v-on:listenAtparent="catchmsg1" 
                class="oneSelection"
                ></sleckte>
                <div class="jqlable">景区：</div>
                <sleckte 
                :selectList="jqselectlist" 
                v-on:listenAtparent="catchmsg2" 
                class="twoSelection"
                ></sleckte>
        </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import sleckte from '@/components/commonui/dropdown/dropdown-menu.vue';

export default {
    props:[''],
    name: 'dabouleSelect',
    components:{sleckte},
    mixins:[],
        data () {
            return {
                place:'连州地下河',
                cutoverImg:require('../../../assets/切换.png'),
                qyselectlist:{
                    title:'全部 ',
                    selectStatus:false,
                    place:[
                        "全部","清城","清新","佛冈","英德","连州","连南","连山","阳山"
                    ]
                },
                startData:['全部','飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                cityData:['全部','飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                 updateData:{
                    palce:'全部',
                    turist:'全部',
                },
            }
        },
    computed: { 
        ...mapGetters({
            comment:'version/comment',
            inItems: 'version/inItems',
          }),
         jqselectlist:function(){
            if(this.cityData === undefined){
                this.cityData = this.startData;
            }
            
            return {
                width:'38%',
                left:'48%',
                title:this.cityData[0],
                selectStatus:false,
                place:this.cityData,
            }
        }
    },
    watch:{
    },
    methods: {
            //一级下拉框下拉事件
        catchmsg1(data){
            this.updateData ={
                place:data,
                turist:this.updateData.turist
            }
           this.cityData = this.switch(data);
           //将所选城市传到父组件
           this.$emit('listenDoubleSelection',this.updateData);
        },
           //二级下拉框选择事件
        catchmsg2(data){
            this.updateData ={
                place:this.updateData.place,
                turist:data,
            }
            //将所选城市传到父组件
            this.$emit('listenDoubleSelection',this.updateData);
        },
        switch(val){
            const  cityData = {
               "全部":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区',
                            '太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',
                            '观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居',
                            '峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠',
                            '清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖',
                            '油岭瑶寨','瑶族舞曲实景演出','云海花谷',
                            '大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田',
                            '北山古寺','鱼水旅游风景区','龙凤温泉'
                ],
                "清城":["全部",'飞霞风景名胜区','牛鱼嘴原始生态风景区','天子山瀑布风景区','白庙渔村','飞来寺','美林湖及大家元摩天轮片区'],
                "清新":["全部",'太和古洞旅游区','笔架山度假区','安庆村','清泉湾生态旅游度假区','金龙洞','九牛洞村',],
                "佛冈":["全部",'观音山王山寺','田野绿世界','熹乐谷','金龟泉生态度假村','上岳古民居'],
                "英德":["全部",'峰林胜境景区','英德老虎谷暗河漂流','九龙小镇','铁溪小镇','仙湖温泉旅游度假区','浈阳坊旅游小镇','大樟沙滩度假村','云水谣','彭家祠'],
                "连州":["全部",'清远市连州福山景区','大东山温泉度假区','李屋村','潭岭天湖'],
                "连南":["全部",'油岭瑶寨','瑶族舞曲实景演出','云海花谷'],
                "连山":["全部",'大旭山瀑布群旅游景区','皇后山','鹰扬关景区','雾山梯田'],
                "阳山":["全部",'北山古寺','鱼水旅游风景区','龙凤温泉'],
            }
            return cityData[val]
        },              
    },
    mounted(){

    }
}
</script>

