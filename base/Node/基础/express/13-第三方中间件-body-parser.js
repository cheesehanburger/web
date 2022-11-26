const express = require('express')

//在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。
const parser = require('body-parser')
const app = express()

// 注册中间件
app.use(parser.urlencoded({extended:false}))

app.post('/books',(req,res) => {
    console.log(req.body)
    res.send('ok')
})

app.listen(80,function() {
    console.log('http://172.0.0.1')
})