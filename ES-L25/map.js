// The map method iterates over each element of an array and applies a function to transform each element, returning a new array with the transformed elements.

const numbers = [2, 4, 6, 8];


const numberMap = numbers.map((num) => num);
console.log(numberMap); // Output : [ 2, 4, 6, 8 ]

const multiplyIt = (num) => num * 2;
const result = numbers.map(multiplyIt);
console.log(result); // Output : [ 4, 8, 12, 16]