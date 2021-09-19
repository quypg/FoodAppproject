var express = require('express');
var router1 = express.Router();
const auth =require('../middle/auth')

router1.get('/',[auth.checklogin], function(req, res, next) {
    res.render('products', { title: 'Express' });
  });

  module.exports = router1;