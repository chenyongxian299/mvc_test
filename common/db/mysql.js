var mysql = require('mysql');
var config = require('../../config/config').mysql;

exports.pool = mysql.createPool({
    connectionLimit : config.connectionLimit,
    host : config.host,
    port : config.port,
    user : config.user,
    password : config.password,
    database : config.database,
    charset : config.charset,
    multipleStatements : true
});