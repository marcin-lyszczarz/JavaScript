const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst',
}, 
{
    img: 'images/img2.jpg',
    text: 'Drugi tekst',
}, 
{
    img: 'images/img3.jpg',
    text: 'Trzeci tekst',
}];

const imgage = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//Interface
const time = 5000;
let active = 0;

// let currentIndexKey = null;

//Implementacja

function keyChangeSlide(e){
    if(e.keyCode === 39){
        clearInterval(slideIndex);
        changeDot();
        changeSlide();
        return slideIndex = setInterval(changeSlide, time); 

    } 
    else if(e.keyCode === 37){
        clearInterval(slideIndex);
        changeDot();
        changeSlideRev();
        return slideIndex = setInterval(changeSlide, time);;
    }  
}


function changeDot(){
    const indexDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[indexDot].classList.remove('active');
    dots[active].classList.add('active');
}

function changeSlideRev(){
    active--;
    if(active < 0){
        active = slideList.length-1;
    }
    imgage.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

function changeSlide(){
    active++;
    if(active == slideList.length){
        active = 0;
    }
    imgage.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}


let slideIndex = setInterval(changeSlide, time);
window.addEventListener('keydown', keyChangeSlide);