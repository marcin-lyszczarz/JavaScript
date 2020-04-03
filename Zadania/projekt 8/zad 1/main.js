const txt ='Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const span = document.querySelector('.text');
const kursor = document.querySelector('.kursor');

let indexText = 0;
const time = 50;

function addLetter(){
    span.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length){
        clearInterval(indexTyping);
    }

}

function cursorAnimation(){
    kursor.classList.toggle('activ');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);