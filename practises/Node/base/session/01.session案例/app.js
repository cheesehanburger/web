// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(session({
  secret: 'itlaohan', //secret 属性值可以为任意字符串
  resave: false,   //固定写法
  saveUninitialized: true //固定写法
}))


// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // 注意：只有当session配置成功后，才能使用req.session来保存数据
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  req.session.user = req.body   //将用户的信息存储到session中
  req.session.islogin = true    //将用户登录的状态存储到session中

  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, message: 'fail' })
  }
  res.send({
    status:0,
    msg:'success',
    username:req.session.user.username
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  // 调用distory只会清空当前的session
  req.session.destroy()
  res.send({
    status:0,
    msg:'退出登录成功'
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})