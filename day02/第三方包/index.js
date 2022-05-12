const express = require('express');
const server = express()
server.get('/', (req, res) => {
    res.send('主页')
});
// 查询学员
server.get('/student', (req, res) => {
    res.send('查询全部学员');
});
// 添加学员
server.post('/student', (req, res) => {
    res.send('添加学员');
});
// 修改学员
server.put('/student', (req, res) => {
    res.send('修改学员');
});
// 删除学员
server.delete('/student', (req, res) => {
    res.send('删除学员');
});
// 启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功')
})
