// 导入自定义的时间模块
const timer = require('./01.dataformat')
const dt = new Date()
const date = timer.dataFormat(dt)
console.log(date)