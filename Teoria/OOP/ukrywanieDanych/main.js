/*domyślnie wszystkie metody i właściwości są domyślene
ukrywamy po przez
1. _konwencję
2. wykorzystanie closure
*/

// 1 KONWENCJA

class Cat {
    constructor(color){
        this._color = color;
    }
    //metoda pobierająca zawartość _color
    getColor(){
        return this._color;
    }
    setColor(value){
        if(typeof value == 'string'){
            return this._color = value;
        } else
        console.log('nieprawidłowa wartość');

    }
}

const kotek = new Cat('czarny');

// 2 WYKORZYSTANIE DOMKNIĘĆ (CLOSURE)

// przykład 1

class Dog {
    constructor(name, dogColor){
        this.name = name;
        let _color = dogColor;
        this.getColor = () => {
            return _color;
        }
        this.setColor = (value) => _color = value;
    }
}

const fafik = new Dog('fafik', 'brązowe');

// przykład 2

class Car {
    constructor(name, counter = 0, year = 2015){
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        this.getYear = () => _year;
        this.setCounter = (value) => {
            _counter = value;
            _changeNumber ++;
        };
        this.getCounter = () => _counter;
        this.getChangeNumber = () => _changeNumber;
        this.showCarYear = (year) => year - _year; 
    }
}

const car = new Car('polonez', 255412, 1982);