// webpack 入口起点文件

// 1、运行指令
//     开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
//          webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./built/built.js
//          整体打包环境是 开发环境
//     生成环境 webpack ./src/index.js -o ./build/built.js --mode=production


// 2、结论：
//      1、webpack能处理js、json, 不能处理css、img等其他资源
//      2、将ES6模块化编译成浏览器能识别的模块化
//      2、生产环境比开发环境多一个压缩代码


import data from './db.json'

console.log(data)

// import './style.css'

function add(x, y) {
    return x + y;
}

console.log(add(1, 2))