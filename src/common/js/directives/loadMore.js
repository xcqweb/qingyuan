import _ from 'lodash'
export default {
    // 指令的定义
    update: function (el,binding,vnode) {
    	//默认值
    	var props={
    		event:'scroll'
    	}
    	
    	//注册事件
    	 el.addEventListener(props.event, function(event) {
            loadMore(event, el,vnode);
        });
        
        
       var  loadMore =  _.debounce( (e,el,vnode) => {//去抖函数
        	if(e.target.scrollTop>360){
        		let num=1;
		       			let paramsObj = {
		                area:vnode.context.updatePlace.place,
		                name:vnode.context.updatePlace.turist,
		                pageId:num++,
		                source:'全部',
		                commentType:vnode.context.comType,
		            }
		       		vnode.context.getResponse(paramsObj)
        	}
       },500)
    }
    
}