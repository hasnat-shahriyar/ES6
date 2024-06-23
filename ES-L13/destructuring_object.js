const bio = {
    name: "Nahin",
    age: 24,
    profession: "Student"
};

// Destructuring the bio object
const { name: nm, age, profession } = bio;

console.log(nm);       // Output: Nahin
console.log(age);        // Output: 24
console.log(profession); // Output: Student
