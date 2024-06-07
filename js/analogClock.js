const clockWrapper = document.querySelector('.clock_wrapper');
const numberHours = document.querySelector('.number_hours');

let numberElement = '';

for (let i = 1; i <= 12; i++) {
    numberElement += `<span style="--index:${i}"><p>${i}</p></span>`;
}
numberHours.innerHTML += numberElement;





const barSeconds = document.querySelector(".bar_seconds");
let barElement = '';


for (let i = 1; i <= 60; i++) {
    barElement += `<span style="--index:${i}"><p></p></span>`;
}

barSeconds.innerHTML = barElement;










const handleHours = document.querySelector(".hand.hours");
const handleMinutes = document.querySelector(".hand.minutes");
const handleSeconds = document.querySelector(".hand.seconds");




function getCurrentTime() {
    let date = new Date();

    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // =================================================== //
    // 60 Seconds = 360deg so 1 sec = 360 / 60 = 6deg
    // 60 Minutes = 360deg so 1 min = 360 / 60 = 6deg
    // 12 hours = 360deg so 1 hrs = 360 / 12 = 30deg

    // 1 hrs = 30deg that means 60 min = 360deg so 1min = 30 / 60 = 0.5 or 1/2 deg

    // so formula for hours is (hours * 30 + minutes / 2)
    // =================================================== //


    handleSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

    handleMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;

    handleHours.style.transform = `rotate(${currentHours * 30}deg)`;
}
getCurrentTime()

setInterval(getCurrentTime, 1000)











const AllDigital = document.querySelector('.DigitalClock')
const btnDigital = document.getElementById("btnDigital");
const btnAnalog = document.getElementById("btnAnalog");


const handleBtnDigital = () => {
    clockWrapper.classList.add("none");
    btnDigital.classList.add("none");
    btnAnalog.classList.remove("none");
    AllDigital.classList.remove("none");
}


const handleBtnAnalog = () => {
    clockWrapper.classList.remove("none");
    btnDigital.classList.remove("none");
    btnAnalog.classList.add("none");
    AllDigital.classList.add("none");
}


