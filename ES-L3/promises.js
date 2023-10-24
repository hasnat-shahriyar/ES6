/*
Promises are a fundamental concept in JavaScript used to handle asynchronous operations. They provide a more structured and organized way to work with asynchronous code compared to traditional callbacks. Promises are an essential part of modern JavaScript and are widely used for tasks like making HTTP requests, reading files, and other operations that might take some time to complete. Here's an overview of Promises:
*/

// Basic Structure:
// A Promise represents a value that may not be available yet but will be at some point in the future, either successfully or unsuccessfully. A Promise can be in one of three states:

// Pending: The initial state, representing the promise being neither fulfilled nor rejected.
// Fulfilled (Resolved): The state representing a successful completion of the asynchronous operation. In this case, a value is available.
// Rejected: The state representing an error during the asynchronous operation. In this case, a reason (error) is available.


// Creating a Promise:
/*
You can create a new Promise using the Promise constructor, which takes a function as its argument. This function, known as the "executor," receives two arguments: resolve and reject. You can call these functions to indicate whether the Promise has succeeded or failed.
*/
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., making an HTTP request
  const result = /* ... */; // Success
  // const error = /* ... */; // Error

  if (/* success condition */) {
    resolve(result); // Promise is fulfilled
  } else {
    reject(error); // Promise is rejected
  }
});

// Handling Promises:
// You can attach one or more then and catch methods to a Promise to handle its fulfillment or rejection.
// The then method is used to handle the success case when the Promise is fulfilled. It takes a callback that receives the result of the successful operation.
myPromise.then((result) => {
  console.log("Promise resolved with result:", result);
});

// The catch method is used to handle the case when the Promise is rejected. It takes a callback that receives the reason for the rejection (usually an error).
myPromise.catch((error) => {
  console.error("Promise rejected with error:", error);
});

// Chaining Promises:
// Promises can be chained together using multiple then calls to perform a sequence of asynchronous operations. This is a powerful feature for managing complex asynchronous workflows.
myPromise
  .then((result) => {
    // First asynchronous operation succeeded
    return anotherPromiseFunction(result);
  })
  .then((anotherResult) => {
    // Second asynchronous operation succeeded
    // ...
  })
  .catch((error) => {
    // Handle errors in any of the previous steps
  });
// Promises in Modern JavaScript:
// Promises are a cornerstone of modern JavaScript, and they are widely used in combination with other features like async/await, which provides a more synchronous-looking code structure for managing asynchronous operations. Promises are essential for maintaining clean and maintainable asynchronous code in JavaScript.