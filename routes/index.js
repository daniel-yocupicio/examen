var express = require('express');
const api = require('../apiServices/users/routes');
const router = express.Router();

// API url
router.use('/api', api);

// Views urls
router.get('/', function(req, res){
  res.render("home", {user: req.session.user});
});

router.get('/login', function(req, res){
  if(req.session.user){
    res.redirect('/');
  }else{
    res.render("login", {user: req.session.user});
  }
});

router.get('/register', function(req, res){
  if(req.session.user){
    res.redirect('/');
  }else{
    res.render("register", {user: req.session.user});
  }
});

router.get('/edit', function(req, res){
  if(!req.session.user) {
    res.redirect('/');
  } else {
    res.render("edit", {user: req.session.user});
  }
});

router.get('/users', async function(req, res){
  if(!req.session.user) {
    res.redirect('/');
  } else {
    res.render("showusers", {user: req.session.user});
  }
});

module.exports = router;