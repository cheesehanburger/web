const express = require('express')
const app = express()

// 1导入路由模块
const router = require('./05-router')
// 2注册路由模块
app.use('/api',router)   //同样可以加载前缀

// 注意 app.use的作用就是来注册全局中间件

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})