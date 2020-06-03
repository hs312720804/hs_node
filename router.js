const express = require('express')
const router = express.Router()
const fs = require('fs')
const student = require('./student')

// 编辑
// student.editById({"id":22,"name":"5555","message":"12311"}, (err)=>{
//     console.log(err)
// })

// 删除
student.deleteById(1, (err)=>{
    if (err) {
        return console.log('sever error.')
    }
    console.log('删除成功！')
})

router.get('/404', (req, res) => {
    res.render('404.html', {
        title:'hahah',
    })
})

router.get('/list', (req, res) => {
    res.render('list.html', {
        title:'hahah',
        comments
    })
})

router.get('/form', (req, res) => {
    res.render('form.html')
})

router.post('/post', (req, res, next) => {
    console.log("req=" + JSON.stringify(req.body))
    // res.json(req.body)
    // let comment  = req.body
    // comment.dateTime = '2020-5-16 19:56:00'
    // comments.unshift(comment)

    // res.redirect('/')
    student.save(req.body, (err) => {
        if (err) {
            return res.status(500).send('Server error.')
        }

        res.redirect('/')
    })
})

router.get('/', (req, res) => {
    student.find((err, data) => {
        if (err) {
            return res.status(500).send('SERVER ERROR.')
        }
        res.render('index.html', {
            // 文件中读取的数据一定是字符串
            // 所以这里一定要手动转成对象JSON.parse
            tableLists: data
        })
    })
    
})

module.exports = router