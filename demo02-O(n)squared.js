// This is O(n2)
// Loop within a loop
// $ range=100 node demo02-O\(n\)squared.js

const { range } = require('ramda')
function makeTuples(input) {
  var answer = []
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]])
    }
  }
  return answer
}


const myArr = range(1, Number(process.env.range)

let beginTime = Date.now()
console.log(
  `makeTuples(range(1,${process.env.range})) => `,
  makeTuples(myArr))
)
console.log('time elapsed (ms): ', Date.now() - beginTime)
