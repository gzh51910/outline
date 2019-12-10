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