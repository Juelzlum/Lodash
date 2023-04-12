function filter_list(l) {
let arr = []
for(i = 0 ; i < l.length ; i ++) {
  if(typeof l[i] === 'number') {
    arr.push(l[i])
  }
}
return arr
}
 

console.log(filter_list([1,2,'a','b']))
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

