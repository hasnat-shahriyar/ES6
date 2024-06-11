const bio = {
    name: "Nahin",
    age: 24,
    profession: "Student",
    contact: {
        email: "nahin@example.com",
        phone: "123-456-7890"
    }
};

// Destructuring the bio object including the nested contact object
const { name, age, profession, contact: { email, phone } } = bio;

console.log(name);       // Output: Nahin
console.log(age);        // Output: 24
console.log(profession); // Output: Student
console.log(email);      // Output: nahin@example.com
console.log(phone);      // Output: 123-456-7890
