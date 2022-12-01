const express = require('express')
const router = express.Router()

// 导入用户信息处理模块
const infoHandler = require('../router_handler/userinfo')

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')

// 获取用户信息的路由(通过token)
router.get('/userinfo', infoHandler.getUserInfo)
// 更新用户基本信息的路由(nickname email)
router.post('/userinfo', expressJoi(update_userinfo_schema), infoHandler.updateUserInfo)
module.exports = router
// 重置密码
router.post('/updatepwd', expressJoi(update_password_schema), infoHandler.updatePassword)

// 更新头像
router.post('/update/avater', expressJoi(update_avatar_schema), infoHandler.updateAvater)