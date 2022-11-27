const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//     console.log('这是一个最简单的中间件')
//     //把扭转关系，转给下一个中间件或路由
//     next()
// }
// 将mw注册为全局生效的中间件
// app.use(mw)

// 全局中间件的化简形式
app.use(function (req, res, next) {
    console.log('这是一个最简单的中间件')
    next()
})

app.get('/', (req, res) => {
    res.send('homd page')
})
app.get('/user', (req, res) => {
    res.send('homd page')
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})