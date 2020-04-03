Math.random(); //od 0 do 1

Math.random() * 7; //od 0 do 7(bez 7)

//losowa wartość z przedziału 4 - 6 bez 6
Math.random() * (6-4) + 4;

const randomNumber = (min, max) =>{
    const number = Math.floor(Math.random() * (max-min) + min);
    return number;
}

// dla x >= 4 i x <=6

Math.floor(Math.random() * (6-4+1)+4);

const randomIntiger = (min, max) =>{
    const number = Math.floor(Math.random() * (max-min+1)+min);
    return number;
}