var express = require('express');
var app = express();
var router = express.Router();
var Pin = require("./model/pin.js");


router.post('/insert', function (req, res, next) {
  /*TEST CODE*/
  var pin = new Pin({
    user_id : "API TEST",
    idx : 200
  });
  /***********/

  pin.save((err, doc)=> {
    if(err) console.log(err);
    else console.log("save DB");
  });
})

router.delete('/delete', function (req, res, next) {
  /*TEST data*/
  user_id = "API TEST";
  idx = 200;
  /***********/

  Pin.deleteOne({user_id:user_id}, (err, doc)=> {
    if(err) console.log(err);
    else console.log("remove DB");
  });
})

module.exports = router;
