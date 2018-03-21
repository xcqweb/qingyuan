/**
 * Created by zhuzhiyang aon 2016/12/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import hotMap from './modules/hotMap'
import toast from './modules/toast'
import version from './modules/version'
// import post from './modules/post'
// import tag from './modules/tag'
import user from './modules/user'
// import message from './modules/message'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'



export default new Vuex.Store({
    strict: debug,
    modules: {
    global: {
        namespaced: true,
        ...global
    },
    version: {
        namespaced: true,
        ...version
    },
    hotMap:{
    	namespaced: true,
        ...hotMap
    },
    toast:{
    	namespaced: true,
        ...toast
    },
    user: {
        namespaced: true,
        ...user
    },
    // post: {
    //   namespaced: true,
    //   ...post
    // },
    // tag: {
    //   namespaced: true,
    //   ...tag
    // },
    // message: {
    //   namespaced: true,
    //   ...message
    // }
    }
})
