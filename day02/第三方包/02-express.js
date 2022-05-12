// 导入包
const express = require('express');
// 创建服务器
const server = express();
// server.请求方式('请求地址)， 回调函数
server.get('/', (req, res) => {
    // 自动转换数据格式和自动添加content-type
    res.send({ aa: 11 })
})
server.post('/', (req, res) => {
    res.send({ msg: 'post请求' })
})
// 启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功')
})