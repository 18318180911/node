const fs = require('fs');
const arr = [{name: '张三'}, {age: 18}];
// fs.writeFile(): 第二个参数的格式要求为：字符串
// JSON.stringify(): 把对象转换成JSON字符串
fs.writeFile('./data.json', JSON.stringify(arr), (err) => {
    if(err) {
        return console.log('文件写入失败' + err.message)
    }
    console.log('文件写入成功');
})