var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/card', function(req, res, next) {
  res.render('card', { title: 'Express' });
});

router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'Express' });
});

module.exports = router;
