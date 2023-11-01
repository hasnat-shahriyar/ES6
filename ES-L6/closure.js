// Closure, encapsulation, private variable
// This is a JavaScript function named "kitchen" that encapsulates a private variable.
function kitchen() {
    // Declare a private variable named "roast" and initialize it to 0.
    let roast = 0;

    // Return a function that allows you to manipulate the private "roast" variable.
    return function () {
        // Inside this inner function, increment the "roast" variable by 1.
        roast++;
        // Return the updated value of "roast."
        return roast;
    }
}

// Create an instance of the "kitchen" function and store it in the constant "firstServer."
const firstServer = kitchen();

// Call the "firstServer" function multiple times to manipulate and retrieve the private "roast" variable.
console.log(firstServer()); // Output: 1
console.log(firstServer()); // Output: 2
console.log(firstServer()); // Output: 3
console.log(firstServer()); // Output: 4
