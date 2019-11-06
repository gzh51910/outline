import Vue from 'vue';
// 1. 引入VueRouter
import VueRouter from 'vue-router'

// 2. 使用（安装）vue-router
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import Mine from '../pages/Mine.vue';
import Cart from '../pages/Cart.vue';
import NotFound from '../pages/NotFound.vue';

// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history',//hash(默认)，history
    // 配置参数
    routes: [
        // 当浏览器地址为/home时，显示Home组件的内容（显示在<router-view/>组件中）
        {
            path: '/home',
            component: Home
        },
        {
            path:'/',
            redirect:'/home',
            // component:Home
        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/cart',
            component: Cart
        },
        

        // 404页面
        {
            path:'*',
            component:NotFound
        }
    ]
});

// 4.导出router实例，并把router实例注入到vue实例中
export default router;
