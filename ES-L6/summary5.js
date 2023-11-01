// Will be an array of many numbers. Then your work will be using map on the array. Divide each element by 7 and keep the quotient as another array. The whole work will be done in one line.

const numbers = [14, 21, 35, 49, 63];

const quotients = numbers.map((number) => number / 7);

console.log(quotients); // Output: [2, 3, 5, 7, 9]
