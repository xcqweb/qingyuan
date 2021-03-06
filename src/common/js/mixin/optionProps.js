/**
 * 
 * @authors Rico Wang
 * @date   2018-01-24 09:00:04
 */

import Bus from '@/common/js/bus'

let optionProps =  {
    props:{
    	updatePlace:{
    		type:Object,
    		default:function(){
    			return {place:"全部",turist:"全部"}
    		}
    	},
    	update:{
      		type:Object,
    		default:function(){
    			return {begin:['2018','02','02'],end:['2018','02','03']}
    		}
    	},
    	upday:{
    		type:Number,
    		default:0
    	},
    	hotelChose:{
    		type:String,
    		default:'全部'
    	},
    	slectType:{
    		type:Number,
    		default:1
    	}
    },
}
export default optionProps