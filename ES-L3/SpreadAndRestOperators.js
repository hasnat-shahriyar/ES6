// The spread and rest operators are both introduced in ECMAScript 6 (ES6) and are used to work with arrays and objects in JavaScript. They have similar syntax but serve different purposes. Let's explore each of them in more detail:

// Spread Operator (...):
// The spread operator is used to split an array or object into individual elements. It is commonly used for creating shallow copies of arrays and objects, merging arrays, and passing function arguments. Here are some examples of how the spread operator works:

// For Arrays:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Shallow copy

console.log(copiedArray); // Output: [1, 2, 3]

const newArray = [...originalArray, 4, 5]; // Merging arrays
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// For Objects:
const originalObject = { name: 'John', age: 30 };
const copiedObject = { ...originalObject }; // Shallow copy

console.log(copiedObject); // Output: { name: 'John', age: 30 }

const newObject = { ...originalObject, city: 'New York' }; // Merging objects
console.log(newObject); // Output: { name: 'John', age: 30, city: 'New York' }

// Rest Parameter (...):
// The rest operator is used in function parameters to collect multiple arguments into a single array. It allows you to work with a variable number of arguments in a function. Here's an example:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
  
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/*In this example, the ...numbers syntax collects all the arguments passed to the sum function into an array called numbers. You can then perform operations on this array.

The key difference between the spread and rest operators is their usage:

Spread operator (...) is used to split an array or object into individual elements.
Rest parameter (...) is used in function parameters to collect multiple arguments into an array.
Both operators are valuable for working with data in a more flexible and concise manner, making JavaScript code more expressive and easier to work with.
*/