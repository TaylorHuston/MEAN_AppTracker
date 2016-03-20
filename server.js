var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./server/config/config.js')


mongoose.connection.on('open', function (ref) {
  console.log('Connected to Mongo server...');
});

mongoose.connect(config.database);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send("hello world");
})

app.listen(config.port, function () {
  console.log('Example app listening on port 8080.');
});
