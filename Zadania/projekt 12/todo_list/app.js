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
    const inputText = event.target.value.toLowerCase();

    let liElements = document.getElementsByClassName('liTask');
    let list = [...liElements];
    list = list.filter(li => li.textContent.toLowerCase().includes(inputText));
        
    console.log(list);
    ul.textContent = '';
    list.forEach(li => ul.appendChild(li));

}

btnAdd.addEventListener('click', addTask);
inputSearch.addEventListener('input', searchTask);