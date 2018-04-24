// This is O(1) = "Oh to the one".
// No matter how big our input is,
// it always takes the same amount of time to compute things.

// Loop through the entire array once.
// $ range=1001 node demo00-O(1).js
const { range } = require('ramda')
function last(arr) {
  return arr[arr.length - 1]
}

const myArr = range(1, Number(process.env.range))

let beginTime = Date.now()

console.log(`last(range(1, ${process.env.range})) => `, last(myArr))
console.log('time elapsed (ms): ', Date.now() - beginTime)
