const txt = ['first text', 'second text', 'third text'];
const cursor = document.querySelector('.kursor');
const spanText = document.querySelector('.text');

let indexText = 0;
let indexLetter = 0;


function printText(){
    spanText.textContent += txt[indexText][indexLetter];
    indexLetter++;
    if(indexLetter === txt[indexText].length){
        indexText++;

        if(indexText === txt.length) return;

        return setTimeout(()=> {
            indexLetter = 0;
            spanText.textContent ='';
            printText();
        }, 10000);

    }
    setTimeout(printText, 100);
}

setTimeout(printText, 100);

function cursolPulse(){
    cursor.classList.toggle('activ');
}
setInterval(cursolPulse, 400);