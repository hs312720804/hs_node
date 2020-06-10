let http = require('http')
let fs = require('fs')
let template = require('art-template')
let url = require('url')

let comments = [
    {
        name:'账单asdfa',
        message:'今天天过分的话气不错',
        date:'2020-05-05'
    },
    {
        name:'小红',
        message:'今天天发电房气不错',
        date:'2020-05-05'
    },
    {
        name:'发光法',
        message:'今天天气不错',
        date:'2020-05-05'
    },
]

http
    .createServer((req, res) => {
        // var url = req.url
        // 使用url.parse方法将路径解析为一个方便操作的对象，
        var parseObj = url.parse(req.url, true)

        // 单独获取不包含查询字符串的路径部分（不包含？之后的内容）
        var pathname = parseObj.pathname
        console.log(parseObj)
        console.log(pathname)


        if(pathname === '/'){

            fs.readFile('./index.html', (err, data) => {
                if(err){
                    return res.end('404 Not Found')
                }

                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if (pathname.indexOf('/public/') === 0) {
            console.log(pathname.indexOf('/public/'))
            
            fs.readFile('.' + pathname, (err, data) => {
                res.end(data)
            })
        } else if (pathname === '/post') {
            fs.readFile('./hello.html', (err,data) => {
                if(err){
                    return res.end('404 Not Fount.')
                }
                res.end(data)
            })
        } else {
            fs.readFile('./data/404.html', (err,data) => {
                if(err){
                    return res.end('404 Not Fount.')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, () => {
        console.log('running...')
    })

