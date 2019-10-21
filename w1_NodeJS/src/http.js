let http = require('http');

// console.log(http)

let app = http.createServer(function(request,response){
    // 服务器相应内容到客户端
    response.write('hello 老谢， hello dingding');

    // 响应结束
    response.end()
})

app.listen(1910,function(){
    console.log('服务器启动成功');
})