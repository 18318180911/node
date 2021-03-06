const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // development 开发环境
    // production 生产环境
    mode: 'development',
    // 开发环境
    devServer: {
        // 项目目录
        // contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    },
     // 打包入口
    entry: "./src/index.js",
    // 打包出口配置
    output: { 
        // 打包输出(出口)的路径，当前同级下的dist目录
        path: path.join(__dirname, "dist"),
        // 出口文件名 
        filename: "index.js" 
    },
    // 插入列表
    plugins: [
        // 自动生成html
        new HtmlWebpackPlugin({
            template: './public/index.html' // 以此为基准生成打包后html文件
        }),
    ],
    // 模块配置
    module: { 
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            // use数组里从右向左运行
            // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
            // 再用 style-loader 将样式, 把css插入到dom中
            use: [ "style-loader", "css-loader"]
          },
          {
            test: /\.less$/,
            // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
            use: [ "style-loader", "css-loader", 'less-loader']
          },
          {
            // 通过正则匹配 .png|jpg|gif|jpeg 结尾的文件
            test: /\.(png|jpg|gif|jpeg)$/i,
            // 处理静态资源
            type: 'asset',
          },
        ]
    }
}