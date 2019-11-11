const express = require('express');

const Router = express.Router();

// 引入数据库操作方式
const query = require('../db/myql');
const mongodb = require('../db/mongodb')
const {formatData} = require('../utils')

// 编写数据接口

const colName = 'goods';

// @查询所有商品
Router.get('/',async (req,res)=>{
    // page     index
    // 1        0
    // 2        10
    // 3        20
    // 推导公式：index = (page-1)*size;
    // 语句：find().skip(index).litmit(size)
    let {page=1,size=10,sort} = req.query;

    // 根据分页和每页数量计算跳过的索引值
    let index = (page-1)*size
    
    // mySQL查询数据库：
    // let sql = `select * from goods`;
    // let data = await query(sql);
    // res.send(data);

    // mongodb查询数据库
    let data = await mongodb.find(colName,{},{skip:index,limit:size,sort});
    res.send(formatData({data}))
})

Router.get('/jsonp',async (req,res)=>{
    let {callback} = req.query;

    let sql = `select * from goods`;
    let data = await query(sql);
    
    res.send(`${callback}(${JSON.stringify(data)})`);
})

// @添加商品
Router.post('/',async (req,res)=>{
    // let {name,price,imgurl,category} = req.body;

    // 写入数据：
    // let sql = `insert into goods(name,price,imgurl,category) values("${name}","${price}",)`
    let sql = `insert into goods(`
    for(let key in req.body){
        sql += `${key},`
    }
    sql = sql.replace(/,$/,') values(')
    for(let key in req.body){
        sql += `"${req.body[key]}",`
    }
    sql = sql.replace(/,$/,')');
    console.log(sql);
    let result = await query(sql)
    res.send(result)
})

// @查询单个商品
Router.get('/:id',(req,res)=>{
    
    let {id} = req.params;
    // 查询数据：
    let sql = `select * from goods where id=${id}`;
    // connection.connect();
    // connection.query(sql,  (error, result)=> {
    //     if (error) throw error;
    //     res.send(result);
    //     // 关闭连接，释放资源
    //     connection.end();
    // });

    // pool.query(sql,(err,result)=>{
    //     res.send(result);
    // })

    query(sql,function(data){
        res.send(data)
    });
})

// @删除商品
Router.delete('/:id',async (req,res)=>{
    let {id} = req.params;

    // 写入数据：
    let sql = `delete from goods where id=${id}`;
    await query(sql)
    res.send(`商品${id}删除成功`)
})

// @修改商品
Router.patch('/:id',async (req,res)=>{
    let {id} = req.params;
    let {price,category} = req.body;

    // 写入数据：
    // let sql = `update goods set price="${price}",category="${category}" where id=${id}`
    let sql = `update goods set `
    // 拼接SQL语句
    for(let key in req.body){
        sql += `${key}="${req.body[key]}",`
    }
    // 删除多余逗号
    // update goods set price="${price}",category="${category}",
    sql = sql.slice(0,-1);
    sql += ` where id="${id}"`
    
    console.log(sql);
    let result = await query(sql);
    res.send(result)
})

// @点赞
Router.patch('/:id/like',(req,res)=>{
    let {id} = req.params;

    // 写入数据：`update goods set like=like+1 where id=${id}`
    res.send(`商品${id}修改成功`)
})

Router.get('/:id/kucun',(req,res)=>{
    setTimeout(()=>{
        res.send(formatData({data:5}))

    },1000)
})

// 利用route()方法简化同路径接口操作
// Router.route('/:id')
//     .get((req,res)=>{

//     })
//     .delete((req,res)=>{

//     })
//     .patch((req,res)=>{

//     })

module.exports = Router