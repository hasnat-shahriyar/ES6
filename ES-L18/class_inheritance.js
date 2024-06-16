class Person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    dateOfBirth(){
        console.log(`${this.name} born in ${2024 - this.age}`);
    }
}

class Teacher extends Person {
    constructor(name, age, job, subject){
        super(name, age, job);
        this.subject = subject;
    }
}

const nahin = new Teacher ('Nahin', 24, 'Software Engineer', 'Frontend');

console.log(nahin);
nahin.dateOfBirth();