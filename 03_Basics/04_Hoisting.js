
console.log(addOne(5))
// Function
function addOne(num) {
    return num + 1
}


// console.log(addTwo(5))
// Expression
let addTwo = function(num) {
    return num + 2
}


// NOTE:-
// The mechanism by which function and variable declarations are moved to the top of their respective scopes before the code is executed is called 'Hoisting'