
// Singleton object
// let user = new Object()

let user = {
    email: "mohit@gmail.com",
    fullname: {
        firstname: "mohit",
        lastname: "jaiswal"
    },
    city: "Pune"

}

console.log(user.fullname?.firstname)
console.log(user.fullname?.middlename)
console.log(user.fullname?.lastname)

let obj1 = {
    a: 1,
    b: 2
}
console.log(obj1)

let obj2 = {
    c: 3,
    d: 4
}
console.log(obj2)

let obj3 = Object.assign({}, obj1, obj2)    // {} is the target
// let obj3 = {...obj1, ...obj2}
console.log(obj3)

// Object Methods
console.log("\n\n\n")
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("city"))

