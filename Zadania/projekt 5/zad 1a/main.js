const input = document.getElementById("pass");

const password = ['user', 'wiosna', 'Ania'];
const messages = ['Wiadomość', 'piękna pora roku', 'fajny styl masz'];
const div = document.querySelector('.message');

input.addEventListener('input', (e)=>{
    const text = e.target.value;
    div.textContent = '';
    password.forEach((pass, index) => { //pierwszy parametr uzupełniny o element, drugi paramemtr zawasze o indeks elementu
        if(pass === text){
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
    

});

input.addEventListener('focus', (e)=>{
    e.target.classList.add('active');
});
input.addEventListener('blur', (e)=>{
    e.target.classList.remove('active');
});