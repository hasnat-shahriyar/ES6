myName('Nahin');

let myName = (fname)=>{
    console.log(`My name is ${fname}`);
}

/*
The outcome of this code step by step:

1. Variable and Function Declarations:
   - In JavaScript, both function declarations and variable declarations are hoisted to the top of their containing scope during the compilation phase.

2. Error in Execution:
   - However, variables declared with `let` are hoisted, but not initialized. This means you can't access them before the line where they are declared.
   - In this code, the `myName` variable is declared using `let`.

3. Function Call Before Declaration:
   - You're attempting to call the `myName` function before it's declared. This will result in a `ReferenceError` because at the time of the function call, `myName` is not yet defined.
   - The error message will say: "Cannot access 'myName' before initialization".

Conclusion:
   - The code will throw a `ReferenceError` because the function `myName` is accessed before it is declared, violating the rules of `let` variables in JavaScript.
*/
