// 使用request方法读取文件的内容
// 1.导入fs模块，来操作文件
const fs = require('fs')
// 2.调用fs.readFile()方法读取文件
// 参数1：路径；参数2：编码格式，一般指定utf8；参数3：回调函数，读取失败和成功的结果是err，dataStr
fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
    // 打印失败结果
    // 成功，err的值为null
    // 失败， err的值为错误对象，dataStr的值为undefind
    console.log(err);
    console.log('----');
    // 打印成功的结果
    console.log(dataStr);
});