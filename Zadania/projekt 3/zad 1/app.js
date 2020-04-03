const btn = document.querySelector('button');
const lists = document.querySelectorAll('li');

let sizeOfFont = 10;

function changeSize(){
    lists.forEach((list) => {
        list.style.display = ('block');
        lists.forEach((list) => list.style.fontSize = sizeOfFont + 'px');
    });
    sizeOfFont++;
}

btn.addEventListener('click', changeSize);