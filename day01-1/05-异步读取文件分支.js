const fs = require('fs');
fs.readFile('./1.txt', 'utf8', (err, data) => {
    if (err) return console.log('文件读取失败')
    console.log('data', data)
})