// 导入包
const express = require('express');
const fs = require('fs');
// 创建服务器
const server = express();
// 主动开启获取请求体数据
server.use(express.urlencoded());
const stuPath = './db/student.json';

server.get('/', (req, res) => {
    res.send('主页')
});
// 查询学员
server.get('/student', (req, res) => {
    fs.readFile(stuPath, (err, data) => {
        // 如果读取失败，就响应失败的提示
        if (err) return res.send({
            code: 1,
            message: '查询失败'
        })
        // 成功响应
        res.send({
            code: 0,
            message: '获取成功',
            data: JSON.parse(data),
        })
    })
    // res.send('查询全部学员');
});
// 添加学员
server.post('/student', (req, res) => {
    // 获取请求体参数 req.body
    // console.log('请求数据', req.body);
    fs.readFile(stuPath, (err, data) => {
        // 失败提示
        if (err) return res.send({
            code: 1,
            message: '查询失败'
        });
        // 把读取的文件内容解析构成数组
        const arr = JSON.parse(data);
        // 处理格式
        const stu = {
            id: Date.now(),
            name: req.body.name,
            age: Number(req.body.age),
            sex: req.body.sex,
        }
        // 追加数组
        arr.push(req.body)
        // 把最新数据写入文件，注意参数二需要转JSON字符串
        fs.writeFile(stuPath, JSON.stringify(arr, null, 2), err => {
            // 失败提示
            if (err) return res.send({
                code: 1,
                message: '添加失败'
            });
            // 成功提示
            res.send({
                code: 0,
                message: '添加学员成功',
            })
        })
    })
    // res.send('添加学员');
});
// 修改学员
server.put('/student', (req, res) => {
    // res.send('修改学员');
    fs.readFile(stuPath, (err, data) => {
        // 失败提示
        if (err) return res.send({ code: 1, message: '读取失败' })
        // 转换成数组
        const arr = JSON.parse(data)
        // 从数组中查找要修改的数组项
        const stu = arr.find(item => item.id === Number(req.body.id))
        // 修改信息
        stu.name = req.body.name;
        stu.age = Number(req.body.age);
        stu.sex = req.body.sex;
        // 重新写入
        fs.writeFile(stuPath, JSON.stringify(arr, null, 2), err => {
            // 失败提示
            if (err) return res.send({ code: 1, message: '修改失败'});
            // 成功提示
            res.send({ code: 0, message: '更新学员成功'});
        })
    })
});
// 删除学员
server.delete('/student', (req, res) => {
    // res.send('删除学员');
    console.log(req.query);
    fs.readFile(stuPath, (err, data) => {
        if (err) return res.send({
            code: 1,
            message: '读取失败'
        })
        // 根据id删除掉一条数据
        const arr = JSON.parse(data);
        // 通过过滤实现删除
        const newArr = arr.filter(item => item.id !== Number(req.query.id))
        fs.writeFile(stuPath, JSON.stringify(newArr, null, 2), err => {
            // 失败提示
            if (err) return res.send({
                code: 1,
                message: '删除失败'
            });
            res.send({
                code: 0,
                message: '删除学员成功'
            })
        })
    })
});
// 启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功')
})