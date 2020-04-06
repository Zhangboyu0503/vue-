import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let abc = '北京';
abc = localStorage.city
export default new Vuex.Store({
    state: {
        cityname: abc
    },
    mutations: {
        change(state, city) {
            state.cityname = city
            localStorage.city = city
        }
    },
    actions: {},
    modules: {}
})