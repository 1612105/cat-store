var express = require('express');
var router = express.Router();

var model =require("../models");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: '1612105 - Ho Thi Diep' });
});

module.exports = router;
