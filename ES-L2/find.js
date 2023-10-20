const products = [
    {id: 1, name: "laptop", price: 65000},
    {id: 2, name: "mobile", price: 15000},
    {id: 3, name: "watch", price: 5000},
    {id: 4, name: "earphone", price: 1500},
];
const cheap = products.find (product => product.price < 5000);

console.log (cheap);