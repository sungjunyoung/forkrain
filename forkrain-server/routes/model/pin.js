var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/forkrain' , { useMongoClient: true });

var pin = mongoose.Schema({
    "user_id": String,
    "idx": Number
}, {versionKey: false}/*__v버전키 필드 제거*/);
module.exports = mongoose.model('pin', pin);
