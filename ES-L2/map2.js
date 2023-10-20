const numbers = [12, 14, 15, 16];
const half = numbers.map ( n => n/2);
const thirds = numbers.map ( x => x/3);

const friends = ["Rakib", "Mehedi", "Noyon", "Mahir"];
const firstLetters = friends.map ( friends => friends [0]);
console.log (firstLetters);

const nameLength = friends.map (friends => friends.length);
console.log (nameLength);

const products = [
    {id: 1, name: "laptop", price: 65000},
    {id: 2, name: "mobile", price: 15000},
    {id: 3, name: "watch", price: 5000},
    {id: 4, name: "earphone", price: 1500},
];

const items = products.map (product => console.log(product.name));
const prices = products.map (p => p.price);
console.log(prices);