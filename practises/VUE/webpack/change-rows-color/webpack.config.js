
const path = require('path')

// 2.1 导入自动清理的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 1 导入HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

//2 创建一个HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //指定原文件的存放路径
    filename: './index.html' //指定生成的文件的存放路径
})

// 2.2 创建一个cleanWebpackPlugin对象
const cleanWebpackPlugin = new CleanWebpackPlugin()
module.exports = {
    // mode 用来指定构建模式，有development和production两种
    // development 打包的时候速度快 体积大   production 打包的时候体积小 速度慢
    mode: 'development',

    // 开发的时候建议开启，方便定位错误的真实位置,但是发布的时候要关闭，防止代码暴露
    // devtool:'eval-source-map',
    // 折中方案：只定位错误，不暴露代码
    // devtool:'nosources-source-map',
    // 既暴露定位也暴露代码，不建议使用
    // devtool:'source-map',


    plugins: [htmlPlugin,cleanWebpackPlugin], // 3 通过plugin节点，使得htmlPlugin插件生效
    
    // 更改默认的打包约定
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),  //输出文件的存放路径
        filename: 'js/bundle.js' //输出文件的名称
    },

    // 1 当webpack发现某个文件处理不了的时候会查找该节点，看是否配置了对应后缀名的加载器
    module: {
        rules: [
            // 定义了不同模块对应的loader
            // 多个 loader 的调用顺序是：从后往前调用
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.png|jpg|gif$/, use: 'url-loader?limit=4700&outputPath=images'},   //这里的limit，就是限制转换为base64字符串的上限，单位是kb
            { test: /\.js$/, use: 'babel-loader', exclude:'/node_modules/'}  //一定要排除node_modules目录下的js文件，只需要管自己文件夹下为兼容问题
        ]
    },

    // 可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置
    devServer: {
        open: true,  //初次打包自动打开浏览器
        host: '127.0.0.1',//指定运行主机的地址
        port: 80,   //端口号

    },

}