const txt = ['WITAM!', 'MIŁO CIĘ WIDZIEĆ..', 'ZACZYNAMY!'];
const span = document.querySelector('.text');
const kursor = document.querySelector('.kursor');

let indexText = 0;
let indexLetter = 0;
const time = 100;

function addLetter(){

    span.textContent += txt[indexText][indexLetter];
    indexLetter++;
    if(indexLetter === txt[indexText].length){
        
        indexText++; 
        if(indexText === txt.length) return;
        
        return setTimeout(()=> {
            indexLetter = 0;
            span.textContent = '';
            addLetter();
        }, 2000)

    }
    setTimeout(addLetter, time);
}


addLetter();

function cursorAnimation(){
    kursor.classList.toggle('activ');
}

setInterval(cursorAnimation, 400);