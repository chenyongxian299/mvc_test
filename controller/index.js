

var LOG_TAG_FILE =
    '\r\n' +
    '【DEBUG】\r\n' +
    '————————————————————————————————————————————————————————————————————————————\r\n' +
    __filename + '—>' +
    '{method}\r\n' +
    '{message}\r\n' +
    '————————————————————————————————————————————————————————————————————————————\r\n';

module.exports = function(router) {
    var LOG_TAG_FUNC = LOG_TAG_FILE.replace('{method}', 'module.exports = function (router)');
    //console.log(LOG_TAG_FUNC.replace('{message}', ''));

    router.get('/get.do', function(request, response) {
         var index_id = request.body.id;
         if(index_id == undefined){
             response.json({
                 code: 1,
                 msg: '参数错误'
             });
         }else if(index_id == 0){
             response.json({
                 code: 1,
                 msg: '参数不能为0'
             });
         }else{
             response.json({
                 code: 0,
                 msg: '成功'
             });
         }
    });
    router.post('/get.do', function(request, response) {
        var index_id = request.body.id;
        if(index_id == undefined){
            response.json({
                code: 1,
                msg: '参数错误'
            });
        }else if(index_id == 0){
            response.json({
                code: 1,
                msg: '参数不能为0'
            });
        }else{
            response.json({
                code: 0,
                msg: '成功'
            });
        }
    });

}