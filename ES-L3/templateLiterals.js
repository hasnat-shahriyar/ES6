// Template literals are a way to work with strings in JavaScript, allowing you to embed expressions and variables inside strings using backticks (\`). They are often used for creating dynamic strings or templates. Here's a code example with comments to help you understand how to use template literals:

// javascript
// Define some variables
const name = "John";
const age = 30;
const city = "New York";

// Create a string using template literals
const greeting = `Hello, my name is ${name}.`; // Basic template literal

// You can embed variables and expressions using `${}`
const introduction = `
  I am ${age} years old,
  and I live in ${city}.
`; // Multiline template literal

// Template literals can contain expressions and calculations
const birthYear = new Date().getFullYear() - age;
const ageDescription = `
  I was born in ${birthYear},
  which means I've lived through ${new Date().getFullYear() - birthYear} years.
`;

// Output the results
console.log(greeting);
console.log(introduction);
console.log(ageDescription);


// In this code:

// 1. We define some variables for the name, age, and city.
// 2. We create strings using template literals, denoted by backticks (\`), and embed variables and expressions inside `${}`. This allows you to create dynamic strings without the need for concatenation.
// 3. The `greeting` variable includes a basic template literal with the name variable.
// 4. The `introduction` variable is a multiline template literal that spans multiple lines and embeds multiple variables.
// 5. The `ageDescription` variable uses an expression to calculate the birth year based on the current year and age.

// When you run this code, you'll see the output in the console:

// Hello, my name is John.
// I am 30 years old,
// and I live in New York.
// I was born in 1993,
// which means I've lived through 30 years.


// Template literals make it easier to create and format dynamic strings in JavaScript, and they are a powerful tool for building templates or generating complex strings in a clean and readable way.