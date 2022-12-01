const express = require('express')
const app = express()
// 导入路由
const userRouter = require('./router/user')
const userinfoRouter = require('./router/userinfo')
const artCateRouter = require('./router/artcate')
const articleRouter = require('./router/article')
// 导入验证规则
const joi = require('joi')
// 导入配置文件
const config = require('./config')
// 导入Token解析
const expressJWT = require('express-jwt')

// 跨域
const cors = require('cors')
const e = require('express')
app.use(cors())
// 再路由之前，配置解析token的中间件，不在unless里面的都需要进行身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
// 解析表单数据
app.use(express.urlencoded({ extended: false }))
// 托管静态资源文件
app.use('/uploads',express.static('./uploads'))
// 自定义一个处理错误的中间件
app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            // 错误有两种可能，错误信息，和错误对象
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})


// 注册路由
// 用户路由
app.use('/api', userRouter)
// 用户信息路由
app.use('/my',userinfoRouter)
// 文章分类路由
app.use('/my/article',artCateRouter)
// 文章路由
app.use('/my/article',articleRouter)


// 全局错误中间件
app.use((err, req, res, next) => {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    // 未知错误
    res.cc(err)
})

app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})