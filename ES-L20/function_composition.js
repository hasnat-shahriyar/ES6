let one = (twoParam) => twoParam + 25;
let two = (a, b) => a * b; 

// Composed function
let composedFunction = (x, y) => one(two(x, y));

console.log(composedFunction(5, 5));  // Output: 50
