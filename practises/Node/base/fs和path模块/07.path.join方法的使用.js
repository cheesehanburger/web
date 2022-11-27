const path = require('path')
const fs = require('fs')
// ../会抵消一层路径
const pathStr = path.join('/a','/b/c','../','/d','/e')
console.log(pathStr)  // a\b\d\e

const pathStr1 = path.join(__dirname,'/files/成绩.txt')
fs.readFile(pathStr1,'utf-8',function(err ,dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
})
