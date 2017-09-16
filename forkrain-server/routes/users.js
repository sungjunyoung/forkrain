var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.get('/:users_id', function (req, res, next) {
  var user_id = req.params.users_id;

  res.render('user', { user_id : user_id });
})

module.exports = router;
