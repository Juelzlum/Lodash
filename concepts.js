const joinList = (list) => {
  let result = '';
  //loop the arrays
  for (let i = 0; i < list.length; i++) {
    if (typeof (list[i]) === 'string') {
      //print the array index out 
      result += list[i];
    }
    if (i < list.length - 1) {
      result += ", ";
    }
  }
  return result;
};


const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);