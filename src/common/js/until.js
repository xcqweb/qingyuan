let echarts_id= '';
let _self =null;
let sheet={
    //给数字添加标点
    addPoint:function(nub){
        var n= nub;
        var m =n +'',
        len= m.length
        if (len>3) {
        var aa=len-3
        var bb=m.slice(aa,len)
        var cc=m.slice(0,aa)
        m=cc+','+bb
        }
        return m
    },
    //封装echarts随容器自适应
    echartRL:function(echart_id,_self,redom=false){
        var resizeTimer = null;
        if (_self.redom) {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
        }
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(function() {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
            }, 330);
        },false);
    },
    echartL:function(echart_id,_self,redom=false){
        var resizeTimer = null;
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(function() {
            if(_self.chart){
                _self.chart.dispose();
            }
            _self.redom(echart_id);
            }, 330);
        },false);
    }
}
export default sheet