
// Singleton
/* 
    Constructor
    Object.create
*/

const mySym = Symbol("key1")

let user = {
    "full name": "Mohit Jaiswal",
    age: 19,
    city: "Pune",
    email: "mohitjaiswal2883@gmail.com",
    isLoggedIn: true,
    [mySym]: "value1"
}

console.log(user);
console.log(user["full name"])
console.log(user.age);

// For symbol
console.log(user[mySym]);

// Object elements cannot be changed
// Object.freeze(user)

user.greeting = function() {
    console.log(`Hello, ${this["full name"]}`);
}

console.log(user)
console.log(user.greeting)      // Only gives ref of function
console.log(user.greeting())    // Execute the function

