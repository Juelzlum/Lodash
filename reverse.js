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





console.log(spinWords( "Welcome"))
console.log(spinWords( "Hey fellow warriors"))
console.log(spinWords( "Just kidding there is still one more"))
