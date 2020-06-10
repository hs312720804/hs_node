const fs = require('fs')
const filePath = './db.json'

// 封装增删查改方法

exports.find = function(callback){
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).tableLists)
    })
}

exports.save = function(student, callback){
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).tableLists
        student.id = students[students.length - 1].id + 1

        students.push(student)

        var fileData = JSON.stringify({
            tableLists: students
        })

        fs.writeFile(filePath, fileData, (err) => {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
        })
        // 成功错误对象就是null
        callback(null)
    })
}

exports.editById = function(student, callback){
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).tableLists
        
        // var stu = students.map(item =>{
        //     if(item.id = student.id) {
        //         return student
        //     }
             
        // })
        let stuindex = students.findIndex(function(item) {

        　　return item.id == student.id;
        
        });

        for (var key in student) {
            // stu[key] = student[key]
            students[stuindex][key] = student[key]
            console.log('key=' + key)
            // console.log('stuindex=' + student.name)
            // console.log('students=' + JSON.stringify(students[stuindex]))

        }
        // console.log('students=' + JSON.stringify(students))

        var fileData = JSON.stringify({
            tableLists: students
        })
        
        
        
        fs.writeFile(filePath, fileData, (err) => {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
        })
        // 成功错误对象就是null
        callback(null)
    })
}

exports.deleteById = function(deleteId, callback){
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).tableLists
        
        // var stu = students.map(item =>{
        //     if(item.id = student.id) {
        //         return student
        //     }
             
        // })
        let stuindex = students.findIndex(function(item) {

        　　return item.id == deleteId
        
        });
        
        console.log('stuindex==' + stuindex)
        students.splice(stuindex, 1)

        var fileData = JSON.stringify({
            tableLists: students
        })
        
        
        
        fs.writeFile(filePath, fileData, (err) => {
            if (err) {
                // 错误就是把错误对象传递给他
                return callback(err)
            }
        })
        // 成功错误对象就是null
        callback(null)
    })
}