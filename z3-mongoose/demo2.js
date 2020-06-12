


const mongoose = require('mongoose');

// 1、连接 MongoDB 数据库 
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

// 2、设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数组
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
})

// 3、将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为 model
// 第一个参数：传入一个大写名词单数字符串用来标书你的数据库名词
//            mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
//            例如这里的 User 最终会变成 users 集合名称
//  第二个参数：架构 Schema
// 
//  返回值：模型构造函数
var User = mongoose.model('User', userSchema)


// 4、当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了
var admin = new User({
    username: 'erwei',
    password: '12456',
    email: 'admin@qq.com'
})


// ****************************
// // 新增
// ****************************
// admin.save((err, ret) =>{
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })d


// ****************************
// // 查询数据 
//    API：
//      查所有: find()
//      查一个: findOne()
//      根据ID查: findById()
//      查不到 返回 null
// ****************************
var findFunc = User.find((err, ret) =>{
    if (err) {
        console.log('查询失败')
    } else {
        console.log(ret)
    }
})

// 查一个
// User.findOne({username: 'hs',password: '124256'}, (err, ret) =>{
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log(ret)
//     }
// })

// ****************************
//    删除数据 
//    API：
        // 根据条件删除所有：remove()
        // 根据条件删除一个：findOneAndRemove()
        // 根据id删除一个：findByIdAndRemove()
// ****************************
// User.remove({username: 'hs'}, (err,ret) =>{
//     if (err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//         console.log(ret)
//     }
// })

// ****************************
//    更新数据
//    API：
//      更新一个或多个，返回数据处理条数: update()
//      更新单个文档，默认返回处理前的数据: findOneAndUpdate()   // [options] {new: true}: 返回修改后的文档
//      更新单个文档，默认返回处理前的数据: findByIdAndUpdate()
// // ****************************
// User.findByIdAndUpdate('5ee0986b9e072517a45b0145', {password:66666}, (err, ret) =>{
//     if(err){
//         console.log('更新失败')
//     }
//     console.log('更新成功')
//     console.log(ret)
// })

User.findOneAndUpdate({_id:'5ee0986b9e072517a45b0145'}, {username:'规范化'}, {new: true}, (err, ret) =>{
    if(err){
      return console.log('更新失败')
    }
    console.log('更新成功')
    console.log(ret)
})