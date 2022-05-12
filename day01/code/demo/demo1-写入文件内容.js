// 导入fs模块
const fs = require('fs');
// 2.调用fs.writeFile()方法，写入文件的内容
// 参数1：表示文件路径；参数2：写入的内容；参数3：回调函数
fs.writeFile('./1.txt', 'abc', function(err) {
    // 写入成功，则err的值等于null
    // 写入失败，则err的值等于一个错误对象
    console.log(err);
})