var express = require('express');
var router = express.Router();
var pg = require('pg');


var connString = 'postgres://vagrant:vagrant@localhost/vagrant';


router.get('/users', function (req, res) {
  pg.connect(connString, function (err, client, done) {
    if (err) {
      res.send('There was an error connecting to database');
    }
    else {
      client.query('select * from users', function (err, result) {
        // Ends the "transaction":
        done();
        // Disconnects from the database:
        client.end();
        if (err) {
	  res.send('There was an error querying the database');
        }
        else {
	  res.render('db-users', { title : 'DB Users',
				   rows  : result.rows });
        }
      });
    }
  });
});


module.exports = router;
