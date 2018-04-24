// This is O(n)
// Loop through the entire array once.
// $ range=1000 node demo01-O\(n\).js
const { range } = require('ramda')
function sum(arr) {
  let result = 0
  for (var i = 0; i < arr.length; i++) {
    result = result + arr[i]
  }
  return result
}

const myArr = range(1, Number(process.env.range))

let beginTime = Date.now()
console.log(`sum((range(1, ${process.env.range}))) => `, sum(myArr))
console.log('time elapsed (ms): ', Date.now() - beginTime)
