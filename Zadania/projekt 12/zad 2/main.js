const arr = [12, 25, 478, 21, 63145, 21, 45, 156, 365];

const oddNumb = arr.filter(i => (i%2));
const evenNumb = arr.filter(i => !(i%2));
const numbersBiggerThen100 = arr.filter(i => i > 100);

const people = arr.map(numb => numb + " osób");
const double = arr.map(numb => numb * 2);


arr.forEach((numb, index) => arr[index] = numb * 2);