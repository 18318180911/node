const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('中文')
})

app.listen(8000, () => {
  console.log('服务器启动成功')
})



// 1. npm init               初始化项目
// 2. npm install express    下包
// 3. 在新建的js文件导入包