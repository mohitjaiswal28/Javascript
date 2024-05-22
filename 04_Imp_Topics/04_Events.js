
/*
    document.getElementById('c1').onclick = function () {
        console.log("Clicked");
    }
*/

// Better code

/* 
    Event Propagation
        1. False - Bubbling (⬆️) (Default)
        2. True - Capturing (⬇️)
*/

// Example of Bubbling
/* 
    document.getElementById('p1').addEventListener('click', function() {
        console.log("p1 clicked");
    }, false)

    document.getElementById('c3').addEventListener('click', function() {
        console.log("c3 clicked")
    }, false)
*/

// Example of Capturing
/*
    document.getElementById('p1').addEventListener('click', function() {
        console.log("p1 clicked");
    }, true)

    document.getElementById('c3').addEventListener('click', function() {
        console.log("c3 clicked")
    }, true)
*/

// Remove each c-box on clicking it

document.querySelector('.p-box').addEventListener('click', function(e) {

    console.log(e.target);
    // console.log(e.target.parentNode);

    let removeIt = e.target
    removeIt.remove()
}, false)