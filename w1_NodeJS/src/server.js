// 引入内置模块
const http = require('http');
const url = require('url'); // 用于处理请求地址信息
const path = require('path'); //用于处理文件路径信息
const fs = require('fs');

// 引入自定义模块（必须使用相对路径）
const mime = require('./mime');

// 利用http模块创建一个服务器
http.createServer((req,res)=>{
    // 格式化前端请求地址（包括请求参数）
    // 提取文件路径
    let {pathname} = url.parse(req.url,true);

    // 提取后缀名
    // let extname = pathname.match(/\.\w+/)
    let extname = path.extname(pathname).slice(1);

    // 获取真实路径
    let realpath = path.join(__dirname,pathname);
    
    // 通过文件地址读取文件内容
    fs.readFile(realpath,(err,data)=>{
        if(err){console.log(444)
            res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
            res.end('文件不存');
            return;
        }
        res.writeHead(200,{'Content-Type':mime[extname]+';charset=utf-8'})
        res.write(data);
        res.end()
    })
}).listen(1910,()=>{
    console.log('Server is runing on port 1910');
})