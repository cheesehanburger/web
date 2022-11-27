const express = require('express')

const app = express()

// 调用该方法，快速对外提供静态资源,可以托管多个静态目录，会先查找前一个
// 注意：存放静态文件的目录名不会出现在 URL 中，也就是说在客户端请求的url中不需要表面该文件夹，而是直接访问该文件夹下的文件
app.use('/files',express.static('./public'))    //挂载路径前置：这样想要访问该静态目录则必须要加上这个路径
app.use(express.static('./clock'))

app.listen(80, () => {
    console.log('express server run on http//127.0.0.1')
})