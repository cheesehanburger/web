const express = require('express')
const app = express()

// 定义一个中间件
const mw1 = function (req, res, next) {
    console.log('这是一个最简单的中间件')
    next()
}
const mw2 = function (req, res, next) {
    console.log('这是第二个中间件')
    next()
}
// 实现多个局部中间件
app.get('/', mw1,mw2, (req, res) => {
    res.send('hello world')
})
app.get('/user', (req, res) => {
    res.send('post request')
})
app.listen(80, () => {
    console.log('http://127.0.0.1')
})