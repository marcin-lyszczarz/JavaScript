//tworzenie klas

// class Family {
//     constructor(name){
//         this.name = name;
//         this.addMember = function (){
//             console.log('wywołanae z instancji');
//         }
//     }
//     addMember(){
//         console.log('wywołane z prototypu');

//     }
// }

// const nowakowie = new Family();

// const Family2 = function(name){
//     this.name = name;
// }

// const kowalscy = new Family2();
// Family2.prototype.addMember = function (){

// }

//prototyp klasy

//funkcja konstruktora i klasa

//wyrażenie klasy

// const Family2 = function (){}
// function Family3 () {}

// class Family4{
// }

// const Family5 = class {}

class Family {
    constructor(members, ...names){
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
    }
    static makeFamily(...members) {
        return members;
    }
}

const nowaki = new Family(3, 'Jan', 'Adam', 'Ewa');
//nowaki.addMember('Piotruś');

//metody statyczne
