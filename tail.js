const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

const tail = (arr) => {
  let newArr = arr.slice(1)
  let anotherArr = []
  anotherArr += newArr
  return anotherArr
}

const result = ["Hello", "Lighthouse", "Labs"];
console.log(tail(result))
assertEqual(result.length, 3);
