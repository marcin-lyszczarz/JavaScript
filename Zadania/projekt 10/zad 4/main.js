const counter = () =>{
    let number = 0;
    document.body.textContent = `${number} sekund`;
    function add(){
        number++
        document.body.textContent = `${number} sekund`;
    }
    return add;
}

const timer = counter();
setInterval(timer, 1000);