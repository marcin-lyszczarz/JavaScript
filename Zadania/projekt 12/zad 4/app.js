const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.querySelectorAll('li.task');

const addTask = (e) =>{
    e.preventDefault();
    const input = document.querySelector('input').value;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = input + "<button> Usuń </button>";
    ul.appendChild(task);
    console.log(input);
}

form.addEventListener('submit', addTask);