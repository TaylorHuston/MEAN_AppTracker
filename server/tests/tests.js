var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();
var server = require('../../server');
chai.use(chaiHttp);

describe('staticRouter', function () {
  it('should go to the home page', function (done) {
    chai.request('http://localhost:8080/')
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});

describe('adminRouter', function () {
  it('should go to the Admin Dashboard', function (done) {
    chai.request('http://localhost:8080/')
      .get('admin')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should go to the Admin Dashboard - Users', function (done) {
    chai.request('http://localhost:8080/')
      .get('admin/users')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});

describe('dashboardRouter', function () {
  it('should go to the User Dashboard', function (done) {
    chai.request('http://localhost:8080/')
      .get('dashboard')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});

describe('loginRouter', function () {
  it('should go to login', function (done) {
    chai.request('http://localhost:8080/')
      .get('login')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should process login form', function (done) {
    chai.request('http://localhost:8080/')
      .post('login')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

});
