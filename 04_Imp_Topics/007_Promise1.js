
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log(`Async task 1`);
        resolve()
    }, 1000)
})

promise1
.then(function() {
    console.log(`Promise consumed`);
})

// Can be aslo written as

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Asyn task 2');
        resolve()
    }, 1000);
})
.then(function() {
    console.log(`Promise consumed`);
})