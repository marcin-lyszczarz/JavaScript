const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input')

const refreshArray = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
}
const deleteTask = (e) => {
    const indexToRemove = e.target.parentNode.dataset.key;
    toDoList.splice(indexToRemove, 1);
    taskNumber.textContent = listItems.length;
    refreshArray();
}

const addTask = (e) =>{
    e.preventDefault();
    const titleTask = input.value;
    if(titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button> Usuń </button>";
    toDoList.push(task);
    refreshArray();

    ul.appendChild(task);
    input.value = '';
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', deleteTask);
}

form.addEventListener('submit', addTask);
