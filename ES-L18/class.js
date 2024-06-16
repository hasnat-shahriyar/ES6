class bio {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    dob(){
        console.log(`The date of birth of ${this.name} is ${2024 - this.age}`);
    }
}

const nahin = new bio('Hasnat Shahriyar', 24);

console.log(nahin);
nahin.dob();