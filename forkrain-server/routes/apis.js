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

router.post('/insert', function (req, res, next) {
    /*TEST CODE*/
    var pin = new Pin({
        user_id: "sungjunyoung",
        idx: 1
    });
    /***********/

    pin.save(function (err, doc) {
        if (err) console.log(err);
        else console.log("save DB");
    });
});

router.delete('/delete', function (req, res, next) {
    /*TEST data*/
    user_id = "API TEST";
    idx = 200;
    /***********/

    Pin.deleteOne({user_id: user_id}, function (err, doc) {
        if (err) console.log(err);
        else console.log("remove DB");
    });
});

router.get('/isLike', function (req, res, next) {
  var user_id = req.params.user_id;
  var idx = req.params.idx;

  Pin.find({user_id: user_id, idx : idx}, function (err, docs) {
    if(docs==null) {
      return false;
    } else {
      return true;
    }
  })
})

module.exports = router;
