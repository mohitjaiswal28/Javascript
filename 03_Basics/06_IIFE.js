
// Immediately Invoked Function Expression (IIFE)
// To end the IIFE, use ;

function DB1() {
    console.log(`DB1 connected`)
}
DB1();   

(function DB2() {
    console.log(`DB2 connected`)
})();

((name) => {
    console.log(`Hello, ${name}`)
})("Mohit");
