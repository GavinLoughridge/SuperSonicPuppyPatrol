const expect = require('chai').expect;
const SSPP = require('../sspp');

describe("report lost dog", function () {
  it("returns an object", function () {
     expect(SSPP.reportLostDog('name', '1111111111', '11111', 'size', 'color')).to.be.an('array');
  });
})
