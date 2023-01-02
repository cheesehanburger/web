// then-fs支持promise调用
import thenfs from 'then-fs'

// 这样并不能保证文件的读取顺序
// thenfs.readFile('./files/1.txt','utf8').then(result=>console.log(result),err=>console.log(err))
// thenfs.readFile('./files/2.txt','utf8').then(result=>console.log(result),err=>console.log(err))
// thenfs.readFile('./files/3.txt','utf8').then(result=>console.log(result),err=>console.log(err))


// 如果上一个 .then() 方法中返回了一个新的 Promise 实例对象，则可以通过下一个 .then() 继续进行处理。通过 .then() 方法的链式调用，就解决了回调地狱的问题。
thenfs.readFile('./files/11.txt', 'utf8')    //返回值是一个promise对象

    .then(result1 => {
        console.log(result1)
        return thenfs.readFile('./files/2.txt', 'utf8')         //在第一个.then()中返回一个新的promise对象
    })

    .then(result2 => {                                          //给上一个.then()中返回的promise对象继续调用then方法
        console.log(result2)
        return thenfs.readFile('./files/3.txt', 'utf8')         //在当前的.then()中继续返回一个新的promise对象
    })
    .then(result3 => {
        console.log(result3)
    })

    // 在 Promise 的链式操作中如果发生了错误，可以使用 Promise.prototype.catch 方法进行捕获和处理：
    // catch 放在最后面可以捕获所有的错误，而catch放在前面可以提前捕获错误而不影响后面的执行
    .catch(err => {
        console.log(err.message)
    })