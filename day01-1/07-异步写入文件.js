const fs = require('fs');
fs.writeFile('./1.txt', '666', (err) => {
    if(err) {
        return console.log('文件写入失败', err.message);
    }
    console.log('文件写入成功');
})