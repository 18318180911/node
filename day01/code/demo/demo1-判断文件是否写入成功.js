// 导入fs模块
const fs = require('fs');
// 2.调用fs.writeFile()方法，写入文件的内容
// 参数1：表示文件路径；参数2：写入的内容；参数3：回调函数
fs.writeFile('./1.txt', 'abc', function(err) {
    if(err) {
        return console.log('文件写入失败' + err.message)
    }
    console.log('文件写入成功');
})
