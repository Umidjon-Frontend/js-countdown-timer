const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Avgust",
    "September",
    "Octomber",
    "November",
    "December",
];
const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const infoTitle = document.querySelector(".info-title"),
    timerItems = document.querySelectorAll(".timer-item h4"),
    countdownTimer = document.querySelector(".countdown-timer");

let futureDate = new Date(2022, 9, 1, 18, 30, 30, 0);
console.log(futureDate);

let year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
let weekday = weekdays[futureDate.getDay() - 1];
let day = futureDate.getDate();
let hour = futureDate.getHours();
let minute = futureDate.getMinutes();
let second = futureDate.getSeconds();
let msecond = futureDate.getMilliseconds();
console.log(weekday);

infoTitle.innerHTML = `Giveaway Ends On ${weekday}, ${day} ${month} ${year} ${hour}:${minute}am`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60m
    // 1d = 24h

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecond);

    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        if (item < 10) {
            return (item = `0${item}`);
        } else {
            return item;
        }
    };

    timerItems.forEach((element, index) => {
        element.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        countdownTimer.innerHTML = `<h4>Sorry, this is giveaway has expired</h4>`;
    }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
