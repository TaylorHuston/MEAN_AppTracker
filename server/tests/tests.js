var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();
var server = require('../../server');
chai.use(chaiHttp);

describe('staticRoute', function () {
  it('should go to the home page', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
})
