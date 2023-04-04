const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')

const without = (arr1, arr2) => {
  let newArray = []
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])){
      newArray.push(arr1[i])
    }
  }
  return newArray;
};

const middle  = (array) => {
  const index = array.length / 2 //divide by 2 to find the middle point of the array
  const middle = []
  const length = array.length

  if (length < 3) return middle; // less than 2 in the arrays returns an empty array
  
  
  if(length % 2 !== 0) {  // odd number, returns the middle 
    middle.push(index)
    return Math.ceil(middle)
  }
  if(length % 2 === 0) { // even number return the two indexes in the middle
    middle.push(index)
    middle.push(index + 1)
    return middle
  }



}

module.exports = middle;
console.log(middle([1, 2, 3, 4])) 
console.log(middle([1, 2, 3, 4, 5,6])) 
