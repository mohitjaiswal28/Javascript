
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr)
console.log(arr[0])

// let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8)

// Array methods

arr.push(9)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(1));
console.log(arr.indexOf(100));

const str = arr.join()
console.log(str)
console.log(arr)

// Slice and Splice

console.log(`\n\nOriginal array =`, arr);
let a = arr.slice(1, 3)
console.log(`Slice =`, a);
console.log(`Original array after slice =`, arr)

let b = arr.splice(1, 3)
console.log(`Splice =`, b);
console.log(`Original array after splice =`, arr)

// Slice does not change original array, but Splice removes the elements from the original array

