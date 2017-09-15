var express = require('express');
var app = express();
var router = express.Router();


router.get('/logout', function (req, res, next) {
    req.session.destroy();  // 세션 삭제
    // res.clearCookie(); // 세션 쿠키 삭제
});

module.exports = router;
