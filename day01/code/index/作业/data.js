const fs = require('fs');
// 定义数组
const list = [{name: '后裔', skinname: '精灵王' }];
const obj = { name: '程咬金', skinname: '功夫厨神'};
// 异步
// 将数据转为对象最近到data1.json
fs.writeFile('./data1.json', JSON.stringify(list), function(err,data) {
    if(err) {
        return console.log('文件写入失败' + err.message)
    }
    //写入成功
    fs.readFile('./data1.json', (err, data) => {
        if(err) {
            console.log("error")
            return;
        }
        let arr = [];
        let _data = JSON.parse(data);
        arr.push(_data);
        arr.push(obj);
        console.log("-----");
        console.log(JSON.stringify(arr));
        fs.writeFile('./data1.json',JSON.stringify(arr), function(err,content) {
            if(err) {
                console.log("写入失败")
            }
            console.log("写入成功");
            //读出显示 
            fs.readFile('./data1.json', (err, result) => {
                if(err) {
                    console.log("读取失败")
                    return;
                }
                console.log("======")
                console.log(JSON.parse(result));
            })
           
        })
    })
});

