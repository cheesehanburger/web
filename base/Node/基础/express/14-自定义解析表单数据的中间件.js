const express = require('express')
const app = express()

//引入自定义中间件
const parser = require('./15-custom-body-parser')

app.use(parser)

app.post('/books', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
app.listen(80, function () {
    console.log('http://172.0.0.1')
})