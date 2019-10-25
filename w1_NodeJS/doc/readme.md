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
* 接收前端传入的参数
    * url参数       req.query
    * 动态路由      req.params
    * 请求体参数    req.body

### 知识点
* 路由模块化
    * 利用commonJS规范把路由分离到单独的文件中
    * 利用中间件把所有模块组合成一个完成的应用
* Promise对象
    * 状态
        * Pending   初始状态
        * Resolved  成功状态
        * Rejected  失败状态
        > 状态只能从Pending改成Resolved或从Pending改成Rejected
    * 应用场景
        * 解决回调地狱
        * 方法的封装
    * ES7的async & await
        * await 用于等待Promise对象的返回结果
            > await不能单独使用，必须放在async函数中
        * async 是函数定义的关键字，利用async定义的函数会返回一个Promise对象
            > async函数中的返回值，就是promise状态为Resolved时的值
        >让我们以同步的代码实现异步编程

## day1-4

### 复习
* 路由模块化
    * CommonJS
    * 中间件：express.Router()
* express中间件
    * 内置
        * express.static()
        * express.json()        
        * express.urlencoded()
        * express.Router()
    * 自定义中间件
        * 是一个函数，格式：`function(req,res,next){}`
    * 第三方中间
        * body-parser
        * mysql
* mySQL
    * 如何在nodejs中使用mysql
        * 通过连接对象
        * 通过连接池
    * sql语句的编写
* Promise
    * async
    * await
```js
    function getData(url,callback){
        let data;
        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            data = xhr.responseText;

            callback(data)
        }
        xhr.open('get',url,true);
        xhr.send();

        return data;
    }

    let data = getData('/goods/123');
    console.log(data);//undefined

    // 利用回调函数来获取异步请求的数据
    getData('/goods/10086',function(data){
        console.log(data)
    });


    // 利用Promise改造
    function getData(url){
        return new Promise((resolve,reject)=>{

            let data;
            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                data = xhr.responseText;
    
                resolve(data)
            }
            xhr.open('get',url,true);
            xhr.send();
        })
    }

    getData('/goods/10086').then(data=>{
        console.log(data)
    })

    (async function(){
       let data = await getData('/goods/10086')
    })();

```
    
### 知识点
* 跨域解决方案
    * 为什么会存在跨域: 安全性问题（一切的根源：js是一门客户端语言）
    * 解决方案
        * jsonp  json with padding
            * 步骤
                1. 创建全局函数
                2. 利用script标签发起请求，并发送全局函数名
                3. 后端接收全局函数名，并返回函数执行的js代码，顺便出入数据
            * 缺点
                * 只能get请求
                * 不是一个ajax请求
        * CORS   Cross Origin Resource Sharing
            * 一个真正的ajax跨域请求方案
            * 操作步骤
                1. 设置响应头
                   * Access-Control-Allow-Origin
                   * Access-Control-Allow-Headers
                   * Access-Control-Allow-Methods
                2. 处理复杂跨域中的OPTIONS请求
        * 服务器代理
            * 目标服务器有接口：代理
            * 目标服务器没有接口：爬
                * 会分析html结构
                * 会使用工具

* 页面渲染方式
    * 客户端渲染（BSR）：前后端分离
        * 后端：编写数据接口
        * 前端：发起ajax请求，拿到数据后，遍历生成html结构
        * 优点
            * 与用户的交互感更强
            * 用户体验更好
            * 开发更灵活
        * 请求过程
            1. 输入地址，返回index.html
            2. 解析html，返现script
            3. 请求服务器，返回js代码
            4. 发起ajax请求，返回数据
            5. 解析数据，生成html结构

    * 服务端渲染（SSR）：前后端不分离
        * 后端：生成html结构并响应到前端
        * 优点
            * SEO
            * 速度更快
        * 请求过程
            1. 输入地址，返回index.html
            2. 由于所有的html结构已经在服务器生成完毕，浏览器解析html结构

## day1-5

### 复习
* 跨域解决方案
    * jsonp
        * script标签
        * 全局函数
        * 响应js代码
    * CORS
        * 响应头
        * 简单跨域
        * 复杂跨域
    * 服务器代理
        * 服务器有接口：http-proxy-middleware
        * 服务器没接口: request & cheerio
* BSR与SSR
* 爬虫

### 知识点
* fs
    * fs.readFile()/fs.readFileSync()
    * fs.writeFile()/fs.writeFileSync()
    * fs.appendFile()/fs.appendFileSync()
* 大文件的读取与写入：分多次完成文件的读写操作
    * stream文件流：文件的液体状态
    * 读取流（以流的方式读取文件内容）
        * fs.createReadStream(filepath)
    * 写入流
    * 管道流
```js
    gulp.task('compileSass',()=>{
        gulp.src('./src/sass/home.scss')   //返回一个读取流
        .pipe(sass())
        .pipe(rename())
        .pipe(gulp.dist('./dist'))          // gulp.dist()返回一个写入流
    })
```

* http/https    短连接（请求服务器并返回后，与服务器就断开连接）
* webSocket     长连接（与服务器连接后不会断开）
