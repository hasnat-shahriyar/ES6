function Bio(name, age) {
    this.name = name;
    this.age = age;
}

let nahin = new Bio('Hasnat Shahriyar', 24);

Bio.prototype.dob = function () {
    console.log(`The date of birth of ${this.name} is ${2024 - this.age}`);
}

console.log(nahin);


nahin.dob();
