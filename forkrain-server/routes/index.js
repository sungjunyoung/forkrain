var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res, next) {
  var text = fs.readFileSync('please-edit-me.txt','utf8');
  var articleArray = text.split(/\n+/);
  var articles = [];

  articleArray.forEach(function(str) {
    if(str) {
      var data = str.split(/\s+/);
      var tags = [];
      i=3;
      while(data[i]) {
        tags.push(data[i]);
        i++;
      }
      articles.push({'idx':data[0], 'user_id':data[1], 'url':data[2], 'tags':tags});
    }
    res.render('index', {data: articles});

  });

});


module.exports = router;
