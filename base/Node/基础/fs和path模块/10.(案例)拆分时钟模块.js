const path = require('path')
const fs = require('fs')

// 匹配style的正则
const regStyle = /<style>[\s\S]*<\/style>/
// 匹配css的正则
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '/files/index.html'), 'utf-8', function (err, dataStr) {
    if (err)
        return console.log('文件读取失败')
    resolveHtml(dataStr)
    resolveStyle(dataStr)
    resolveScript(dataStr)
})

// 处理html样式 
function resolveHtml(data) {
    const onlyHtmlData = data.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, '/clock/index.html'), onlyHtmlData, function (err) {
        if (err) {
           return console.log('html样式写入失败' + err.message)
        }
        console.log('html样式写入成功')
    })
}

// 处理css样式
function resolveStyle(data) {
    const styleData = regStyle.exec(data)[0]
    const finalData = styleData.replace('<style>', '').replace('<\/style>', '')
    fs.writeFile(path.join(__dirname, '/clock/index.css'), finalData, function (err) {
        if (err) {
          return  console.log('css样式写入失败')
        }
        console.log('css样式写入成功')
    })
}

// 处理js样式
function resolveScript(data) {
    const scriptData = regScript.exec(data)[0]
    const finalData = scriptData.replace('<script>', '').replace('<\/script>', '')
    fs.writeFile(path.join(__dirname, '/clock/index.js'), finalData, function (err) {
        if (err) {
           return console.log('js写入失败')
        }
        console.log('js写入成功')
    })
}