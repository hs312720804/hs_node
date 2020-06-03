// Promise.resolve('foo')
// // 等价于
// new Promise(resolve => resolve('foo'))

// async 函数返回的是一个 Promise 对象。
// 从文档中也可以得到这个信息。
// async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，
// 如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);

testAsync().then(v => {
    console.log(v);    // 输出 hello async
});