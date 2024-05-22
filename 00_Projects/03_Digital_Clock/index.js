
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    const clockElement = document.getElementsByClassName('clock')[0];
    clockElement.innerHTML = getCurrentTime();
}

updateClock();
setInterval(updateClock, 1000);
