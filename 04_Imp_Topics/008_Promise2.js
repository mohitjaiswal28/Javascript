
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log(`Async task 3`);
        data = {
            "name": "mohit"
        }
        resolve(data)
    }, 1000);
})
.then(function(data) {
    console.log(data);
    console.log(`Promise consumed`);
})