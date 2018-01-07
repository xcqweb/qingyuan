<style lang="less" scoped>
.d9s{
    width:90%;
    height:80%;
    .item{
        width:90%;
        height:54%;
        float: left;
        margin-left:2%;
        position: relative;
    }
    
}
</style>
<template>
    <div class="d9s">
        <div class="item">
            <a3ss 
            class="c211" 
            :idName='"d9ss"' 
            :scenics='""' 
            :rankItems ='rankItems' 
            ></a3ss>
        </div>
    </div>
</template>

<script>
import a3ss from '@/pages/home/showMore/smallComponent/a3ss.vue'
import showMoreData from '@/common/js/mixin/showMoreData.js'

  export default {
    name:'c8s',
    mixins: [showMoreData],
    props:{
        scenics:Array,
        dateIndex:Number,
        conmentPlatformProp:String,
        scenics:Array,
    },
    watch:{
        conmentPlatformProp:function(val){
            let _arr = [];
            if(val ==="全部"){
                _arr =this.items_read;
            }else{
                this.items_read.forEach((item,index)=>{
                    if(item.from === val){
                        _arr.push(item)
                    }
                })
            }
            this.rankItems = _arr;
        },
        scenics:function(val){
            let _arr =[];
            this.items_read.forEach((item,index)=>{
                val.forEach(ite =>{
                    if(item.tourist === ite){
                        _arr.push(item)
                    }
                })
            })
            console.log(this.conmentPlatform)
            this.rankItems = _arr;
        }
    },
    data() {
      return {
        commentSlect:{
            width:'60%',
            left:'60%',
            title:'全部',
            selectStatus:false,
            place:['全部',"携程旅游"]
        },
        dateChose:[
            
        ],
        items_read:[
            {tourist:'飞霞风景名胜区',from:'d',userName:'快乐***',comment:'自驾游直接开车到飞霞风景区大门，山路弯曲，小心驾驶，景区内有停车，停车费15元，景点门票60元，如果网上预订50元，包来回渡船。景区游人较少，可能宣传力度不够。有免费上山中巴，直到藏霞洞。因为山不高，我们还是选择步行，如果坐车，少看好多景点，景区环境清幽，空气宜人，是清静休闲的好去处，藏霞洞、飞霞洞保留较多古迹，不过原来三教合一的地方，现在好象全被道教占领，连佛像也被道教画像遮盖，不见和尙，只有道士，道士还是较友善，不过我们没烧香、没捐钱，免烦事。一般2-3小时内可游完。中午可在景点门口食河鲜，自己到市场(在一部大船上)购买，价钱还能接受，另外到船家加工，加工费约50左右，味道不错。有好多船家拉客去飞来寺，去飞来寺约8海里，但船费较贵，300-400元一船，如果人多还可接受，人少就难接受了。我们人少，感觉太贵，没去。',creatTime:'2018/1/4 上午12:00:00'},
            {tourist:'飞霞风景名胜区',from:'携程旅游',userName:'300***',comment:'有几个景点都成危房。比几年前差很远了，山上豆腐花都没人卖了，星期天过去，都尚且很冷清，自然风光还可以，道观还保留不错的特色。主要是景区服务跟不上，观光车司机不等人做好就开车，山上找不到餐厅，要吃饭只能在入口的河鲜市场吃，但出来后不知还要不要买票',creatTime:'2017/12/24 上午12:00:00'},
            {tourist:'天子山瀑布风景区',from:'携程旅游',userName:'138***',comment:'自驾方便快捷，休闲运动，空气清新，有特色服务，吃饭方便，美食丰富。',creatTime:'2017/12/13 上午12:00:00'},
            {tourist:'天子山瀑布风景区',from:'携程旅游',userName:'_U4***',comment:'天后瀑布是亮点，天子瀑布有比较陡峭的楼梯一段上去，瀑布景色比不上天后瀑布。',creatTime:'2017/12/9 上午12:00:00'},

        ],
        rankItems:[
            {tourist:'飞霞风景名胜区',from:'d',userName:'快乐***',comment:'自驾游直接开车到飞霞风景区大门，山路弯曲，小心驾驶，景区内有停车，停车费15元，景点门票60元，如果网上预订50元，包来回渡船。景区游人较少，可能宣传力度不够。有免费上山中巴，直到藏霞洞。因为山不高，我们还是选择步行，如果坐车，少看好多景点，景区环境清幽，空气宜人，是清静休闲的好去处，藏霞洞、飞霞洞保留较多古迹，不过原来三教合一的地方，现在好象全被道教占领，连佛像也被道教画像遮盖，不见和尙，只有道士，道士还是较友善，不过我们没烧香、没捐钱，免烦事。一般2-3小时内可游完。中午可在景点门口食河鲜，自己到市场(在一部大船上)购买，价钱还能接受，另外到船家加工，加工费约50左右，味道不错。有好多船家拉客去飞来寺，去飞来寺约8海里，但船费较贵，300-400元一船，如果人多还可接受，人少就难接受了。我们人少，感觉太贵，没去。',creatTime:'2018/1/4 上午12:00:00'},
            {tourist:'飞霞风景名胜区',from:'携程旅游',userName:'300***',comment:'有几个景点都成危房。比几年前差很远了，山上豆腐花都没人卖了，星期天过去，都尚且很冷清，自然风光还可以，道观还保留不错的特色。主要是景区服务跟不上，观光车司机不等人做好就开车，山上找不到餐厅，要吃饭只能在入口的河鲜市场吃，但出来后不知还要不要买票',creatTime:'2017/12/24 上午12:00:00'},
            {tourist:'天子山瀑布风景区',from:'携程旅游',userName:'138***',comment:'自驾方便快捷，休闲运动，空气清新，有特色服务，吃饭方便，美食丰富。',creatTime:'2017/12/13 上午12:00:00'},
            {tourist:'天子山瀑布风景区',from:'携程旅游',userName:'_U4***',comment:'天后瀑布是亮点，天子瀑布有比较陡峭的楼梯一段上去，瀑布景色比不上天后瀑布。',creatTime:'2017/12/9 上午12:00:00'},

        ]
      }
    },
    // props: {
    //     mainContent: {
    //         type: String,
    //         default: function () {
    //                 return 'D2S'
    //         }
    //     },
    // },
    components: {
        a3ss,
    },
    methods:{

    },
    mounted(){
        this.$emit('showDateFormatChose',this.dateChose);
        this.$emit('showCommentSlect',this.commentSlect);
        
    }   
  }
</script>

