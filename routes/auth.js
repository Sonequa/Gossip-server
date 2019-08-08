var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.send('This is login api.');
})

module.exports = router;