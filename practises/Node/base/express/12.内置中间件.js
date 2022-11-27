const express = require('express')
const app = express()

// 内置中间件的使用
// express.json 解析 JSON 格式的请求体数据
app.use(express.json())
// express.urlencoded 解析 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // req.body用来接受客户端发送过来的请求,支持json和url-encoded格式数据
    // 默认情况下，如果不配置解析表单的中间件，则req.body 为undifined
    console.log(req.body)
    res.send('HOME PAGE')
})

app.post('/book', (req, res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})