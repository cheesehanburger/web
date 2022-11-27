const fs = require('fs')

// 参数1 路径  参数2 内容（默认utf8格式）   参数3 回调函数
fs.writeFile('./files/demo2.txt',"写入内容",function(err) {
    // 如果文件写入成功则err值为null
    // 如果写入失败则err值为错误对象
    console.log(err)
})