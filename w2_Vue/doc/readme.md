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
