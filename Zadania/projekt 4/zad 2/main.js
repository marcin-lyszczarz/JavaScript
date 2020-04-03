//Zmiana koloru tła 
//jeżeli x i y parzyste kolor czerwony
//jeżeli x i y nieparzyste kolor niebieski
//jeżeli x parzysty a y nieparzysty kolor zielony


document.body.addEventListener('click', function(event){
    console.log(`${event.clientX}, ${event.clientY}`)
    const color = changeColor(event);
    document.body.style.backgroundColor = color;
})

function changeColor(e){
    const x = e.clientX;
    const y = e.clientY;
    if(x % 2 === 0 && y % 2 === 0){
        return'red';
    }else if(x % 2 !== 0 && y % 2 !== 0){
        return'blue';
    }else{
        return 'green';
    }

}
