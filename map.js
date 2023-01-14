const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const lengthLighhouses = lighthouses.map(function(lightHouse) {
  return lightHouse.length
})

//console.log(lengthLighhouses)

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = []
  for (let item of array) {
   results.push(callback(item));
    
}
  return results
}

const results1 = map(words, word => word[0]);

console.log(results1)