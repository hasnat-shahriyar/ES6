function functionConstructor (name = 'Nahin', age = 24) {
    this.name = name;
    this.age = age;
}

let nahin = new functionConstructor();
console.log(nahin.name);
console.log(nahin.age);

let hasnat = new functionConstructor('Hasnat', 25);
console.log(hasnat.name);
console.log(hasnat.age);