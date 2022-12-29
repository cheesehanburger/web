import fs from 'fs'
function getFile(filePath) {
    return new Promise(function(resolve,reject) {
        fs.readFile(filePath,'utf8',(err,dataStr)=>{
            if(err) {
                return reject(err)
            }
            resolve(dataStr)
        })
    })
}
//then方法中可以预先指定成功和失败的处理函数
//then中的两个处理函数的参数，实际上就是dataStr和err
getFile('./files/11.txt')
.then((r1)=>{console.log(r1)},(err)=>{console.log(err.message)})
// 同样，可以使用catch来捕获异常
.catch(err=>console.log(err.message))