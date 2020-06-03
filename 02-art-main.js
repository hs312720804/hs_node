const express = require('express')

const fs = require('fs')
 
const router = require('./router')

var app = express()

// 配置使用art-template模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template模板引擎
app.engine('html', require('express-art-template'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 静态资源  资源
// 没有第一个参数
// app.use(express.static('public'))

// 第一个参数-别名、请求路径必须以他开头
app.use('/public/', express.static('public'))
// 等价于
// app.use('/public/', express.static('./public'))
// app.use('/public/', express.static('./public/'))
// app.use('/a/', express.static('public'))

app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000.'))
