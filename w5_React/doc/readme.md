# React

## day5-2
* 依赖
    * react
    * react-dom 
* React渲染
    > ReactDOM.render(VNode,target)
* 创建节点（VNode）
    > React.createElement(type,[props],[...children])
* 热更新（自动刷新浏览器）
    > 原理：websocket
* JSX
    > 在js中编写HTML代码，在编译时webpack会通过特定的规则（loader）编译JSX代码到JS
    * 编译规则
        * 尖括号内以html代码规则编译
        * 花括号内以js代码规则编译
    * 关键字不能直接使用
        * class -> className
        * for -> htmlFor
        * ...
    * 多个单词的属性必须使用驼峰形式
        * autofocus -> autoFocus
        * onkeyup -> onKeyUp
        * ....
    * 必须闭合标签
    * {}只能使用js表达式
        * {1+1}
        * {Number('345')}
        * {10>5?'a':'b'}

* 组件
    * 规范
        * 组件必须以首字母大写开头
        * 只能有唯一的顶级标签
    * 分类
        * 函数组件（无状态组件、受控组件、UI组件）
            > 利用函数来定义一个组件，函数必须有返回值
            * 在实际开发过程中尽量使用函数组件，性能更好（因为没有实例化过程）
        * 类组件（状态组件、非受控组件，容器组件）
            > 利用class类创建的组件，继承自React.Component
            * 在类组件中可以使用this、生命周期等特性
            * 只有在render、constructor、生命周期函数中才有this指向，其他自定义的方法默认没有this指向
            * 修改状态：重写一份数据并覆盖原来的数据
                > this.setState()
            * 改变函数this指向
                * fn.bind  改变函数fn的this指向，并返回一个新的函数，多次调用只在第一次生效
        * 组件通讯
            * 父->子：props
                1. 父组件设置子组件的属性，并传递数据
                2. 子组件通过props使用
                    * 函数组件：组件的第一个参数
                    * 类组件：this.props
* 列表渲染
    > 在JSX中不能直接渲染对象，但可以渲染数组，一般列表渲染都是用map方法
* 事件处理
    * this指向的改变
        * bind
            * 初始化时
            * 绑定事件时
        * 箭头函数
            * 定义时
            * 绑定事件时
    * event对象的获取
        * 默认事件处理函数的最后一个参数
    * 传参
        > 
* 获取真实DOM节点
    * ref
        * 回掉函数 `ref={el=>this.el=el}`


## day5-3

### 复习
* JSX(在js代码中写html代码)
    * 规则
        * {}    js规则
        * <>    html规则
            * 组件：首字母大写
    * 限制条件
        * 关键字不能直接使用
        * 多个单词的属性必须使用驼峰形式
        * 必须闭合标签
        * {}内必须为js表达式
* 组件
    > 必须首字母大写，只允许唯一顶级标签
    * 分类
        * 函数组件（无状态组件、受控组件、UI组件）纯函数
        * 类组件（状态组件、非受控组件、容器组件）
            * 状态
            * 生命周函数
            * this
            * render()
### 知识点
* 通讯
    * 父->子：props
        1. 在父组件中定义子组件的属性，并传递数据
        2. 使用
            * 函数组件：第一个参数
            * 类组件：this.props
    * 子->父
        > 利用props传递方法到子组件执行
    * 深层次组件通讯
        * 逐层传递
        * context
            1. 定义Context：`let MyContext = React.createContext()`
            2. 父组件往context中写入共享数据
                ```js
                    <MyContext.Provider value={data}></MyContext.Provider>
                ```
            3. 子组件使用context
                * 类组件
                    ```js
                        SubComponent.contextType = MyContext
                        this.context
                    ```
                * 函数组件
                    ```js
                        <MyContext.Consumer>
                            {
                                context=>{
                                    // context中包含所有共享的数据
                                }
                            }
                        <MyContext.Consumer>
                    ```

