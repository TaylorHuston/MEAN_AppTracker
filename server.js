var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var config = require('./config/config.js')

mongoose.connection.on('open', function (ref) {
  console.log('Connected to Mongo server...');
});

mongoose.connect(config.database);

//Body parser to pull information from POST requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
  next();
});

//Static route location
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send("hello world");
})


//Routes for the admin section
var adminRouter = express.Router();

adminRouter.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

//Route for the admin dashboard
adminRouter.get('/', function (req, res) {
  res.send("Admin");
});

//Route for the Uuser page
adminRouter.get('/users', function (req, res) {
  res.send("Users");
});

//Routes for the user dashboard
var dashboardRouter = express.Router();

dashboardRouter.get('/', function (req, res) {
  res.send("Dashboard");
});

dashboardRouter.get('/:_id', function (req, res) {
  res.send("Dashboard " + req.params._id);
});

//Routes for logging in
var loginRouter = express.Router();

loginRouter.get('/', function (req, res) {
  res.send('Login form');
})

loginRouter.post('/', function (req, res) {
  res.send('Processing login form');
})

app.use('/admin', adminRouter);
app.use('/dashboard', dashboardRouter);
app.use('/login', loginRouter);

//Start the server
app.listen(config.port, function () {
  console.log('Example app listening on port 8080.');
});
