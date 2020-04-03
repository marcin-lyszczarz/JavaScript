let number = 0;

function add(){
    number++;
    document.body.textContent = number;
}

document.addEventListener('click', add);