const camelCase = function(input) {
 const str = input.split('')
 console.log(str)
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


// const sumLargestNumbers = function(data) {
//   let bigNum = 0
//   let numTwo = 0
//   for(let i = 0;  i < data.length ; i++) {
//     if (data[i]> bigNum && data[i] != numTwo) {
//       bigNum = data[i]
//     for(let j = 0; j< data.length; j++) {
//       if(data[j]> numTwo && data[j] != bigNum) 
//         numTwo = data[j]
//     }
//     }
//     }
//     return bigNum + numTwo
//   }

const sum = (data) => {
const max = Math.max(...data)
for(let i = 0 ; i < data.length; i ++) {
  if(data[i] < max) {
    numTwo = Math.max(data[i])
    
  }
}
return max + numTwo
}

console.log(sum([11,2,3,4,5,6]))