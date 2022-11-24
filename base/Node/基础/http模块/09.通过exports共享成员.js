
// exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准
exports.username = 'zhao'
exports.age = 19

module.exports = {
    username:'han',
    age: 19,
    sayHello:function() {
        console.log('hello')
    }
}