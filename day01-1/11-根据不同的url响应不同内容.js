// 引入模块
const http = require('http');
// 创建服务器：后端的事件
// request：请求(对象)
// response：响应(对象)
const server = http.createServer((req, res) => {
    // req：请求对象：
    // req.method：获取请求方式
    // req.url：获取请求地址
    console.log('接收到用户客户端请求', req.method, req.url)
    // res.end('ok');
     if (req.url === '/') {
         res.end('hello Index')
     } else if (req.url === './joke') {
         // 防止低版本浏览器不能自动解析内容，则手动设置
        res.setHeader('content-type', 'text/html;charset=utf8');
        //  res.end('404');
        res.end('哈哈哈~')
     } else {
         res.end('404')
     }
     // 多个res.end被调用会导致服务器崩溃
});
// 启动服务器：开启监听
server.listen(8001, () => {
    console.log('服务器启动成功');
});