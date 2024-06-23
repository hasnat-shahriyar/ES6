class Products {
  constructor(id, brand, price) {
    this.id = id;
    this.brand = brand;
    this.price = price;
  }
}

class Laptop extends Products {
  constructor(id, brand, price, screenSize) {
    super(id, brand, price); // Calls the constructor of the parent class
    this.screenSize = screenSize;
  }
}

// Instances of Products
const Lenovo = new Products(0, "Lenovo", 55000);
const Apple = new Products(1, "Apple", 120000);
const Dell = new Products(2, "Dell", 60000);
const HP = new Products(3, "HP", 65000);
const Asus = new Products(4, "Asus", 70000);

// Instances of Laptop subclass
const LenovoLaptop = new Laptop(0, "Lenovo", 55000, 15.6);
const AppleLaptop = new Laptop(1, "Apple", 120000, 13.3);
const DellLaptop = new Laptop(2, "Dell", 60000, 14);
const HPLaptop = new Laptop(3, "HP", 65000, 15);
const AsusLaptop = new Laptop(4, "Asus", 70000, 13.5);

// Outputs of Laptop class
console.log(LenovoLaptop);
console.log(AppleLaptop);
console.log(DellLaptop);
console.log(HPLaptop);
console.log(AsusLaptop);
