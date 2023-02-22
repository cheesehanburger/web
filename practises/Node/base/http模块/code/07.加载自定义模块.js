// 加载自定义模块的时候可以不要叫后缀名
const diy = require('./06-自定义模块')

// 因为模块作用域的存在，访问不了模块中的变量
console.log(diy)