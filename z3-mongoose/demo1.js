const mongoose = require('mongoose');

// 连接 MongoDB 数据库 
mongoose.connect('mongodb://localhost/test');


// 创建一个模型
// 就是在设计数据库
// MongDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose 这个包就可以让你的设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

for( var i = 0; i<10; i++){
    console.log('讽德诵功水电费')
    // 实例化一个Cat
    const kitty = new Cat({ name: 'Zildjian' + i});

    //持久化保存 Kitty 实例
    kitty.save().then(() => console.log('meow'));
}
