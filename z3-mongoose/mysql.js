var mysql = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
// 2.连接数据库  打开冰箱门
connection.connect();
 
// 3.执行数据操作 把大象放到冰箱
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
// 4.关闭连接 关闭冰箱门
connection.end();