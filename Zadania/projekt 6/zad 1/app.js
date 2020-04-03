const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ['Jagienka', 'Dobrusia', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja'];
const prefix = ['Wydaje mie się:', 'Mam wrażenie:', 'Szczerze uważam że', 'Najlepszym imieniem będzie:']; 

const randomName = () =>{
    let number = Math.floor(Math.random() * names.length);
    let indexPrefix = Math.floor(Math.random() * prefix.length);
    div.textContent = `${prefix[indexPrefix]} ${names[number]}`;
}

btn.addEventListener('click', randomName);