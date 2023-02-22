const http = require('http')
const server = http.createServer()
server.on('request',req => {
    // req是请求对象，里面包含了与客户端相关的数据和属性
    // req.url 客户端请求的url地址
    const url = req.url
    // req.method 客户端请求的类型
    const method = req.method
    console.log("request url is " + url +" request method is " + method)
})
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080')
})