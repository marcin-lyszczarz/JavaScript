const answersArray = [];
const addBtn = document.querySelector('.add');
const input = document.querySelector('input');
const output = document.querySelector('h1');
const resetBtn = document.querySelector('.clean');
const optionBtn = document.querySelector('.showOption');
const adviceBtn = document.querySelector('.showAdvice');



const addAnswer = (e) => {
    e.preventDefault();
    const newOption = input.value;
    if(newOption.length){
        for(answer of answersArray){
            if(answer === newOption){
                alert("Taka możliwość już istnieje");
                return input.value = '';
            }
        }
        answersArray.push(newOption);
        // output.textContent += newOption + ', ';
        input.value = '';
        alert(`Dodano ${newOption}`);
    }
}

const resetOption = (e) => {
    e.preventDefault();
    answersArray.length = 0;
}

const showOption = () => {
    if(answersArray.length)
    alert(`Możliwe opcje to ${answersArray}`)
    else
    alert(`Brak możliwości`)
}

const showAdvice = () => {
    output.textContent = '';
    let index = Math.floor(Math.random() * answersArray.length);
    output.textContent = answersArray[index];

}

addBtn.addEventListener('click', addAnswer);
resetBtn.addEventListener('click', resetOption);
optionBtn.addEventListener('click', showOption);
adviceBtn.addEventListener('click', showAdvice);