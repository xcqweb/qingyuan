/**
 * 
 * @authors Rico Wang
 * @date    2017-10-24 14:54:43
 */
let midScreen =  {

    methods:{
         reCom(item){
            let name = item.name;
           item.name = ''; 
           setTimeout(function(){  item.name =  name;},0)
           return item
       },
        midBig:function(item){
            item.icon = false;  
            item.styleObject = {
                position:'fixed',
                top:'50%',
                left:'50%',
                height:'90%',
                width:'60%',
                zIndex:'99',
                transform: 'scale(1) translate(-50%,-50%)',
                border:'1200px solid rgba(0, 0, 0, .5)',
                backgroundClip:' padding-box',
                overflow: 'hidden',
            }
            this.reCom(item)
        },
        closeMid:function(item){
            item.icon = true;  
            item.styleObject = {
            }
           this.reCom(item)
        },
    },
    mounted () {

    }
}
export default midScreen
// 数据
// {name:'D3',id:'three',index:3,styleObject:{},icon:true,time:1800,show:false,title:'最新舆论'},
//HTML
/*{ <template>
    <div class="box" onselectstart="return false;" style="-moz-user-select:none;">
        <div class="tabList item">
            <div class="border">
                <div class="qylable">区域：</div>
                <sleckte 
                :selectList="qyselectlist" 
                v-on:listenAtparent="catchmsg1"
                ></sleckte>
                <div class="jqlable">景区：</div>
                <sleckte 
                :selectList="jqselectlist" 
                v-on:listenAtparent="catchmsg2"
                ></sleckte>
            </div>
        </div>
        <div class="leftScope" >
            <div class="item"
                v-for='item in leftComponents' 
        >>>        @dblclick='midBig(item)'  
        >>>   v-bind:style="item.styleObject"   
                :class="item.id">
                <h1>{{item.title}}</h1>
        >>>  <span @click='cutover(item,leftComponents)' v-if="item.icon">
                    <img :src="cutoverImg"/>
                </span>
        >>>  <span class="close" @click='closeMid(item)' v-if="!item.icon"></span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
                    :commentProp = 'comment'
                    ></componet>
                </div>
            </div>
        </div>
        <div class="rightScope">
            <div class="item" 
                v-for='item in rightComponents' 
        >>>       @dblclick='midBig(item)'  
        >>>v-bind:style="item.styleObject"  
                :class="item.id">
                <h1>{{item.title}}</h1>
        >>>        <span @click='cutover(item,rightComponents)' v-if="item.icon">
                    <img :src="cutoverImg"/>
                </span>
        >>> <span class="close" @click='closeMid(item)' v-if="!item.icon"></span>
                <div class="border" v-if='item.show'>
                    <componet
                    :is='item.name' 
                    :key="item.id"  
                    :place='updateData.turist' 
                    :commentProp = 'comment' 
                    :placeAttractionsProps = 'updateData.turist' 
                    :inItemsProps = 'inItems' 
                    ></componet>
                </div>
            </div>
        </div>
    </div>
</template> }*/