'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require('../../server.js');

var url = 'http://localhost:3000';

describe('access the endpoint', function() {
  it('should receive a message', function(done) {
    chai.request(url)
    .get('/')
    .end(function(err, res) {
      expect(err).to.be.null;
      console.log('thisis res.body' + res.body);
      expect(res.body).to.include.property('msg');
      done();
    });
  });
});
