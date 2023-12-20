// Block Scope

// Global Scope
let globalVar = "I am global"; // Declare and initialize a global variable.

// Block Scope with if statement
if (true) {
    let blockVar = "I am local"; // Declare and initialize a variable with block scope using 'let' within an if statement block.
    console.log(blockVar); // Log the value of 'blockVar' within the block scope.
}

// Accessing 'blockVar' outside the block will result in an error because it's not defined in this scope.
// console.log(blockVar); // Uncommenting this line will result in an error.

console.log(globalVar); // Accessing the global variable 'globalVar' outside any block scope.
