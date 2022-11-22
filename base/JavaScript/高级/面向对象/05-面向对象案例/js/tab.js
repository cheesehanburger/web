// 点击tab栏有切换效果
// 点击+可以添加tab项和内容项
// 点击x可以删除tab和内容项目
// 双击tab项文字，可以修改里面的文字内容

//tab对象
//该对象具有切换功能
//该对象具有添加功能
//该对象具有删除功能
//该对象具有修改功能

let that
class Tab {
    constructor(id) {
        that = this
        this.mian = document.querySelector(id)
        this.lis = this.mian.querySelectorAll('li')
        this.sections = this.mian.querySelectorAll('section')
        this.add = this.mian.querySelector('.tabadd')
        // li的父元素
        this.ul = this.mian.querySelector('.fisrstnav ul')
        //section的父元素
        this.tabscon = this.mian.querySelector('.tabscon')
        this.removes = this.mian.querySelectorAll('.iconfont')
        this.init()
    }
    init() {
        // init 初始化操作让相关的元素绑定事件
        // 切换效果
        this.updateNode()
        //添加效果
        this.add.addEventListener('click', this.addTab)
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].addEventListener('click', this.toggleTab)
            this.removes[i].addEventListener('click', this.delectTab)
            this.spans[i].addEventListener('dblclick', this.editTab)
            this.sections[i].addEventListener('dblclick', this.editTab)
        }
    }
    //动态添加元素，需要重新获取对应的元素
    updateNode() {
        this.lis = this.mian.querySelectorAll('li')
        this.sections = this.mian.querySelectorAll('section')
        this.removes = this.mian.querySelectorAll('.iconfont')
        this.spans = this.ul.querySelectorAll('li span:first-child')
    }
    // 切换功能
    toggleTab() {
        // 排他
        that.clearClass()
        this.classList.add('liactive')
        that.sections[this.index].classList.add('conactive')
    }
    // 排他函数
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].classList.remove('liactive')
            this.sections[i].classList.remove('conactive')
        }
    }
    // 添加功能
    addTab() {
        // !!!!!!---追加节点的新方法--
        that.clearClass()
        // 创建li元素和section元素
        let li = `<li class="liactive"><span>测试${that.lis.length + 1}</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试${that.sections.length + 1}</section>`
        // 分别追加到对应的父元素内部
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    // 删除功能
    delectTab(e) {
        e.stopPropagation()  //阻止冒泡，防止触发li的切换事件
        let index = this.parentNode.index
        // that.ul.removeChild(that.lis[index])
        // that.tabscon.removeChild(that.sections[index])
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        //当删除的不是选定状态的li的时候，原来的选定状态保持不变
        if (document.querySelector('.liactive'))
            return
        //每次删除选中的元素后，前一个元素都是选中状态
        that.lis[index - 1] && that.lis[index - 1].click()

    }
    // 修改功能
    editTab() {
        // 双击禁止选定
        let value = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 添加一个文本框
        this.innerHTML = '<input type="text" />'
        let input = this.children[0]
        input.value = value
        input.select()   //文本框中的文字处于选中状态
        // 给input添加一个焦点状态
        // 使得鼠标离开的时候将值赋值给span
        input.addEventListener('blur', function () {
            this.parentNode.innerHTML = this.value
        })
        // 按下键盘也可以
        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter')
                this.blur()
        })
    }
}
let tab = new Tab('#tab')