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

* 实例属性(vm下的属性/方法)
    > 可以写在视图层上的数据是vm实例的属性/方法
    * 属性
        * $refs 获取真实DOM节点
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
    * v-model
        * 双向数据绑定
            * Model -> View ：单向绑定（getter&setter）
            * View -> Model : 事件


### 知识点

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