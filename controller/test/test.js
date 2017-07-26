
module.exports = function(routen){
    routen.get('/get.do',function(req, resp){
        resp.json({
            code: 0,
            msg: 'success'
        });
    });

    routen.post('/get.do',function(req, resp){
        resp.json({
            code: 0,
            msg: 'success'
        });
    });

    routen.post('/add.do',function(req, resp){

    });

    routen.post('/set/name.do', function(req, resp){

    });
};