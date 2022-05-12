// 引入模块
const http = require('http');
// 创建服务器
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    // 解构请求方式 method和请求地址url
    const { method, url } = req;
    // 防止乱码
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    if (method === 'GET' && url === '/member/cart') {
        res.end('获取购物车列表');
    } else if (method === 'POST' && url === '/member/cart') {
        res.end('加入购物车(新增)');
    } else if (method === 'DELETE' && url === '/member/cart') {
        res.end('删除购物车商品');
    } else {
        req.statusCode = 404;
        // 响应给客户端
        res.end('中文Ok')
    }
   
});
// 开启服务器
server.listen(8000, () => {
    console.log('服务器启动成功');
});