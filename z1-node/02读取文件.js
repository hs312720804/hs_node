let fs = require('fs')

fs.readFile('./data/a.txt', (error,data)=>{
    
    if(error){
        console.log("读取文件失败：" + error)
    } else {
        console.log(data.toString())

    }
})