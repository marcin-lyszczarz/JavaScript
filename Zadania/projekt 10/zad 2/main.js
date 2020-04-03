// function x(){
//     let number = 5;
//     function y(){
//         console.log(number);
//     } 
//     return y;
// }
// const example = x();
// example();


function add(start = 0){
    let count = start;
    return () => {
        count++;
        document.body.textContent = `aktualny stan licznika to: ${count}`
    }
}

const counter = add();


document.addEventListener('click', counter);