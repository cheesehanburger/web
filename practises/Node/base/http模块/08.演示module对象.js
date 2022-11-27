//在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息

//在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。默认情况下是一个空对象
//外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。

console.log(module)