let fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
fs.writeFile('./data/你好>>.md', '大123家好，给i他打架第三个', (error) =>{
    
    console.log(error)
    console.log("123434成功")
})