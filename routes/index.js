var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var _str_render = req.url;
  if(_str_render.substr(_str_render.length - 3) == '.js'){
    next();
  }else {
      res.render('/index.html', {title: 'Express'},function(err){
         console.log(err);
         next();
      });
  }
});

module.exports = router;
