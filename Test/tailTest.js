const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('return "Lighthouse","Labs" for ["Hello", "Lighthouse", "Labs"]',() => 
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),"Lighthouse","Labs"))

})
//const result = ["Hello", "Lighthouse", "Labs"];
//console.log(tail(result))
//assertEqual(result.length, 3);


 