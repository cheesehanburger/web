// 1.导入 fs 模块，来操作文件
const fs = require('fs')
// 2 调用方法读取文件
// 参数1 文件的存放路径  参数2 读取文件时采用的编码 默认使用UTF8  参数3 回调函数 拿到结果
fs.readFile('./files/demo.txt', 'utf8', function (err, dataStr) {
    // err是失败的结果  dataStr是成功的结果
    // 如果读取成功则err为null
    // 如果读取失败，则err的值为错误对象，dataStr的值为undifined
    console.log(err)
    console.log('----')
    console.log(dataStr)
})