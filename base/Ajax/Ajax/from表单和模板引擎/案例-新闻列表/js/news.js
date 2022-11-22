$(function () {
    function addZero(n) {
        return n > 10 ? n : '0' + n
    }
    // 定义过滤器
    template.defaults.imports.timeFormat = function (time) {
        let date = new Date(time)
        let y = date.getFullYear()
        let m = addZero(date.getMonth() + 1)
        let d = addZero(date.getDate())

        let hh = addZero(date.getHours())
        let mm = addZero(date.getMinutes())
        let ss = addZero(date.getSeconds())
        // 注意：必须要有return
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }
    getNewsList()
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
            if (res.status !== 200) {
                return alert('获取新闻列表失败')
            } else {
                // 将tags的属性从字符串转化为数组
                $.each(res.data, function (index, ele) {
                    ele.tags = ele.tags.split(',')
                })
                console.log(res.data)
                let htmlstrr = template('tpl-news', res)
                $('#news-list').html(htmlstrr)

            }
        })
    }
})