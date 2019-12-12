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