import Vue from 'vue'
import Router from './vue-router'

Vue.use(Router)


export default new Router({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:()=>import('./view/home.vue')
        },
        {
            path:'/about',
            component:()=>import('./view/about.vue')
        }
    ]
})