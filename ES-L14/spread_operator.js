let numbers = [1, 2, 3, 4];

const calculate = (a, b, c, d) => a+b+c+d;

const result = calculate(...numbers);

console.log(result);