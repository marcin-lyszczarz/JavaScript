console.log(`Obecna data to ${new Date().toLocaleString()}`);


const price = 80.99;
const tax = 0.23;

console.log(`Do zapłaty: ${price + (price*tax)}`);
console.log(`Do zapłaty: ${(price + (price*tax)).toFixed(2)} złotych`);

console.log(`Dzisiejsza cena jest ${price >= 80 ? "wysoka" : "niska"}`);



let itemName = "lcd";
let items = 20;

console.log(`Właśmnie sprzedałem jeden ${itemName}. Na stanie pozostało ${--items}`);