/**
 * mysql数据库操作模块
 */
var config = require('../config');
var mysql = require('mysql');
var options = {
    host     : config.mysql_host,
    user     : config.mysql_user,
    password : config.mysql_pwd,
    port     : config.mysql_port,
    database : config.mysql_database
};
var pool = mysql.createPool(options);
/**
 * 执行查询
 * 调用示例：
 var mysql = require('./utilities/mysql');
 var options = {
    sql: 'INSERT INTO ADMINS(ID,UserName,UserPwd) VALUES (0,?,?)',  //sql执行语句
    params: ['test03','test03'],    //sql语句中的参数
    handler :function(result) {     //执行后的回调函数
        console.log('Insert result is: \r\n', result);
    }
};
 mysql.execute(options);
 *其中，params为sql语句中的参数值，可不写
 */
exports.execute = function(options) {
    pool.getConnection(function(error, connection) {
        if(error) {
            console.log('DB-获取数据库连接异常！');
            throw error;
        }
        // 查询参数
        var sql = options['sql'];
        var params = options['params'];
        var handler = options['handler'];

        // 执行查询
        if(params) {
            var query = connection.query(sql, params, function(error, results) {
                if(error) {
                    console.log('DB-执行查询语句异常！');
                    throw error;
                }
                // 处理结果
                handler(results);
            });
            console.log(query.sql);
        } else {
            var query = connection.query(sql, function(error, results) {
                if(error) {
                    console.log('DB-执行查询语句异常！');
                    throw error;
                }
                // 处理结果
                handler(results);
            });
            console.log(query.sql);
        }

        // 返回连接池
        connection.release(function(error) {
            if(error) {
                console.log('DB-关闭数据库连接异常！');
                throw error;
            }
        });
    });
};

/**
 * 释放数据库连接
 * 调用示例
 * var mysql = require('./utilities/mysql');
 * mysql.release(connection)
 */
exports.release = function(connection) {
    connection.end(function(error) {
        console.log('Connection closed');
    });
};

/*
module.exports = {
    query: function(sql,callback){
        connection = mysql.createConnection(options);
        connection.connect();
        connection.query(sql, function(err, rows, fields) {
            if (err) {
                throw err;
            }
            callback(rows);
        });
        connection.end();
    },
    insert: function(sql,params,callback){
        connection = mysql.createConnection(options);
        connection.connect();
        connection.query(sql, params,function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
        connection.end();
    }
}
*/