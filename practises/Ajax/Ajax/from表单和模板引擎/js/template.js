// 定义一个自己的模板引擎
function template(id, data) {
    let reg = /{{\s*([A-Za-z]+)\s*}}/
    let html = document.querySelector(`#${id}`).innerHTML
    let result = null
    while (result = reg.exec(html)) {
        html = html.replace(result[0], data[result[1]])
    }
    return html
}