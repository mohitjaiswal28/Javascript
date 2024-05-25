
const data = require('./data.json')

// ------------------------------------ 
//              Map
// ------------------------------------ 

let myNums1 = [1, 2, 3, 4, 5] 

let map1 = myNums1.map( (item) => {
    return item+10
})
console.log(map1);

// Chaining

let myNums2 = [1, 2, 3, 4, 5] 
let map2 = myNums2
        .map( (item) => item+1)
        .map( (item) => item-1)
        .filter( (item) => item>=3)
console.log(map2);


let map3 = data.map( (item) => {
    return item.name = "mj"
})
console.log(map3);