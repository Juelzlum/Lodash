const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')


  const assertArraysEqual = (arr1, arr2) => {
    const answer = eqArrays(arr1,arr2)
    if(!answer) {
      return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`
    }

     return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`
   
  }


module.exports = assertArraysEqual


