$(function () {

    // 计算总价和总件
    getSum()

    // 全选按钮
    $('.checkall').click(function () {
        // if($(this).prop('checked')) {
        //     $('.j-checkbox').prop('checked',true)
        // } else {
        //     $('.j-checkbox').prop('checked',false)
        // }
        // 简单方式
        $('.j-checkbox').prop('checked', $(this).prop('checked'))
        // 根据全选按钮的状态添加背景
        if($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }
    })
    // 每个单选按钮点击事件
    $('.j-checkbox').change(function () {
        // 若选中的小全选框的按钮个数 === 所有复选框的个数  就选中全选框,否则就不选中全选按钮
        //.j-checkbox:checked选择器选中的是  已经选中的复选框
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)
        }

        // 选中商品后变背景色
        $(this).parents('.cart-item').toggleClass('check-cart-item')
    })

    // 加减号点击事件
    $('.increment').click(function () {
        // ----购物车数量加减----
        // 得到当前兄弟文本框的值
        let val = $(this).siblings(".itxt").val()
        val++
        // 重新赋值
        $(this).siblings(".itxt").val(val)

        // -----计算小计模块----
        // 先拿到单价
        //string.substr(n,m) n表示开始截取的下标 m表示截取的个数
        let price = $(this).parents('.p-num').siblings('.p-price').text().substr(1)
        //toFixed(2)保留两位小数
        let total = (price * val).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + total)

        // 计算总价和总件
        getSum()

    })
    $('.decrement').click(function () {
        let val = $(this).siblings(".itxt").val()
        val--
        if (val < 1) {
            return
        }
        $(this).siblings(".itxt").val(val)
        let price = $(this).parents('.p-num').siblings('.p-price').text().substr(1)
        let total = (price * val).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + total)


        // 计算总价和总件
        getSum()
    })

    // 表单数量修改事件
    $('.itxt').change(function () {
        //文本框修改之后，重新计算小计
        let val = $(this).val()
        let price = $(this).parents('.p-num').siblings('.p-price').text().substr(1)
        let total = (price * val).toFixed(2)
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + total)

        // 计算总价和总件
        getSum()
    })

    // 是计算总计和总额
    function getSum() {
        let count = 0
        let sum = 0
        $('.itxt').each(function (index, Domele) {
            count += parseInt($(Domele).val())
        })
        $('.p-sum').each(function (index, Domele) {
            console.log($(Domele).text())
            sum += parseFloat($(Domele).text().substr(1))
        })
        $('.amount-sum em').text(count)
        $('.price-sum em').text(sum.toFixed(2))  //总价保留两位小数
    }

    // 删除功能
    // 删除当前模块
    $('.p-action').click(function() {
        $(this).parent().remove()
        // 计算总价和总件
        getSum()
    })

    // 删除所选模块
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').each(function(index,ele) {
            $(this).parents('.cart-item').remove()
            // 计算总价和总件
        getSum()
        })
    })

    // 清空购物车
    $('.clear-all').click(function() {
        $('.cart-item-list').empty()
        // 计算总价和总件
        getSum()
    })

})