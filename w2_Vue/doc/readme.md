## day2-3

### 复习
* MongoDB
    * 可视化工具：robo 3T
    * 命令行操作
    * 在NodeJS中操作
        * 驱动：mongodb,mongoose
        * document的操作
            * 增
                * insertOne(Object)
                * insertMany(Array)
            * 删
                * deleteOne(query)
                * deleteMany(query)
            * 改
                * updateOne(query,{$set:data})
                * updateMany(query,{$set:data})
                * save(document)
            * 查
                * find(query)
                * findOne(query)
            * 条件与筛选
        * 封装（重点）
            * async & await

### 知识点
* 前端框架发展史
    //... YUI
    1. Jquery(2006)       节点操作
    2. Angular(2009)      MVC，依赖注入...
    3. React(2013)        高性能（虚拟DOM）
    4. Vue(2014)          结合Ng和React的优点，并做了优化
* 学习Vue需要改变关注点
    * jquery和原生js的关注点：节点
    * Vue中的关注点：数据
* Vue使用
    1. 引入Vue
    2. 实例化`new Vue()`
    3. 配置参数
        * el    让Vue管理html标签
        * data  数据（只关注数据而不是节点操作）
            
    4. 在被接管的html标签中使用数据
        * {{}}
* 响应式属性
    > Vue在实例化时，会自动遍历data下的所有属性，并通过Object.defineProperty()把他们变成存储器属性，并写入Vue的实例
    * 特点：对属性的修改会UI会自动更新
    * 原理：getter&setter

```js
    let data = {
        username:'laoxie',
        age:18,
        password:123456
    }
    let vm = new Vue({
        el:'#app'
        data
    })

```


* 属性特性
    * 值属性（有自己的值的属性）
        * configurable  可配置性（属性特性总开关）
        * enumerable    可枚举性（是否可遍历）
        * writable      可写性
        * value
    * 存储器属性（本身没有值，一般用于代理其他数据）
        * configurable  可配置性（属性特性总开关）
        * enumerable    可枚举性（是否可遍历）
        * get           监听读取操作
        * set           监听写入操作
    * 设置属性特性：
        * Object.defineProperty(obj,key,descriptor)
        * Object.defineProperties(obj,descriptors)
        ```js
            Object.defineProperties(user,{
                age:{
                    configurable:true
                    value:18
                },
                password:{}
            })
        ```
    * 获取属性特性：
        * Object.getOwnPropertyDescriptor(obj,key)
        * Object.getOwnPropertyDescriptors()

* 架构模式（分层）
    * MVC
        * Model（模型）：数据处理
        * View（视图）：数据展示
        * Controller（控制器）：业务逻辑处理（M和V之间的连接器）
* 指令
    * v-on
    * v-model

## day2-4

### 复习
* Vue使用步骤
    1. script引入
        * 开发版    develpoment
        * 生产版本  production
        * cdn
    2. 实例化
        ```js
            let vm = new Vue(options)
        ```
    3. 配置参数
        * el    关联视图层
        * data  关联数据层
            > Vue在实例化时，会遍历data下所有属性，把它们变成响应式属性
        * methods   用于自定义方法和事件处理函数
    
    ```js
        <div id="app">{{username}}</div>
    ```

* 架构模式
    * MVC
    * MVP
    * MVVM
* 响应式属性
    > 数据的修改->UI更新
    * 原理：getter&setter（可以监听到某个属性是否被修改）
    * 如何添加响应式属性
        * 实例化时添加属性到data
        * Vue.set(target,key,val)/vm.$set()
        * 数组变异方法

* 属性特性（更深入控制属性的方式）
    * 值属性
        * configurable
        * enumerable
        * writable
        * value
    * 存储器属性
        * configurable
        * enumerable
        * get
        * set
    * 修改：Object.defineProperty()
    * 获取：Object.getOwnPropertyDescriptor()




### 知识点
* 配置参数
    * el    关联视图层
    * data  关联数据层
        > Vue在实例化时，会遍历data下所有属性，把它们变成响应式属性
    * methods   用于自定义方法和事件处理函数
    * computed
* 实例属性(vm下的属性/方法)
    > 可以写在视图层上的数据是vm实例的属性/方法
    * 属性
        * data下的属性会自动称为vm下的属性
        * $refs 获取真实DOM节点
        * $el
        * $data
        * $options  实例化时的配置参数
    * 方法
        * $set()

* 指令（html的属性:v-*）
    * v-for
        * 可以遍历数组/对象
        * 格式：
            * v-for="item in namelist"
            * v-for="item of namelist"
    * v-bind        (简写 :)
        >可以用在任何属性上，对style和class属性进行增强
    * v-on  （简写：@）
        * event对象的获取：在事件触发时自动写入vm.$event
            * 不传参，默认第一个参数为event对象
            * 传参：必须手动传递$event
        * 修饰符
    * v-model
        * 双向数据绑定
            * Model -> View ：单向绑定（getter&setter）
            * View -> Model : 事件
    * v-show（频繁显示隐藏）
        > 通过display属性控制元素的显示隐藏
    * v-if/v-else-if/v-else（不频繁的显示隐藏）
        > 通过创建/移除的方式控制元素的显示隐藏
