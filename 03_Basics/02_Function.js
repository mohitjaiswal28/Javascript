
// Rest and Spread operator (...)

function myCart(...num) {
    console.log(num)
    return
}

myCart(100, 200, 300)


// Array in function
function handleArray(arr) {
    console.log(`Array is ${arr}`)
}

handleArray([1, 2, 3, 4, 5])


// Object in function
function handleObject(obj) {
    console.log(`Username is ${obj?.username} and Age is ${obj?.age}`)
}

handleObject({
    username: "mohit",
    age: 20
})
