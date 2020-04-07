function removeTask(){
    // event.target.parentNode.remove(); usuwanie elementu
    //event.target.parentNode.style.textDecoration = 'line-through'; edycja styli css
    //event.target.remove();

    const index = event.target.dataset.key;
    document.querySelector(`li[data-key= "${index}"]`).remove();
    
}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));
