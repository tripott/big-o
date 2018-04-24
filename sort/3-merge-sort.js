// divide-and-conquer algorithms
// MergeSort's Big O is O(n log n)
const mergeSort = arr => {
  // base case
  // if array has 0 or 1 items, were done the recursive calls
  //  and dividing the arrays.
  // Simply return the array with 1 item.
  // program execution goes up the stack and the array is stitched into a
  //   bigger sorted array.
  if (arr.length < 2) {
    return arr
  }

  // Take array. find middle and split into two arrays:
  //  leftArr and rightArr
  const length = arr.length
  const middle = Math.floor(length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle, length)
  //console.log('leftArr', leftArr, 'rightArr', rightArr)

  // make recurisve calls to mergeSort or both arrays.
  //  these recusive calls continue until we reach the
  //  base case, that is, there is only one item in the array.
  // Once we hit the base case, program execution goes up the
  //  stack and the array is stiched into a bigger sorted array.

  // PHASE 1 - uncomment to see phase 1
  // console.log('left', leftArr, 'right', rightArr)

  const stitchResult = stitch(mergeSort(leftArr), mergeSort(rightArr))
  // PHASE 2 - uncomment to see phase 2
  //console.log(stitchResult)
  return stitchResult
}

// stitch takes both lists and inserts the smaller value first.
// returning creating a bigger, sorted list.
const stitch = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift will remove the number off the FRONT of the array.
      //  and push will add the number onto the BACK of the array.
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  // Non ES 6 way wiht concat()
  // return results.concat(left, right)

  // ES 6 with spread operator
  // Here were using ES6 spread operator to spread the contents of the
  //  arrays into a new array.
  return [...results, ...left, ...right]
}

console.log(mergeSort([2, 5, 3, 1, 4, 6, 9, 8]))
