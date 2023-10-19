const add = (a, b) => a + b;
const multiply = (x, y) => x * y;
const fullName = (firstName, LastName) => firstName + " " + LastName;

const result1 = add(5, 5);
const result2 = multiply(3, 5);
const result3 = fullName("Hasnat", "Shahriyar");

console.log (result1, result2, result3);

// No parameter Arrow Function
const getPie = () => 3.14;
// One Parameter
const doubleIt = (num) => num * 5;
// One Parameter Simple Version
const fiveTimes = num => num * 3;

// MultiLine Arrow Function
// If you want to return something, use the return statement
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}