const h1Value = document.querySelector('h1');

document.body.addEventListener('mousemove', function (event) {
    const x = event.clientX +1;
    const y = event.clientY +1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x/width*100;
    const green = y/height*100;
    const blue = ((x/width*100) + (y/height*100))/2;


    h1Value.textContent = `${x}, ${y}`;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

});

