const express = require('express')
const app = express()
app.get('/',(req,res) =>{
    throw new Error('服务器内部发生了错误')
    res.send('HOME PAGE')
})

// 注意：错误级别的中间件，必须注册在所有路由之后！
// 定义错误级别的中间件，捕获整个页面的异常错误，从而防止程序崩溃
app.use(function(err,req,res,next) {
    console.log(err.massage)
    res.send('ERROR：' + err.massage)
    next()
})
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})