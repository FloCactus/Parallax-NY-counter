let daysElem = document.getElementById('days');
let hoursElem = document.getElementById('hours');
let minutesElem =document.getElementById('minutes');
let secondsElem = document.getElementById('seconds');

let newYears = '1 January 2022';

function countdown(){
    let newYearsDate= new Date(newYears);
    let currentDate = new Date();

    let totalSeconds = (newYearsDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);

    let hours = Math.floor(totalSeconds / 3600) % 24;

    let minutes = Math.floor(totalSeconds / 60) % 60;

    let seconds = Math.floor(totalSeconds) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = formatTime(hours);
    minutesElem.innerHTML = formatTime(minutes);
    secondsElem.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time<10 ? `0${time}` :time;
}

  countdown();
  setInterval(countdown, 1000);
