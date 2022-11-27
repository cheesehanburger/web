## 安装
```
npm install diytools

```
## 导入

```js
const diyTools = require('diy-tools')

```

## 格式化时间
```js
const newDate = diytools.dateFormat(dt)
console.log(newDate)

```
## 转义 HTML 中的特殊字符
```js
const htmlStr = '<h1 title="abc">这是一个标签<span>123&nbsp;<span><h1>'
const str = diytools.htmlEscape(htmlStr)
console.log(str)

```

## 还原 HTML 中的特殊字

```js
const newStr = diytools.htmlUnEscape(str)
console.log(newStr)

```

##  开源协议
ISC