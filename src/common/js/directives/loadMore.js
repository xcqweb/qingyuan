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
		                area:"全部",
		                name:"全部",
		                pageId:num++,
		                source:'全部',
		            }
		       		vnode.context.getResponse(paramsObj)
        	}
       },300)
    }
    
}