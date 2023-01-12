const findKeyByValue = (object, value) => {
for(let show in object) {
  //console.log(object[show])
  if(object[show] === value) {
    return (show)
  }
}
return 'Undefined'
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))// ==> drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")) // => undefined); 

