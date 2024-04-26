
// Array

let arr = [10, 20, 30, 40, 50]

arr.forEach( (item) => {
    console.log(item);
} )

arr.forEach( (item, index, arr) => {
    console.table([`${item}`, `${index}`, `${arr}`])
} )

// Array of object

let myArr = [
    {
        name: "mohit"
    },
    {
        name: "jaiswal"
    }
]

myArr.forEach( (item) => {
    console.log(item.name);
})