const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input')

const deleteTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) =>{
    e.preventDefault();
    const titleTask = input.value;
    if(titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button> Usuń </button>";
    ul.appendChild(task);
    input.value = '';
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', deleteTask);
}

form.addEventListener('submit', addTask);
