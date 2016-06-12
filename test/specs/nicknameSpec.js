'use strict';
let chai = require('chai');
let sinonChai = require('sinon-chai');
let expect = chai.expect;
chai.should();
chai.use(sinonChai);

let nickname = require('../../index');

let mockListA = ['nil', 'one', 'two'];
let mockListB = ['---', '...', '!!!'];

describe('#generate', function () {
  let val = nickname.generate(mockListA, mockListB);

  it('should return a string', function () {
    val.should.be.a('string');
  });

  it ('should return a valid nickname', function () {
    val.should.have.lengthOf(9);
    /[a-z]{3}[\-\.\!]{3}[0-9]{3}/.test(val).should.be.true;
  });
});