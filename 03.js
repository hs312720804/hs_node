function getSomething() {
    return "something";
}
function testAsync() {
    return Promise.resolve("hello async");
}


// await 
// 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

// 如果它等到的是一个 Promise 对象，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();
