var express = require('express');
var app = express();
var router = express.Router();
var Pin = require("./model/pin.js");
var fs = require('fs');

router.get('/search', function (req, res, next) {
    var text = fs.readFileSync('please-edit-me.txt', 'utf8');
    var articleArray = text.split(/\n+/);
    var articles = [];
    var keyword = req.query.keyword;
    var lineCount = 0;
    var matchingList = [];
    var totalLine = articleArray.length;

    /*STEP 1 : listing the articles formatted JSON*/
    articleArray.forEach(function (str) {
        if (str) {
            var data = str.split(/\s+/);
            var tags = [];
            i = 3;
            while (data[i]) {
                tags.push(data[i]);
                i++;
            }
            articles.push({'idx': data[0], 'user_id': data[1], 'url': data[2], 'tags': tags});
        }
    });
    /*STEP 2 : Matching Keyword with articles*/
    articles.forEach(function (str) {
        if (str) {
            var tags = str.tags;
            tags.forEach(function (tags_str) {
                if (tags_str == keyword) matchingList.push(str);
            })
        }

        lineCount += 1;
        if (lineCount == totalLine - 1) {
            res.render('index', {data: matchingList});
        }
    });
});

router.get('/data-fetch', function (req, res, next) {
    res.json({result: 'this is OK'})
});

router.get('/insert', function (req, res, next) {
    var pin = new Pin({
        user_id: req.query.user_id,
        idx: req.query.idx
    });

    pin.save(function (err, doc) {
        if (err) console.log(err);
        else console.log("save DB");
    });
});

router.get('/delete', function (req, res, next) {
    var user_id = req.query.user_id;
    var idx = req.query.idx;

    Pin.deleteOne({user_id: user_id, idx: idx}, function (err, doc) {
        if (err) console.log(err);
        else console.log("remove DB");
    });
});

router.get('/is_like', function (req, res, next) {
    var user_id = req.query.user_id;
    var idx = req.query.idx;

    console.log(user_id);
    // console.log(idx);

    Pin.find({user_id: user_id, idx: idx}, function (err, docs) {
        console.log(docs);
        if (docs.length == 0) {
            res.json({result: false})
        } else {
            if(user_id == undefined){
                res.json({result: false})
            } else {
                res.json({result: true})
            }

        }
    })
});

module.exports = router;
