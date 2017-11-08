const expect = require('chai').expect
const SSPP = require('../sspp');

describe("report lost dog", function () {
  it("returns an object", function () {
   expect(SSPP.reportLostDog('name', '1111111111', '11111', 'size', 'color')).to.be.an('array');
  });

  it("has the right keys", function() {
     expect(SSPP.reportLostDog('name', '1111111111', '11111', 'size', 'color')).to.have.all.keys('dogName', 'ownerPhone', 'zipSeen', 'dogSize', 'dogColor');
   });
});

describe("get last", function () {
  it("return an array", function () {
     expect(getLostDogsList('dogName', 'search')).to.be.an('array');
  })
});

module.exports = {
  reportLostDog: reportLostDog,
  getLostDogsList: getLostDogsList
}
