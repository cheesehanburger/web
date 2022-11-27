// 使用moment对时间格式化进行格式化

// 1 导入包
const moment = require('moment')
// 2 使用对应的函数
const dt = moment().format("YYYY-MM-DD hh:mm:ss")
console.log(dt)
