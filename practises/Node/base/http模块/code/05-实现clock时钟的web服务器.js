const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    // 把请求的url地址映射为文件具体的存放地址
    // const fpath = path.join(__dirname, url)
    let fpath = ''
    //优化：预定义空白文件的存放路径
    if ( url === '/') {
        // 如果是空白路径，则指定默认首页
        fpath = path.join(__dirname,'./clock/index.html')
    } else {
        // 如果不是空白路径，则动态拼接路径
        fpath = path.join(__dirname,'./clock',url)
    }

    // 对请求的地址进行判断
    fs.readFile(fpath, 'utf8', function (err, dataStr) {
        if (err)
            return res.end('<h1>404 Not Found!!</h1>')
        res.end(dataStr)
    })


})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})