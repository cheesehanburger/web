const db = require('../db')

exports.addArticle = function (req, res) {
    // 判断是否有文章图片
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('请上传文章封面')

    // 有文章封面了，将文章封面的路径以及其他信息存入数据库
    const path = require('path')
    const articleInfo = {
        // 文章的文本部分信息
        ...req.body,
        // 文章封面的存放路径
        cover_img: path.join('/uploads', req.file.filename),
        pub_date: new Date(),
        author_id: req.user.id
    }
    console.log(articleInfo)
    const sql = 'insert into ev_articles set ?'
    db.query(sql, articleInfo, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('发布文章失败')
        res.cc('发布文章成功', 0)
    })
}