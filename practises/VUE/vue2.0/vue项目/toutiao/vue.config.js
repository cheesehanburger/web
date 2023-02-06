// 在这个文件中，可以对整个项目的打包和构建进行全局的配置
// webpack在进行打包的时候，底层用到了node.js中的核心模块，所以在此配置文件中可以导入并且使用node.js中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            //  直接覆盖变量，每次需要重新打开服务器
            // 'nav-bar-background-color': 'orange'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
}
