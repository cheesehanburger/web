// 1 导入mysql
const mysql = require('mysql')
// 2 建立与mysql数据库的关系
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登录数据库的账号
    password: 'admin123',  //密码
    database: 'my_db_01'   //操作的数据库
})

// ----- 查询语句  -------
// db.query('select * from users',(err,results) =>{
//     //查询失败
//     if(err) return console.log(err.message)
//     //查询成功 如果查询的是select查询语句执行的结果是数组
//     console.log(results)
// })

// ----- 插入语句 -------
// // 1 要插入的数据
// const user = { username: 'spider-man', password: 'pcc321' }
// // 2 执行的sql语句
// const sqlStr = 'insert into users (username,password) value(?,?)'
// // 3 用数组的形式，填充占位符?
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message)
//     //查询成功 如果查询的是insert into 语句执行的结果是对象，results.affectedRows === 1 表示成功
//     if(results.affectedRows === 1) {
//         console.log('插入成功')
//     }
// })

//插入的快捷方式
// const user = {username:'han',password:'loveyou'}
// const sqlStr = 'insert into users set ?'
// // 直接将数据对象放入占位符的位置
// db.query(sqlStr,user, (err, results) => {
//     if (err) return console.log(err.message)
//     if(results.affectedRows === 1) {
//         console.log('插入成功')
//     }
// })


// -------更新语句-------
// const user = { id: 5, username: 'laohan', password:'qwer123' }
// const sqlStr = 'update users set username = ?, password = ? where id = ?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新成功')
//     }
// })

//更新的快捷方式
// const user = { id: 6, username: 'spider-man', password: 'pcc321' }
// const sqlStr = 'update users set ? where id = ?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新成功')
//     }
// })

//----- 删除语句 ------
// const sqlStr = 'delete from users where id = ?'
// db.query(sqlStr, 6, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('删除成功')
//     }
// })


// 注意：使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作
// 所谓的标记删除，就是将这条数据的状态进行修改
const sqlStr = 'update users set status = 1 where id = ?'
db.query(sqlStr, 5, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('标记删除成功')
    }
})
