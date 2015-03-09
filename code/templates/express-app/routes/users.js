var express = require('express');
var router = express.Router();

var users = require('../libs/users.js');

router.get('/new', function (req, res) {
  var name = req.query.name;
  var user = name ? users.newUser(name) : name;
  res.render('new-user', { title  : 'New User',
                           'user' : user });
});

router.get('/:name', function (req, res) {
  var name = req.params.name;
  var user = name ? users.getUser(name) : name;
  res.render('info-user', { title: 'User Information',
                            name : name,
                            user : user });
});

module.exports = router;
