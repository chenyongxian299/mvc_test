var MYSQL = require('../db/mysql');

exports.query = function (arr_sql, conn) {
    return new Promise(function (resolve, reject) {
        var _str_sql = '';
        for (var _index in arr_sql) {
            _str_sql += arr_sql[_index];
        }
        if ('undefined' == typeof (conn)) {
            MYSQL.pool.query(_str_sql, function (err, rows, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        } else {
            conn.query(_str_sql, function (err, rows, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        }
    });
};
exports.insert = function(_arr_sql, conn){
    var _str_sql = '';
    for (var _index in arr_sql) {
        _str_sql += arr_sql[_index];
    }
    if('undefined' == typeof(conn)){
        MYSQL.pool.query(_str_sql, function(err, rows, fields){
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    }else{
        conn.query(_str_sql, function (err, rows, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    }
};