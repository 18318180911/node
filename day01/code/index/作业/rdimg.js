// 导入fs模块
const fs = require('fs');

// 读取文件，读取文件，肯定返回数据，所以回调需要加了第二参数接收
fs.readFile('./03.jpg',(err,content) => {
    if(! err) {
        console.log("read!");
        //3、将内容写入文件，不存在可创建文件，但不能创建路径下不存在的文件夹
        fs.writeFile('./4.jpg',content,err => {  //只能创建文件，存在会进行覆盖
            if(! err) {
                console.log("文件创建成功");
            }else {
                console.log("文件创建失败");
            }
        })
    }else {
        console.log("读取失败");
    }
})

