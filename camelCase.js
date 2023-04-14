const camelCase = function(input) {
 const str = input.split('')
 console.log(str)
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


const sum = (data) => {
const max = Math.max(...data)
console.log(max)

}

console.log(sum([1,2,3]))