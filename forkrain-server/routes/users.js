var express = require('express');
var router = express.Router();
var Pin = require('./model/pin.js');
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users');
});

router.get('/:users_id', function (req, res, next) {
    var user_id = req.params.users_id;
    var length;
    var boardNo = [];
    var text = fs.readFileSync('please-edit-me.txt', 'utf8');
    var articleArray = text.split(/\n+/);
    var articles = [];
    var matchingList = [];

    var isLogin = false;
    var userId = '';
    if (req.user) {
        isLogin = true;
        console.log(req.user.username);
        userId = req.user.username;
    }

    /*Find the index about user_id*/
    Pin.find({user_id: user_id}, {_id: false, user_id: false}, function (err, docs) {
        if (docs == null) {
            console.log(err);
        } else {
            length = docs.length;
            for (i = 0; i < length; i++) boardNo.push(docs[i].idx);

            /*STEP 1 : listing the articles into formatted JSON*/
            for (j = 0; j < articleArray.length; j++) {
                var data = articleArray[j].split(/\s+/);
                var tags = [];
                for (var k = 3; data[k]; k++) tags.push(data[k]);
                articles.push({'idx': data[0], 'user_id': data[1], 'url': data[2], 'tags': tags});
            }
            /*STEP 2 : Matching Keyword with articles*/
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < articles.length; j++) {
                    if (articles[j].idx == boardNo[i]) matchingList.push(articles);
                }
            }
            res.render('user', {data: matchingList, isLogin: isLogin, userId: userId});
        }
    })

})

module.exports = router;
