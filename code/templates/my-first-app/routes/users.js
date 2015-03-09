var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/all', function (req, res) {
  res.send('all users!');
});

module.exports = router;
