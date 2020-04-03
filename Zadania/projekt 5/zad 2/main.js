const input = document.getElementById('pass');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'działa!'];

const div = document.querySelector('div');


const showMessage = (e) => {
    let text = e.target.value;
    div.textContent = '';
    passwords.forEach((pass, index) => {
        if(text.toLowerCase() === pass.toLowerCase()){
            div.textContent = messages[index];
            e.target.value = '';
        }
    });  
}

input.addEventListener('input', showMessage);