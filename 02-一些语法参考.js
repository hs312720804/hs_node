const express = require('express')

const fs = require('fs')
 
const router = require('./router')

var app = express()

// 配置使用art-template模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template模板引擎
app.engine('html', require('express-art-template'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

// 静态资源  资源
// 没有第一个参数
// app.use(express.static('public'))

// 第一个参数-别名、请求路径必须以他开头
app.use('/public/', express.static('public'))
// 等价于
// app.use('/public/', express.static('./public'))
// app.use('/public/', express.static('./public/'))
// app.use('/a/', express.static('public'))

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
var tableLists = [
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
// Express 为Response 相应的对象提供了一个方法： render
// render 方法默认是不可以使用，但是配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
app.get('/404', (req, res) => {
    res.render('404.html', {
        title:'hahah',
    })
})
// 如果想要修改默认的 views视图渲染存储目录，可以：
// app.set('views', 目录路径)


app.get('/form', (req, res) => {
    res.render('form.html')
})

app.get('/list', (req, res) => {
    res.render('list.html', {
        title:'hahah',
        comments
    })
})

app.post('/post', (req, res, next) => {
    console.log("req=" + JSON.stringify(req.body))
    // res.json(req.body)
    let comment  = req.body
    comment.dateTime = '2020-5-16 19:56:00'
    comments.unshift(comment)

    res.redirect('/list')
})

app.get('/', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if (err) {
            return res.status(500).send('SERVER ERROR.')
        }
        res.render('bootstrap.html', {
            // 文件中读取的数据一定是字符串
            // 所以这里一定要手动转成对象JSON.parse
            tableLists: JSON.parse(data).tableLists
        })
    })
    
})

app.listen(3000, () => console.log('Example app listening on port 3000.'))
