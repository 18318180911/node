const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
            template: './index.html' // 以此为基准生成打包后html文件
        }),
    ]
}