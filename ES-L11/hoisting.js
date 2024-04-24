greet('How are you?');

function greet(hru) {
    console.log(`Hey, yo! ${hru}`);
}

/*
Explain hoisting with code as example step by step

1. Variable and Function Declarations:
   - In JavaScript, both function declarations and variable declarations are hoisted to the top of their containing scope during the compilation phase, before the code is executed.

2. Function Declaration Hoisting:
   - The `greet` function is declared using the function declaration syntax.
   - During hoisting, the function declaration `function greet(hru) {...}` is moved to the top of the current scope by the JavaScript engine.
   - This means that the function can be called before its actual declaration in the code.

3. Variable Declarations:
   - Only the declaration of `greet` function is hoisted, not its initialization.
   - In other words, the function body is not hoisted.

4. Execution:
   - After hoisting, the code is executed.
   - The `greet('How are you?');` line calls the `greet` function with the string `'How are you?'` as an argument.
   - The function then logs `'Hey, yo! How are you?'` to the console.
*/