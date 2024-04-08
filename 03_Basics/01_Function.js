
function sayMyName() {
    console.log("My name is Mohit Jaiswal")
}

// sayMyName   // This is just the reference of the function
sayMyName()


let add = function(num1, num2) {
    return num1+num2
}

let result = add(1, 2)
console.log(result)

// While function definition - parameters
// While function call - arguments
// If not passed any arguments, then value is undefined

function loggedIn(username = "mj") {

    if(username)
        console.log(`${username} logged in successfully !`)

    else    
        console.log('Error while getting username !')

    return
}

loggedIn()
loggedIn("mohit")