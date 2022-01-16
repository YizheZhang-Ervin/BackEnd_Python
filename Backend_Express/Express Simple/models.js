// 导入mysql
var mysql = require('mysql');
// 引入mysql连接配置
var mysqlconfig = require('./mysql');

// 使用连接池，提升性能
var pool = mysql.createPool(mysqlconfig);

var userQuery = {
    queryAll:function(sql,callback){
        pool.getConnection(function(err,connection){
            if(err){
                callback(err,null,null);
            }else{
                connection.query(sql,function(query_err, rows, fields){
                    connection.release();
                    callback(query_err, rows, fields);
                })
            }
        })
    }
}
module.exports = userQuery;