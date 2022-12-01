//导入数据库
const db = require('../db/index')
//导入加密处理
const bcrypt = require('bcryptjs')
// 导入jwt
const jwt = require('jsonwebtoken')
//引入密钥
const config = require('../config') 

// 注册路由
exports.regUser = (req, res) => {
    // 接受表单数据
    const userinfo = req.body
    //判断是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不能为空！')
    // }

    const sql = `select * from ev_users where username = ?`
    db.query(sql, [userinfo.username], (err, results) => {
        // sql语句失败
        if (err) {
            return res.cc(err)
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.cc('抱歉,用户名被占用,请修改!')
        }


        //进行新用户数据的添加
        //使用bcrypt.hashSync()对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql = 'insert into ev_users set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('抱歉，出现问题，请稍后重试！')
            }
            // 注册成功
            res.cc('注册成功', 0)
        })
    })
}
//登录路由
exports.login = (req, res) => {
    const userinfo = req.body
    // 查询是有否有注册信息
    const sql = `select * from ev_users where username = ?`
    db.query(sql, [userinfo.username], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        // sql语句没错，但是数据库中没有此用户信息
        if (results.length !== 1) {
            return res.cc('账号未注册，请先注册')
        }

        //判断密码是否正确
        // 将得从客户端得到的密码对比数据库中保存的密码
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) {
            return res.cc('密码不正确，请重新输入')
        }

        // 登录成功
        // 剔除密码和=头像，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
        const user = {
            ...results[0],
            password:'',
            user_pic:''
        }
        // 将用户信息加密生成token字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        // 发送给客户端
        res.send({
            status:0,
            message:'登录成功',
            // 为了方便客户端使用Token，在服务器上直接拼接上Bearer 前缀
            token:'Bearer ' + tokenStr
        })
    })
}