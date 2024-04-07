
let a = [1, 2, 3]
let b = [4, 5, 6]

// a.push(b)
// console.log(a)
let c = a.concat(b)
console.log(c)

let d = [...a, ...b]
console.log(d);

let arr1 = [1, 2, [1, 2, 3], 4, [5, [6, [7, 8]]]]
console.log(arr1)
let arr2 = arr1.flat(Infinity)
console.log(arr2)

console.log(Array.isArray("Mohit"))
console.log(Array.from("Mohit Jaiswal"))
console.log(Array.of(1, 2, 3))

