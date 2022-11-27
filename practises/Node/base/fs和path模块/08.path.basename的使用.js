const path = require('path')
const fpath = 'a/b/c/demo.html'
const fullname = path.basename(fpath)
console.log(fullname)  //demo.html

// 去除扩展名
const namewithoutExt = path.basename(fpath,'.html')
console.log(namewithoutExt) //demo