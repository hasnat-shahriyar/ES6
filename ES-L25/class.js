class Products {
    constructor(id, brand, price) {
        this.id = id;
        this.brand = brand;
        this.price = price;
    }
}

const Lenovo = new Products(0, 'Lenovo', 55000);
const Apple = new Products(1, 'Apple', 120000);
const Dell = new Products(2, 'Dell', 60000);
const HP = new Products(3, 'HP', 65000);
const Asus = new Products(4, 'Asus', 70000);


console.log(Lenovo);
console.log(Apple);
console.log(Dell);
console.log(HP);
console.log(Asus);