var express = require('express');
var router = express.Router();
var users = require('./users');
var auth = require('./auth');

/* GET home page. */

router.use('/users', users);
router.use('/auth', auth);

router.get('/', function(req, res) {
// res.render('index', { title: 'Express' });
    console.log('Yes');
    res.send('Successfully connected with server.');
});

module.exports = router;
