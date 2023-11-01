// Declares an arrow function with one parameter that divides the parameter by 17 and returns the quotient
const divideBy17 = (number) => {
    return number / 17;
  };
  
  console.log(divideBy17(85)); // Output: 5

// Writes an arrow function with two parameters. This function will take two parameters as input. Add those two parameters and divide the sum by two to return the quotient.
const addAndDivideBy2 = (a, b) => {
  return (a + b) / 2;
};

console.log(addAndDivideBy2(10, 20)); // Output: 15


// Write a multi-line arrow function. It will take two parameters. That arrow function will be many lines. It will add 7 to each input parameter there and then add the sum back to 2. Try to figure out how to do it.
const add7AndThen2 = (param1, param2) => {
  const result1 = param1 + 7;
  const result2 = param2 + 7;
  const finalResult = result1 + result2 + 2;
  return finalResult;
};

console.log(add7AndThen2(5, 10)); // Output: 31
// The add7AndThen2 function takes two parameters, param1 and param2.
// It adds 7 to each parameter, creating result1 and result2.
// Then, it adds result1, result2, and 2 to get the finalResult.
// Finally, it returns the finalResult.