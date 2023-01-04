import db from '../db/index.js'

export async function getAllUser(req, res) {
    // 可以将可能出现的错误放在try-catch块中进行捕获
    try {
        const [rows] = await db.query('select id,username,nickname,xxx from ev_users')
        console.log(rows)
        res.send({
            status: 0,
            message: '获取用户列表成功',
            data: rows,
        })
    } catch (error) {
        res.send({
            status:1,
            message: '获取用户列表失败',
            data: error.message
        })
    }
}