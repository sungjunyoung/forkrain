var express = require('express');
var app = express();
var router = express.Router();

/* GET urls listing. */
router.get('/', function(req, res, next) {
    res.send('urls view');
});


module.exports = router;
