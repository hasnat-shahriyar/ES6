const bio = {
    name: "Nahin",
    age: 24,
    profession: "Student",
    contact: {
        email: "nahin@example.com",
        phone: "123-456-7890"
    }
};

// Destructuring with different variable names for both top-level and nested properties
const {
    name: fullName,
    age: years,
    profession: job,
    contact: {
        email: emailAddress,
        phone: phoneNumber
    }
} = bio;

console.log(fullName);    // Output: Nahin
console.log(years);       // Output: 24
console.log(job);         // Output: Student
console.log(emailAddress);// Output: nahin@example.com
console.log(phoneNumber); // Output: 123-456-7890
