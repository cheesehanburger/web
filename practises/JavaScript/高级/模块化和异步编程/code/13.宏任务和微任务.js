// 执行步骤:
// 先执行同步任务
// 检查是否有微任务,有则执行
// 执行宏任务,每次执行宏任务后都检查是否有微任务,并且执行所有微任务

setTimeout(() => {
  console.log('1')  //宏任务
 });

 new Promise(function(resolve){
    console.log('2') //同步任务
    resolve()
 }).then(function() {
    console.log('3') //微任务
 })

 console.log('4') //同步任务