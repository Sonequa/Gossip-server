var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express' });
  console.log('Yes');
  res.send('Successfully connected with server.');
});

module.exports = router;
