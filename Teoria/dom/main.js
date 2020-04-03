document.documentElement;
document.body;
document.images;

//POBIERANIE ELEMENTÓW

//tworzenie tablicy z elementow
const imgs = Array.from(document.images);
const imgs2 = [...document.images];


//metody pobierające jeden element. Pierwszy znaleziony element lub null w przypadku braku elementu

document.querySelector("li:nth-child(2)");//jak selektor CSS

document.getElementById("first"); // Jako argument metody przy wywołaniu podajemy identyfikator

//Pobieranie wszystkich pasujących elementów

document.querySelectorAll("ul>li");
document.getElementsByTagName("li");
document.getElementsByClassName("even");

//Pseudotablica na tablicę

const liList = document.querySelectorAll('li');
const liArray =[...liList];
const liArray2 = Array.from(liList);

//pobieranie atrybudów z elementów

const h2 = document.querySelector("h2");
console.log(h2.getAttribute("class"));
console.log(h2.getAttribute("data-color"));
console.log(h2.getAttribute("id"));

console.log(document.querySelector('h2').getAttribute('class'));


const h2Text = h2.textContent;
const h2HTML = h2.innerHTML;


console.log(h2.classList);
h2.classList.contains("title"); //zwraca true albo false w zależności czy klasa jest


//MODYFIKACJA POJEDYNCZEGO ELEMENTU


//html
const firstLi = document.querySelector(`li:first-child`);

firstLi.textContent = `Nowa zawartość tekstowa`;

firstLi.innerHTML = '<strong>Pogrubione</strong> i normalne';

//css
firstLi.style.fontSize = "20px";
firstLi.style.backgroundColor = '#ccc';
firstLi.style.letterSpacing = "2px";

//firstLi.classList.toggle("space");//dodaje i usuwa klasy
firstLi.classList.add("space");//dodaje klase
//firstLi.classList.remove("space"); //usuwa klase

firstLi.className = "one two"; // tworzy lub nadpisuje
firstLi.id = "";// tworzy lub nadpisuje

//dodają atrubut a w przypadku jego istninia nadpisują
firstLi.setAttribute('title', 'Uwaga, ważne'); 
firstLi.setAttribute('class', 'sizeX');

//MODYFIKOWANIE WIELU ELEMENTÓW

const liItems = document.querySelectorAll('li');
const liItemsByTagName = [...document.getElementsByTagName('li')];

//for(let i = 0; i < liItems.length; i++){
//	liItems[i].style.fontSize="40px";
//	liItems[i].classList.add('red');
//}

//liItems.forEach(function(liItem){
//	liItem.style.fontSize = '30px';
//	liItem.classList.add('red');	
//	liItem.style.textDecoration="underline";
//}) 


//NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ
// Metoda addEventListener, którą można wywołać na dowolnym elemencie DOM oraz na window

//window.addEventListener('dblclick', function(){
//	console.log("podwójne kliknięcie");
//});

//window.addEventListener("scroll", ()=> console.log("skroluje"))

//window.addEventListener("click", ()=> console.log("pojedyczne kliknięcie"))


const showScroll = function(){
	console.log("skrol");
}  

window.addEventListener("scroll", showScroll);

//document.querySelector('h1').addEventListener('click', function(){
//	this.textContent += " :-)";
//})

const h1 = document.querySelector('h1');

const addtext = function(){
	this.textContent += ";)"
	this.classList.toggle("red");
}

h1.addEventListener("click", addtext);

const items = document.querySelectorAll("li");

const addClassGreen = function(){
	console.log('na zielono');
}

items.forEach((item)=> item.addEventListener("click", addClassGreen));

//TWORZENIE I DODAWANIE ELEMENTU DO STRONY

const divElement = document.createElement('div');
divElement.textContent = "Ostatni element";
divElement.style.backgroundColor= "red";
document.querySelector('body').appendChild(divElement);




















