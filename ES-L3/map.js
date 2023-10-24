/*
The `map()` method is a built-in function in JavaScript used to create a new array by applying a function to each element in an existing array. It does not modify the original array but returns a new one with the results of the function applied to each element. The `map()` function is useful for transforming data in an array without changing the original data. Here's an overview of how it works:
*/
// Syntax:
// Javascript
const newArray = originalArray.map((element, index, array) => {
  // return transformedValue;
});



/*
- `originalArray`: The array on which you want to apply the `map()` function.
- `callback`: A function to be called for each element in the array.
- `element`: The current element being processed.
- `index` (optional): The index of the current element being processed.
- `array` (optional): The array on which the `map()` method was called.
- `transformedValue`: The value to be inserted into the new array.
*/

// Example:
// Javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each element squared
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
/*
In this example:

- We have an array `numbers` containing some integers.
- We use the `map()` method to apply a callback function to each element in the array.
- The callback function takes an element `num` and returns its square `num * num`.

The `map()` method returns a new array, `squaredNumbers`, with each element squared. The original `numbers` array remains unchanged.
*/

// Using Arrow Functions (ES6):
// You can also use arrow functions to make the code more concise:

// Javascript
const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers2 = numbers.map(num => num * num);

console.log(squaredNumbers2); // Output: [1, 4, 9, 16, 25]

/*
Additional Notes:

- The `map()` method is useful for applying a function to each element in an array, such as transforming data, filtering elements, or performing other operations.
- It's a pure function, meaning it doesn't modify the original array but returns a new one.
- You can chain multiple array methods together to perform complex operations on arrays.
- Be cautious when working with very large arrays, as `map()` will create a new array in memory, potentially using a lot of resources.

The `map()` function is a fundamental and versatile tool in JavaScript for working with arrays and is commonly used in many scenarios where data transformation is required.
*/