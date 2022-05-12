// 导入fs模块
const fs = require('fs');
// 读取文件
fs.readFile('./1.txt', 'utf8', (err, data) => {
    console.log(err);
    console.log(data);
})