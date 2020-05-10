import Vue from 'vue';
import Vuex from 'vuex'
import user from './modules/user'
//使用
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count ++,
        decrement: state => state.count --,
    }
})

export default store