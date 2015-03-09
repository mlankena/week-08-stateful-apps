var express = require('express');
var router = express.Router();

var user = require('../lib/user');

// We use this to communicate messages between redirects. Because
// this is a global variable we can only support a single user.
var authmessage;

// # User Server-Side Routes

// ## login
// Provides a user login view.
router.get('/login', function(req, res){
  var message = authmessage || '';  // capture a message if it exists.
  authmessage = undefined;          // reset authmessage.
  res.render('login', { title   : 'User Login',
                        message : message });
});

// ## auth
// Performs **basic** user authentication.
router.post('/auth', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  user.lookup(username, password, function(error, user) {
    if (error) {
      authmessage = error;          // capture the error message.
      res.redirect('/user/login');
    }
    else {
      authmessage = user;
      res.redirect('/user/main');   // capture the user object.
    }
  });
});

// ## logout
// Does nothing!
router.get('/logout', function(req, res) {
  res.redirect('/user/login');
});

// ## main
// The main user view.
router.get('/main', function(req, res) {
  // capture the user object or create a default.
  var message = authmessage || { username : 'nobody', password : 'nopass' };
  // reset authmessage.
  authmessage = undefined;
  res.render('main', { title   : 'User Main',
                       message : 'Login Successful',
                       username : message.username,
                       password : message.password });
});

router.get('/online', function(req, res) {
  res.send('You are the only one online!');
});

module.exports = router;