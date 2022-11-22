$(function () {
    reflesh()
    // 当我们点击tab栏的li的时候，此时不需要执行滚动事件里面的li添加currrent类
    // 解决方式：节流阀 互斥锁
    let flag = true
    $(window).scroll(function () {
        reflesh()
        if (flag) {
            $('.floor .w').each(function (index, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
                }
            })
        }
    })

    $('.fixedtool li').click(function () {
        // tab栏点击切换效果
        flag = false
        $(this).addClass('current').siblings().removeClass('current')

        let index = $(this).index()
        console.log(index)
        // 切换到对应的模块
        let address = $('.floor .w').eq(index).offset().top
        $('body,html').animate({
            scrollTop: address
        },function() {
            flag = true
        })
    })
    function reflesh() {
        if ($(document).scrollTop() >= $('.recommend').offset().top) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    }
})