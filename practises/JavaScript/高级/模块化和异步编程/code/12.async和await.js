import thenFs from 'then-fs'

//如果一个函数的返回值是promise,则可以在调用该方法是在前面挂载一个await,简化‘链式.then()’的使用
//注意1:如果在 function 中使用了 await，则 function 必须被 async 修饰
console.log('A')
async function getAllFiles() {
    /*原应为:
     thenFs.readFile('./files/1.txt','utf8').then()
     */
    //注意2:第一个await之前的代码的同步执行,await之后的代码会异步执行
    console.log('B')
    //下面的代码异步执行
    const r1 = await thenFs.readFile('./files/1.txt','utf8')
    const r2 = await thenFs.readFile('./files/2.txt','utf8')
    const r3 = await thenFs.readFile('./files/3.txt','utf8')
    console.log(r1,r2,r3)
    console.log('D')
}

getAllFiles()
console.log('C')