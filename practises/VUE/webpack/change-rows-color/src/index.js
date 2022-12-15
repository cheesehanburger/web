// 被webpack打包处理的文件模块

// 1 使用es6的导入语法
import $ from 'jquery'

// 导入样式(在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用)
// webpack默认只能处理.js结尾的文件，处理不了其他后缀的文件，所以需要后续的loader设置
// 如果某个模块中，使用from接受到的是undefine，则没比较进行接收
import './css/index.css'
import './css/index.less'

// 导入图片,得到图片文件
import img from './images/logo.png'
console.log(img)
// 2 定义jquery的入口函数
$(function() {
    // 实现奇偶行变色
    $('ul li:odd').css('background-color','pink')
    $('ul li:even').css('background-color','blue')
    $('.box').attr('src',img)
})

// webpack 对于高级的语法也会有兼容性问题
// 定义一个装饰器函数
function info(target) {
    target.info = 'Person info'
}
// // 定义一个普通的类
@info
class Person {}

console.log(Person.info)

