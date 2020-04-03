const btn = document.querySelector('button');
const list = document.querySelector("ul");
let nextNumber = 1;

const addElement = function (){
	const liItem = document.createElement("li");
	
	liItem.textContent = nextNumber;
		
	if(nextNumber%3 == 0){
		liItem.classList.add('big');
	}
	list.appendChild(liItem);
	
	nextNumber+=2;
}


btn.addEventListener("click", addElement);