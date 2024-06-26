// It will show a ReferenceError: number is not defined
// Instead of executing the other codes it shows the entire code as an error
/*
console.log("hello");
console.log(number);
console.log("hello again");
*/

// So to handle such cases we use try-catch method
// This code demonstrates the use of try-catch method to handle errors in JavaScript.

// It begins with a comment explaining a scenario where accessing an undefined variable 'number' would result in a ReferenceError.

// The try block contains the code that might throw an error. In this case, it attempts to log the value of an undefined variable 'numberND'.

try {
    console.log("hello");
    console.log(numberND); // This line will show an error since 'numberND' is not defined.
} 

// If an error occurs within the try block, it is caught by the catch block. The catch block contains code to handle the error.

catch (helloError) {
    // The catch block logs the error object and its properties.
    console.log(helloError); // logs the error object itself
    console.log(helloError.name); // logs the type of error (e.g., ReferenceError)
    console.log(helloError.message); // logs the error message
    console.log("Hey I have solved the error!"); // logs a message indicating that the error has been handled
} 

// The finally block contains code that is executed regardless of whether an error occurred or not.

finally {
    console.log("hello again"); // logs a message indicating that the code block has been executed or that the error has been handled
}
