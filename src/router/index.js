import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
const NotFound =resolve => require(['@/pages/404.vue'], resolve);
const homepage = resolve => {require.ensure(['@/pages/home/tabPage/homepage.vue'], () => {resolve(require('@/pages/home/tabPage/homepage.vue'))})}

 const Precision = resolve => {require.ensure(['@/pages/home/tabPage/precision.vue'], () => {resolve(require('@/pages/home/tabPage/precision.vue'))})}
   const prodcut = resolve => {require.ensure(['@/pages/home/tabPage/prodcut.vue'], () => {resolve(require('@/pages/home/tabPage/prodcut.vue'))})}
  
  //应急指挥
const souceShow = resolve => {require.ensure(['@/pages/home/tabPage/souceShow.vue'], () => {resolve(require('@/pages/home/tabPage/souceShow.vue'))})}
const homemain = resolve => {require.ensure(['@/pages/homemain.vue'], () => {resolve(require('@/pages/homemain.vue'))})}
// const loginmain = resolve => {require.ensure(['@/pages/loginmain.vue'], () => {resolve(require('@/pages/loginmain.vue'))})}

//舆情分析
const publicOpinion = resolve => {require.ensure(['@/pages/home/tabPage/publicOpinion.vue'], () => {resolve(require('@/pages/home/tabPage/publicOpinion.vue'))})}

//游客画像
const Portrait = resolve => {require.ensure(['@/pages/home/tabPage/Portrait.vue'], () => {resolve(require('@/pages/home/tabPage/Portrait.vue'))})}

const video = resolve => {require.ensure(['@/pages/home/tabPage/video.vue'], () => {resolve(require('@/pages/home/tabPage/video.vue'))})}


const login =resolve => require(['@/pages/login/loginHome.vue'], resolve);

Vue.use(Router)
const router= new Router({
  routes: [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
       {
           path: '/login',
           component: login,
           name: 'loginHome',
       },
     {
        path: '/',
        component: homemain,
        name: '',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '', component: homepage, name: 'homepage' },
            { path: 'Portrait', component: Portrait, name: 'Portrait' },
            { path: 'command', component: souceShow, name: 'command' },
            { path: 'option', component: publicOpinion, name: 'publicOpinion' },
            { path: 'video', component: video, name: 'video' },
        ]
    },
  ]
})
//注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
  //获取store里面的token
  // let token = window.localStorage.getItem('token');
  
  //判断要去的路由有没有requiresAuth
//   if(to.meta.requiresAuth){
//     if(token){
//       next();
//     }else{
//       next({
//         path: '/login',
//         // query: {redirect: to.fullPath}   将跳转的路由path作为参数，登录成功后跳转到该路由
//       });
//     }
//   }else{
//     next();//如果无需token,那么随它去吧
//   }
// });
export default router