var express = require('express');
var app = express();
var router = express.Router();

/* GET urls listing. */
router.get('/', function(req, res, next) {
    res.send(req.params.name);
});

router.get('/:idx', function (req, res, next) {
  var idx = req.params.idx;
  res.send(idx);  
})

module.exports = router;
