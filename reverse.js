function spinWords(string){
 let reverseWord = ''
 let reverstring = string.split(' ')
 for(let i = 0; i < reverstring.length; i++) {
  if(reverseWord) {
    reverseWord += ' ';
  }
  if(reverstring[i].length >= 5 ) {
    reverseWord += reverstring[i].split('').reverse().join("")
  }
  else {
    reverseWord += reverstring[i]
  }
}
  return reverseWord
 }


 //Spread operators

 const sum = (a, b, c) => {
return a + b + c 
 }

 const numbers = [1, 2, 3]

 console.log(sum(...numbers))




// console.log(spinWords( "Welcome"))
// console.log(spinWords( "Hey fellow warriors"))
// console.log(spinWords( "Just kidding there is still one more"))
