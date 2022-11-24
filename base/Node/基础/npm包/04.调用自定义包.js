const diytools = require('./diy-tools')
const dt = new Date()
const newDate = diytools.dateFormat(dt)
console.log(newDate)
console.log('---------')

const htmlStr = '<h1 title="abc">这是一个标签<span>123&nbsp;<span><h1>'
const str = diytools.htmlEscape(htmlStr)
console.log(str)
console.log('---------')

const newStr = diytools.htmlUnEscape(str)
console.log(newStr)