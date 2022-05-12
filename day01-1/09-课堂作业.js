// 导入模块
const fs = require('fs');
// 待添加的数据
const obj = {name: '张三'};
// 读取文件
fs.readFile('./data.json', (err, data) => {
    // 读取失败提示
    if(err) {
        return console.log('读取失败');
    }
    // 读取成功，把字符串转换成数组
    const arr  = JSON.parse(data.toString())
    // 追加一条数据到数组中
    arr.push(obj);
    // 写入文件
    fs.writeFile('./data.json', JSON.stringify(arr), err => {
        // 写入文件失和成功败提示
        if(err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    })
})