var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('ref-page.ejs');
})

module.exports = router;
