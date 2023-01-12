const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys= Object.keys(object1)
  const obj2Keys=Object.keys(object2)
  console.log(obj1Keys)
  console.log(obj2Keys)
  if(obj1Keys.length !== obj2Keys.length) {
    return false
  }
  for(let keys of obj1Keys) {
    if(obj1Keys[keys] !== keys[obj2Keys]){
      return false
    }
  }
  return true
  }

 
  
 
const shirtObject = { color: "red", size: "medium",};
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject,longSleeveShirtObject))

