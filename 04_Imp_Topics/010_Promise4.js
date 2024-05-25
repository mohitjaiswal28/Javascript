
let promise = new Promise((resolve, reject) => {

    let error = false

    if(!error) {
        data = {
            "username": "mohitjaiswal28",
            "name": "Mohit Jaiswal"
        }
        resolve(data)
    }

    else {
        reject("ERROR: Something went wrong!")
    }
})

async function consumePromise() {

    try {
        let response = await promise
        console.log(response.username);
    } catch (error) {
        console.log(error);    
    } finally {
        console.log(`Inside finally block!`);
    }
}

consumePromise()