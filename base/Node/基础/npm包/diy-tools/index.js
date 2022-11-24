/* 这是一个入口函数 */

const date = require('./src/dataFormat')

const escape = require('./src/htmlEscape')

//向外暴露函数
module.exports = {
    ...date,
    ...escape
}
