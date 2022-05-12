const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口
    entry: {
        main: './src/index.js'
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    // 模块
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlwebpackPlugin({
            template: path.join(__dirname, '/index.html')
        })
    ],
    // 配置开发服务
    devServer: {
        // 项目目录
        contentBase: path.join(__dirname, 'dist'),
        // gzipz压缩
        compress: true,
        // 服务端口
        port: 9000,
        // ip地址
        // host: '0.0.0.0',
        // 热更新。需要
        hot: true,
        // 开启https
        // https: true,
        // 启动后自动打开浏览器
        open: true
        // 代理
        // '/api'开始的请求会被代理
        // 替换接口种'/api'字符串
    }
}