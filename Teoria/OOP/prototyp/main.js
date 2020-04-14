//Prototyp

function Person (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function (name) {
    //     this.children.push(name);
    // }
}

Person.prototype.addChildren = function (name){
    this.children.push(name);
}

const arek = new Person ('Arek', 20);
const monika = new Person ('Monika', 30);

arek.addChildren('Krysia');
monika.addChildren('Piotruś');
monika.addChildren('Michaś');


function Player (){

}

class User {

}

Player.prototype.age = 25;


const janek = new Player();
const marta = new User();

//Dodawanie elementó do prototypu

function Citizen (country, citizenship){
    this.country = country;
    this.citizenship = citizenship; 
    // this.changeCitizenship = function (newCetizenship) {
    //     this.citizenship = newCetizenship;
    // }

}

Citizen.prototype.changeCitizenship = function (newCitizenship){
    this.citizenship = newCitizenship;
}

const zenek = new Citizen('Polska', 'polskie');
const marysia = new Citizen('Francja', 'niemieckie');

// Przesłąnianie 

//Rozszerzanie prototypu także wbudowanych konstruktorów

const arr = [5,6,7,8];

Array.prototype.deleteElement = function (element){
    return this.splice(element, 1);
}

//Łańcuch prototypów

arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen;
zenek instanceof Function;

// Object.getPrototypeOf
Object.getPrototypeOf(arr);
Object.getPrototypeOf(zenek);