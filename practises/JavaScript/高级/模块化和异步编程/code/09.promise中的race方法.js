import thenFs from "then-fs";
const promiseArr  = [
    thenFs.readFile('./files/1.txt','utf8'),
    thenFs.readFile('./files/2.txt','utf8'),
    thenFs.readFile('./files/3.txt','utf8'),
]
//Promise.race() 方法会发起并行的 Promise 异步操作，只要任何一个异步操作完成，就立即执行下一步的.then 操作（赛跑机制）。
//效果：
Promise.race(promiseArr).then(result=>{
    console.log(result)
})