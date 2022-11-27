const fs = require('fs')

fs.writeFile('./files/demo2.txt',"写入内容",function(err) {
    if (err) 
    return console.log("文件写入失败" + err.message)
    console.log('写入成功')
})