const btn = document.querySelector('button');
let number = 1;

function addElement(){
	
	const div = document.createElement('div');
	div.textContent = number;
	
	if(number%5 == 0){
		div.classList.add("circle");
	}
	
	document.body.appendChild(div);
	number++;
	//console.log(div);
	
	
}

btn.addEventListener("click", addElement);
