const h1Value = document.querySelector('h1');

document.body.addEventListener('mousemove', function (event) { // parametr event można nazwać dowolnie. JS zawsze odmyślnie dodaje tam event
    console.log(event.clientX , event.clientY);
    h1Value.textContent = `${event.clientX} , ${event.clientY}` // względem krawędzi przeglądarki
    //h1Value.textContent = `${event.pageX} , ${event.pageY}` // względem początku dokumentu 
    //h1Value.textContent = `${event.screenX} , ${event.screenY}` // od krawędzi ekranu

    document.body.style.backgroundColor = `rgb(${event.clientX/3},
         ${event.clientY/2}, ${event.clientX/event.clientY * 20})`;

});

