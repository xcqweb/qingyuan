/**
 * Created by zhuzhiyang aon 2016/12/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import version from './modules/version'
// import post from './modules/post'
// import tag from './modules/tag'
import user from './modules/user'
// import message from './modules/message'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state={
}

export default new Vuex.Store({
    strict: debug,
    state,
    modules: {

    global: {
        namespaced: true,
        ...global
    },
    version: {
        namespaced: true,
        ...version
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
