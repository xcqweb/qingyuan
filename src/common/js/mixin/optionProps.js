/**
 * 
 * @authors Rico Wang
 * @date   2018-01-24 09:00:04
 */
let optionProps =  {
    //props: ['updatePlace','update','upday'],
    props:{
    	updatePlace:{
    		type:Object,
    		default:{place:"全部",turist:"全部"}
    	},
    	update:{
    		type:Object,
    		default:{begin:['2018','02','02'],end:['2018','02','03']}
    	},
    	upday:{
    		type:Number,
    		default:0
    	}
    },
//  watch:{
//      touristProp:{
//          handler:function(val, oldVal){
//             this.watchTouristFn&&this.watchTouristFn(this.nameToCode[val])
//          },
//          deep:true,
//      },
//      scienceProp:{
//      	handler:function(val, oldVal){
//             this.watchTouristFn&&this.watchTouristFn(this.nameToCode[val])
//          },
//          deep:true,
//      }
//  },
    data () {
        return {
        	
        };
    },
    methods:{
        
    },
    created(){
    },
    mounted () {
    },
    components:{
    }
}
export default optionProps