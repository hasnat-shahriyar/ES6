// Regular function declaration
function regularFunction(parameters) {
    // Function body
    return result;
}

// Arrow function
const arrowFunction = (parameters) => {
    // Function body
    return result;
}

// Example 1: Arrow function with no parameters
const sayHello = () => {
    return "Hello, world!";
}

// Example 2: Arrow function with one parameter
const square = (x) => {
    return x * x;
}

// Example 3: Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
}

// Example 4: Implicit return in arrow function
const multiply = (a, b) => a * b;

// Example 5: Arrow function used as an anonymous function
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((number) => number * number);

// Example 6: Arrow functions in array methods (forEach)
numbers.forEach((number) => {
    console.log(number);
});

// Example 7: Arrow functions with object literals
const createPerson = (name, age) => ({ name, age });

// Example 8: Arrow functions and this context
function Counter() {
    this.count = 0;

    setInterval(() => {
        // 'this' in arrow function still refers to the Counter instance
        this.count++;
        console.log(this.count);
    }, 1000);
}

const myCounter = new Counter();
