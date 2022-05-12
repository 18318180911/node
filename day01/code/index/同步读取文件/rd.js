// 引入模块
const fs = require('fs');
// 同步读取
 let res = fs.readFileSync('./1.txt', 'utf8');
 console.log(res);