const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    // 调用res.end方法向客户端响应一些内容

    // 为了防止中文乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('您所处的地址是：' + req.url + "您发送请求的方式是：" + req.method)
})
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080')
})