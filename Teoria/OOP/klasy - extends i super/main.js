
class Animal {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    breathe(){
        console.log('Zwierzę oddycha');
    }
}

const zwierze = new Animal(5, 'Azor');

//zwierze.__proto__ == Animal.prototype;

class Mammel extends Animal{
    constructor(age, name, hairs){
        super(age, name);
        this.hairs = hairs;
        // constructor(age){        wywyływanie konstrykora klasy nadrzędnej
        //     this.age = age;
        // }
    }
    drinkMilk(){
        console.log('ssaki piją mleko');
    }

}

const ssak = new Mammel(3, 'Pikuś', 'blond');
ssak.breathe();
ssak.drinkMilk();

class Human extends Mammel{
    constructor(age, name, hairs, language){
        super(age, name, hairs);
        this.language = language;
    }

    speak(){
        console.log('człowiek mówi');
    }
}

const czlowiek = new Human(34, "Jaś", "czarne", "polski");

