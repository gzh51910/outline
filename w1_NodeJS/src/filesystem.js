const fs = require('fs');

// 读取操作
// console.log('start')
fs.readFile('./img/g1.jpg',(err,data)=>{
    // err: 读取文件失败时的错误信息，默认为null
    if(err){
        return console.log('读取文件失败')
    }

    // console.log(data.toString('base64'))
})
// console.log('fs.readFileSync');
let data = fs.readFileSync('./mime.js');
// console.log('end')


// 写入操作
// fs.writeFile('./test.txt','鸡你太美',(err)=>{
//     if(err){
//         console.log('写入失败')
//     }
//     console.log('写入成功')
// })
fs.appendFile('./test.txt','thankyou every much',(err)=>{
    if(err){
        console.log('写入失败')
    }
    console.log('写入成功')
})

console.log('__dirname',__dirname)
console.log('__filename',__filename)