* 影响页面性能几大因素
    * 节点的频繁操作
    * 事件绑定数量
    * ....

* Virtual DOM
    > 一个结构类似与真实DOM节点的js对象
    * 优化方式
        * 优化节点操作
        * 优化事件处理
        * ....
    * 虚拟DOM是怎么优化性能的：背后有一套强大的算法：diff算法
    * key：唯一且稳定
    ```js
        btn.innerText = 'laoxie'
        btn.innerText = 'dingding'
        btn.innerText = 'luoluo'
        btn.innerText = 'laoxie'

        // 虚拟DOM大概样子
        // 初始状态
        {
            type:'div',
            attrs:{},
            children:[{
                type:'h1',
                children:'1910'
            },{
                type:'ul',
                children:[{
                    type:'li',
                    children:'1111'
                }.{
                    type:'li',
                    children:'xxx'
                },{
                    type:'li',
                    children:'xxx'
                }]
            }]
        }

        // 结束状态
        {
            type:'div',
            attrs:{},
            children:[{
                type:'h1',
                children:'1910'
            },{
                type:'ul',
                children:[{
                    type:'li',
                    children:'2222'
                }.{
                    type:'li',
                    children:'xxx'
                },{
                    type:'li',
                    children:'xxx'
                }]
            }]
        }

    ```

* 数据绑定
    * 单向数据绑定(Model->View)
        * {{}}
        * v-bind:attr
        * v-text
        * v-html
    * 双向数据绑定
        * Model -> View ： 单向绑定
        * View -> Model ： 事件
        * v-model
            * 原理：v-bind:value + v-on:input


## day2-5

### 面试题
* 深拷贝与浅拷贝的方式
    * 浅拷贝：拷贝一层
        * 遍历:for..in
        * Object.assign({},obj)
        * 扩展运算符：...
    * 深拷贝
        * 递归浅拷贝
        * JSON
        * 利用工具
            * jQuery.extend(true,{},obj)
            * loadash.cloneDeep(obj);
* 事件执行的过程
    * 捕获 -> 事件触发 -> 冒泡
* 点击图片不同的区域跳转到不同的地址
    * 标签定位
    * 图片热点

### 复习

* VirtualDOM：Vue是一个高性能操作
    > 结构类似于真实DOM节点的js对象
    * diff算法
    * key: 唯一且稳定
* 双向数据绑定的原理
    * Model->View
    * View->Model

### 知识点
* 组件Component
    * 定义
        * 全局组件：Vue.component(name,options)     类似于new Vue(options)
        * 局部组件：components
    * 使用
        * 定义组件其实就是自定义一个标签（符合W3C标准）
    * 组件通讯
        > 原则：谁的数据谁修改
        * 父 -> 子：props
            1. 在子组件上定义属性，并传递数据
            2. 在子组件中通过props配置参数接收数据
            >接收到的数据会自动称为子组件的属性
        * 子 -> 父：自定义事件
            1. 在子组件上定义一个事件`v-on:additem`
            2. 在子组件内部触发这个自定义事件：`$emit()`
        * 兄弟 -> 兄弟
            1. 兄弟 -> 父组件
            2. 父组件 -> 兄弟
        * 多层级组件通讯
            * 逐层传递（繁琐，不靠谱）
            * 事件总线Bus
                1. 自定义事件
                    > 接收方自定义事件
                2. 触发自定义事件
                    > 发送方触发自定义事件

            > 任何Vue的实例都可以自定义事件触发事件，一个组件其实就是一个Vue的实例
                * 定义事件：vm.$on('abc')
                * 触发事件：vm.$emit('abc',100)



## day3-1

### 复习
* 组件（模块化开发）
    * 目的
        * 复用
        * 维护
    * 定义 (创建一个标签))
        * 全局组件：Vue.component(name,options)
        * 局部组件：components
    * 使用
    * 组件通讯
        * 父组件 -> 子组件：props
            1. 在子组件上定义属性，并传递父组件数据
            2. 在子组件中通过props接收数据
                > 如果子组件中不接收，定义的属性会自动成为子组件根节点的属性
        * 子组件 -> 父组件
            * 方式一：传递事件处理函数到子组件中执行
            * 方式二：自定义事件（推荐）
                1. 给子组件自定义事件，把父组件的方法作为事件处理函数
                    * `v-on:事件名=事件处理函数`
                    * `子组件实例.$on(事件名,事件处理函数)`
                2. 在子组件中触发自定义事件：
                    `this.$emit('eventname',参数)`
        * 兄弟 -> 兄弟
            1. 兄弟 -> 父组件
            1. 父组件 -> 兄弟
        * 深层次结构组件通讯
            * 逐层传递
            * 事件总线Bus
                > 搞懂传输什么，传到哪里
                1. 接收方：自定义事件，绑定父组件事件处理函数
                2. 发送方：触发自定义事件
        * 内容通讯：插槽slot

    ```js
        <my-component></my-component>
        <my-component data="100"></my-component>
        <my-component :data="{}"></my-component>
        <my-component></my-component>
    ```