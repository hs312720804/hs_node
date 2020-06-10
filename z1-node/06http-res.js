
// 1、加载http核心模块
var http = require('http')

// 2、返回一个Server实例
let server = http.createServer()

// request请求事件处理函数，需要接受两个参数：
//   Resquest 请求对象
//   Response 响应对象
server.on('request', (resquest, response) =>{
    console.log('收到客户端的请求了,请求路径是' + resquest.url)

    response.write('hello')
    response.write('  nodejs')
    
    // 告诉客户端，我的话说完了，你可以呈递给用户了
    response.end()
})


// 4、绑定端口号、启动服务器
server.listen(3000, () =>{
    console.log("服务器启动成功！127.0.0.1:3000")
})