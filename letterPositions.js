const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};
const assertArraysEqual =(arr1, arr2) => {
  console.log('Assertion', eqArrays(arr1,arr2))
}


const eqArrays =(arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false
  }
//if an else statement was here, it only imply the else section of the function
    for(let i = 0 ; i < arr1.length ; i++) {
      if(arr1[i] !== arr2[i]) {
        return false 
      }
      //having an else statement here, it will compare both cases, IF is not equal it will return true. 
    }
    return true
  }

const letterPosition = String => {
  const results = {};
  // logic to update results here
  for(let i = 0 ; i < String.length ; i++ ) { //loop thru string
    //console.log([i])  
    //making it string as a key
    if(String[i] !== ' ') { //ignoring the spaces 
      if(results[String[i]]){ //if result string[i] exisits
      results[String[i]].push(i) //push into an array
    }
      else{ //if it doesnt,just have as i
      results[String[i]] = [i]
  }

  }
}
  return results;
}

console.log(letterPosition("lighthouse in the house"))
/*{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};*/