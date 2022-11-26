const express = require('express')
const app = express()

//多个中间件之间，共享同一份 req 和 res。
app.use(function (req, res, next) {
    const time = Date.now()
    // 为req属性挂载自定义属性,从而把时间共享给后面所有的路由
    req.time = time
    next()
})

app.get('/', (req, res) => {
    res.send('homd page' + req.time)
})
app.get('/user', (req, res) => {
    res.send('homd page' + req.time)
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})