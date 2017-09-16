var express = require('express');
var router = express.Router();

var Pin = require("./model/pin.js");
//
var pin = new Pin({
  user_id : "Doyeon",
  idx : 1
});

router.get('/', function(req, res, next) {
  pin.save((err, doc)=> {
    if(err) console.log(err);
    else res.send("success");
  });
});
//MADE MIDDLEWARE FOR USING IN EXPRESS APP
module.exports = router;
