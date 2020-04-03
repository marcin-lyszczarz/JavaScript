let size = 10;
let orderElement = 1;

const init = () => {
    document.body.style.backgroundColor = 'slategrey';
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    const ulItems = document.createElement('ul');
    btn.style.width = '200px';
    btnReset.style.width = '200px';
    btn.style.height = '50px';
    btnReset.style.height = '50px';
    btn.textContent = 'Dodaj 10 elementów listy';
    btnReset.textContent = 'Resetuj listę';
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ulItems);

    btn.addEventListener("click", createLiElement);
    btnReset.addEventListener('click', restetList)
};

const createLiElement = () => {

    let ulItems = document.querySelector('ul');

    for(let i = 0; i < 10; i++){
        let liItems = document.createElement('li');
        liItems.textContent = `Element nr ${orderElement}`
        liItems.style.fontSize = size + 'px';
        size++;
        orderElement++;
        
        ulItems.appendChild(liItems);
    }

};

const restetList = () =>{
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;

}

init();