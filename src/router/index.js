import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login'
import home from '../views/home'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/home',
            component: home
        }
    ]
})