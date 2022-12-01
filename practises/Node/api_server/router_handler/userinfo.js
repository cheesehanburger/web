//导入数据库
const db = require('../db/index')
//导入加密处理
const bcrypt = require('bcryptjs')
const { query } = require('express')

// 获取用户信息对应的处理
exports.getUserInfo = function (req, res) {
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id = ?'
    // 通过解析后的token字符串，追加的req.user获取相关信息
    db.query(sql, [req.user.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户信息失败')
        res.send({
            status: 0,
            message: '获取用户基本信息成功',
            data: results[0]
        })
    })
}

// 更新用户基本信息对应的处理
exports.updateUserInfo = function (req, res) {

    const sql = 'update ev_users set ? where id = ?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        // sql语句成功，但是影响函数不为1
        if (results.affectedRows !== 1) return res.send('用户基本信息修改失败')
        return res.cc('修改用户基本信息成功！', 0)
    })
}

// 重置密码
exports.updatePassword = function (req, res) {

    //查询该用户是否存在
    const sql = 'select * from ev_users where id = ?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('用户不存在')

        // 验证旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('原密码不正确')

        // 原密码正确，重置新密码
        const sql = 'update ev_users set password = ? where id = ?'
        // 将新密码进行加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.send(err)
            if (results.affectedRows != 1) return res.cc('密码重置失败')
            res.cc('密码重置成功！', 0)
        })
    })

}

// 更新头像
exports.updateAvater = function (req, res) {

    const sql = 'update ev_users set user_pic=? where id = ?'
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('头像更新失败')
        return res.cc('头像更新成功！', 0)
    })
}