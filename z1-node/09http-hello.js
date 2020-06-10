let http = require('http')
let fs = require('fs')

// 1、创建server
let server = http.createServer()

const wwwDir = 'E:/Movie'

// 2、监听server的request请求事件，设置请求处理函数
server.on('request', (req, res) =>{
    // res.end('hello wrold1')
    let url = req.url
    console.log(wwwDir + url)

    fs.readFile(wwwDir + url, (err,data) =>{
        if(err){
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
    
})

// 3、绑定端口号，启动服务
server.listen(3000, () =>{
    console.log('服务器启动成功！127.0.0.1:3000')
})