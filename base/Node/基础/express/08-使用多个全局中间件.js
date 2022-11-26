const express = require('express')
const app = express()

//客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用
// 定义第一个全局中间件
app.use(function (req, res, next) {
    console.log('这是第一个中间件')
    next()
})
// 定义第二个全局中间件
app.use(function (req, res, next) {
    console.log('这是第二个中间件')
    next()
})
// 定义一个路由

app.get('/user', (req, res) => {
    res.send('homd page')
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})