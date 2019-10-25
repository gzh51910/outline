const fs = require('fs');
const express = require('express');
const app = express();

const filepath = './data/region.json'

app.get('/region',(req,res)=>{
    res.set({
        "Content-Type":"text/plain;charset=utf8"
    })
    
    
    // // 小文件读取
    // fs.readFile('./data/region.json',(err,data)=>{
    //     console.log(data.toString())
    // })
    
    // 大文件读取：stream
    var readerStream = fs.createReadStream(filepath);
    
    // 如果是大文件，则分多次读取文件内容
    // 每次都会触发data事件
    let data = ''
    readerStream.on('data',chunk=>{
        // chunk: 每次读取的内容（Buffer）
        // console.log('chunk:',chunk.toString())
        res.write('chunk:')
        res.write(chunk.toString())
        data += chunk.toString()
    }).on('end',()=>{
        res.end('读取完成');
        console.log(data)
    }).on('error',()=>{
        console.log('文件读取错误')
    })
})

app.get('/upload',(req,res)=>{
    // 创建写入流
    var writerStream = fs.createWriteStream('dingding.txt');
    writerStream.on('data',()=>{
        console.log('data')
    }).on('finish',()=>{
        console.log('finish');
        res.send('上传文件成功')
    }).on('error', function(err){
        console.log('fail');
     });

    // 使用 utf8 编码写入数据
    for(let i=0;i<10;i++){
        let data = `hello avbody，my name is dingding，我顶${i}\n`
        writerStream.write(data,'UTF8');
    }

    // 标记文件末尾
    writerStream.end();

});

app.get('/copy',(req,res)=>{
    // 创建读取流
    let readerStream = fs.createReadStream(filepath);

    // 创建写入流
    let writerStream = fs.createWriteStream('country.json');
    writerStream.on('finish',()=>{
        res.send('文件复制完成');
    })
    // 利用管道流实现文件的复制
    readerStream.pipe(writerStream);


})

app.listen(19100,()=>{
    console.log('success')
})