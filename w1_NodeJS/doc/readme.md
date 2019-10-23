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


## day1-2

### 复习
* 模块化开发
    *   规范      框架            区别              定义与引入
        AMD         require.js      前端+异步       define + require()
        CMD         sea.js          前端+异步
        CommonJS    node.js         后端+同步       module.exports + require()
        ESModule    ECMAScript      前端+同步
    * CommonJS模块分类
        * 内置模块
        * 自定义模块
            * 定义  module.exports/exports
            * 引入  require()
        * 第三方模块
            * 安装npm
        * 文件模块
            > 一般指json文件
* 服务器
    * 客户端与服务器
        * 前端JS = ECMAScript+BOM+DOM
        * 后端JS = ECMAScript+I/O
    * 一个请求的细节
        * 请求request
        * 响应response
            * Content-Type
    * 静态资源服务器
        * http  创建一个服务器
        * url   处理请求地址
        * path  处理文件地址
        * fs    文件处理
    * 全局变量
        * __dirname     当前文件所在的目录地址
        * __filename    当前文件所在地址

### 知识点
* 第三方模块
    * 安装： npm
        * 全局安装：为了在命令行使用
        * 项目安装：为了在代码中引用require
    * express
        * 中间件Middleware
            * 定义：在到达目的前进行操作
            * 使用: `app.use(middleware)`
            * 分类
                * 内置中间
                    * express.static()
                * 自定义中间
                    > 中间件是一个函数，参数为request,response,next()
                    * request 请求对象，保存客户端信息
                    * response 响应对象，保存服务端信息
                    * next()：是否进入下一个中间件的方法

        ```js
            app.use(express.static('./'))
        ```

* git操作
    1. 得到仓库地址url (https or ssh)
    2. 克隆：`git clone <url>`
    3. 更新：`git pull origin master` （每天操作）
* 接口编写(路由编写)
    * 接口地址
        * 商品
            * 商品列表
            * 商品详情
        * 注册
            * 添加一个用户
        * 登录
            * 
    * RESTful规范接口
        * 根据请求类型不同定义不同的接口
            * get           查
            * post          增
            * patch/put     改
            * delete        删
        * 根据不同的地址实现不同的接口
            * get       /goods          所有商品
            * post      /goods          增加商品
            * get       /goods/:id      单个商品
            * delete    /goods/:id      删除商品
            * patch/put /goods/:id      修改商品（patch部分修改，put完全修改）
    * 接口测试工具
        * postman
    * 接收参数
        * 动态路由：request.params
        * url参数（?后面的参数）：req.query
        * 请求体参数（post,patch）：req.body
            > 必须借助第三方中间件来获取

## day1-3

### 复习
* 中间件
    * 定义
    * 使用
* RESTful规范
    * 根据请求类型不同定义不同的接口
    * 根据不同的地址实现不同的接口
* 编写接口
    * 利用模块化思想实现接口与路由的编写
* 接收前端出入的参数
    * url参数       req.query
    * 动态路由      req.params
    * 请求体参数    req.body

### 知识点
* 路由模块化
    * 利用commonJS规范把路由分离到单独的文件中
    * 利用中间件把所有模块组合成一个完成的应用