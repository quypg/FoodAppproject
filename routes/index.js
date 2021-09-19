var express = require('express');
const jwt = require('jsonwebtoken')
var router = express.Router();
var adminController = require('../controllers/admin')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* POST Login page. */
router.post('/', (req, res,next) => {
  const account = {
    id:1, 
    username: 'admin@gmail.com',
  }
  const {username ,password } = req.body
  const check = adminController.login(username,password)
  if(check){
    const access_token =jwt.sign({account:account},'mysecretkey')
    req.session.access_token = access_token
    res.redirect("/products");
  }
  else{
    res.redirect("/");
  }
});

module.exports = router;
