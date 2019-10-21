# NodeJS

## day1-1

## 复习二阶段内容
* 模块化
    框架                规范         区别
    * require.js        AMD         异步        前端
    * sea.js            CMD         异步        前端
    * nodejs            CommonJS    同步        后端
    * ECMAScript2015    ESModule    同步        前端

    ```js
        let jq = require(['jquery'],($)=>{

        });
        console.log(jq);//undefined


        let http = require('http');
        console.log(http);
    ```
* CommonJS规范模块分类
    * 内置模块：NodeJS内部模块
        > 引入方式：require(模块名))
    * 自定义模块
        * 定义：module.exports
        * 引用：require(相对路径)
    * 第三模块

* 静态资源服务器
    * Apache
    * 服务器
        * response  响应（服务器给客户端的内容）
    * 客户端
        * request   请求（客户端给服务器的内容）
    ```html
        <script src="http://www.baidu.com/js/laoxie.js">
        <img src="xxx">
        <link href="">
        ajax
    ```
    * mime类型
* npm
    * 全局安装
    * 项目安装
* 文件的操作:fs模块
    * 读取：
        * fs.readFile()
        * fs.readFileSync()
    * 写入
    * 全局变量
        * __dirname ： 当前文件所在目录
        * __filename ： 当前文件地址