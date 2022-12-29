class myPromise {
    //在构造函数中接受一个回调函数，并立即执行
    constructor(executor) {
        // 记录状态机制，保证resolve和reject只以第一次调用为基准
        this.state = 'panding'
        // 存放参数
        this.result = null
        this.reason = null
        // 通过bind将方法resolve，reject中的this绑定为myPromise
        executor(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(result) {
        if (this.state === 'panding') {
            this.state = 'fulfilled'
            this.result = result
        }
    }
    reject(reason) {
        if (this.state === 'panding') {
            this.state = 'rejected'
            this.reason = reason
        }
    }
    // then执行两个参数，分别是成功回调和失败回调
    then(onFulfilled, onRejected) {
        // 判断是否为函数，不是函数变换为函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        if (this.state === 'fulfilled') {
            setTimeout(function () {
                onFulfilled(this.result)
            })

        } else if (this.state === 'rejected') {
            setTimeout(function () {
                onRejected(this.reason)
            })
        }
    }

    // 待完成
}