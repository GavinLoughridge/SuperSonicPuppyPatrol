const dogArray = [];

function reportLostDog(dog, phone, seen, size, color) {
  let obj = {};
  obj.dogName = dog;
  obj.ownerPhone = phone;
  obj.zipSeen = seen;
  obj.dogSize = size;
  obj.dogColor = color;
  dogArray.push(obj);
  return dogArray;
}

function getLostDogsList() {
  
}


module.exports = {
  reportLostDog: reportLostDog,
  getLostDogsList: getLostDogsList
}
