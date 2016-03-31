var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config.js')


mongoose.connection.on('open', function (ref) {
  console.log('Connected to Mongo server...');
});

mongoose.connect(config.database);

//Static route location
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send("hello world");
})


//Routes for the admin section
var adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

//Route for the admin dashboard
adminRouter.get('/', function(req, res) {
  res.send("Admin");
});

//Route for the Uuser page
adminRouter.get('/users', function(req, res) {
  res.send("Users");
});

//Routes for the user dashboard
var dashboardRouter = express.Router();

dashboardRouter.get('/', function(req, res) {
  res.send("Dashboard");
});

app.use('/admin', adminRouter);
app.use('/dashboard', dashboardRouter);

//Start the server
app.listen(config.port, function () {
  console.log('Example app listening on port 8080.');
});

