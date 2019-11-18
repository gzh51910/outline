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
import Goods from '../pages/Goods.vue';
import List from '../pages/List.vue';
import NotFound from '../pages/NotFound.vue';


// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history',//hash(默认)，history  （注意：history路由需要服务器的配置）
    // 配置参数
    routes: [
        // 当浏览器地址为/home时，显示Home组件的内容（显示在<router-view/>组件中）
        {
            name:'home',
            path: '/home',
            component: Home
        },
        {
            name:'list',
            path:'/list',
            component:List
        },

        // 动态路由
        {
            name:'goods',
            path:'/goods/:id',
            component:Goods,
            // beforeEnter(to,from,next){console.log('Goods.beforeEnter')
            //     next();
            // }
        },
        {
            path:'/',
            redirect:'/home',
            // component:Home
        },
        {
            name:'reg',
            path: '/reg',
            component: Reg
        },
        {
            name:'login',
            path: '/login',
            component: Login
        },
        {
            name:'mine',
            path: '/mine',
            component: Mine,
            meta: { requiresAuth: true }
        },
        {
            name:'cart',
            path: '/cart',
            component: Cart,
            meta: { requiresAuth: true }
        },
        

        // 404页面
        {
            name:'404',
            path:'*',
            component:NotFound
        }
    ]
});

console.log('router',router)

// 全局路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        // 获取token
        // let Authorization = localStorage.getItem('Authorization');
        let $store = router.app.$store
        let Authorization = $store.state.common.user.Authorization;
        if(Authorization){
            // 登录则放行
            next();

            // 发送校验请求
            router.app.$axios.get('http://localhost:1910/verify',{
                headers:{
                    Authorization
                }
            }).then(({data})=>{
                console.log('校验结果：',data)
                if(data.status === 0){
                    $store.commit('logout');
                    next({
                        path:'/login',
                        query:{
                            redirectUrl:to.fullPath
                        }
                    })
                }
            })
        }else{
            // 否则跳到登录页面
            // router.push('/login')
            next({
                path:'/login',
                query:{
                    redirectUrl:to.fullPath
                }
            })
        }
    }else{
        next();
    }
    console.log('全局.beforeEach');
})

// router.afterEach((to,from)=>{
//     console.log('全局.afterEach')
// })

// 4.导出router实例，并把router实例注入到vue实例中
export default router;
