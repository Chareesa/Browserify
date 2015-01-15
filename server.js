'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.json({msg: 'homescreen'});
});

app.get('/highFive', function(req, res) {
  res.json({msg: 'high five bro'});
});

app.use(express.static(__dirname + '/build'));

app.listen(port);
console.log('you have entered port ' + port);
