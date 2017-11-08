const dogArray = [];

function reportLostDog(dog, phone, seen, size, color) {
  let obj = {};
  obj.dogName = dog;
  obj.ownerPhone = phone;
  obj.zipSeen = seen;
  obj.dogSize = size;
  obj.dogColor = color;
  dogArray.push(obj);
  return obj;
}

function getLostDogsList(dogName, search) {
  return dogArray;
}


module.exports = {
  reportLostDog: reportLostDog,
  getLostDogsList: getLostDogsList
}
