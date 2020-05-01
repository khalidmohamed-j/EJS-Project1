var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello from Kurts Flower Shop');
  res.render('kurtsflowershop', { title: 'Kurts Flower Shop' });
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
  res.render('kurtshelp', { title: 'Kurts Flower Shop' });
});

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('kurtsregister', { title: 'Kurts Flower Shop' });
});

module.exports = router;
