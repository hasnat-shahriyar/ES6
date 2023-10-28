// Primitive and non-primitive data type

// Primitive data type examples
const a = 5; // 'a' is a primitive number
const b = "This is Primitive Data Type"; // 'b' is a primitive string
const c = true; // 'c' is a primitive boolean

// Non-primitive data type examples
const num = [5, 10, 15, 20]; // 'num' is a non-primitive array
const info = {id: 2105, department: "CSE"}; // 'info' is a non-primitive object

// Output the data types of the variables
console.log(typeof a, typeof b, typeof c, typeof num, typeof info);

// Check if 'num' is an array using Array.isArray() and output the result
console.log(Array.isArray(num)); // This will return true

// Check if 'info' is an array using Array.isArray() and output the result
console.log(Array.isArray(info)); // This will return false

