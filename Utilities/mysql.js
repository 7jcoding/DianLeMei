var settings = require('../settings');
var mysql = require('mysql');
var options = {
    host     : settings.mysql_host,
    user     : settings.mysql_user,
    password : settings.mysql_pwd,
    port     : settings.mysql_port,
    database : settings.mysql_database
};

var commonMethod = function(callback){
    connection = mysql.createConnection(options);
    connection.connect();
    callback.call(connection,callback);
    connection.end();
};

var onerror = function(){
    console.log(err);
};

module.exports = {
    query: function () {
        var args = arguments;
        commonMethod(function () {
            connection.query.apply(connection, args)
                .on('error', onerror);
        });
    }
}

/*
module.exports = {
    query: function(sql,callback){
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