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

