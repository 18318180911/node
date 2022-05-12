const fs = require('fs');
try {
    let res = fs.readFileSync('./1.txt', 'utf8');
    console.log(res)
} catch (err) {
    console.log('读取文件报错', + err);
}