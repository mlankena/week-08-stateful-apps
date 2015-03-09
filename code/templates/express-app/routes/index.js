var express = require('express');
var router = express.Router();
var users = require('../libs/users.js');

/* Main landing page. */
router.get('/', function(req, res) {
  var uu = users.getUsers();
  res.render('index', { title: 'Express',
                        names: uu });
});

module.exports = router;
