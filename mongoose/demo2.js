const mongoose = require('mongoose');

// 连接 MongoDB 数据库 
mongoose.connect('mongodb://localhost/test');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的耳目的是为了保证数据的完整性，不要有脏数组
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