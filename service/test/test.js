var MYSQL_UTIL = require('../../common/utils/mysql_util');

exports.list = function () {

}

exports.get = function(test_id){
    return new Promise(function (resolve, reject) {
        if('undefined' == typeof(test_id) || test_id == null || test_id == ''){
            reject({
                code: 1,
                msg: '姓名参数不能为空'
            });
        }else{
            var _arr_sql = [];
            _arr_sql.push('    SELECT id');
            _arr_sql.push('               , name');
            _arr_sql.push('    FROM test')
            _arr_sql.push('    WHERE id = ' +test_id);
            MYSQL_UTIL.query(_arr_sql).then(function (datas) {

            })
        }
    });
};
exports.add = function (test_name) {
    return new Promise(function (resolve, reject) {
        if('undefined' == typeof(test_name) || test_name == null || test_name == ''){
            reject({
                code: 1,
                msg: '姓名参数不能为空'
            });
        }else{
            var _arr_sql = [];
            _arr_sql.push('    ')
        }
    });

};