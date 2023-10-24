// Class, constructor, method, create object from class
// Syntactic Sugar
class Instructor {
    name;
    designation = "Student";
    team = "Web Team"
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    StartSupportSession (time){
        console.log (`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log (`Please create quiz for module ${module}`)
    }
}

const nahin = new Instructor("Nahin", "Dinajpur");
console.log (nahin);
nahin.StartSupportSession("9.00");
nahin.createQuiz(10);