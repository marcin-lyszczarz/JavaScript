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
const time = 1000;
let active = 0;



//Implementacja

function changeDot(){
    const indexDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[indexDot].classList.remove('active');
    dots[active].classList.add('active');


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



setInterval(changeSlide, time);