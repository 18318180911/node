const fs = require('fs');
try{
    const data = fs.readFileSync('./1.txt', 'utf8');
    console.log('文件读取成功',  + data)
} catch(error) {
    console.log('读取文件失败', + error);
}