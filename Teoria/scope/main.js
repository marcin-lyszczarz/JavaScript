//ZAKRES LOKALNY


var varFun = "a";
let letFun = "b";
const constFun = "c";


function variablesInFunction (){
    var inFunction = "jestem";
    varFun = 4;
    let letFun = 5;
    const constFun = 6;
    console.log(`constFun: ${constFun}`);

    function showVariable (){
        const constFun = "ok";
        varFun = "nadpisanie wartości ze zmiennej wyższego zakresu";
        console.log(`constFun: ${constFun}`,  varFun);
    }

    showVariable();

}
console.log(`constFun: ${constFun}`);
variablesInFunction();

//showVariable(); zasięg funkcji taki sam jak zmiennych


function calculate (a, b){

    const numberA = a;
    const numberB = b;

    function add (x, y){
        return numberA + numberB;
    }

    console.log(add());
}

calculate(10,5);


//ZAKRES LOKALNY - BLOKOWY
// przykład 1
let var1 = 1;
const var2 = 2;
var var3 = 3;


{
    let var1 = "wewnętrzne 1";
    const var2 = "wewnętrzne 2";
    var var3 = "wewnętrzne 3";

    console.log(var1);
    console.log(var2);
    console.log(var3);

}
console.log(var1);
console.log(var2);
console.log(var3);

//przykład 2 
const a = "1 w zakresie globalnym";
let b = "2 w zakresie globalnym";
var c = "3 w zakresie globalnym";

if(true){
    const a = "1 w bloku";
    console.log("a w bloku to: " + a);
    
    b = "2 w bloku";
    console.log("b w bloku to: " + b);

    var c = "3 w bloku"; // nadpisuje var c z zakresu globalnego
}

console.log(a);
console.log(c);

//przykład 3

let i = 100;

for(let i = 0; i < 10; i++){
    //let i = 10;
    //console.log(i);

    const inFor = "wewnątrz pętli";

    if(i < 4){
        //i = 10;
       // let i = 20;
        //console.log("i wewnątrz instrukcji warunkowej " + i)

        const inFor = "wewnątrz pętli i instrukcji warunkowej";
        console.log(inFor);
    }
}


//przykład 4


let example1 = "globalna";

if(true){
    let example2 = "zakres lokalny dla któego zakresem zewnętrzym jest zakres globalny";

    console.log(example1);
    console.log(example2);
    //console.log(example3);

    if(true){
        let example3 = "zakres lokalny dla któego zakresem zewnętrznym jest zakres lokalny";

        example1 = "nowa wartość";
        console.log(example1);
        console.log(example2);
        console.log(example3);
    }
}