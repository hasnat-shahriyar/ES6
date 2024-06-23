const products = [
    {id: 0, brand: 'Lenovo', price: 55000},
    {id: 1, brand: 'Apple', price: 120000},
    {id: 2, brand: 'Dell', price: 60000},
    {id: 3, brand: 'HP', price: 65000},
    {id: 4, brand: 'Asus', price: 70000}
];

const brandNames = products.map(nm => nm.brand).join(', ');
console.log(brandNames);
const withPrice = products.map(cost => cost.price).join(', ');

console.log(`Brand: ${brandNames}, Price: ${withPrice}`);