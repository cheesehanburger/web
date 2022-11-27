const fs = require('fs')
fs.readFile('./files/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return ('文件读取失败' + err.message)
    }
    // 将所有的空格替换为换行
    let newStr  = dataStr.replace(/\s/g, '\r\n')
    // 将所有的=替换为:
    let finalStr = newStr.replace(/=/g, ': ')

    console.log(finalStr)
    fs.writeFile('./files/成绩-ok.txt', finalStr, function (err) {
        if (err)
            return console.log('写入文件失败' + err.message)
        console.log('完成新文件的写入')
    })
})