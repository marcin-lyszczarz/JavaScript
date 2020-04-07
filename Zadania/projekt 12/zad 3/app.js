const input = document.querySelector('input');
const ulItem = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

const searchTask = () => {

    const searchText = event.target.value.toLowerCase(); //pobranie wartości wprowadzonej w inpucie
    let liArr = [...liItems]; //zamiana z nodelist na tablice
    liArr = liArr.filter(li => li.textContent.toLowerCase().includes(searchText));  // przefiltrowanie każdego elementu tablicy i sprawdzenie czy zawiera wprowadzony tekst
    console.log(liArr);

    ulItem.textContent = ''; // czysczenie listy ul

    liArr.forEach(li => ulItem.appendChild(li)); //dodanie do ul pasujących przefiltorwanych li
}

input.addEventListener('input', searchTask);