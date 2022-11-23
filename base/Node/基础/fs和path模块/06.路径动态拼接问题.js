const fs = require('fs')
// 如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。
//原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。
// 使用__dirname方式，__dirname表示当前路径
fs.readFile(__dirname+'/files/demo.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取成功' + dataStr)
})