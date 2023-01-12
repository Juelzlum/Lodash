const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

/*const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for(let item of allItems) {
    console.log(item)
    if(itemsToCount[item]){
    if(results[item]){
      results[item] += 1
    }
    else {
      results[item] = 1
    }
  }
  }
  return results;
}ts;
}*/
const countLetter = (strings) => {
  let obj = {} //create an object
  //let count = 0 with the count
  for(let letter of strings) { //loop the string
    if(obj[letter]) {
      obj[letter] += 1
    }
    else {
      obj[letter] = 1 
    }
  }
  return obj
}

console.log(countLetter("lighthouse in the house"))
console.log(countLetter('Julian'))
