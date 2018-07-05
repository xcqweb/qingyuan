


import 'babel-polyfill'  //es6
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/index.js'
import Rw from '@/common/js/until/index'
import instance from '@/http'
import clickOutside from '@/common/js/directives/clickOutside'
Vue.directive('clickOutside',clickOutside)
Vue.directive('echarts', require('./common/js/directives/vDirechartsE.js'));
Vue.prototype.$axios = instance; 
Vue.prototype.$Rw = Rw;
Vue.config.productionTip = false
Vue.config.devtools = true


window.API_URL = "http://120.55.190.57:8081"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
