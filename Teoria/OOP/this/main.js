// 'use strict'
// this


// this w zakresie globalnym
this  // w zagresie globalnym - Window


const fn = function () {
    // this.a = 5;
    console.log(this.age);
    console.log(this.name);
}

// fn();

const obj = {
    name: 'Adam',
    age: 28,
    funkcja: fn,
}
const user = {
    name: "Paweł",
    age: 35,
    funkcja: fn,
}
// const fun = fn;
// fun();

obj.funkcja();
user.funkcja();

document.addEventListener('click', function () {
    console.log(this);
    const inside = function (){
        console.log(this);
    }
    inside();
})

//wiązanie niejawne 

function showName(){
    console.log(this.name);
}

const karol = {
    name: 'karol',
    showName: showName,
}

const tatiana = {
    name: 'tatiana',
    showName:showName,
}

karol.showName();
tatiana.showName();


function one(){
    this.name = 'first';
    return this.name;
}

// one();

const object = {
    two: one,
    four: function () {
        console.log(this);
    }
}

object.two();

const three = object.two;
three();

//wiązanie jawne 
//można wskazań z czym funkcja ma powiązać this

const human = {
    pesel: 856841333214,
}

function showPesel () {
    console.log(this.pesel);
}

showPesel.call(human);

const showUser = function (name, age){
    console.log(`Użytkownik ${name} ma ${age} lat i pesel ${this.pesel}`)
} 

showUser.call(human, 'Tomasz', 25);

// wiązanie twarde
// bind przypisuje na stałe this
const showUserPesel = showPesel.bind(human);

showUserPesel();

//wiązanie z operatorem new
class User {
    constructor(name){
        this.name = name;
    }
}

const stasiek = new User(`stasiek`);


// Arrow Function a this
// Arrow function nie tworzy podczas wywołania własnego wiązania this, a je dziedziczy.

const newUser = {
    age: 45,
    showAge() {
        console.log(this.age, this);
    },
    showAge2: () => {
        console.log(this.age, this);
    }
}

newUser.showAge();
newUser.showAge2();

