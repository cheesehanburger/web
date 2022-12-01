//引入数据库
const db = require('../db/index')

// 获取列表
exports.getArticleCates = function (req, res) {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取列表成功',
            data: results
        })
    })
}

//添加文章分类
exports.addArticleCates = function (req, res) {
    const sql = 'select * from ev_article_cate where name = ? or alias = ?'
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 2) return res.cc('抱歉！分类名或别名已经被占用，请更换后重试')
        if (results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.cc('抱歉，分类名和别名都被占用')
        if (results.length === 1 && req.body.name === results[0].name) return res.cc('分类名被占用')
        if (results.length === 1 && req.body.alias === results[0].alias) return res.cc('别名被占用')

        // 分类名和别名合法了

        const sql = 'insert into ev_article_cate set ? '
        db.query(sql, { name: req.body.name, alias: req.body.alias, is_delete: 0 }, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('新增文章分类失败')
            res.cc('新建文章分类成功', 0)
        })
    })
}
// 删除文章分类
exports.deleteCateById = function (req, res) {
    const sql = 'update ev_article_cate set is_delete = 1 where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败')
        res.cc('删除文章分类成功')
    })
}

// 查询文章分类
exports.getArtCateById = function (req, res) {
    const sql = 'select * from ev_article_cate where id = ?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('查询文章分类失败')
        res.send({
            status: 0,
            message: '获取文章分类成功',
            data: results[0]
        })
    })
}

// 更新文章分类数据
exports.updateCateById = function (req, res) {
    const sql = 'select * from ev_article_cate where id <> ? and (name = ? or alias = ?)'
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 2) return res.cc('抱歉！分类名或别名已经被占用，请更换后重试')
        if (results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.cc('抱歉，分类名和别名都被占用')
        if (results.length === 1 && req.body.name === results[0].name) return res.cc('分类名被占用')
        if (results.length === 1 && req.body.alias === results[0].alias) return res.cc('别名被占用')

        // 更新的分类名和别名合法了
        const sql = 'update ev_article_cate set ? where id = ?'
        console.log()
        db.query(sql, [req.body, req.body.id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败')
            res.cc('更新文章分类成功', 0)
        })
    })
} 