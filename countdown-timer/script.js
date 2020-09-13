

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newyears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newyears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    totalTime = days + hours + mins + seconds;

    if(totalTime <= 0) {
        console.log("this is the time")
    } else {
        // DOMS 
        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTme(hours);
        minsEl.innerHTML = formatTme(mins);
        secondsEl.innerHTML = formatTme(seconds);
    }
    
}

function formatTme(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call 
countdown();

setInterval(countdown, 1000)

