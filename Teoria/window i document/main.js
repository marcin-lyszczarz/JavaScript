
console.log(document.body);
console.log(document.domain);
console.log(document.title);

window.innerHeight; //wysokość okna
window.scrollY; // wartość skrola

//wykonanie funkcji po okreśłonym czasie
//setTimeout(function(){
// alert("jesteś tutaj 5 sekund!")},
//	5000);

/*	
let timer = 0;
setInterval(function(){
	console.log(timer++)},
	5000);
	*/
let time = 0;

const showTime = function (){
	time += 5;
	console.log(`Jesteś na stronie już ${time} sekund`);
	setTimeout(showTime, 5000);
}

//setTimeout(showTime, 5000);


function showCurrentTime(){
	let currentDate = new Date();

	let min = currentDate.getMinutes();
	if(min<10) min = "0"+min;
	let sec = currentDate.getSeconds();
	if(sec<10) sec = "0"+sec;
	let hour = currentDate.getHours();
	
	document.getElementById('zegar').innerHTML = hour+":"+min+":"+sec;
}

setInterval(showCurrentTime, 1000);