* 生命周期（类组件）
    * 阶段
        * Initial：初始化阶段
            * constructor
        * Mounting：已插入真实 DOM
            * componentWillMount（不推荐）
            * componentDidMount
        * Updating：正在被重新渲染
            * componentWillUpdate（不推荐）
            * componentDidUpdate
            > 组件在什么情况下会被刷新：1.props更新，2.state更新
        * Unmounting：已移出真实 DOM
            * componentWillUnmount
    * 特殊生命周期函数
        * componentWillReceiveProps（不推荐）
        * shouldComponentUpdate

* 手动搭建React环境
    * react&react-dom
    * babel
        * 
    * webpack
        * 项目构建工具
            * grunt -> 
            * gulp -> 
                > 基于任务的构建工具，任何的操作都需要手动编写代码来实现
            * webpack
                > 基于配置的构建工具，用户只需要关注配置文件即可
            ```js
                gulp.task('compileJS',()=>{
                    gulp.src('src/js/xxx.js')
                    .pipe(uglify())
                    .pipe(rename())
                    .pipe(gulp.dest('./dist'))
                })
            ```
        * 配置文件：webapck.config.js


## day5-4

### 复习
* 深层次组件
    * 逐层传递
    * context
        1. 创建context: `let MyContext = React.createContext(defaultValue)`
        2. 父组件定义共享的数据
            ```js
                <MyContext.Provider value={data}>
                    // children
                </MyContext.Provider>
        3. 子组件获取数据
            * contextType（只适用于类组件）
            ```js
                // 定义静态属性contextType
                SubComponent.contextType = MyContext
                this.context.data
            ```
            * Consumer
            ```js
                <MyContext.Consumer>
                    {
                        context=>{
                            return 
                        }
                    }
                </MyContent.Consumer>
            ```
* 生命周期函数
    * 初始化阶段
        * constructor
    * 挂载阶段
        * componentDidMount
            > ajax
    * 更新阶段
        * componentDidUpdate
            > 在此慎重修改state，避免死循环
    * 销毁阶段
        * componentWillUnmount
    * 特殊生命周期
        * shouldComponentUpdate
            * 性能优化
* 什么情况下会刷新组件
    * state改变
    * props改变
    * 强制刷新:this.forceUpdate()

* Webpack
    * webpack的工作原理
        * 从入口开始，逐层分析项目下的所有模块与依赖（包含第三方模块、图片、css等等），进项编译处理，并把它们打包成一个或多个文件
    * 手动搭建React环境
        * react&react-dom
        * babel-loader&@bable/core&@babel/preset-react
        * webpack&webpack-cli&webpack-dev-server
    * 配置webpack.config.js
        > commonJS规范的模块
        * entry 入口
        * output 出口
        * loader 加载器(module.rules)
            * babel-loader
        * plugin 插件
            * html-webpack-plugin
        * devServer 测试服务器
            * contentBase
        * mode(使用测试服务器时为development，编译时模式为production)
            * production    生产环境
            * development   开发环境

### 知识点
* ReactRouter4
    > 万物皆组件
    * 内置组件
        * 路由类型
            * `<HashRouter/>`
            * `<BrowserRouter/>`
        * 路由展示
            * `<Route/>`
            * `<Redirect/>`
        * 路由匹配
            * `<Switch/>`
    * 导航
        * 声明式导航
            * `<Link/>`
            * `<NavLink/>`
        * 编程式导航
            > 利用js来实现页面跳转
            * 跳转方式
                * history.push()
                * history.replace()
            * 获取history对象
                * 通过`<Route>`渲染组件,history会自动写入props
                * 通过`withRouter`高阶组件，history会自动写入props

* 高阶组件HOC（High Order Component）
    > 严格意义上来说，高阶组件不是一个React组件，而是一个包装函数（纯函数），它返回一个组件
    * 编写高阶组件注意事项
        * 必须返回一个组件
        * 必须给被包装的组件传递props
    * 设计模式中的`装饰器模式`