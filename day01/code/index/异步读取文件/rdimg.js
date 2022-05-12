// 导入fs模块
const fs = require('fs');
// 读取文件
let fs = fs.readFile('./03.jpg', (err, data) => {
    console.log(data);
});
fs.writeFile('./rdimg2.js', fs => {
    if(err) {
        return console.log('文件写入失败' + err.message)
    }
    console.log('文件写入成功');
});


