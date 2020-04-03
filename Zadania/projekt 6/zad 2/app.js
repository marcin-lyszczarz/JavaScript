const btn = document.querySelector('button');
const section = document.querySelector('section');
const chars = 'ABCDEFGHIJK0123456789';

const codeNumber = 1000;
const charsNumber = 10;



const codeGenerator = (e) => {
    section.textContent = '';
    for(let i = 0; i < codeNumber; i++){
        let code = '';
        for(let j = 0; j < charsNumber; j++){
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
    const div = document.createElement('div');
    div.textContent = code;
    section.appendChild(div);
    }
}

btn.addEventListener('click', codeGenerator);