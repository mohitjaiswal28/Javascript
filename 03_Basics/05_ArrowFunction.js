
let user = {
    username: "mohit",
    age: 20,
    welcomeMsg: function() {
        console.log(this.username)
        console.log(this)
    }
}

user.welcomeMsg()
console.log()
user.username = "mj"
user.welcomeMsg()

console.log()
console.log(this)       
// In node environment, this = {} (empty object)
// But, in web browser, this = Window


// Arrow function
let add = (num1, num2) => {
    return num1 + num2
}
console.log(`Addition = ${add(3, 2)}`)

// If we use () instead of {}, then no need to give the 'return' keyword => Implicit return
let mul = (num1, num2) => (num1 * num2)
console.log(`Multiplication = ${mul(3, 2)}`)
