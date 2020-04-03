let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) =>{
    console.log(e.keyCode, e.which); //38 strzałka do góry, 40 strzałka w dół

    // if(e.keyCode == 38){
    //     if(blue < 255){
    //         red+=2;
    //         green+=2;
    //         blue+=2;
    //         document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //     }
        
    // }else if(e.keyCode == 40){
    //     if(blue > 0){
    //         red-=2;
    //         green-=2;
    //         blue-=2;
    //         document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //     }
        
    // }

    switch(e.keyCode){
        case 38:  
        if(blue < 255){
            red+=2;
            green+=2;
            blue+=2;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        break;
        case 40:
        if(blue > 0){
            red-=2;
            green-=2;
            blue-=2;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        break;
    }
}

window.addEventListener('keydown', changeColor);

