var express = require('express');
var router = express.Router();
const fs = require('fs');
const ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('result');
});

module.exports = router;
