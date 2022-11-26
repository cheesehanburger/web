const express = require('express')
const app = express()

// 注意：Express的get和post路由是不支持跨域请求的

// 解决办法：JSOP 缺点只支持get请求
// 在配置cors中间件之前声明JSONP接口，反正被处理成CORS接口
app.get('/api/jsonp',(req,res)=> {
    const query = req.query
    // 通过查询字符串对象得到函数的名称
    const callbackFun = query.callback
    const data = {
        name:'han',
        age:20
    }
    const dataStr = `${callbackFun}(${JSON.stringify(data)})`
    
    res.send(dataStr)
})

// CORS 推荐使用,支持多种请求
//导入中间件
const cors = require('cors')
// 在路由之前注册cors,从而解决接口跨域的问题
app.use(cors())

// 创建表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./17-apiRouter')
const { json } = require('body-parser')
// 注册路由模块
app.use('/api', router)

app.listen(80, function () {
    console.log('express server run on http//127.0.0.1')
})