var express = require('express');
var app = express();
var mongoose = require('mongoose');



mongoose.connection.on('open', function (ref) {
  console.log('Connected to Mongo server...');
});

mongoose.connect('mongodb://taylor:testpassword@ds015869.mlab.com:15869/apptracker');

app.get('/', function(req, res) {
  res.send("hello world");
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
