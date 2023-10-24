// Destructuring assignment is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise and readable way. This can make your code more compact and expressive. Destructuring assignment works with both objects and arrays. Let's explore how it works with code examples for both objects and arrays.

// Destructuring Objects:
// Example 1: Object Destructuring
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  // Destructuring assignment
  const { firstName, lastName, age } = person1;
  
  console.log(firstName); // Output: "John"
  console.log(lastName);  // Output: "Doe"
  console.log(age);       // Output: 30

//   In this example, we destructure the person object and assign its properties to variables with the same names.
//   Example 2: Default Values
const person2 = {
    firstName2: "John",
    lastName2: "Doe",
  };
  
  // Destructuring assignment with default values
  const { firstName2, lastName2, age2 = 25 } = person2;
  
  console.log(firstName2); // Output: "John"
  console.log(lastName2);  // Output: "Doe"
  console.log(age2);       // Output: 25 (default value)
//   In this example, we provide a default value for the age property in case it's missing in the person object.

//   Destructuring Arrays:
//   Example 3: Array Destructuring
const colors = ["red", "green", "blue"];

// Destructuring assignment for arrays
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor);  // Output: "blue"
// Here, we destructure the colors array into variables with matching positions.

// Example 4: Skipping Elements
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment to skip elements
const [first, , third] = numbers;

console.log(first);  // Output: 1
console.log(third); // Output: 3
// In this example, we skip the second element in the numbers array by using an empty slot in the destructuring pattern.

// Destructuring assignment is a powerful feature that can simplify your code, especially when working with complex data structures. It's commonly used in functions to extract function parameters from objects or arrays, and it's an essential tool for working with modern JavaScript frameworks like React and Vue.js.