// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/index.js'
import Rw from '@/common/js/until/index'
import instance from '@/http'

Vue.directive('echarts', require('./common/js/directives/vDirechartsE.js'));
Vue.prototype.$axios = instance; 
Vue.prototype.$Rw = Rw;
Vue.config.productionTip = false
Vue.config.devtools = true
//旅游局
// var API_URL = "http://125.91.215.236:81"
//测试
var API_URL = "http://120.55.190.57:8081"
//var API_URL = "http://localhost:8081"
//var API_URL1 = "http://localhost"
window.API_URL = API_URL
if( API_URL === "http://120.55.190.57"){
//window.API_LOGIN =  `${API_URL}/login`;
} else{
//window.API_LOGIN =  `${API_URL1}/login`;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
