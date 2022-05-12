const fs = require('fs');
const list = [{ name: '后裔', skinname: '精灵王' }];
const obj = { name: '程咬金', skinname: '功夫厨神' };
fs.writeFile('./data.json', JSON.stringify(list), (err, data) => {
    if(err) {
        console.log('写入失败');
    }
    console.log('写入成功');
    fs.readFile('./data.json', (err, data) => {
        if(err) {
            console.log('读取失败');
        }
        console.log('读取成功');
        // 读取成功，把字符串转换成数组
        const arr  = JSON.parse(data.toString())
        // 追加一条数据到数组中
        arr.push(obj);
        // 写入文件
        fs.writeFile('./data.json', JSON.stringify(arr), err => {
            // 写入文件失和成功败提示
            if(err) {
                return console.log('写入失败');
            }
            console.log('写入成功');
            // 读取文件
            fs.readFile('./data.json', (err) => {
                if (err) {
                    console.log('读取失败');
                }
                console.log('读取成功');
            })
        });
    })
})