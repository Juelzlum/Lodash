const findKey = (obj1 , callback) => {
 
  for(let key in obj1)  
    if(callback(obj1[key])) {
    return key
  }
return undefined 
}


/*const findKeyByValue = (object, value) => {
  for(let show in object) {
    //console.log(object[show])
    if(object[show] === value) {
      return (show)
    }
  }
  return 'Undefined'
  }
  */
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"