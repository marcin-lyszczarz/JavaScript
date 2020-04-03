const div = document.createElement('div');

document.body.appendChild(div);

let sizeHeight = 10;

let down = true; 

div.style.width = '100%';
div.style.height = sizeHeight + 'px';
div.style.position = 'fixed';
div.style.left = '0px';
div.style.top = '0px';
div.style.backgroundColor = 'tomato';


const changeHeight = function(){

    if(sizeHeight > window.innerWidth*0.5){
        down = false
    } else if(sizeHeight == 0 ){
        down = true
    }

    if(down){
        sizeHeight += 10;
        div.style.backgroundColor = 'tomato';
    }else{
        sizeHeight -= 10;
        div.style.backgroundColor = 'greenyellow';
    }
    div.style.height = sizeHeight + 'px';


}
window.addEventListener('scroll', changeHeight);
