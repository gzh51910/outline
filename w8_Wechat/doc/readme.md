# 微信开发
* 公众号
* 小程序
* 小游戏

## day8-1 
* 文件类型
    * json 配置文件
    * wxss  样式文件
    * wxml  布局文件
    * js    逻辑文件
    * wxs   模块化文件
* 种类
    * 全局通用
    * 页面级别

* 切后台
* 导航
    * 声明式导航
        * `<navigator/>`
    * 编程式导航
        * wx.navigateTo
* 页面类型
    * 普通页面
        * wx.navigateTo
        * wx.redirectTo
    * tabar页面
        * wx.switchTab
        * wx.reLaunch


## day8-2

* 防抖与节流
    > 为了优化页面性能
    * 防抖：只执行最后一次，忽略之前的所有操作
        * 百度搜索建议
        * js动画
    * 节流：执行第一次，忽略后面所有操作
        * 滚动加载

debugger;



## day8-2
* 小程序开发流程
    1. 模拟器
    2. 真机测试（需要项目成员权限）
    3. 体验测试（需要体验成员权限） UAT
    4. 提交审核
    5. 上线

## day8-3
* 开发框架
    * mpvue
        > 基于Vue的小程序开发框架
    * uniapp
        > 基于Vue的app&小程序开发框架

    > 基于Vue的框架来开发小程序，就可以使用Vue的生态（如：VueX, ElementUI,antd...）

    * wePY
    >一款类 Vue 语法的小程序开发框架

## day8-4

### 复习
* PC网站（通过浏览器访问，做浏览器兼容）
* webApp（通过浏览器访问，做平台兼容）
* NativeApp（android&iOS，需要安装应用）
    * ReactNative
    * Weex
* HybridApp（android&iOS，需要安装应用）
* 微信开发
    * 微信小程序
    * 微信公众号
    * 微信小游戏

    ```js

        wx.xxx
    ```


    数据分析 -> 精准营销



### 面试题
* MVC：Model+View+Controller
1. 单向数据绑定原理
    * Model -> View  ：getter&setter
2. 双向数据绑定原理
    * Model -> View  ：getter&setter
    * View  -> Model ：事件

    * 在Vue中使用v-model实现双向数据绑定
        * 如何替代v-model -> v-bind + v-on
        * 如何在组件上使用v-model（如何让组件上的v-model生效）
        ```js
            <input v-model="username">
            <hello v-model="username"/>
            // 等效于<hello v-bind:value="username" v-on:input="username=$event">
            <div><input @input="changeValue"/></div>
            export default {
                props:['value'],
                methods:{
                    changeValue(e){
                        this.$emit('input',e.target.value)
                    }
                }
            }
        ```
3. 路由的原理
    * hash路由原理
        > window下的hashchange（浏览器URL地址中hash值改变时触发）
    * history路由原理（需要服务器的支持）
        > HTML5增强了history的功能
        * back() / forward() / go()             刷新页面
        * state / pushState()/ replaceState()   不刷新页面
* webpack配置
    * output.publicPath
    ```js
        module.exports = {
            output:{
                publicPath:'/'
            }
        }
    ```
4. 项目build后直接打开文件或打包成hybridApp后页面空白
    * js文件路径问题引起的bug

* 面试题准备
    * 熟悉简历
    * 熟悉项目
    * 准备几个bug
    * 准备几个技术难点
    * 准备几个兼容性问题

5. 路由拦截
    * 应用场景：页面权限控制
    * 路由步骤：
    * 路由守卫
        * 全局（router的方法） 
            * beforeEach()          重点
            * afterEach()
        * 路由独享（路由配置）
            * beforeEnter()
        * 组件内（组件生命周期函数）
            * beforeRouteEnter()
            * beforeRouteUpdate()   重点
                * 监听动态路由$route的改变（watch）
            * beforeRouteLeave()
        * 守卫参数
            * to
            * from 
            * next()
6. 请求/响应拦截
    * 框架
        * axios
        * jquery
        * XMLHttpRequest
    * 原理：在请求到达目标前拦截下来
    * 应用场景：
        * 向服务器统一发送某些数据
        * loading
        * 格式化请求返回数据
    ```js
        // 1. 客户端--request-->服务端
        // 2. 服务端--response-->客户端
        axios.get(url).then(res=>{

        })
    ```

7. token令牌
    * 服务器生成与校验
    * 是一个加密后并具有有效期的字符串

8. session
>服务器版cookie

9. sessionStorage、localStorage、cookie的区别
    * 共同点：
        * 都是客户端存储技术
    * 不同点：
        * cookie会自动传到服务器
        * cookie参数
            * expires
            * path
            * domain
            * secure

* 优化
    * 性能优化
        * 减少http请求
            * 合并压缩
            * 按需加载
            * 路由懒加载
            * 精灵图
            * base64编码图片
            * 缓存
        * SSR
        * 服务器压缩
        * 代码规范
    * 用户体验优化UEO
        * loading
        * 图片懒加载
        * 滚动加载
        * 骨架屏
    * 搜索引擎优化SEO（运营）
        * 标签语义化
        * 布局合理性
        * 关键字分布
        * 热搜
        * 友情链接
        * 原创
        * ....

* socket
    * 特点
        * 长连接
        * 无跨域
        * 服务器主动
    * 心跳包

9. 从浏览器输入url地址到页面呈现经历了什么
    1. 缓存解析阶段
        浏览器缓存，系统缓存，路由器缓存

    2. 域名解析阶段
        域名解析成ip地址

    3. 与服务器建立连接阶段
        TCP三次握手

    4. 请求响应阶段
        浏览器发起请求，服务器并响应

    5. 浏览器渲染阶段
        浏览器接收到响应内容并渲染到页面

10. 缓存
    * 存类型
        * 强缓存
            * 状态码200 (from disk cache)
        * 协商缓存
            * 状态码304

11. 事件循环

```js
    console.log(1)
    setTimeout(()=>{
        console.log(2)
    },2000);

    console.log(3)
    for(let i=0;i<1000000000;i++){
        // 花5s
    }
    console.log(4);

    let promise = new Promise((resolve,reject)=>{
        console.log(5);
        setTimeout(()=>{
            resolve(6)
        },1000)
    })
    
    promise.then(res=>{
        console.log(res)
    })
    console.log(10)

    // output: 1->3->4->2
    // 1->3->4->5->10->6->2
```