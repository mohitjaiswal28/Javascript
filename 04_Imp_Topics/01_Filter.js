
const data = require('./data.json')

let coding = ["js", "c++", "c", "python"]

coding.forEach( (item) => {
    console.log(item);
})

// But, forEach does not return any updated array


// ------------------------------------ 
//              Filter
// ------------------------------------ 

let myNums = [1, 2, 3, 4, 5] 

// let filter1 = coding.filter( (item) => item > 3)
let filter1 = myNums.filter( (item) => {
    return item>3
})
console.log(filter1);

console.log();
console.log(data);

let data1 = data.filter( (item) => {
    return item.age > 10
})
console.log(data1);