
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
console.log(c)


function parent() {
    let username = "mohit"

    function child() {
        let website = "mohitjaiswwal.com"
        console.log(username)
    }

    // console.log(website)
    // Child can take ice-cream from parent but, parent will never take ice-cream from child

    child()
}

parent()


// NOTE:-
// var = globally scoped
// let = blocked scoped

// var can be updated and redeclared
// let can be updated and but cannot be redeclared
// const cannot be updated and cannot be redeclared

