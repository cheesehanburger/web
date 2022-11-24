const http = require('http')
const server  = http.createServer()
server.on('request',(req,res) => {
    const url = req.url    //1获取请求的url地址
    let content = '<h1>404 Not found!</h1>'   //2默认相应内容 404
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'             //3响应首页内容
    } else if (url === '/about.html') {
        content = '<h1>关于</h1>'            //4响应关于内容
    }
    res.setHeader('Content-Type','text/html; charset=utf-8')   //5.设置响应头防止乱码
    res.end(content)                                          //6 将内容响应给客户端
})
server.listen(8080,() => {
    console.log('server running at http://127.0.0.1:8080')
})