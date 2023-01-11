const eqArrays =(arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false
  }
    for(let i = 0 ; i < arr1.length ; i++) {
      if(arr1[i] !== arr2[i]) {
        return false 
      }
    }
    return true
  }

  
//const assertArraysEqual =(arr1, arr2) => {
  //console.log('Assertion', eqArrays(arr1,arr2))}

const without = (arr1, arr2) => {
  let newArray = []
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])){
      newArray.push(arr1[i])
    }
  }
  return newArray;
};



console.log(eqArrays(["1", "2", "3"], [1]))

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]