'use strict';

var expect = require('chai').expect;
var easyFunc = require('../../app/js/easyFunc');

describe('client test', function() {

  it('should say \'Hello World\'', function() {
    expect(easyFunc()).to.eql('Hello World');
  });
});
