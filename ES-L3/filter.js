/*
The `filter()` method is a built-in JavaScript array method that is used to create a new array with all elements that pass a specific test, provided by a callback function. It does not modify the original array but returns a new array containing elements that satisfy the condition defined in the callback function. Here's how the `filter()` method works:
*/
// Syntax:
// Javascript
/*
const newArray = originalArray.filter(callback(element, index, array) {
  // return true if the element should be included, false if not
});
*/
const newArray = originalArray.filter((element, index, array) => {
    // return true if the element should be included, false if not
  });
  
/*
- `originalArray`: The array on which you want to apply the `filter()` function.
- `callback`: A function to be called for each element in the array.
- `element`: The current element being processed.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array on which the `filter()` method was called.
- The `callback` function should return `true` to include the element in the new array, and `false` to exclude it.
*/
// Example:

// Javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using filter to create a new array with even numbers
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8]
/*
In this example:

- We have an array `numbers` containing integers.
- We use the `filter()` method to apply a callback function to each element in the array.
- The callback function checks if each element is even (i.e., divisible by 2) and returns `true` if it is.
*/

// The `filter()` method returns a new array, `evenNumbers`, containing only the even numbers from the original `numbers` array. The original array remains unchanged.

// Using Arrow Functions (ES6):

// You can also use arrow functions to make the code more concise:

// Javascript
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers2 = numbers2.filter(num => num % 2 === 0);

console.log(evenNumbers2); // Output: [2, 4, 6, 8]

/*
Additional Notes:

- The `filter()` method is particularly useful for filtering elements in an array based on specific criteria or conditions.
- It does not modify the original array but creates a new array containing the filtered elements.
- The `callback` function should return a boolean value (`true` or `false`) to indicate whether an element should be included in the new array.
- You can use `filter()` for a wide range of filtering and selection tasks, such as finding specific items, removing unwanted elements, or extracting data based on specific criteria.

The `filter()` method is a powerful and common tool for working with arrays in JavaScript, especially when you need to extract a subset of elements from a larger array based on certain conditions.
*/