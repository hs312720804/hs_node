
// 1、加载http核心模块
var http = require('http')

// 2、返回一个Server实例
let server = http.createServer()

// 3、服务器要干嘛？
    // 提供服务 对数据的服务
    // 发请求
    // 接受请求
    // 处理请求
    // 给个反馈（发送响应）
    // 注册request请求事件
    // 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行回调事件
server.on('request', () =>{
    console.log('收到客户端的请求了')
})


// 4、绑定端口号、启动服务器
server.listen(3000, () =>{
    console.log("服务器启动成功！127.0.0.1:3000")
})