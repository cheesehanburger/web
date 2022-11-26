const express = require('express')
const router = express.Router()
const qs = require('querystring')


// 定义get接口
router.get('/get', (req, res) => {
    // 通过req.query 获取客户端发来的查询字符串（对象形式）
    const query = req.query
    // 通过send反馈给客户端
    res.send({
        status: 0,
        msg: "GET请求成功",
        data: query
    })
})

//定义post接口
router.post('/add', (req, res) => {
    // 通过req.query 获取客户端发来的查询字符串
    const body = req.body
    // 通过send反馈给客户端
    res.send({
        status: 0,
        msg: "post请求成功",
        data: body
    })
})

// 定义delete接口
// 由于delete为预检请求，会有两次请求,OPTION 预检请求成功之后，才会发起真正的请求
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'delete请求成功'
    })
})
module.exports = router