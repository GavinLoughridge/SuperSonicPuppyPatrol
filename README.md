# SuperSonicPuppyPatrol

Requierments:
a user can add basic info about a lost dog including: dog name, owner phone number, dog color, zip code last seen, dog size (small/med/large)

- a user can call a "reportLostDog" function and pass it
   - a name as a string
   - a 10 digit phone number (with format: 2223334444, 222-3333-4444, or (222) 333-4444)
   - a 5 digit zip code
   - a dog size as a string (extra small, small, medium, large, extra large)
   - a color as a string
- reportLostDog should create a "lostDog" object with key value pairs for: dogName, ownerPhone, zipSeen, dogSize, and dogColor
- reportLostDog should add the "lostDog" object to a "lostDogs" array that is a list of all reported lost dogs

a user can get a list of all dog with a given: color, size, last seen zip code
- a user can call a "getLostDogsList" function and pass it
  - a key to filter on as a string (either dogName, zipSeen, dogSize, or dogColor)
  - the value they want to filter that field on (e.g. "brown", "black", "78750", "small")
- getLostDogsList should return an array of all lostDog objects which have a key/value pair matching the key/value pair submitted by the user


![alt text](https://media.giphy.com/media/3boPPdHk2ueo8/giphy.gif)
