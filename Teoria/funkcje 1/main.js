// const showMessage = function(message){
//     console.log(message);
// }

// const wiadomosc = "Witaj";

// showMessage(wiadomosc);

// function addNumbers(number1, number2){
//     return number1 + number2;
// }

// const textAlert = new Function("text", "alert(text);");

// const showTextFromArrowFunction = txt => console.log(txt);

// showTextFromArrowFunction("hejjj");

// const divideBy2 = function(number){
//     console.log(number/2);
// }

// divideBy2(20);

let number = 0;
const add = function(){
    number++;
    console.log(number);
}
const substra = function(){
    number--;
    console.log(number);
}

const divideBy3 = function(num){
    return num/3;
}

const result2 = divideBy3(30);

const divideBy5 = function(number){
    const result = number/5;
    console.log(result);
    return result;
}

const result3 = divideBy5(5);