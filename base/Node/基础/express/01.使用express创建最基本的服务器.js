//1导入express
const express = require('express')
//2创建服务器
const app = express()

//4监听客户端的GET和POST请求，并向客户端响应请求
app.get('/user', (req, res) => {

    // 调用express的res.send方法向客户响应一个json对象
    res.send(
        {
            name: 'han',
            age: 16,
            gender: '男'
        }
    )

})
app.post('/user', (req,res) => {
    // 调用express的res.send方法向客户响应一个文本字符串
    res.send('请求成功')
})

app.get('/',(req,res)=> {
    // 客户端请求?name=han&age=20
    // req.query以对象的方式访问到客户端通过查询字符串的形式，发送到服务器的参数,默认是个空对象
    res.send(req.query)
})

// 注意:这里的id是一个动态的参数
app.get('/user/:id/:name',(req,res)=> {
    // req.params是动态匹配到的url参数，默认也是一个空对象
    res.send(req.params)
})


//3启动服务器
app.listen(80, function () {
    console.log('express server run on http//127.0.0.1')
})