var express = require('express');
var router = express.Router();
var Pin = require('./model/pin.js');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

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
    var avatarUrl = '';
    if (req.user) {
        isLogin = true;
        avatarUrl = req.user._json.avatar_url;
        userId = req.user.username;
    }

    /*Find the index about user_id*/
    Pin.find({user_id: user_id}, {_id: false}, function (err, docs) {
        if (docs == null) {
            console.log(err);
        } else {
            length = docs.length;
            for (i = 0; i < length; i++) boardNo.push({id: docs[i].idx, user_id: docs[i].user_id});

            /*STEP 1 : listing the articles into formatted JSON*/
            for (j = 0; j < articleArray.length; j++) {
                var data = articleArray[j].split(/\s+/);
                var tags = [];
                for (var k = 3; data[k]; k++) tags.push(data[k]);
                articles.push({'idx': data[0], 'user_id': data[1], 'url': data[2], 'tags': tags});
            }

            // console.log(articles)
            /*STEP 2 : Matching Keyword with articles*/
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < articles.length; j++) {
                    if (articles[j].idx == boardNo[i].id || articles[j].user_id == boardNo[i].user_id) {
                        matchingList.push(articles[j]);
                    }
                }
            }

            var totalLine = matchingList.length;
            var counter = 0;
            matchingList.forEach(function (obj, i) {
                // 비동기적 이미지, 제목, 내용 크롤링
                request(obj.url, function (err, result, body) {
                    counter += 1;
                    const $ = cheerio.load(body);
                    // 1. 제목
                    var title = '';
                    title = $('h1').text();
                    if (title.length == 0) {
                        title = $('h2').text();
                    }
                    if (title.length == 0) {
                        title = $('h3').text();
                    }
                    matchingList[i].title = title;

                    // 2. 내용
                    var contents = '';
                    contents = $('p').text().substr(0, 100);
                    matchingList[i].contents = contents;

                    // 3. 이미지
                    var imageUrl = '';
                    imageUrl = $('img').attr('src');
                    matchingList[i].image = imageUrl;

                    console.log(matchingList);

                    if (counter === totalLine - 1 || totalLine == 1) {
                        res.render('user', {
                            data: matchingList,
                            isLogin: isLogin,
                            userId: userId,
                            avatarUrl: avatarUrl
                        });
                    }
                });


            });

        }
    })

})

module.exports = router;
