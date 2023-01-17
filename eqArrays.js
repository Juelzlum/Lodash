
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //if an else statement was here, it only imply the else section of the function
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

    //having an else statement here, it will compare both cases, IF is not equal it will return true. 

  }
  return true;
};

module.exports = eqArrays;


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) => should pass
//eqArrays(["1", "2", "3"], ["1", "2", "3"]) => should pass
