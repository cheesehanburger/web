$(function () {
    //获取本地数据
    let list = getData()

    //获取本地数据后渲染数据
    if (list.length !== 0)
        loading()

    function loading() {
        $.each(list, function (index, ele) {
            let li = $('<li></li>')
            if (ele.done === true) {
                li.html(`<input type="checkbox" checked> <p>${ele.content}</p> <a href="#"></a>`)
                $('#donelist').append(li)
            } else {
                li.html(`<input type="checkbox"> <p>${ele.content}</p> <a href="#"></a>`)
                $('#todolist').append(li)
            }
        })
        updateCount()
    }

    $('#title').on('keypress', function (event) {
        let value = $(this).val().trim()
        // 按下回车键
        if (event.keyCode === 13 && value !== '') {
            
            let li = $('<li></li>')
            li.html(`<input type="checkbox"> <p>${value}</p> <a href="#"></a>`)
            $('#todolist').prepend(li)

            // 将数据存在本地,新数据要放在前面
            list.unshift({
                content: value,
                done: false
            })
            setData(list)

            // 每次写入数据时候，更新正在进行数量
            updateCount()

            // 最后清除输入框
            $(this).val('')
        } else {
            $(this).val('')
            alert('主人，输入不能为空哦（づ￣3￣）づ╭❤～')
        }
    })
    // 正在进行列表中点击复选框就代表已完成，移进已完成 已完成列表中点击复选框就代表未，移进正在进行
    $('#todolist,#donelist').on('click', 'input', function () {
        let value = $(this).siblings('p').text()
        let index = list.findIndex(item => item.content === value)
        let li = $('<li></li>')
        console.log($(this).prop('checked'))
        if ($(this).prop('checked')) {
            li.html(`<input type="checkbox" checked> <p>${value}</p> <a href="#"></a>`)
            $('#donelist').prepend(li)
        } else {
            li.html(`<input type="checkbox"> <p>${value}</p> <a href="#"></a>`)
            $('#todolist').prepend(li)
        }

        // 保存到本地
        list.splice(index, 1)
        list.unshift({
            content: value,
            done: $(this).prop('checked')
        })
        setData(list)

        // 最后从正在进行中删除本条记录
        $(this).parent().remove()
        
        // 更新数量
        updateCount()
    })

    // 点击删除事件
    $('#donelist,#todolist').on('click', 'a', function () {
        // 在本地记录中删除本条记录
        let value = $(this).siblings('p').text()
        let index = list.findIndex(item => item.content === value)
        list.splice(index, 1)
        setData(list)

        $(this).parent().remove()

        // 更新数量
        updateCount()
    })

    // 获取本地数据
    function getData() {
        let data = localStorage.getItem('todo')
        // 若本地有存储则返回值
        if (data !== null) {
            return JSON.parse(data)
        } else {
            return []
        }
    }
    // 存储本地数据
    function setData(list) {
        localStorage.setItem('todo', JSON.stringify(list))
    }
    //更新数量的函数
    function updateCount() {
        $('#todocount').text($('#todolist li').length)
        $('#donecount').text($('#donelist li').length)
    }
})