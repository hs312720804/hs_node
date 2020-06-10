const express = require('express')

var app = express()


app.get('/', (req,res) => {
    res.send('hello!')
})

app.get('/aq', (req,res) => {
    res.send('hello!12')
})

// 静态资源  资源
// 没有第一个参数
// app.use(express.static('public'))

// 第一个参数-别名、请求路径必须以他开头
app.use('/public/', express.static('public'))
// 等价于
app.use('/public/', express.static('./public'))
app.use('/public/', express.static('./public/'))
app.use('/a/', express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000.'))
