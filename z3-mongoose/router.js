const express = require('express')
const router = express.Router()
const fs = require('fs')
const student = require('./crud')
console.log(student)
// 编辑
// student.findOneAndUpdate({name:"gfdh"}, {name:'123'}, (err,ret)=>{
//     // if (err) console.log(err);
//     // console.log('编辑成功')
//     console.log(ret);
// })

// 删除
// student.findOneAndRemove({name:'第三个'}, (err, ret) =>{
//     if (err) {
//         return console.log('sever error.')
//     }
//     console.log("删除结果：" + JSON.stringify(ret))
//     console.log('删除成功！')
// })


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
    student.findOne(req.body)
    .then((data) =>{

        console.log(data + '-------')
        if(data) return console.log('用户已存在')

        new student(req.body).save((err, ret) => {
            if (err) {
                return res.status(500).send('Server error.')
            }
            console.log('添加成功')
            res.redirect('/')
        })
    })
    
})

router.get('/', (req, res) => {
    student.find((err, data) => {
        if (err) {
            return res.status(500).send('SERVER ERROR.')
        }
        console.log("data=" + Object.prototype.toString.call(data))
        res.render('index.html', {
            // 文件中读取的数据一定是字符串
            // 所以这里一定要手动转成对象JSON.parse
            tableLists: data
        })
    })
    
})

module.exports = router