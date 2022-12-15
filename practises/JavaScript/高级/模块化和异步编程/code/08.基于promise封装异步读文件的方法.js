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
getFile('./files/12.txt').then((r1)=>{console.log(r1)},(err)=>{console.log(err.message)})