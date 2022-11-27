
//将对象转化为查询字符串
// 将{id:10,name:20}转化为id=10&name=20
function resolveData(data) {
    let arr = []
    // 遍历对象，将数据存入数组
    for (let item in data) {
        arr.push(item + '=' + data[item])
    }
    return arr.join('&')
}

//obj的格式为 {
//    type: '', // 请求的方式，例如 GET 或 POST
//    url: '',  // 请求的 URL 地址
//    data: { },// 这次请求要携带的数据
//    success: function(res) { } // 请求成功之后的回调函数
//   }
function diyajax(obj) {
    let xhr = new XMLHttpRequest()
    // 将对象转化为查询字符串
    let datastr = resolveData(obj.data)
    // post请求的操作
    if (obj.method.toUpperCase() === "POST") {
        xhr.open(obj.method, obj.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(datastr)
    } else {
        // get请求的操作
        xhr.open(obj.method, obj.url + '?' + datastr)
        xhr.send()
    }
    

    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            // 将json转化为对象
            let res = JSON.parse(xhr.responseText)
            obj.success(res)
        }
    }
}