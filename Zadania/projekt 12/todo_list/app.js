const btnAdd = document.querySelector('form #add');
const input = document.querySelector('input');
const numberOfTasks = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const liTask = document.getElementsByClassName('liTask');

const inputSearch = document.querySelector('#search');


const addTask = (e) => {
    e.preventDefault();
    const inputTask = input.value;
    if(inputTask == '') return;
    const liItem = document.createElement('li');
    liItem.innerHTML = inputTask + " <button> delete </button>";
    liItem.className = 'liTask';
    ul.appendChild(liItem);
    input.value = '';
    numberOfTasks.textContent = liTask.length;
    liItem.querySelector('button').addEventListener('click', removeTask);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    numberOfTasks.textContent = liTask.length;
}

const searchTask = () => {
    const searchText = event.target.value.toLowerCase();

    let list = [...liTask];
    list = list.filter(li => li.textContent.toLowerCase().includes(searchText));

    console.log(list);
}

btnAdd.addEventListener('click', addTask);
inputSearch.addEventListener('input', searchTask);