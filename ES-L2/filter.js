const numbers = [12, 14, 15, 16, 20, 35, 40, 65, 80];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter (n => n < 20);
const evenNumbers = numbers.filter (num => num % 2 === 0)
console.log (bigNumbers);
console.log (smallNumbers);
console.log (evenNumbers);