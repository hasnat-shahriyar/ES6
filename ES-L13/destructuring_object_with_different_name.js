const bio = {
    name: "Nahin",
    age: 24,
    profession: "Student"
};

// Destructuring the bio object with different variable names
const { name: fullName, age: years, profession: job } = bio;

console.log(fullName); // Output: Nahin
console.log(years);    // Output: 24
console.log(job);      // Output: Student
