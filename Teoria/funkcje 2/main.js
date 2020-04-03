const addTwoNumber = (x=0, y = 0) =>{
	const result = x + y;
	console.log(result);
	return result;
}
/*
const addTwoNumber = function(x=0, y = 0){
	const result = x + y;
	console.log(result);
	return result;
}
*/

function addOne(number){
	number++;
	console.log(number);
	return number;	
}

function subtractOne(number){
	number--;
	console.log(number);
	return number;	
}

function count(x, callback){
	return callback(x);
}

window.addEventListener("click", function(){
	console.log("click");});


const showTime = function(){
	console.log("mineły 2 sekundy");
}

//setInterval(showTime, 2000);

const usersAge = [26,56, 57, 48, 78, 44];

//usersAge.forEach(function(userAge){console.log("wiek użytkownika to: " + userAge)});
usersAge.forEach(userAge => console.log("wiek to: " + userAge));

const showArguments = function(){
	console.log(arguments);
	console.log(arguments.length);
	console.log(arguments[0]);
	console.log(typeof arguments);
}

showArguments(10, null, {});

const addAllNumbers = function(){
	let result = 0;
	for(let i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}


const allMoney = addAllNumbers(1,2,3,4,5,6,7,8,9);


function showInfoAboutUsers(age, name, sex){
	if(arguments.length === 0){
		console.log("brak informacji o użytkowniku");
	} else if (arguments.length === 1){
		console.log("wiek uzytkownika " + age);
	} else if (arguments.length === 2){
		console.log("imie uzytkownika " + name);
	} else 
		console.log("płeć uzytkownika " + sex);
}

function showAllArguments(...args){
	console.log(args); //args[2]
	//console.log(arguments[2]);
	return args;
}

showAllArguments("1",2, 3, true);


function addAllWords(...words){
	let txt = "";
	//for(let i = 0; i < words.length; i++){
	//	txt += words[i] + " ";
	//}
	
	//words.forEach(function(word){
	//	txt += `${word}+`;
	//})
	
	words.forEach(word => txt += `${word}--`)
	
	console.log(txt);
}

function showGuests(owner, ...others){
	console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others +"." : "."}`);
}

const objectExample = {
	showName: function(){
		console.log("Paweł");
	},
	showAge(){
		console.log(30);
	}
}

objectExample.showName();
objectExample.showAge();
























