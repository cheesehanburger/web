// 路由模块

// 1导入express
const express = require('express')
// 2创建路由对象
const router = express.Router()
// 3挂载具体的路由
router.get('/user/list',function(req,res) {
    res.send("Get user list")
})

router.post('/user/add',function(req,res) {
    res.send("add new user")
})
// 4向外导出路由
module.exports = router