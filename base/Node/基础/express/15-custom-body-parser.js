// 封装自定义解析模块

// 导入内置的querystring模块，用来处理查询字符串
const qs = require('querystring')

const parser = function (req, res, next) {
    // 定义中间件具体的业务

    // 监听data事件，来获取客户端发送到服务器的数据
    // 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。
    let dataStr = ''
    req.on('data', function (chunk) {
        dataStr += chunk
    })
    // 请求结束后触发end事件
    req.on('end', () => {
        // TODO:把字符串格式的请求体数据，解析成对象格式
        // querystring的parse函数可以直接将查询字符串的格式转化为对象
        req.body = qs.parse(dataStr)
        next()
    })
}

module.exports = parser