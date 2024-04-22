
let myNums = [1, 2, 3]

let reduce1 = myNums.reduce( (acc, curr) => {
    return acc+curr
}, 0)
console.log(reduce1);