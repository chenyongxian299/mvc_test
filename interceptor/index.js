var FILE = require("fs");

exports.filter = function(req, res, next){
    var _str_render = req.url;
    var _str_render_index = 'index';

    if(_str_render.indexOf('.do') == _str_render.length - 3){
        next();
    }else{
        if(_str_render.substr(_str_render.length - 3) == '.js'){
            var _file_path = 'views' + _str_render;
            if(FILE.existsSync(_file_path)){
                var _content_file = FILE.readFileSync(_file_path);
                res.send(_content_file);
                res.end();
                return;
            }else{
                next();
            }
        } else{
            res.render(_str_render_index);
        }
    }
};