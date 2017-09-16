var express = require('express');
var router = express.Router();
var Pin = require('./model/pin.js');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

router.get('/:users_id', function (req, res, next) {
  var user_id = req.params.users_id;
  var length;
  var boardNo = [];

  var text = fs.readFileSync('please-edit-me.txt','utf8');
  var articleArray = text.split(/\n+/);
  var articles = [];
  var lineCount = 0;
  var totalLine = articleArray.length;

  // var matchingList = [];
  // var idx=[];
  //

  /*Find the index about user_id*/
  Pin.find({user_id: user_id}, {_id:false, user_id:false}, (err, docs)=>{
    if(docs==null) {
      console.log(err);
    } else {
      length = docs.length;
      for(var i=0; i<length; i++) boardNo.push(docs[i].idx);
    }
  })

  /*STEP 1 : listing the articles into formatted JSON*/
  articleArray.forEach(function(str) {
    if(str) {
      var data = str.split(/\s+/);
      var tags = [];
      i=3;
      while(data[i]) {
        tags.push(data[i]);
        i++;
      }
      articles.push({'idx':data[0], 'user_id':data[1], 'url':data[2], 'tags':tags});
    }
  });

  res.send("test");

  //
  //   idx.foreach(function (idx_str) {
  //     articles.forEach(function(article_str) {
  //       if(article_str) {
  //         var idxs = article_str.idx;
  //         if(idx_str==idxs) matchingList.push(str);
  //
  //         lineCount += 1;
  //         if(lineCount == totalLine-1){
  //           console.log(matchingList);
  //         }
  //       }
  //     });
  //   })
  //
  //   // if(docs.user_id!=null){
  //   //   res.render('user', {data : docs.idx});
  //   // }else{
  //   //   res.render('user', {data : [""]});
  //   // }
  // /*STEP 2 : Matching Keyword with articles*/
  // console.log(idx);
})

module.exports = router;
