const express = require('express');

const Router = express.Router();


// 编写数据接口

// @查询所有商品
Router.get('/',(req,res)=>{
    // 查询数据库：`select * from goods`
    res.send('所有商品数据');
})

// @添加商品
Router.post('/',(req,res)=>{
    let {name,price,imgurl,category} = req.body;

    // 写入数据：`insert into goods(name,price,imgurl,category) values("${name}","${price}",)`
    res.send('商品添加成功')
})

// @查询单个商品
Router.get('/:id',(req,res)=>{
    let {id} = req.params;
    // 查询数据：`select * from goods whre id=${id}`
    res.send(`id为 ${id} 的商品数据`)
})

// @删除商品
Router.delete('/:id',(req,res)=>{
    let {id} = req.params;

    // 写入数据：`delete from goods where id=${id}`
    res.send(`商品${id}删除成功`)
})

// @修改商品
Router.patch('/:id',(req,res)=>{
    let {id} = req.params;
    let {price,category} = req.body;

    // 写入数据：`update goods set price="${price}",category="${category}" where id=${id}`
    res.send(`商品${id}修改成功`)
})

// @点赞
Router.patch('/:id/like',(req,res)=>{
    let {id} = req.params;

    // 写入数据：`update goods set like=like+1 where id=${id}`
    res.send(`商品${id}修改成功`)
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