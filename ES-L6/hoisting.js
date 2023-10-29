// Hoisting: Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows you to use variables and functions before they are actually declared in your code.

// Using "var" for variable declarations:
for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

console.log("Outside the block :", i); // Output: Outside the block 5
// Here, "i" is hoisted to the top of the function scope, which means it's accessible outside the loop.

// Calling the function here
print5(); // Output: Inside print : 5
// Functions are also hoisted, so you can call the function before defining it.

// The correct way is to use "let" for variable declarations:
for (let a = 0; a < 5; a++) {
    console.log(a); // Output: 0 1 2 3 4
}

console.log("Outside the block", a); // Error: ReferenceError: a is not defined
// Using "let" restricts the variable's scope to the block, so it's not accessible outside the loop.

// Using Function:
function print5() {
    console.log("Inside print :", 5);
}
// Functions are hoisted to the top of their scope as well, so you can call them anywhere in the scope.

// Summary:
// 1. Hoisting moves variable and function declarations to the top of their containing scope.
// 2. "var" declarations are hoisted to the top of their function scope, making them accessible throughout the function.
// 3. "let" and "const" declarations are hoisted to the top of their block scope, making them only accessible within the block.
// 4. Functions are also hoisted and can be called before their actual declaration.
// 5. It's recommended to use "let" and "const" for better scoping and to avoid unintended side effects, and "var" should be used with caution.
