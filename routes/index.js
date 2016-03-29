var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/neighborhoods', function(req, res, next){
  res.render('neighborhoods');
});

router.get('/stands', function(req, res, next){
  res.render('stands');
});

module.exports = router;
