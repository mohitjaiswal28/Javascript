
new Promise((resolve, reject) => {
    setTimeout(() => {
        
        let error = false

        if(!error) {
            data = {
                "username": "mohitjaiswal28",
                "name": "Mohit Jaiswal"
            }

            console.log(`Async task 3`);
            resolve(data)
        }

        else {
            let errorMsg = `ERROR: Something went wrong!`
            reject(errorMsg)
        }
    }, 1000);
})
.then(function(data) {
    console.log(data);
    console.log(`Username = ${data.username}`);
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log(`Inside finally block!`);
})