let http = require('http');

// console.log(http)

let app = http.createServer(function(request,response){
    // 任何请求都会进入到这里
    console.log('dingding 666')

    // 服务器相应内容到客户端
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    response.write('<h1>hello 老谢，</h1> hello dingding');

    // 响应结束
    response.end()
})

app.listen(1910,function(){
    console.log('服务器启动成功');
})