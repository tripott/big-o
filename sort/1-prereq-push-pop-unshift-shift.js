const myArr = [1, 2, 3, 4, 5]
console.log('before push       ', myArr)

// push will add the number onto the BACK of the array.
myArr.push(6)
console.log('after pushing 6   ', myArr)

// pop will remove the number onto the BACK of the array.
myArr.pop()
console.log('after pop         ', myArr)

// shift will add the number to the FRONT of the array.
myArr.unshift(6)
console.log('after unshifting 6', myArr)

// shift will remove the number off the FRONT of the array.
myArr.shift()
console.log('after shift       ', myArr)
