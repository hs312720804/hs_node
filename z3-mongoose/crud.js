
const fs = require('fs')

const mongoose = require('mongoose')

const Schema = mongoose.Schema
// 1、连接 MongoDB 数据库 
mongoose.connect('mongodb://localhost/student');


var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Student', studentSchema)