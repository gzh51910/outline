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

* 静态资源服务器
    * Apache
    * 服务器
        * response  响应（服务器给客户端的内容）
    * 客户端
        * request   请求（客户端给服务器的内容）
