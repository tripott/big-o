const quickSort = arr => {
  // base case - if you have a list of length 1 or 0, then there's noting to return
  //the list so it can be concatentated up the stack.
  if (arr.length < 2) return arr
  // The last element in the list is the pivot.
  const pivot = arr[arr.length - 1]
  // Everything smaller placed in lessThanPivot
  // Everything greater placed in the greaterThanPivot.
  const lessThanPivot = []
  const greaterThanPivot = []
  for (let x = 0; x < arr.length - 1; x++) {
    if (arr[x] < pivot) {
      lessThanPivot.push(arr[x])
    } else {
      greaterThanPivot.push(arr[x])
    }
  }
  // console.log('arr', arr)
  // console.log('pivot', pivot)
  // console.log('lessThanPivot', lessThanPivot)
  // console.log('greaterThanPivot', greaterThanPivot)
  // console.log('----------------')
  // recursively call quick sort on the lessThanPivot and greaterThanPivot lists independently
  // After those two sorted arrays come back, concatenate
  //  the sorted left list, the pivot, and then the right list (in that order.)
  // Here were using ES6 spread operator to spread the contents of the resulting
  //  arrays into a new array.
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]
}
console.log(quickSort([11, 3, 5, 12, 10, 2, 6, 4, 1, 9, 8, 7]))
