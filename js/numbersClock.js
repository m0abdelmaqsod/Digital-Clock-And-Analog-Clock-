const barSecondsHr = document.querySelector(".bar_seconds_hr")
const BarSecondsMin = document.querySelector(".bar_seconds_min");
const BarSecondsSec = document.querySelector(".bar_seconds_sec");



function clock() {

    const date = new Date();

    let hours = date.getHours() % 12;
    let PmAm = date.getHours() >= 12 ? "PM" : "AM";

    hours = hours === 0 ? 12 : hours;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();



    // ===================== seconds ======================== //
    let secondDots = '';

    for (let i = 1; i <= 60; i++) {

        if (i === seconds) {
            secondDots += `<div class="dots active" style="--index:${i}"><p></p></div>`;

        } else {
            secondDots += `<div class="dots" style="--index:${i}"><p></p></div>`;
        }
    }


    // ===================== minutes ======================== //
    let minutesDots = '';
    for (let i = 1; i <= 60; i++) {

        if (i === minutes) {
            minutesDots += `<div class="dots active" style="--index:${i}"><p></p></div>`;

        } else {
            minutesDots += `<div class="dots" style="--index:${i}"><p></p></div>`;
        }
    }


    // ===================== hours ======================== //
    let hoursDots = '';
    for (let i = 1; i < 13; i++) {

        if (i === hours) {
            hoursDots += `<div class="dots active" style="--index:${i}"><p></p></div>`;
        } else {
            hoursDots += `<div class="dots" style="--index:${i}"><p></p></div>`;
        }
    }




    barSecondsHr.innerHTML = hoursDots + "<h2>" + zero(hours) + "<span>Hours</span>" + "</h2>";
    BarSecondsMin.innerHTML = minutesDots + "<h2>" + zero(minutes) + "<span>Minutes</span>" + "</h2>";
    BarSecondsSec.innerHTML = secondDots + "<h6>" + PmAm + "</h6>" + "<h2>" + zero(seconds) + "<span>Seconds</span>" + "</h2>";
}



function zero(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}


setInterval(clock, 1000);