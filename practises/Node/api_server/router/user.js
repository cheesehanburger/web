const express = require('express')
const router = express.Router()

// 导入路由处理函数
const userHandler = require('../router_handler/user')

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

//注册
// 3. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证
// 3.1 数据验证通过后，会把这次请求流转给后面的路由处理函数
// 3.2 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理
router.post('/reguser',expressJoi(reg_login_schema),userHandler.regUser)

// 登录
// 1 查询登录信息是否合法，合法后进行下一步操作
router.post('/login',expressJoi(reg_login_schema),userHandler.login)

module.exports = router