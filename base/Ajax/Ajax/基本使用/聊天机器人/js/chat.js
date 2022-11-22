$(function () {
    // 初始化滚动条,滚动到最底部
    // 这个方法在scroll.js中
    resetui()
    // 点击发送按钮
    $('.input_sub').on('click', function () {
        // 1.获取输入框的内容
        let content = $('.input_txt').val().trim()
        if (content.length === 0)
            $('.input_txt').val('')
        // 2.将内容渲染到聊天界面
        $('.talk_list').append(`
        <li class="right_word">
        <img src="img/person02.png" /> <span>${content}</span>
        </li>`)
        // 聊天发出后获得回应
        getMsg(content)
        // 3.滚动条滚动到底部
        resetui()
        // 4.清空输入框
        $('.input_txt').val('')
    })
    // 按下enter也可以发送
    $('.input_txt').on('keypress', function (event) {
        if (event.keyCode === 13) {
            $('.input_sub').click()
        }
    })

    //根据发送聊天获取机器人对话，并且渲染到聊天表
    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                console.log(res)
                if (res.message === 'success') {
                    let content = res.data.info.text
                    $('.talk_list').append(`
                    <li class="left_word">
                      <img src="img/person01.png" /> <span>${content}</span>
                    </li>
                    `)
                    resetui()

                    // 转化为语音
                    getVoice(content)
                } else {
                    $('.talk_list').append(`
                    <li class="left_word">
                      <img src="img/person01.png" /> <span>抱歉，我的网络有点问题</span>
                    </li>
                    `)
                    resetui()

                }
            }
        })
    }
    // 文本转语音
    function getVoice(txt) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: txt
            },
            success: function (res) {
                if (res.message === 'success') {

                    $('#voiceover').prop('src', res.voiceUrl)
                } 
            }
        })
    }
})