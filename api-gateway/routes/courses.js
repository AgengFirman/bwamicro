var express = require('express');
var router = express.router();
const { APP_NAME } = process.env;

router.get('/', function(req, res, next) {
    res.send(APP_NAME);
});

module.exports = router;