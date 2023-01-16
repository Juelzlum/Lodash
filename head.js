const assertEqual = require('./Test/ assertEqualTest')
const head = (array)=> {
  return array[0]
}


assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
