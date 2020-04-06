import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/city',
        name: 'City',
        component: () =>
            import ('../components/city/City.vue')
    },
    {
        path: '/details',
        name: 'Details',
        component: () =>
            import ('../components/details/Detail.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router