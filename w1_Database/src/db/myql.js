// 引入mysql模块
const mysql = require('mysql');

// 1.利用连接对象实现数据库操作
// 配置连接信息
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });

// 2. 利用连接池方式实现数据库操作（推荐）
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port: 3306,
    database: 'jiaoxue',
    // connectionLimit:5,
    multipleStatements: true,//是否运行同时连接多个连接对象
});

// module.exports = function(sql,callback){
//     pool.query(sql,(err,result)=>{
//         callback(result);
//     }) 
// }

// Promise
module.exports = function(sql){
     return new Promise((resolve,reject)=>{
        pool.query(sql,(err,result)=>{
            if(err){
                // 把状态从Pending -> Rejected
                reject(err);
            }

            // 把状态从Pending -> Resolved
            resolve(result);
        }) 
    })
}