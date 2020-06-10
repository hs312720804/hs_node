const mongoose = require('mongoose');

// 1、连接 MongoDB 数据库 
mongoose.connect('mongodb://localhost/test');

var mongoose = require('mongoose');
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
var User = mongoose.model('User', useerSchema)


// 4、当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了
var admin = new User({
    username: 'admin',
    password: '12456',
    email: 'admin@qq.com'
})

admin.save((err, ret) =>{
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存失败')
        console.log(ret)
    }
})