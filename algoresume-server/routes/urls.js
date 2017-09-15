var express = require('express');
var router = express.Router();

/* GET urls listing. */
router.get('/', function(req, res, next) {
    //res.send(req.params.name);
    res.render('urls');
});


router.get('/:url_id', function (req, res, next) {
  var url_id = req.params.url_id;
  res.render('url', { url_id : url_id });
})

module.exports = router;
