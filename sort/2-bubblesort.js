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
