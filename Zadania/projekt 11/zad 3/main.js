const btnStart = document.querySelector('.main');
const btnRestet = document.querySelector('.reset');
const btnLap = document.querySelector('.lap');
const divTime = document.querySelector('.time div');
let ulTime = document.querySelector('.time ul');


let active = false;
let time = 0;
let index = 0;
let lapTime = 0;
let numberOfLap = 1;

function clickStartStop(){
    if(!active){    
        active = !active;
        btnStart.textContent = "Stop";
        index = setInterval(start, 10);
    }
    else{
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(index);
    }     
}

function start(){
    time++;;
    lapTime = (time/100).toFixed(2)
    divTime.textContent = lapTime;
}

function clickReset(){
    divTime.textContent = '---';
    time = 0;
    ulTime.textContent = '';
    numberOfLap = 1;
}

function clickLap(){
    let liItem = document.createElement('li');
    if(time == 0){
        ulTime.appendChild(ulItem);
    }else{
        lapTime = (time/100).toFixed(2);
        liItem.textContent = `Lap ${numberOfLap} : ${lapTime}`;
        ulTime.appendChild(liItem);
        numberOfLap++;
    }

} 

btnStart.addEventListener("click", clickStartStop);
btnRestet.addEventListener("click", clickReset);
btnLap.addEventListener('click', clickLap);