const clock = () => {
    const time = new Date();

    // console.log(time.toLocaleTimeString());
    
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hour = time.getHours();

    document.querySelector('.clock span').textContent = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min }:${sec < 10 ? "0" + sec : sec}`;
}

setInterval(clock, 1000);
