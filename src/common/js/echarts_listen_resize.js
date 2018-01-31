<<<<<<< HEAD
 //封装echarts随容器自适应
 const echarts_id= '';
 const _self =null;
 const echarts_listen_resize=function a(echart_id,_self) {
        var resizeTimer = null;
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(function() {
            _self.redom(echart_id);
          }, 330);
        },false);
      }

=======
 //封装echarts随容器自适应
 const echarts_id= '';
 const _self =null;
 const echarts_listen_resize=function a(echart_id,_self) {
        var resizeTimer = null;
        //同一页面多个resize事件，如果用window.resize容易冲突
        window.addEventListener('resize',function() {
            //解决resize,触发两次，使用setTimeout
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(function() {
            _self.redom(echart_id);
          }, 330);
        },false);
      }

>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
export default echarts_listen_resize