const input = document.getElementById("pass");

const password = 'user';
const message = 'Wiadomość';
const div = document.querySelector('.message');

input.addEventListener('input', (e)=>{
    //console.log(e.target.value);
    if(e.target.value === password){
        div.textContent = message;
    } else{
        div.textContent = '';
    }
});

input.addEventListener('focus', (e)=>{
    e.target.classList.add('active');
});
input.addEventListener('blur', (e)=>{
    e.target.classList.remove('active');
});