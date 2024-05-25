
fetch('https://api.github.com/users/mohitjaiswal28')
.then((response) => {
    return response.json()    
})
.then((data) => {
    console.log(data.login);
})
.catch((error) => {
    console.log(`ERROR: ${error}`);
})
.finally(() => {
    console.log(`Done!`);
})