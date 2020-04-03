const spanDay = document.querySelector('span.d');
const spanHour = document.querySelector('span.h');
const spanMin = document.querySelector('span.m');
const spanSec = document.querySelector('span.s');

const endTime = new Date('2020-04-10 23:20:00').getTime();


setInterval(()=>{
    const currentTime = new Date().getTime();
    // const timeToEnd = Math.floor((endTime - currentTime) / 1000);
    // const timeToEnd = endTime - currentTime;
    const time = endTime - currentTime;
    let day = Math.floor((endTime/(1000*60*60*24)) - (currentTime/(1000*60*60*24)));
    day = day < 10 ? `0${day}` : day;
    let hour = Math.floor((endTime/(1000*60*60) - currentTime/(1000*60*60))%24);
    hour = hour < 10 ? `0${hour}` : hour;
    let min = Math.floor(((endTime/(1000*60) - currentTime/(1000*60)))%60);
    min = min < 10 ? `0${min}`: min;
    let sec = Math.floor(((endTime/(1000) - currentTime/(1000)))%60);
    sec = sec < 10 ? `0${sec}` : sec;

    spanDay.textContent = day;
    spanHour.textContent = hour;
    spanMin.textContent = min;
    spanSec.textContent = sec;

    console.log(hour);
}, 1000);

