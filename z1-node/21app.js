let http = require('http')
let fs = require('fs')
let template = require('art-template')
// 
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
        var url = req.url
        if(url === '/'){

            fs.readFile('./index.html', (err, data) => {
                if(err){
                    return res.end('404 Not Found')
                }

                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr)
            })
        } else if (url === '/post') {
            fs.readFile('./hello.html', (err,data) => {
                if(err){
                    return res.end('404 Not Fount.')
                }
                res.end(data)
            })
        } else if (url.indexOf('/public/') === 0) {
        console.log(url.indexOf('/public/'))
            
            fs.readFile('.' + url, (err, data) => {
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

