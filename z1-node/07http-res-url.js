let http = require('http')

// 1、创建server
let server = http.createServer()


// 2、监听server的request请求事件，设置请求处理函数
server.on('request', (req, res) =>{
    // res.end('hello wrold1')

    // 所有请求路径都是以 / 开头
    var url = req.url
    console.log(url + '访问了')

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('<p>我是分数高</p>')
})

// 3、绑定端口号，启动服务
server.listen(3000, () =>{
    console.log('服务器启动成功！127.0.0.1:3000')
})