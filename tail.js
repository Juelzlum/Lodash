
const tail = (arr) => {
  let newArr = arr.slice(1)
  let anotherArr = []
  anotherArr += newArr
  return anotherArr
}

module.exports = tail

console.log(tail(["Hello", "Lighthouse", "Labs"]))