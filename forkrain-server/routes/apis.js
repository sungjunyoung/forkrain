var express = require('express');
var app = express();
var router = express.Router();
var Pin = require("./model/pin.js");

console.log("create apis.js");

router.post('/click', function (req, res, next) {
  var pin = new Pin({
    user_id : "API TEST",
    idx : 200
  });

  pin.save((err, doc)=> {
    if(err) console.log(err);
    else console.log("save DB");
  });
});

module.exports = router;
