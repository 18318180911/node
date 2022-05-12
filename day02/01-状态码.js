// 鼠标悬停小提示：
// method->方法就是函数，需要通过小括号调用
// property：属性

// 引入模块
const http = require('http');
// 创建服务器
const server = http.createServer((req, res) => {
    // 防止乱码
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    // 状态码：404表示资源没找到(Not Found)
    res.stausCode = 404;
    // 响应给客户端
    res.end('中文Ok')
});
// 开启服务器
server.listen(8000, () => {
    console.log('服务器启动成功');
});