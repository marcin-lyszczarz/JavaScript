const div = document.querySelector('div');

let divX = 200;
let divY = 200;

div.style.left = divX +"px";
div.style.top = divY +"px";

let drawActive = false;

let insertDivX; 
let insertDivY; 

div.addEventListener("mousedown", (e) =>{
    drawActive = !drawActive;
    div.style.backgroundColor = '#747272'

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener("mousemove", (e) => {
    if(drawActive){
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener("mouseup", ()=>{
    div.style.backgroundColor = 'black'
    drawActive = !drawActive;
})