// 定义格式化时间的方法
function dataFormat(dateStr) {
    const dt = new Date(dateStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//定义补零函数
function padZero(time) {
    return time > 9 ? time : '0' + time
}
module.exports = {
    dataFormat: dataFormat
}