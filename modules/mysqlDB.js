/**
 * Created by Administrator on 2018/6/30 0030.
 */
var mysql = require("mysql");

//建立连接的方法

function __connection() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "koacms"
  });
  connection.connect();
  return connection;
}

exports.query = function(sql, parmas = null) {
  //1.获取数据库连接对象
  var connection = __connection();
  return new Promise(function(reject, resolve) {
    //2、执行sql语句
    connection.query(sql, parmas, function(error, results, fields) {
      if (error) throw error;
      reject(results);
    });
    //3、关闭连接
    connection.end();
  });
};
