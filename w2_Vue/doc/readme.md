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

