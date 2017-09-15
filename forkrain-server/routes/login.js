var express = require('express');
var router = express.Router();

var passport = require('passport');
router.use(require('cookie-parser')());
router.use(require('body-parser').urlencoded({extended: true}));
router.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}));

router.use(passport.initialize());
router.use(passport.session());
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;


router.get('/', function (req, res, next) {
    res.render('login');
});


module.exports = router;
