Big O and Sorting Algorithms

## Big O

* An example of an algorithm is a function.
* Express performance of an algorithm using Big-0 notation.
* A function's Big-O notation is determined by how it responds to different inputs.
* How much slower is it if we give it a list of 1000 things to work on instead of a list of one thing?
* How much time an algorithm is going to take given a number of inputs (n)
* We care about orders of magnitude differences in size or performance.
* 500 ms vs. 550 ms… who cares.
* 500 vs 5000 vs 50000 ms.. we care.

Where should our area of focus be on performance issues within an algorithm? Focus on the area within an algorithm that will take the most time, space, etc.

Take the following equation. Where should we focus? Which part of the algorithm impacts the size of the number the greatest? What is the Big-O?

```
3n² + 4n + n
```

if `n = 100` then the equation looks like this:

```
3(100²) + 4(100) + 100
```

which turns into

```
3(10000) + 4(100) + 100
```

and finally

```
30000 + 400 + 100
```

As you can see the `3n²` portion or _term_ of the equation dramatically impacts the result. Big-O notation focuses on the most significant term. As a result the Big-O for this equation would be `O (n²)`.

## Common Big-O expressions

* O (1) - “Oh to the One”
* O (n) - “Oh to the n”
* O (n²) - “Oh to the n squared”
* O (log n) - “Oh log n”
* O (n log n) - “Oh to the n times log n”

## O (1)

Example Algoritm that is O (1).

```js
function head(arr) {
  return arr[0]
}
```

* Oh to the one.
* No matter how big our input is, it always takes the same amount of time to compute things. That's good.
* Constant time. - O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.
* An operation which is done to reach an element directly
* No loops. Access the item and exit.

## O(n)

```js
function sum(input) {
  let result = 0
  for (var i = 0; i < input.length; i++) {
    result = result + input[i]
  }
  return result
}
```

* One loop is O (n).
* O (n) means first we would have to search it by checking `n` elements
* Worse case scenario is you have to loop through the entire array

## O (n²)

```js
function makeTuples(input) {
  var answer = []
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]])
    }
  }
  return answer
}
```

* Loop within a loop. Beware! O(n²).
* Performance get exponentially worse as n increases.

## Common sort algorithms

* Bubble Sort
* Merge Sort
* Quick Sort

### Videos

[Quick Sort](https://www.youtube.com/watch?v=vxENKlcs2Tw)
[Merge Sort vs. Quick Sort](https://www.youtube.com/watch?v=es2T6KY45cA)

As you watch the videos, try and answer the following questions:

> Which algorithms use a divide and conquer strategy?
> What were some factors that determined the winner?
> Which algorithm was easier?

## Bubble Sort - O (n²)

* Repeatedly steps through a list
* Compares each pair of adjacent items
* Swaps them if they are in the wrong order.
* Slow algorithm for sorting
* Easier to implement
* Smaller items in the list “bubble to the beginning" of the result

```js
var a = [56, 201, 2, 5, 3, 901, 177, 723, 7]

function bubbleSort(a) {
  var swapped
  do {
    swapped = false
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i]
        a[i] = a[i + 1]
        a[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

bubbleSort(a)
console.log(a)
```

## Divide and conquer

* The time it takes to find an item does not grow in proportion to the increate of the size of the number of items in the array.
* Divide and conquer search algorithms - At each step in an algorithm, you remove half of your remaining choices.
* Reaching one element from a set of 16 elements, divide the array 4 times
* Phone Book
  * Don't check every person in the book to find the right one.
  * Divide-and-conquer by looking based on where there name is alphabetically, and in every section you only need to explore a subset of the each section before you eventually find someone's phone number.
  * A bigger phone book will take longer time, but the time will not grow proportional to the increase in the additional size. This is O (log n).

## Merge Sort

* Divide the unsorted list into two sublists of about half the size.
* Repeat (Recursive). Divide each of the resulting sublists into sublists half the size.
* Base Case: When a sublist’s length is 0 or 1 return the list.
* Merge/Stitch the two sublists back into one sorted list.

Here’s how the data looks as it is being divided into sublists (phase 1). Once you hit the base case, merge each individual array back together into a sorted list (phase 2):

```js
mergeSort([2, 5, 3, 1, 4, 6, 9, 8])
```

**Phase 1 - Recursively break array down into 0 or 1 items**

> Divide each of the resulting sublists into sublists half the size.

```js
left [ 2, 5, 3, 1 ] right [ 4, 6, 9, 8 ]
left [ 2, 5 ] right [ 3, 1 ]
left [ 2 ] right [ 5 ]
left [ 3 ] right [ 1 ]
left [ 4, 6 ] right [ 9, 8 ]
left [ 4 ] right [ 6 ]
left [ 9 ] right [ 8 ]
```

**Phase 2 - sort and merge/stitch back into a single sorted list**

> Stitch each item into a larger sorted list.

```js
;[2, 5][(1, 3)][(1, 2, 3, 5)][(4, 6)][(8, 9)][(4, 6, 8, 9)][
  (1, 2, 3, 4, 5, 6, 8, 9)
]
```

**mergeSort Example**

```js
// divide-and-conquer algorithms
// MergeSort's Big O is O (n log n)
const mergeSort = arr => {
  // base case
  // if array has 0 or 1 items, were done the recursive calls and dividing the arrays.
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

  // make recursive calls to mergeSort or both arrays.
  //  these recursive calls continue until we reach the
  //  base case, that is, there is only one item in the array.
  // Once we hit the base case, program execution goes up the
  //  stack and the array is stitched into a bigger sorted array.

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

  // Non ES 6 way with concat()
  // return results.concat(left, right)

  // ES 6 with spread operator
  // Here were using ES6 spread operator to spread the contents of the
  //  arrays into a new array.
  return [...results, ...left, ...right]
}

console.log(mergeSort([2, 5, 3, 1, 4, 6, 9, 8]))
```

## Quick Sort

* The performance of a quick sort is O(n log n), typically
* Like Merge sort, Quick Sort is a divide and conquer algorithm.
* Can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.
* Simpler than merge sort

### Process

* Pick a pivot
* Partition array into two arrays: "less than the pivot value" array and a "more than the pivot value" array
* Recurse until length is 0 or 1
* After those two sorted arrays come back, concatenate into a new array in this order:
  * the sorted left list's values
  * the pivot value
  * the sorted right list's values
  * ex: `[1,2,3], 4 , [5,6,8] => [1,2,3,4,5,6,8]`

```js
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
```

## Additional Resources

* http://bigocheatsheet.com/
* https://mitpress.mit.edu/books/introduction-algorithms
* https://www.youtube.com/watch?v=vxENKlcs2Tw
* https://www.youtube.com/watch?v=es2T6KY45cA
