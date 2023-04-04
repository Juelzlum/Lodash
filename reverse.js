function spinWords(string){
  // const arrString = string.split(' ')
  for(const words of string.split(' ')) {
   const word = words.split('')
  //  console.log(word)
   if(word.length > 5) {
    const reverse = word.reverse().join()
    // console.log(reverse)
   }
  
  }
    

  return reverse
}


console.log(spinWords( "Hey fellow warriors"))
