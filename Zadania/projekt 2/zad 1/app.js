const squere = document.createElement('div');

document.body.appendChild(squere);

let grow = true; // flaga


let size = 10; // wielkość kwadratu

squere.style.width = size + 'px';
squere.style.height = size + 'px';
squere.style.backgroundColor = 'black';


window.addEventListener('scroll', function(){
    if (grow){
        size +=5;
        squere.style.width = size + 'px';
        squere.style.height = size + 'px';
    }else {
        size -=5;
        squere.style.width = size + 'px';
        squere.style.height = size + 'px';
    } 
    
    if(size >= window.innerWidth * 0.5){
        grow = false;
    } else if(size == 0){
        grow = true;
    }

})

//window.innerWidth *0,5 maksymalna wielkość kwadratu